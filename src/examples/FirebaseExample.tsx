/**
 * Firebase Integration Examples
 * This file demonstrates how to use Firebase in your React components
 */

import { useState, useEffect } from 'react';
import { useFirestore, useFirestoreRealtime, where, orderBy, limit } from '@/hooks/useFirestore';
import { collection, addDoc, getDocs, query, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

// ============================================
// Example 1: Basic Firestore Operations
// ============================================

interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export const ContactFormWithFirebase = () => {
  const { addDocument, loading, error } = useFirestore<ContactMessage>('contacts');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Save to Firestore
    const docId = await addDocument(formData);

    if (docId) {
      console.log('✅ Message saved to Firestore with ID:', docId);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
    } else {
      console.error('❌ Error:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Company (optional)"
        value={formData.company}
        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
      />
      <input
        type="text"
        placeholder="Subject"
        value={formData.subject}
        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        required
      />
      <textarea
        placeholder="Message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

// ============================================
// Example 2: Real-time Data Listening
// ============================================

export const RealtimeContactList = () => {
  // Listen to all contacts, ordered by creation date (newest first)
  const { documents, loading, error } = useFirestoreRealtime<ContactMessage>(
    'contacts',
    [orderBy('createdAt', 'desc'), limit(10)]
  );

  if (loading) return <div>Loading contacts...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Recent Contacts (Real-time)</h2>
      {documents.length === 0 ? (
        <p>No contacts yet.</p>
      ) : (
        <ul>
          {documents.map((contact) => (
            <li key={contact.id}>
              <strong>{contact.name}</strong> - {contact.email}
              <br />
              <em>{contact.subject}</em>
              <p>{contact.message}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// ============================================
// Example 3: Filtered Queries
// ============================================

export const FilteredContactList = () => {
  const [contacts, setContacts] = useState<ContactMessage[]>([]);
  const [selectedSubject, setSelectedSubject] = useState('research');

  useEffect(() => {
    const fetchContacts = async () => {
      const q = query(
        collection(db, 'contacts'),
        where('subject', '==', selectedSubject),
        orderBy('createdAt', 'desc')
      );

      const querySnapshot = await getDocs(q);
      const docs: ContactMessage[] = [];
      querySnapshot.forEach((doc) => {
        docs.push({ id: doc.id, ...doc.data() } as ContactMessage);
      });

      setContacts(docs);
    };

    fetchContacts();
  }, [selectedSubject]);

  return (
    <div>
      <h2>Filtered Contacts</h2>
      <select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
        <option value="general">General Inquiry</option>
        <option value="research">Research Partnership</option>
        <option value="business">Business Development</option>
        <option value="collaboration">Clinical Collaboration</option>
      </select>

      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

// ============================================
// Example 4: Manual Firestore Operations
// ============================================

export const ManualFirestoreExample = () => {
  const [status, setStatus] = useState('');

  const saveData = async () => {
    try {
      setStatus('Saving...');

      // Add a document with a manually created ID
      const docRef = await addDoc(collection(db, 'contacts'), {
        name: 'John Doe',
        email: 'john@example.com',
        subject: 'Test',
        message: 'This is a test message',
        createdAt: Timestamp.now()
      });

      setStatus(`✅ Saved with ID: ${docRef.id}`);
    } catch (error) {
      console.error('Error:', error);
      setStatus(`❌ Error: ${error}`);
    }
  };

  const readData = async () => {
    try {
      setStatus('Reading...');

      const querySnapshot = await getDocs(collection(db, 'contacts'));
      const count = querySnapshot.size;

      setStatus(`✅ Found ${count} documents`);

      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} =>`, doc.data());
      });
    } catch (error) {
      console.error('Error:', error);
      setStatus(`❌ Error: ${error}`);
    }
  };

  return (
    <div>
      <h2>Manual Firestore Operations</h2>
      <button onClick={saveData}>Save Test Data</button>
      <button onClick={readData}>Read All Data</button>
      <p>Status: {status}</p>
    </div>
  );
};

// ============================================
// Example 5: Using Firestore with Custom Hook
// ============================================

export const AdvancedContactManager = () => {
  const { addDocument, updateDocument, deleteDocument, getDocuments, loading } =
    useFirestore<ContactMessage>('contacts');
  const [contacts, setContacts] = useState<ContactMessage[]>([]);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    const docs = await getDocuments([orderBy('createdAt', 'desc')]);
    setContacts(docs);
  };

  const handleAddContact = async () => {
    const newContact = {
      name: 'Jane Smith',
      email: 'jane@example.com',
      subject: 'Partnership',
      message: 'Interested in partnership opportunities'
    };

    const id = await addDocument(newContact);
    if (id) {
      console.log('✅ Added contact:', id);
      loadContacts(); // Refresh list
    }
  };

  const handleUpdateContact = async (id: string) => {
    const success = await updateDocument(id, {
      message: 'Updated message content'
    });

    if (success) {
      console.log('✅ Updated contact:', id);
      loadContacts(); // Refresh list
    }
  };

  const handleDeleteContact = async (id: string) => {
    const success = await deleteDocument(id);
    if (success) {
      console.log('✅ Deleted contact:', id);
      loadContacts(); // Refresh list
    }
  };

  return (
    <div>
      <h2>Advanced Contact Manager</h2>
      <button onClick={handleAddContact} disabled={loading}>
        Add Test Contact
      </button>

      {loading && <p>Loading...</p>}

      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <strong>{contact.name}</strong> - {contact.email}
            <button onClick={() => handleUpdateContact(contact.id!)}>Update</button>
            <button onClick={() => handleDeleteContact(contact.id!)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// ============================================
// HOW TO USE THESE EXAMPLES:
// ============================================
/*

1. Import the example you want to use:
   import { ContactFormWithFirebase } from '@/examples/FirebaseExample';

2. Add it to your page:
   <ContactFormWithFirebase />

3. Make sure Firestore security rules allow the operations:
   - Go to Firebase Console > Firestore Database > Rules
   - For development, you can use:

   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /{document=**} {
         allow read, write: if true; // ⚠️ WARNING: Only for development!
       }
     }
   }

   - For production, implement proper authentication:

   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /contacts/{contactId} {
         allow read: if request.auth != null;
         allow create: if request.auth != null;
         allow update, delete: if request.auth != null && request.auth.uid == resource.data.userId;
       }
     }
   }

*/

