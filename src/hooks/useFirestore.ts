import { useState, useEffect } from 'react';
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  onSnapshot,
  Timestamp,
  QueryConstraint
} from 'firebase/firestore';
import { db } from '@/lib/firebase';

// Generic type for Firestore documents
export interface FirestoreDocument {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  [key: string]: any;
}

/**
 * Custom hook for Firestore operations
 * @param collectionName - Name of the Firestore collection
 */
export const useFirestore = <T extends FirestoreDocument>(collectionName: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  /**
   * Add a new document to the collection
   */
  const addDocument = async (data: Omit<T, 'id' | 'createdAt' | 'updatedAt'>): Promise<string | null> => {
    setLoading(true);
    setError(null);
    
    try {
      const docData = {
        ...data,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      };
      
      const docRef = await addDoc(collection(db, collectionName), docData);
      setLoading(false);
      return docRef.id;
    } catch (err) {
      const error = err as Error;
      setError(error);
      setLoading(false);
      console.error('Error adding document:', error);
      return null;
    }
  };

  /**
   * Update an existing document
   */
  const updateDocument = async (id: string, data: Partial<T>): Promise<boolean> => {
    setLoading(true);
    setError(null);
    
    try {
      const docRef = doc(db, collectionName, id);
      await updateDoc(docRef, {
        ...data,
        updatedAt: Timestamp.now()
      });
      setLoading(false);
      return true;
    } catch (err) {
      const error = err as Error;
      setError(error);
      setLoading(false);
      console.error('Error updating document:', error);
      return false;
    }
  };

  /**
   * Delete a document
   */
  const deleteDocument = async (id: string): Promise<boolean> => {
    setLoading(true);
    setError(null);
    
    try {
      const docRef = doc(db, collectionName, id);
      await deleteDoc(docRef);
      setLoading(false);
      return true;
    } catch (err) {
      const error = err as Error;
      setError(error);
      setLoading(false);
      console.error('Error deleting document:', error);
      return false;
    }
  };

  /**
   * Get a single document by ID
   */
  const getDocument = async (id: string): Promise<T | null> => {
    setLoading(true);
    setError(null);
    
    try {
      const docRef = doc(db, collectionName, id);
      const docSnap = await getDoc(docRef);
      setLoading(false);
      
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() } as T;
      }
      return null;
    } catch (err) {
      const error = err as Error;
      setError(error);
      setLoading(false);
      console.error('Error getting document:', error);
      return null;
    }
  };

  /**
   * Get all documents from the collection
   */
  const getDocuments = async (constraints?: QueryConstraint[]): Promise<T[]> => {
    setLoading(true);
    setError(null);
    
    try {
      const collectionRef = collection(db, collectionName);
      const q = constraints ? query(collectionRef, ...constraints) : collectionRef;
      const querySnapshot = await getDocs(q);
      
      const documents: T[] = [];
      querySnapshot.forEach((doc) => {
        documents.push({ id: doc.id, ...doc.data() } as T);
      });
      
      setLoading(false);
      return documents;
    } catch (err) {
      const error = err as Error;
      setError(error);
      setLoading(false);
      console.error('Error getting documents:', error);
      return [];
    }
  };

  return {
    loading,
    error,
    addDocument,
    updateDocument,
    deleteDocument,
    getDocument,
    getDocuments
  };
};

/**
 * Custom hook for real-time Firestore updates
 * @param collectionName - Name of the Firestore collection
 * @param constraints - Optional query constraints
 */
export const useFirestoreRealtime = <T extends FirestoreDocument>(
  collectionName: string,
  constraints?: QueryConstraint[]
) => {
  const [documents, setDocuments] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const collectionRef = collection(db, collectionName);
    const q = constraints ? query(collectionRef, ...constraints) : collectionRef;

    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const docs: T[] = [];
        querySnapshot.forEach((doc) => {
          docs.push({ id: doc.id, ...doc.data() } as T);
        });
        setDocuments(docs);
        setLoading(false);
      },
      (err) => {
        setError(err as Error);
        setLoading(false);
        console.error('Error listening to documents:', err);
      }
    );

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [collectionName, JSON.stringify(constraints)]);

  return { documents, loading, error };
};

// Export Firestore query builders for convenience
export { where, orderBy, limit };

