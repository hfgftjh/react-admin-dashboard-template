import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-lg font-semibold text-blue-600 hover:text-blue-700">
          Dashboard
        </Link>
        <nav className="space-x-4">
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Documentation</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Support</a>
        </nav>
      </div>
    </header>
  )
}
