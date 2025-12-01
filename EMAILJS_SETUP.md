# EmailJS Setup Guide

This guide will help you set up EmailJS for the contact form.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add an Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. **Copy the Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use the following template variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
   - `{{to_email}}` - Your email (stevenliew929@gmail.com)

4. Example template:
   ```
   Subject: New Contact Form Submission from {{from_name}}
   
   From: {{from_name}} ({{from_email}})
   
   Message:
   {{message}}
   ```

5. **Copy the Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key**
3. **Copy the Public Key** (you'll need this later)

## Step 5: Configure Environment Variables

1. Create a `.env.local` file in the root of your project (if it doesn't exist)
2. Add the following variables:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual EmailJS credentials

## Step 6: Restart Your Development Server

After adding the environment variables, restart your Next.js development server:

```bash
npm run dev
```

## Testing

1. Fill out the contact form on your website
2. Submit the form
3. Check your email inbox for the message
4. Check the browser console for any errors

## Troubleshooting

- **Form not sending**: Check that all environment variables are set correctly
- **Email not received**: Check your spam folder and verify your email service is connected
- **Console errors**: Make sure your EmailJS credentials are correct and the template variables match

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- Basic email templates
- Gmail, Outlook, and other popular providers

For more emails or advanced features, consider upgrading to a paid plan.

