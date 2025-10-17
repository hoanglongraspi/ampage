# Firebase Setup Guide for Auspex Medix Vision

## 🔥 Firebase Configuration

This project is now connected to Firebase with the following services:

### Project Details
- **Project ID**: auspexmedix-45e3a
- **Project Name**: auspexmedix
- **Web App ID**: 1:839112938397:web:73f8ad0f1c3c0b08609574

### Enabled Services
- ✅ **Firestore Database** - NoSQL cloud database
- ✅ **Authentication** - User authentication
- ✅ **Analytics** - Web analytics

## 📁 File Structure

```
src/
├── lib/
│   └── firebase.ts           # Firebase initialization and config
├── hooks/
│   └── useFirestore.ts       # Custom hooks for Firestore operations
```

## 🚀 Getting Started

### 1. Environment Variables

The Firebase configuration is stored in `.env` file. Make sure this file exists:

```env
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
VITE_FIREBASE_MEASUREMENT_ID=your-measurement-id
```

**Note**: The `.env` file is already configured with your Firebase credentials.

### 2. Using Firebase in Components

#### Import Firebase Services

```typescript
import { db, auth, analytics } from '@/lib/firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';
```

#### Basic Firestore Operations

**Add a Document:**
```typescript
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

const addContact = async (data) => {
  try {
    const docRef = await addDoc(collection(db, 'contacts'), {
      name: data.name,
      email: data.email,
      message: data.message,
      timestamp: new Date()
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};
```

**Read Documents:**
```typescript
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

const getContacts = async () => {
  const querySnapshot = await getDocs(collection(db, 'contacts'));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} =>`, doc.data());
  });
};
```

### 3. Using Custom Hooks

The project includes custom hooks for easier Firestore operations:

```typescript
import { useFirestore } from '@/hooks/useFirestore';

// In your component
const { addDocument, getDocuments, loading, error } = useFirestore('contacts');

// Add a document
const handleSubmit = async (data) => {
  const id = await addDocument(data);
  if (id) {
    console.log('Document added with ID:', id);
  }
};

// Get all documents
const contacts = await getDocuments();
```

#### Real-time Updates

```typescript
import { useFirestoreRealtime, where, orderBy } from '@/hooks/useFirestore';

// Listen to real-time updates
const { documents, loading, error } = useFirestoreRealtime(
  'contacts',
  [orderBy('createdAt', 'desc')]
);
```

## 📊 Example: Save Contact Form to Firestore

You can update `Contact.tsx` to save form submissions to Firestore:

```typescript
import { useFirestore } from '@/hooks/useFirestore';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { addDocument, loading } = useFirestore<ContactFormData>('contacts');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save to Firestore
    const docId = await addDocument({
      name: formData.name,
      email: formData.email,
      company: formData.company,
      subject: formData.subject,
      message: formData.message
    });

    if (docId) {
      console.log('Contact saved to Firestore with ID:', docId);
      // Show success message
    }
  };

  return (
    // ... your form JSX
  );
};
```

## 🔐 Firebase Authentication

### Sign Up with Email/Password

```typescript
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';

const signUp = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('User created:', userCredential.user);
  } catch (error) {
    console.error('Error signing up:', error);
  }
};
```

### Sign In with Email/Password

```typescript
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';

const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('User signed in:', userCredential.user);
  } catch (error) {
    console.error('Error signing in:', error);
  }
};
```

### Sign Out

```typescript
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';

const logout = async () => {
  try {
    await signOut(auth);
    console.log('User signed out');
  } catch (error) {
    console.error('Error signing out:', error);
  }
};
```

## 📈 Firebase Analytics

Analytics is automatically initialized and will track page views. To track custom events:

```typescript
import { logEvent } from 'firebase/analytics';
import { analytics } from '@/lib/firebase';

// Track custom events
if (analytics) {
  logEvent(analytics, 'contact_form_submit', {
    form_type: 'general_inquiry'
  });
}
```

## 🔧 Firestore Security Rules

Don't forget to set up security rules in Firebase Console:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read/write for authenticated users
    match /contacts/{document} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## 📚 Additional Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Guide](https://firebase.google.com/docs/firestore)
- [Firebase Authentication](https://firebase.google.com/docs/auth)
- [Firebase Analytics](https://firebase.google.com/docs/analytics)

## 🛠️ Useful Commands

```bash
# Install Firebase CLI globally
npm install -g firebase-tools

# Login to Firebase
firebase login

# Deploy to Firebase Hosting
firebase deploy

# Start Firestore emulator for local development
firebase emulators:start
```

## 📝 Notes

1. The Firebase configuration is currently hardcoded in `src/lib/firebase.ts`. For production, consider using environment variables.
2. Make sure to configure Firestore security rules before going to production.
3. Enable the required authentication methods in Firebase Console (Settings > Authentication).
4. Set up billing if you plan to use advanced features or exceed free tier limits.

## 🎯 Next Steps

1. ✅ Firebase is installed and configured
2. ✅ Firestore database is initialized
3. ⬜ Set up Firestore security rules
4. ⬜ Configure authentication methods
5. ⬜ Update Contact form to save to Firestore (optional)
6. ⬜ Deploy to Firebase Hosting (optional)

---

**Project Connected**: auspexmedix-45e3a  
**Last Updated**: October 17, 2025

