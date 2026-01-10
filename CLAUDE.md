# Axion Deep Labs - Company Website

> **FOR CLAUDE: Read the SESSION STATE section before doing anything.**

---

## SESSION STATE (Update before ending each session)
**Last Updated:** 2026-01-09

### Where We Left Off:
- Created Sales Portal & CMS infrastructure
- Frontend components complete, backend Amplify config ready
- Needs: Amplify initialization + password setup

### Immediate Next Steps:
1. Run `npm create amplify@latest` to initialize Amplify Gen 2
2. Deploy backend to AWS
3. Run `node scripts/setup-passwords.js` to generate password hashes
4. Add password hashes to DynamoDB AppConfig table
5. Test portal login flows

### Current Blockers:
- Amplify backend not yet deployed (requires user to run init command)

---

## Project Overview
Modern React landing page for Axion Deep Labs.

## Tech Stack
- React + JavaScript
- React Router for navigation
- TailwindCSS for styling
- Create React App

## Local Development
```bash
npm run start  # Runs on port 3000
```

## Pages

### Public Pages
- `/` - Home
- `/mission` - Mission statement
- `/solutions` - Solutions overview
- `/careers` - Careers page
- `/contact` - Contact form
- `/legal` - Privacy & Terms
- `/projects/quanta` - Quanta project page
- `/projects/site2crm` - Site2CRM project page
- `/projects/forma` - Forma project page

### Sales Portal (password protected)
- `/portal/login` - Contractor login
- `/portal` - Sales portal dashboard (view training, pricing, collateral)

### Admin CMS (admin password only)
- `/admin/login` - Admin login
- `/admin` - Admin dashboard overview
- `/admin/content` - Content manager (list all content)
- `/admin/content/new` - Add new content
- `/admin/content/:id/edit` - Edit existing content

---

## Sales Portal Architecture

### Authentication
- Simple shared passwords (no individual accounts)
- Contractor password: View-only access to portal
- Admin password: Full CMS access (upload, edit, delete)
- JWT tokens stored in sessionStorage (clears on tab close)
- Tokens expire: 8h (contractor), 2h (admin)

### Content Categories
| Category | ID | Content Types |
|----------|-----|---------------|
| Training | training-videos | Videos, tutorials |
| Pricing | pricing | PDFs, spreadsheets |
| Collateral | collateral | Brochures, pitch decks |
| FAQ/Scripts | faq | Sales scripts |
| Commission | commission | Comp plans |

### File Structure
```
src/
├── contexts/AuthContext.jsx    # Auth state management
├── hooks/useAuth.js            # Auth hook
├── services/
│   ├── api.js                  # API client with auth
│   └── auth.js                 # Login/logout functions
├── components/
│   └── ProtectedRoute.jsx      # Route guard
├── pages/
│   ├── portal/
│   │   ├── Login.jsx           # Contractor login
│   │   └── Dashboard.jsx       # Sales portal
│   └── admin/
│       ├── Login.jsx           # Admin login
│       ├── Dashboard.jsx       # Admin dashboard
│       ├── ContentManager.jsx  # Content list
│       └── ContentForm.jsx     # Add/edit content
└── utils/constants.js          # Categories, file types

amplify/
├── backend.ts                  # Main backend config
├── data/resource.ts            # DynamoDB tables
├── storage/resource.ts         # S3 bucket config
└── functions/
    ├── auth/handler.ts         # Password verification
    ├── content/handler.ts      # Content CRUD
    └── upload/handler.ts       # Presigned URLs
```

### Setup Commands (Quick Reference)
```bash
npm install                      # Install dependencies
node scripts/setup-passwords.js  # Generate password hashes
```

---

## SALES PORTAL BACKEND SETUP (Step-by-Step)

> Follow these steps IN ORDER. Each step must be completed before moving to the next.

### STEP 1: Create AWS Account (Skip if you have one)
1. Go to https://aws.amazon.com/
2. Click "Create an AWS Account"
3. Follow the signup process (requires credit card)
4. Wait for account activation (can take a few hours)

