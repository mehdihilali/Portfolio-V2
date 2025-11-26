# 🎯 Quick Start Guide

## Your Portfolio is Ready! 🎉

The development server is running at: **http://localhost:5173/**

Open this URL in your browser to see your portfolio!

## ✏️ How to Customize Your Portfolio

### 1. Update Personal Information

#### In `src/components/Hero.tsx`:
- Line 68: Change "Your Name" to your actual name
- Lines 115-135: Update social media links (GitHub, LinkedIn, Email)

#### In `src/components/About.tsx`:
- Lines 42-56: Update your bio/story
- Lines 13-17: Update your skills

#### In `src/components/Contact.tsx`:
- Lines 47-63: Update contact information (email, phone, location)

#### In `src/components/Footer.tsx`:
- Line 6: Update social media links
- Line 15: Update quick links if needed

### 2. Add Your Projects

Edit `src/data/projects.ts` and add your projects to the array:

```typescript
{
  id: 'unique-id',
  title: 'Project Name',
  description: 'Brief description',
  longDescription: 'Detailed description',
  technologies: ['React', 'Node.js', 'etc'],
  image: '/projects/image.jpg',
  githubUrl: 'https://github.com/...',
  liveUrl: 'https://...',
  featured: true, // Shows a "Featured" badge
}
```

### 3. Add Your Work Experience

Edit `src/data/experiences.ts` and add your experiences:

```typescript
{
  id: 'unique-id',
  company: 'Company Name',
  position: 'Your Position',
  duration: 'Jan 2020 - Present',
  location: 'City, Country',
  description: [
    'Achievement 1',
    'Achievement 2',
    'Achievement 3',
  ],
  technologies: ['React', 'TypeScript', 'AWS'],
}
```

### 4. Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: {
    // Change these values for your primary color
    500: '#0ea5e9',
    600: '#0284c7',
    // etc...
  },
  accent: {
    // Change these values for your accent color
    500: '#d946ef',
    600: '#c026d3',
    // etc...
  },
}
```

## 🎨 Features Included

✅ Responsive navigation with mobile menu
✅ Animated hero section with gradient backgrounds
✅ About section with skills showcase
✅ Timeline-style experience section
✅ Project cards with hover effects
✅ Contact form with validation
✅ Footer with social links
✅ Smooth scroll animations
✅ Glassmorphism effects
✅ Dark theme with gradients

## 📝 Next Steps

1. **Personalize Content**: Update all placeholder text with your information
2. **Add Images**: Add project images to the `public/projects/` folder
3. **Test Responsiveness**: Check how it looks on different screen sizes
4. **Deploy**: When ready, run `npm run build` and deploy to Netlify, Vercel, or GitHub Pages

## 🚀 Deployment

### Build for Production:
```bash
npm run build
```

This creates a `dist` folder with your production-ready files.

### Deploy to Vercel (Recommended):
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and deploy!

### Deploy to Netlify:
1. Run `npm run build`
2. Drag and drop the `dist` folder to [netlify.com/drop](https://app.netlify.com/drop)

## 💡 Tips

- The portfolio uses **Framer Motion** for animations - smooth and performant!
- All data is in `src/data/` - easy to update without touching components
- TypeScript ensures type safety - your IDE will help catch errors
- Tailwind CSS makes styling fast and consistent

## 🐛 Troubleshooting

**Issue**: Styles not loading
**Solution**: Make sure Tailwind is properly configured and `index.css` is imported in `main.tsx`

**Issue**: Animations not working
**Solution**: Check that `framer-motion` is installed: `npm install framer-motion`

**Issue**: Build errors
**Solution**: Run `npm install` to ensure all dependencies are installed

---

Enjoy your new portfolio! 🎉
