# CV Download Feature - Setup Instructions

## Overview
The CV download feature has been successfully implemented! Users can now choose between French and English versions of your CV when clicking the "Download CV" button.

## What Was Changed

### 1. New Component: CVDownloadButton
- **Location**: `src/components/CVDownloadButton.tsx`
- **Features**:
  - Dropdown menu with language selection
  - Smooth animations using Framer Motion
  - Click-outside-to-close functionality
  - Beautiful glassmorphism design
  - Flag emojis (🇬🇧 for English, 🇫🇷 for French)

### 2. Updated Hero Component
- **Location**: `src/components/Hero.tsx`
- Replaced the static CV download link with the new `CVDownloadButton` component

### 3. Updated Translation Files
- **English** (`src/locales/en.json`): Added CV language options
- **French** (`src/locales/fr.json`): Added CV language options

## Required Action: Add Your CV Files

You need to add **two PDF files** to the `public` folder with these exact names:

1. **French Version**: `Elhilali_Elmehdi_CV_DEV_FR.pdf`
2. **English Version**: `Elhilali_Elmehdi_CV_DEV_ENG.pdf`

### Steps to Add CV Files:

1. Navigate to the `public` folder in your project:
   ```
   c:\Users\elhil\Desktop\Portfolio-V2\public\
   ```

2. Place your two CV PDF files there with the exact names mentioned above

3. You can remove the old CV file if you want:
   - `CV_ELHILALI_ELMEHDI.pdf` (no longer used)

## How It Works

1. User clicks "Download CV" button
2. A dropdown menu appears with two options:
   - 🇬🇧 English (English version)
   - 🇫🇷 Français (Version française)
3. User selects their preferred language
4. The corresponding PDF file downloads automatically
5. The dropdown closes

## File Names Reference

- **French CV**: `Elhilali_Elmehdi_CV_DEV_FR.pdf`
- **English CV**: `Elhilali_Elmehdi_CV_DEV_ENG.pdf`

## Testing

After adding the CV files:
1. Run your development server: `npm run dev`
2. Navigate to the Hero section
3. Click the "Download CV" button
4. Verify both language options appear
5. Test downloading both versions

## Design Features

- ✨ Glassmorphism effect matching your portfolio design
- 🎨 Smooth animations and transitions
- 📱 Responsive and mobile-friendly
- 🌐 Fully internationalized (works with both EN/FR site languages)
- ♿ Accessible with proper ARIA labels
