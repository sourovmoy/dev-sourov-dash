# Vercel Deployment Guide

This portfolio is now configured for seamless deployment on Vercel.

## Quick Deploy

### Option 1: Deploy via Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy to Vercel
vercel

# For production deployment
vercel --prod
```

### Option 2: Deploy via Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect it's a React app
5. Click "Deploy"

## Environment Variables Setup

In your Vercel dashboard, add these environment variables:

```
REACT_APP_EMAILJS_SERVICE_ID=service_7fyovml
REACT_APP_EMAILJS_TEMPLATE_ID=template_4gula4i
REACT_APP_EMAILJS_PUBLIC_KEY=08kxShYPhQGWQMdNl
```

## Configuration Files

- `vercel.json` - Vercel deployment configuration
- `.vercelignore` - Files to ignore during deployment
- `package.json` - Updated with `vercel-build` script

## Features Enabled

✅ **Static Site Generation** - Optimized for performance
✅ **Custom Headers** - Security headers included
✅ **PDF Serving** - Proper content-type for CV download
✅ **Cache Optimization** - Static assets cached for 1 year
✅ **SPA Routing** - All routes redirect to index.html
✅ **Environment Variables** - EmailJS configuration ready

## Deployment URL

After deployment, your portfolio will be available at:
`https://your-project-name.vercel.app`

## Custom Domain (Optional)

To add a custom domain:
1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions