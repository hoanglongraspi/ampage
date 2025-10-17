# 🔥 Firebase Integration for Auspex Medix Vision

## ✅ Setup Complete!

Your webapp has been successfully connected to Firebase with project **auspexmedix-45e3a**.

## 📦 What's Installed

### Firebase Services
- ✅ **Firestore Database** - Cloud NoSQL database for storing data
- ✅ **Authentication** - User authentication system
- ✅ **Analytics** - Web analytics and tracking
- ✅ **Storage** - Cloud file storage (ready to use)

### Files Created

```
📁 Project Root
├── 📄 firebase.json                 # Firebase project configuration
├── 📄 firestore.rules              # Firestore security rules
├── 📄 firestore.indexes.json       # Firestore database indexes
├── 📄 .env.example                 # Environment variables template
├── 📄 .env                         # Firebase credentials (not in git)
├── 📄 FIREBASE_SETUP.md           # Detailed Firebase documentation
└── 📄 README_FIREBASE.md          # This file

📁 src/
├── 📁 lib/
│   └── 📄 firebase.ts              # Firebase initialization & config
├── 📁 hooks/
│   └── 📄 useFirestore.ts          # Custom Firestore hooks
└── 📁 examples/
    └── 📄 FirebaseExample.tsx      # Usage examples
```

## 🚀 Quick Start

### 1. Environment Variables

Your Firebase credentials are stored in `.env` file:

```env
VITE_FIREBASE_API_KEY=AIzaSyD5-4phmG7H8fEgMYipPHt4fdsNeX4o6z8
VITE_FIREBASE_AUTH_DOMAIN=auspexmedix-45e3a.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=auspexmedix-45e3a
VITE_FIREBASE_STORAGE_BUCKET=auspexmedix-45e3a.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=839112938397
VITE_FIREBASE_APP_ID=1:839112938397:web:73f8ad0f1c3c0b08609574
VITE_FIREBASE_MEASUREMENT_ID=G-RDCWJQKXFV
```

> ⚠️ **Security Note**: The `.env` file is already added to `.gitignore` to prevent committing sensitive credentials.

### 2. Start Using Firebase

#### Import Firebase Services

```typescript
import { db, auth, analytics } from '@/lib/firebase';
```

#### Save Data to Firestore

```typescript
import { useFirestore } from '@/hooks/useFirestore';

const { addDocument, loading, error } = useFirestore('contacts');

const handleSubmit = async (data) => {
  const id = await addDocument({
    name: data.name,
    email: data.email,
    message: data.message
  });
  
  if (id) {
    console.log('✅ Saved with ID:', id);
  }
};
```

#### Real-time Data Updates

```typescript
import { useFirestoreRealtime, orderBy } from '@/hooks/useFirestore';

const { documents, loading } = useFirestoreRealtime(
  'contacts',
  [orderBy('createdAt', 'desc')]
);
```

## 🎯 Example Usage

### Update Contact Form to Save to Firestore

You can update `src/pages/Contact.tsx` to save form submissions to Firestore:

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
  const { addDocument } = useFirestore<ContactFormData>('contacts');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save to Firestore in addition to Web3Forms
    await addDocument({
      name: formData.name,
      email: formData.email,
      company: formData.company,
      subject: formData.subject,
      message: formData.message
    });
    
    // ... rest of your code
  };
  
  // ... rest of your component
};
```

## 🔐 Security Rules

Your Firestore security rules are configured in `firestore.rules`:

```javascript
rules_version='2'

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      // ⚠️ WARNING: These rules allow open access until Nov 16, 2025
      // Update security rules before this date!
      allow read, write: if request.time < timestamp.date(2025, 11, 16);
    }
  }
}
```

> ⚠️ **Important**: Update security rules for production! See [Firestore Security Rules Guide](https://firebase.google.com/docs/firestore/security/get-started)

### Recommended Production Rules

```javascript
rules_version='2'

service cloud.firestore {
  match /databases/{database}/documents {
    // Public read, authenticated write
    match /contacts/{contactId} {
      allow read: if true;
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null;
    }
    
    // Or completely public for contact forms
    match /contacts/{contactId} {
      allow read: if true;
      allow create: if true;
      allow update, delete: if request.auth != null;
    }
  }
}
```

## 📊 Firebase Console

Access your Firebase project:

🌐 **Firebase Console**: https://console.firebase.google.com/project/auspexmedix-45e3a

### What You Can Do:
- 📊 View Firestore data
- 👥 Manage users (Authentication)
- 📈 Check analytics
- ⚙️ Configure settings
- 🔒 Update security rules
- 🚀 Deploy hosting

## 📚 Available Custom Hooks

### `useFirestore<T>(collectionName: string)`

CRUD operations for Firestore:

```typescript
const {
  addDocument,      // Add new document
  updateDocument,   // Update existing document
  deleteDocument,   // Delete document
  getDocument,      // Get single document by ID
  getDocuments,     // Get all documents with optional query
  loading,          // Loading state
  error            // Error state
} = useFirestore<YourType>('your-collection');
```

### `useFirestoreRealtime<T>(collectionName, constraints?)`

Real-time updates:

```typescript
const {
  documents,  // Array of documents (updates in real-time)
  loading,    // Loading state
  error      // Error state
} = useFirestoreRealtime<YourType>('your-collection', [
  orderBy('createdAt', 'desc'),
  limit(10)
]);
```

## 🛠️ Commands

### Firebase CLI

```bash
# Login to Firebase
firebase login

# Deploy Firestore rules
firebase deploy --only firestore:rules

# Deploy to Firebase Hosting (if configured)
firebase deploy --only hosting

# Start local emulators
firebase emulators:start

# View logs
firebase functions:log
```

### Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📖 Documentation

- [Firebase Setup Guide](./FIREBASE_SETUP.md) - Detailed Firebase documentation
- [Firebase Examples](./src/examples/FirebaseExample.tsx) - Code examples
- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Guide](https://firebase.google.com/docs/firestore)
- [React Fire](https://github.com/FirebaseExtended/reactfire) - Official React hooks

## 🎉 Next Steps

1. ✅ Firebase is installed and configured
2. ✅ Custom hooks are ready to use
3. ⬜ Update Contact form to save to Firestore (optional)
4. ⬜ Configure Firestore security rules for production
5. ⬜ Set up Firebase Authentication (if needed)
6. ⬜ Deploy to Firebase Hosting (optional)

## 🤝 Support

If you need help:
1. Check [FIREBASE_SETUP.md](./FIREBASE_SETUP.md) for detailed examples
2. Review [FirebaseExample.tsx](./src/examples/FirebaseExample.tsx) for code samples
3. Visit [Firebase Documentation](https://firebase.google.com/docs)
4. Check [Stack Overflow](https://stackoverflow.com/questions/tagged/firebase)

## 📝 Project Info

- **Project ID**: auspexmedix-45e3a
- **Web App ID**: 1:839112938397:web:73f8ad0f1c3c0b08609574
- **Database Location**: nam5 (North America)
- **Created**: October 17, 2025

---

**🔥 Firebase integration by Cursor AI**  
**✨ Happy coding!**