### STEP 2: Create IAM User for Deployments
1. Go to AWS Console: https://console.aws.amazon.com/
2. Search for "IAM" in the search bar, click it
3. In left sidebar, click "Users"
4. Click "Create user" button
5. User name: `github-amplify-deploy`
6. Click "Next"
7. Select "Attach policies directly"
8. Search for and check: `AdministratorAccess-Amplify`
9. Click "Next", then "Create user"
10. Click on the user you just created
11. Go to "Security credentials" tab
12. Under "Access keys", click "Create access key"
13. Select "Third-party service", check the confirmation, click "Next"
14. Click "Create access key"
15. **SAVE BOTH KEYS** (you won't see the secret again):
    - Access key ID: `AKIA...`
    - Secret access key: `wJalr...`

### STEP 3: Find Your Amplify App ID
1. Go to AWS Amplify Console: https://console.aws.amazon.com/amplify/
2. Click on your "axiondeep" app
3. Look at the URL in your browser, it looks like:
   `https://us-east-1.console.aws.amazon.com/amplify/apps/d1a2b3c4d5/...`
4. The App ID is the part after `/apps/` → `d1a2b3c4d5`
5. **SAVE THIS APP ID**

### STEP 4: Add Secrets to GitHub
1. Go to your GitHub repo: https://github.com/joshuarg007/axiondeep
2. Click "Settings" tab (top right)
3. In left sidebar, click "Secrets and variables" → "Actions"
4. Click "New repository secret" and add these ONE BY ONE:

   | Name | Value |
   |------|-------|
   | `AWS_ACCESS_KEY_ID` | The access key from Step 2 |
   | `AWS_SECRET_ACCESS_KEY` | The secret key from Step 2 |
   | `AMPLIFY_APP_ID` | The app ID from Step 3 |

### STEP 5: Enable Backend Deployment
1. Still in GitHub repo Settings → Secrets and variables → Actions
2. Click the "Variables" tab (next to Secrets)
3. Click "New repository variable"
4. Name: `AMPLIFY_BACKEND_ENABLED`
5. Value: `true`
6. Click "Add variable"

### STEP 6: Set Portal Passwords
1. Open terminal in the axiondeep project folder
2. Run: `node scripts/setup-passwords.js`
3. Enter a password for contractors (8+ characters)
4. Enter a password for admin (8+ characters)
5. Save the output - you'll need the hashes for Step 7

### STEP 7: Add Password Hashes to DynamoDB
(This step happens AFTER first deployment creates the tables)
1. Go to AWS DynamoDB Console: https://console.aws.amazon.com/dynamodb/
2. Click "Tables" in left sidebar
3. Find the `AppConfig` table (created by Amplify)
4. Click on it, then "Explore table items"
5. Click "Create item"
6. Add: `configKey` = `CONTRACTOR_PASSWORD_HASH`, `value` = (hash from Step 6)
7. Click "Create item" again
8. Add: `configKey` = `ADMIN_PASSWORD_HASH`, `value` = (hash from Step 6)

### STEP 8: Push and Deploy
```bash
cd /home/joshua/AllProjects/axiondeep
git add .
git commit -m "Add sales portal and CMS"
git push
```

### STEP 9: Verify Deployment
1. Go to GitHub repo → Actions tab
2. Watch the workflow run
3. Both jobs should pass (build + deploy-backend)
4. Go to your site: https://www.axiondeep.com/portal/login
5. Test login with contractor password
6. Test admin login at /admin/login

---

## Troubleshooting

### "deploy-backend" job not running
- Check that `AMPLIFY_BACKEND_ENABLED` variable is set to `true`
- Check that you're pushing to `main` branch

### "Invalid credentials" error in GitHub Actions
- Verify AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY are correct
- Make sure there are no extra spaces in the secret values

### "App not found" error
- Verify AMPLIFY_APP_ID matches your Amplify Console URL

### Login not working
- Check DynamoDB AppConfig table has the password hashes
- Verify the hash values match what the script generated

## Recent Fixes (2025-12-04)
1. **Tailwind Dynamic Classes**: Fixed gradient classes by using complete class names instead of dynamic construction
2. **Forma Link**: Updated localhost link to production URL
3. **Mobile Menu**: Already working with useState for toggle

## Components
- `GradientBackground` - Animated gradient background
- `LogoMark` - Company logo component
- `NavItem` - Navigation link with active state

## Deployment
Hosted on Vercel or similar (production URL: www.axiondeep.com)

## Notes
- Mobile-responsive navigation with hamburger menu
- Dark theme with gradient accents
- Professional fixed navbar with blur effect
