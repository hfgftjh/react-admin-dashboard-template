import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  HomeIcon,
  ChartBarIcon,
  ShoppingCartIcon,
  UsersIcon,
  CogIcon,
  EnvelopeIcon,
  CalendarIcon,
  UserIcon,
  TagIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const menuItems = [
    { label: 'Dashboard', path: '/', icon: HomeIcon },
    { label: 'Analytics', path: '/analytics', icon: ChartBarIcon },
    { label: 'Sales', path: '/sales', icon: ShoppingCartIcon },
    { label: 'Users', path: '/users', icon: UsersIcon },
    { label: 'Products', path: '/products', icon: TagIcon },
    { label: 'Messages', path: '/messages', icon: EnvelopeIcon },
    { label: 'Calendar', path: '/calendar', icon: CalendarIcon },
    { label: 'Profile', path: '/profile', icon: UserIcon },
    { label: 'Settings', path: '/settings', icon: CogIcon },
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hidden fixed top-20 left-4 z-40 p-2 md:hidden"
      >
        {isOpen ? (
          <XMarkIcon className="w-6 h-6 text-gray-900" />
        ) : (
          <Bars3Icon className="w-6 h-6 text-gray-900" />
        )}
      </button>

      {/* Sidebar */}
      <aside className={`${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 transition-transform duration-300 w-64 bg-gray-900 dark:bg-gray-950 text-white min-h-screen p-6 sticky top-0 overflow-y-auto fixed md:relative z-30 h-screen`}>
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white dark:text-gray-100">Menu</h2>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  isActive(item.path)
                    ? 'bg-blue-600 dark:bg-blue-700 text-white'
                    : 'text-gray-300 dark:text-gray-400 hover:bg-gray-800 dark:hover:bg-gray-700'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
        />
      )}
    </>
  )
}
