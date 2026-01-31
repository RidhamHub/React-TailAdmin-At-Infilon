# Quick Start - Environment Variables

## For Local Development

1. Create `.env.development` file in the root directory:
```env
VITE_API_URL=http://localhost:7000
```

2. Run your development server:
```bash
npm run dev
```

## For Production Deployment

### Option 1: Using .env.production file

1. Create `.env.production` file:
```env
VITE_API_URL=https://your-backend-url.com
```

2. Build your app:
```bash
npm run build
```

### Option 2: Using Platform Environment Variables

Set `VITE_API_URL` in your deployment platform:
- **Vercel**: Settings → Environment Variables
- **Netlify**: Site settings → Environment variables
- **Render**: Environment tab

## Backend Requirements

Your backend MUST have:

1. **Cookie Configuration:**
```javascript
res.cookie('accessToken', token, {
  httpOnly: true,
  secure: true,        // HTTPS only
  sameSite: 'none',   // Required for cross-origin
  maxAge: 24 * 60 * 60 * 1000
});
```

2. **CORS Configuration:**
```javascript
app.use(cors({
  origin: 'https://your-frontend-url.com',
  credentials: true  // REQUIRED for cookies
}));
```

See `DEPLOYMENT_GUIDE.md` for complete details.
