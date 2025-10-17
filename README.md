# Auspex Medix - Medical Technology Platform

A React TypeScript application for Auspex Medix, showcasing innovative medical technologies across specialized therapeutic areas.

## About Auspex Medix

Auspex Medix is a medical technology company specializing in five therapeutic areas:
- **Physical & Occupational Therapy (PT/OT)** - Mobile Rehabilitation, Motion Analysis, App-based Therapy Tools
- **Audiology** - Audio Processing, Vestibular Diagnostics, EEG Integration
- **Wound Healing & Diabetic Foot Care** - Multispectral Imaging (MSI), mmWave Imaging
- **Speech-Language Pathology (SLP)** - Ultrasound Imaging, EEG, AI Speech Analysis
- **Dentistry** - Oral Imaging, AI Diagnostics, 3D Analysis

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **UI Components**: Radix UI primitives
- **Routing**: React Router DOM
- **State Management**: React Query (TanStack Query)
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Theming**: next-themes for dark/light mode

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/auspexmedix/auspex-medix-vision.git
cd auspex-medix-vision
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Marketing & Analytics

### UTM Tracking
The application includes comprehensive UTM parameter tracking for marketing campaigns. UTM parameters are automatically captured from URLs and stored for analytics.

**Example URLs:**
```
https://auspexmedix.com/?utm_source=google&utm_medium=cpc&utm_campaign=fall2024
https://auspexmedix.com/contact?utm_source=newsletter&utm_medium=email&utm_campaign=product_launch
```

For detailed information about UTM tracking, see [UTM_TRACKING_GUIDE.md](./UTM_TRACKING_GUIDE.md)

**Key Features:**
- Automatic capture of all UTM parameters
- Session and persistent storage
- Integration with contact form submissions
- Landing page and timestamp tracking
- Debug component for development

**Supported Parameters:**
- `utm_source` - Traffic source (e.g., google, facebook, newsletter)
- `utm_medium` - Marketing medium (e.g., cpc, email, social)
- `utm_campaign` - Campaign name (e.g., product_launch_2024)
- `utm_term` - Paid search keywords (optional)
- `utm_content` - Content variation (optional)

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Products.tsx    # Products showcase
│   ├── Services.tsx    # Services section
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer component
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   ├── About.tsx       # About page
│   ├── Products.tsx    # Products page
│   ├── News.tsx        # News page
│   ├── Contact.tsx     # Contact page
│   └── Collaborators.tsx # Collaborators page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── App.tsx             # Main app component
```

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Professional medical technology interface using shadcn/ui
- **Dark/Light Mode**: Theme switching capability
- **Contact Integration**: Google Maps integration and contact forms
- **Medical Focus**: Content and design tailored for healthcare industry
- **Performance Optimized**: Built with Vite for fast development and production builds
- **UTM Tracking**: Comprehensive marketing campaign tracking with automatic parameter capture
- **Firebase Integration**: Backend services with Firestore and Authentication
- **News Management**: Admin panel for creating and managing news articles

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is proprietary to Auspex Medix. All rights reserved.

## Contact

**Auspex Medix**
- Email: info@auspexmedix.com
- Address: 1576 Sweet Home Rd, Buffalo, NY 14228, United States

For technical questions or support, please contact our development team.
