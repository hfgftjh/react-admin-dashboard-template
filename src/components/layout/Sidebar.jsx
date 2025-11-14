import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  HomeIcon,
  ChartBarIcon,
  ShoppingCartIcon,
  UsersIcon,
  CogIcon,
  ArrowRightOnRectangleIcon,
  EnvelopeIcon,
  CalendarIcon,
  UserIcon,
  TagIcon,
  ChatBubbleLeftIcon,
} from '@heroicons/react/24/outline'

export default function Sidebar() {
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
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-6 sticky top-0 overflow-y-auto">
      <div className="mb-8">
        <h2 className="text-xl font-bold">Menu</h2>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                isActive(item.path)
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto pt-6 border-t border-gray-700">
        <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 transition w-full">
          <ArrowRightOnRectangleIcon className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  )
}
