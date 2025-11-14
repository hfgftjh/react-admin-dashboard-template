# Getting Started Guide

## Prerequisites

- Node.js 16+ ([Download](https://nodejs.org/))
- npm or yarn package manager
- Code editor (VS Code recommended)

## Installation & Setup

### Step 1: Install Dependencies

Open PowerShell in the project directory and run:

```powershell
npm install
```

This will install all required packages:
- React 18
- Vite
- Tailwind CSS
- Recharts
- React Router DOM
- Zustand
- Heroicons

### Step 2: Start Development Server

```powershell
npm run dev
```

You'll see output like:
```
  VITE v5.0.0  ready in 243 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

Open `http://localhost:5173/` in your browser to see the dashboard.

### Step 3: Explore the App

The dashboard includes these demo pages:
- **Dashboard** (`/`) - Main overview with KPIs and charts
- **Analytics** (`/analytics`) - Traffic metrics
- **Sales** (`/sales`) - Sales tracking
- **Users** (`/users`) - User management
- **Settings** (`/settings`) - App settings
- **Auth** (`/auth`) - Login page

Navigate using the sidebar menu.

## Available Commands

```powershell
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Format code (if prettier is installed)
npm run format
```

## Project Structure Quick Reference

```
dashboard-template/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── layout/       # Page layout components
│   │   ├── ui/           # Atomic UI components
│   │   └── charts/       # Chart components
│   ├── pages/            # Page components
│   ├── context/          # React Context providers
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Utility functions
│   ├── styles/           # Global CSS
│   ├── store/            # Zustand state store
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── public/               # Static assets
├── docs/                 # Documentation
├── package.json          # Dependencies
├── tailwind.config.cjs   # Tailwind config
├── vite.config.js        # Vite config
└── README.md             # Project README
```

## First Customizations

### 1. Change App Name

Edit `index.html`:
```html
<title>Your App Name</title>
```

Edit `src/components/layout/Sidebar.jsx`:
```jsx
<h2 className="text-xl font-bold">Your Menu Title</h2>
```

### 2. Change Color Scheme

Edit `tailwind.config.cjs` to customize colors.

### 3. Add Your Logo

Place logo in `public/` folder and update `Header.jsx`.

## Adding New Features

### Add a New Page

1. Create page file:
```powershell
mkdir src/pages/reports
# Create Reports.jsx
```

2. Import and add route in `src/App.jsx`:
```jsx
import Reports from './pages/reports/Reports'

<Route
  path="/reports"
  element={
    <MainLayout>
      <Reports />
    </MainLayout>
  }
/>
```

3. Add menu item in `src/components/layout/Sidebar.jsx`.

### Use a Chart

```jsx
import LineChartComponent from '@/components/charts/LineChartComponent'

const data = [
  { name: 'Jan', value: 40 },
  { name: 'Feb', value: 30 },
]

<LineChartComponent data={data} />
```

### Use a Custom Hook

```jsx
import { useFetch } from '@/hooks'

const { data, loading, error } = useFetch('/api/endpoint')
```

### Use State Management

With Zustand:
```jsx
import useStore from '@/store/useStore'

const { data, flip } = useStore()
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project" → Import repository
4. Vercel will auto-detect settings
5. Click "Deploy"

Your app will be live at a Vercel URL in seconds!

### Deploy Elsewhere

The project builds to the `dist/` folder:

```powershell
npm run build
```

Then deploy the `dist/` folder to your hosting service.

## Troubleshooting

### App won't start
```powershell
# Clear node_modules and reinstall
Remove-Item -Recurse node_modules
npm install
npm run dev
```

### Port 5173 already in use
```powershell
npm run dev -- --port 3000
```

### Styles not loading
```powershell
# Restart dev server
# Kill terminal with Ctrl+C then:
npm run dev
```

### Import errors for '@/components' etc
These path aliases are configured in `vite.config.js`. If they don't work:
1. Restart the dev server
2. Clear VS Code cache (Cmd+Shift+P → Reload Window)

## VS Code Extensions (Recommended)

- **ES7+ React/Redux/React-Native snippets** - dsznajder.es7-react-js-snippets
- **Tailwind CSS IntelliSense** - bradlc.vscode-tailwindcss
- **Prettier - Code formatter** - esbenp.prettier-vscode
- **Thunder Client** or **REST Client** - for API testing

## Learning Resources

- React Fundamentals: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- Vite: https://vitejs.dev
- React Router: https://reactrouter.com
- Zustand: https://zustand.docs.pmnd.rs
- Recharts: https://recharts.org

## Next Steps

1. ✅ Install and run the app
2. 📚 Read [PROJECT_STRUCTURE.md](./docs/PROJECT_STRUCTURE.md)
3. 🎨 Customize colors and branding
4. ➕ Add your own pages
5. 🔌 Connect to real APIs
6. 🚀 Deploy to Vercel

Happy coding! 🚀