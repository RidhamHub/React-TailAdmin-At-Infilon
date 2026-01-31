# Deployment Guide - Cookie Configuration

This guide explains how to deploy your React frontend and Node.js backend with proper cookie handling.

## Table of Contents
1. [Environment Variables Setup](#environment-variables-setup)
2. [Backend Cookie Configuration](#backend-cookie-configuration)
3. [CORS Configuration](#cors-configuration)
4. [Deployment Options](#deployment-options)
5. [Troubleshooting](#troubleshooting)

---

## Environment Variables Setup

### For Local Development

1. Create a `.env.development` file in the root of your project:
```env
VITE_API_URL=http://localhost:7000
```

### For Production

1. Create a `.env.production` file in the root of your project:
```env
VITE_API_URL=https://your-backend-domain.com
```

**OR** set the environment variable in your deployment platform:
- **Vercel/Netlify**: Add in Project Settings → Environment Variables
- **Render**: Add in Environment tab
- **Other platforms**: Check their documentation for environment variable setup

---

## Backend Cookie Configuration

Your Node.js backend **MUST** configure cookies correctly for cross-origin requests. Here's what you need:

### Required Cookie Settings

```javascript
// Example using Express with cookie-parser
res.cookie('accessToken', token, {
  httpOnly: true,        // Prevents JavaScript access (security)
  secure: true,          // Only send over HTTPS (required for production)
  sameSite: 'none',     // Required for cross-origin requests
  maxAge: 24 * 60 * 60 * 1000, // 24 hours
  domain: undefined      // Don't set domain - let browser handle it
});
```

### Important Notes:

1. **`sameSite: 'none'`** - **REQUIRED** when frontend and backend are on different domains
2. **`secure: true`** - **REQUIRED** when using `sameSite: 'none'` (HTTPS only)
3. **`httpOnly: true`** - Recommended for security (prevents XSS attacks)
4. **Don't set `domain`** - Let the browser handle it automatically

### Example Backend Code (Express)

```javascript
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

// CORS Configuration (see next section)
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,  // REQUIRED for cookies
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(cookieParser());
app.use(express.json());

// Login route example
app.post('/auth/login', async (req, res) => {
  // ... your authentication logic ...
  const token = generateToken(user);
  
  // Set cookie with proper configuration
  res.cookie('accessToken', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // true in production
    sameSite: 'none',
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  });
  
  res.json({ user, message: 'Login successful' });
});

// Logout route
app.post('/auth/logout', (req, res) => {
  res.clearCookie('accessToken', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'none'
  });
  res.json({ message: 'Logout successful' });
});
```

---

## CORS Configuration

Your backend **MUST** allow credentials and your frontend origin:

```javascript
const cors = require('cors');

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,  // CRITICAL: Allows cookies to be sent
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
```

### For Multiple Environments:

```javascript
const allowedOrigins = [
  'http://localhost:5173',           // Local dev
  'https://your-frontend-domain.com', // Production
  process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (mobile apps, Postman, etc.)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
```

---

## Deployment Options

### Option 1: Same Platform (Recommended for Simplicity)

**Deploy both on the same platform** (e.g., both on Render, both on Railway, etc.)

**Advantages:**
- Easier cookie configuration (can use same domain with subdomains)
- Simpler CORS setup
- Lower latency between services

**Example Setup:**
- Frontend: `https://yourapp.com`
- Backend: `https://api.yourapp.com` (subdomain)

**Cookie Configuration for Same Domain:**
```javascript
res.cookie('accessToken', token, {
  httpOnly: true,
  secure: true,
  sameSite: 'lax',  // Can use 'lax' for same domain
  maxAge: 24 * 60 * 60 * 1000
});
```

### Option 2: Different Platforms

**Deploy on different platforms** (e.g., Frontend on Vercel, Backend on Render)

**Advantages:**
- Use best platform for each service
- More flexibility

**Requirements:**
- **MUST** use `sameSite: 'none'` and `secure: true`
- **MUST** configure CORS properly
- Both must use HTTPS

**Example Setup:**
- Frontend: `https://yourapp.vercel.app`
- Backend: `https://yourapp-backend.onrender.com`

---

## Recommended Platforms

### Frontend Deployment:
- **Vercel** (Recommended) - Excellent for React/Vite apps
- **Netlify** - Great for static sites
- **Render** - Good alternative

### Backend Deployment:
- **Render** - Free tier available, easy setup
- **Railway** - Simple deployment
- **Heroku** - Paid but reliable
- **DigitalOcean App Platform** - Good performance

### Same Platform Options:
- **Render** - Can host both frontend and backend
- **Railway** - Can host both services
- **Vercel** - Frontend + Vercel Serverless Functions for backend

---

## Step-by-Step Deployment

### Frontend (Vercel Example)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variable:
   - Key: `VITE_API_URL`
   - Value: `https://your-backend-url.com`
4. Deploy

### Backend (Render Example)

1. Connect your GitHub repository
2. Set build command: `npm install`
3. Set start command: `node server.js` (or your entry file)
4. Add environment variables:
   - `NODE_ENV=production`
   - `FRONTEND_URL=https://your-frontend-url.com`
5. Deploy

---

## Troubleshooting

### Cookies Not Being Set

**Problem:** Cookies aren't being set in the browser

**Solutions:**
1. ✅ Check backend cookie configuration (`sameSite: 'none'`, `secure: true`)
2. ✅ Verify CORS allows credentials (`credentials: true`)
3. ✅ Ensure frontend uses `withCredentials: true` (already done in axios config)
4. ✅ Both frontend and backend must use HTTPS in production
5. ✅ Check browser console for CORS errors

### CORS Errors

**Problem:** `Access-Control-Allow-Credentials` header error

**Solutions:**
1. ✅ Set `credentials: true` in CORS configuration
2. ✅ Don't use wildcard `*` for origin when using credentials
3. ✅ Specify exact frontend URL in CORS origin

### Cookies Not Persisting

**Problem:** Cookies disappear after page refresh

**Solutions:**
1. ✅ Check `maxAge` or `expires` is set correctly
2. ✅ Verify cookie name matches (`accessToken`)
3. ✅ Check browser DevTools → Application → Cookies to see if cookie exists

### Testing Locally

**Problem:** Cookies work locally but not in production

**Solutions:**
1. ✅ Local development can use `sameSite: 'lax'` or `'strict'`
2. ✅ Production **MUST** use `sameSite: 'none'` if different domains
3. ✅ Production **MUST** use HTTPS (`secure: true`)

---

## Quick Checklist

Before deploying, ensure:

- [ ] Backend sets cookies with `sameSite: 'none'` and `secure: true`
- [ ] Backend CORS allows your frontend origin with `credentials: true`
- [ ] Frontend environment variable `VITE_API_URL` is set correctly
- [ ] Both frontend and backend use HTTPS in production
- [ ] All axios calls use the centralized `apiClient` (already done)
- [ ] Test cookies in browser DevTools → Application → Cookies

---

## Need Help?

If cookies still don't work after following this guide:

1. Check browser console for errors
2. Check Network tab → Request Headers (should include `Cookie`)
3. Check Network tab → Response Headers (should include `Set-Cookie`)
4. Verify backend logs for cookie setting
5. Test with Postman/Thunder Client to verify backend works

---

## Additional Resources

- [MDN: HTTP Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
- [MDN: SameSite Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite)
- [CORS with Credentials](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#requests_with_credentials)
