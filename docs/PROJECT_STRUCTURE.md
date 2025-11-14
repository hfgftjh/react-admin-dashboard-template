# Dashboard Template - Project Structure Guide

## 📁 Folder Organization

```
dashboard-template/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx          # Top navigation header
│   │   │   ├── Sidebar.jsx         # Left sidebar navigation
│   │   │   └── MainLayout.jsx      # Main layout wrapper
│   │   ├── ui/
│   │   │   ├── Card.jsx            # Reusable card component
│   │   │   ├── Button.jsx          # Reusable button component
│   │   │   └── Badge.jsx           # Status badge component
│   │   └── charts/
│   │       ├── LineChartComponent.jsx    # Line chart using Recharts
│   │       └── BarChartComponent.jsx     # Bar chart using Recharts
│   ├── pages/
│   │   ├── dashboard/
│   │   │   └── Dashboard.jsx       # Main dashboard page (overview)
│   │   ├── analytics/
│   │   │   └── Analytics.jsx       # Analytics page with charts
│   │   ├── sales/
│   │   │   └── Sales.jsx           # Sales tracking page
│   │   ├── users/
│   │   │   └── Users.jsx           # User management page
│   │   ├── settings/
│   │   │   └── Settings.jsx        # App settings page
│   │   └── auth/
│   │       └── Auth.jsx            # Login/auth page
│   ├── context/
│   │   ├── ThemeContext.jsx        # Dark/light theme context
│   │   └── UserContext.jsx         # User authentication context
│   ├── hooks/
│   │   └── index.js                # Custom React hooks (useFetch, useLocalStorage, etc)
│   ├── utils/
│   │   └── formatters.js           # Utility functions (formatDate, formatCurrency, etc)
│   ├── styles/
│   │   └── index.css               # Global Tailwind CSS imports
│   ├── store/
│   │   └── useStore.js             # Zustand state management (demo)
│   ├── App.jsx                     # Main app component with routing
│   └── main.jsx                    # App entry point
├── public/
│   └── [static assets go here]
├── docs/
│   └── [project documentation]
├── index.html                      # HTML template
├── vite.config.js                  # Vite configuration
├── tailwind.config.cjs             # Tailwind CSS configuration
├── postcss.config.cjs              # PostCSS configuration
├── package.json                    # Dependencies and scripts
├── vercel.json                     # Vercel deployment config
├── .gitignore                      # Git ignore rules
└── README.md                       # Project README

```

## 🚀 Quick Start

### Installation

```powershell
npm install
```

### Development Server

```powershell
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```powershell
npm run build
```

### Preview Production Build

```powershell
npm run preview
```

## 📦 Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Heroicons
- **Routing**: React Router DOM v6
- **State Management**: Zustand (context available too)
- **Deployment**: Vercel

## 🎨 Component Structure

### Layout Components (`src/components/layout/`)

- **Header**: Top navigation bar with branding and links
- **Sidebar**: Left navigation with active state indicator
- **MainLayout**: Wrapper that combines Header + Sidebar + content area

### UI Components (`src/components/ui/`)

- **Card**: Flexible card container with optional title and footer
- **Button**: Multi-variant button (primary, secondary, danger)
- **Badge**: Status indicator badge with color variants

### Chart Components (`src/components/charts/`)

- **LineChartComponent**: Responsive line chart using Recharts
- **BarChartComponent**: Responsive bar chart using Recharts

## 📄 Page Templates

### Dashboard (`/`)
- KPI cards showing key metrics
- Revenue trend chart
- Quick actions

### Analytics (`/analytics`)
- Page view and visitor metrics
- Traffic breakdown by page
- Session analytics

### Sales (`/sales`)
- Sales summary cards
- Weekly sales trend
- Recent orders table

### Users (`/users`)
- User statistics
- User list with filtering
- Role and status indicators

### Settings (`/settings`)
- General app settings form
- Theme selection
- Notification preferences

### Auth (`/auth`)
- Login form
- Placeholder for auth flow

## 🔧 Custom Hooks (`src/hooks/`)

```javascript
// Fetch data from API
const { data, loading, error } = useFetch(url)

// Manage localStorage
const [value, setValue] = useLocalStorage('key', initialValue)

// Track window size
const { width, height } = useWindowSize()

// Toggle boolean state
const [isOpen, toggle] = useToggle(false)
```

## 🛠️ Utility Functions (`src/utils/`)

```javascript
import {
  formatDate,        // Format date to readable string
  formatCurrency,    // Format number as currency
  formatNumber,      // Format number with separators
  truncate,          // Truncate string with ellipsis
  debounce,          // Debounce function calls
  getInitials,       // Get name initials
} from '@/utils/formatters'
```

## 📦 Context Providers (`src/context/`)

### ThemeContext
- Toggle dark/light mode
- useTheme hook for accessing theme state

### UserContext
- Manage user authentication
- useUser hook for accessing user data

## 🗃️ State Management (`src/store/`)

Using Zustand for simple state management:

```javascript
import useStore from '@/store/useStore'

const { data, flip } = useStore()
```

## 🚢 Deployment

### Vercel

1. Push your code to GitHub
2. Import project on Vercel dashboard
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Deploy

The project includes a `vercel.json` for proper static serving configuration.

## 📝 Adding New Pages

1. Create a new folder in `src/pages/[page-name]/`
2. Create `[PageName].jsx` component
3. Add route in `src/App.jsx`:
   ```jsx
   <Route
     path="/page-name"
     element={
       <MainLayout>
         <PageName />
       </MainLayout>
     }
   />
   ```
4. Add menu item in `src/components/layout/Sidebar.jsx`

## 🎯 Best Practices

- Use the MainLayout wrapper for consistent header/sidebar
- Leverage reusable UI components (Card, Button, Badge)
- Use custom hooks for common logic
- Keep pages focused on data display
- Use Tailwind classes for styling
- Use Heroicons for consistent icons
- Use Context for global state (theme, auth)
- Use Zustand for app state

## 📚 Resources

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Recharts](https://recharts.org)
- [React Router](https://reactrouter.com)
- [Zustand](https://zustand.docs.pmnd.rs)
- [Heroicons](https://heroicons.com)
