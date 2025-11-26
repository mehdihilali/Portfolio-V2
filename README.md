# Professional Portfolio

A modern, responsive portfolio website built with React, Vite, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Beautiful gradient backgrounds, glassmorphism effects, and smooth animations
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Dynamic Content**: Easy-to-update projects and experiences
- **Smooth Animations**: Powered by Framer Motion for delightful user interactions
- **TypeScript**: Type-safe code for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## 🎨 Customization

### Adding New Projects

To add a new project, edit `src/data/projects.ts`:

```typescript
export const projects: Project[] = [
  // ... existing projects
  {
    id: '7', // Unique ID
    title: 'Your Project Name',
    description: 'Short description of your project',
    longDescription: 'Detailed description (optional)',
    technologies: ['React', 'Node.js', 'MongoDB'], // Array of technologies used
    image: '/projects/your-image.jpg', // Project image path
    githubUrl: 'https://github.com/yourusername/project', // Optional
    liveUrl: 'https://your-project.com', // Optional
    featured: true, // Set to true to feature this project
  },
];
```

### Adding New Experiences

To add a new work experience, edit `src/data/experiences.ts`:

```typescript
export const experiences: Experience[] = [
  // ... existing experiences
  {
    id: '4', // Unique ID
    company: 'Company Name',
    position: 'Your Position',
    duration: 'Jan 2023 - Present',
    location: 'City, Country',
    description: [
      'Achievement or responsibility 1',
      'Achievement or responsibility 2',
      'Achievement or responsibility 3',
    ],
    technologies: ['React', 'TypeScript', 'AWS'], // Technologies used in this role
  },
];
```

### Updating Personal Information

1. **Hero Section** (`src/components/Hero.tsx`):
   - Update your name
   - Update your title/tagline
   - Update social media links

2. **About Section** (`src/components/About.tsx`):
   - Update your bio
   - Update your skills

3. **Contact Section** (`src/components/Contact.tsx`):
   - Update contact information (email, phone, location)

4. **Footer** (`src/components/Footer.tsx`):
   - Update social media links
   - Update your name

### Changing Colors

The color scheme can be customized in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your primary color shades
      },
      accent: {
        // Your accent color shades
      },
    },
  },
},
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation bar
│   ├── Hero.tsx        # Hero/landing section
│   ├── About.tsx       # About section
│   ├── Experience.tsx  # Work experience section
│   ├── Projects.tsx    # Projects showcase
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── data/               # Data files
│   ├── projects.ts     # Projects data
│   └── experiences.ts  # Work experiences data
├── types/              # TypeScript type definitions
│   └── index.ts        # Type interfaces
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles
```

## 🛠️ Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

For any questions or suggestions, feel free to reach out!
