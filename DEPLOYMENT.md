# AWS Amplify Deployment Guide

## Prerequisites

1. AWS Account with Amplify access
2. GitHub repository (✅ Done - `https://github.com/sriram320/pneumonia-app`)
3. Backend API deployed (if using separate backend)

## Frontend Deployment Steps

### 1. Connect GitHub Repository to Amplify

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click "New app" > "Host web app"
3. Choose "GitHub" as your repository service
4. Select your repository: `sriram320/pneumonia-app`
5. Choose branch: `main`

### 2. Configure Build Settings

Amplify should automatically detect the `amplify.yml` file. If not, use these settings:

**Build settings:**
- Build command: `npm run build`
- Build output directory: `frontend/dist`
- Node.js version: `18`

### 3. Environment Variables

In Amplify Console, go to App Settings > Environment Variables and add:

**Required Variables:**
```
VITE_API_BASE_URL = https://your-backend-api-url.com
VITE_SUPABASE_URL = your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_KEY = your_supabase_anon_key
```

### 4. Advanced Settings

**Build settings override (if needed):**
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - cd frontend
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: frontend/dist
    files:
      - '**/*'
  cache:
    paths:
      - frontend/node_modules/**/*
```

## Backend Deployment Options

### Option 1: AWS Lambda + API Gateway
- Deploy FastAPI using AWS SAM or Serverless Framework
- Use AWS RDS for database

### Option 2: AWS EC2
- Deploy on EC2 instance
- Use Docker for containerization

### Option 3: AWS ECS/Fargate
- Containerized deployment
- Managed scaling

## Post-Deployment Checklist

1. ✅ Frontend builds successfully
2. ⚠️ Update `VITE_API_BASE_URL` with actual backend URL
3. ⚠️ Configure Supabase environment variables
4. ✅ Test all routes work (React Router)
5. ⚠️ Test API connectivity
6. ⚠️ Test file upload functionality
7. ⚠️ Test ML model predictions

## Troubleshooting

### Build Failures
- Check Node.js version (use v18+)
- Verify all dependencies are in package.json
- Check for TypeScript errors

### Runtime Errors
- Verify environment variables are set
- Check CORS configuration on backend
- Verify API endpoints are accessible

### Performance Issues
- Enable gzip compression
- Implement code splitting (already configured)
- Use CloudFront for CDN

## Security Considerations

1. **Environment Variables**: Never commit `.env` files with real credentials
2. **API Security**: Implement proper authentication/authorization
3. **CORS**: Configure CORS properly on backend
4. **HTTPS**: Ensure backend uses HTTPS in production

## Monitoring

- Set up CloudWatch for monitoring
- Enable AWS Amplify monitoring
- Monitor API performance and errors

---

## Current Status

✅ **Ready for Amplify deployment**
- Build configuration: Complete
- Environment setup: Complete  
- React Router configuration: Complete
- TypeScript configuration: Complete

⚠️ **Needs Configuration**
- Backend API URL
- Supabase credentials
- Database setup

🔄 **Next Steps**
1. Deploy to Amplify
2. Set environment variables
3. Deploy backend API
4. Test end-to-end functionality