import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUser } from '../../context/UserContext'
import { useTheme } from '../../context/ThemeContext'
import Button from '../ui/Button'
import { ArrowRightOnRectangleIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline'

export default function Header() {
  const { isAuthenticated, user, logout } = useUser()
  const { isDarkMode, toggleTheme } = useTheme()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
    alert('Logged out successfully')
  }

  return (
    <header className="px-6 py-4 bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-lg font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
          Dashboard
        </Link>
        <div className="flex items-center gap-6">
          <nav className="space-x-4">
            <a href="https://github.com/hfgftjh/react-admin-dashboard-template" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
              Documentation
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
              Support
            </a>
          </nav>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            title="Toggle theme"
          >
            {isDarkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
          </button>
          {isAuthenticated && user && (
            <div className="flex items-center gap-4 border-l border-gray-200 dark:border-gray-700 pl-4">
              <div className="text-sm">
                <p className="font-medium text-gray-900 dark:text-white">{user.name}</p>
                <p className="text-gray-600 dark:text-gray-400 text-xs">{user.email}</p>
              </div>
              <Button onClick={handleLogout} variant="secondary" className="flex items-center gap-2">
                <ArrowRightOnRectangleIcon className="w-4 h-4" />
                Logout
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
