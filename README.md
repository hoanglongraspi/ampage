# Auspex Medix LLC - Medical Technology Platform

A React TypeScript application for Auspex Medix LLC, showcasing innovative medical technologies across specialized therapeutic areas.

## About Auspex Medix LLC

Auspex Medix LLC is a medical technology company specializing in five therapeutic areas:
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

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is proprietary to Auspex Medix LLC. All rights reserved.

## Contact

**Auspex Medix LLC**
- Email: info@auspexmedix.com
- Address: 1576 Sweet Home Rd, Buffalo, NY 14228, United States

For technical questions or support, please contact our development team.
