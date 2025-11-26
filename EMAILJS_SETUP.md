# EmailJS Setup Guide for Contact Form

## Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. Go to "Email Services" in the dashboard
2. Click "Add New Service"
3. Choose "Gmail" (recommended)
4. Click "Connect Account" and authorize with your Gmail (elhilali.elmehdi.edu@gmail.com)
5. Give it a name like "Gmail Service"
6. Copy the **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:**
```
New Contact Form Message from {{from_name}}
```

**Body:**
```
You have received a new message from your portfolio contact form.

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your portfolio website contact form.
```

4. Save the template
5. Copy the **Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. Go to "Account" → "General"
2. Find your **Public Key** (it looks like: "abc123XYZ...")
3. Copy it (you'll need this later)

## Step 5: Update Your Code

Open `src/components/Contact.tsx` and replace these lines (around line 30-32):

```typescript
const serviceId = 'YOUR_SERVICE_ID';      // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key
```

With your actual credentials:

```typescript
const serviceId = 'service_abc123';       // Your actual Service ID
const templateId = 'template_xyz789';     // Your actual Template ID
const publicKey = 'your_public_key_here'; // Your actual Public Key
```

## Step 6: Test Your Contact Form

1. Save the file
2. Go to your portfolio website
3. Fill out the contact form
4. Click "Send Message"
5. Check your email (elhilali.elmehdi.edu@gmail.com)

## Important Notes:

- ✅ EmailJS Free Plan: 200 emails/month
- ✅ No backend server needed
- ✅ Works with static hosting (Vercel, Netlify, etc.)
- ✅ Emails arrive instantly
- ⚠️ Keep your credentials in the code (they're meant to be public for EmailJS)

## Troubleshooting:

If emails don't arrive:
1. Check spam folder
2. Verify all IDs are correct
3. Check browser console for errors
4. Make sure Gmail service is connected in EmailJS dashboard

## Security Note:

The Public Key is safe to expose in frontend code. EmailJS is designed to work this way.
Your actual Gmail password is never exposed.
