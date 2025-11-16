import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 dark:text-gray-400 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white dark:text-gray-100 font-semibold mb-4">Dashboard</h3>
            <p className="text-sm">Professional dashboard template for modern web applications.</p>
          </div>
          <div>
            <h3 className="text-white dark:text-gray-100 font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white dark:hover:text-gray-200">Features</a></li>
              <li><a href="#" className="hover:text-white dark:hover:text-gray-200">Pricing</a></li>
              <li><a href="https://github.com/hfgftjh/react-admin-dashboard-template" target="_blank" rel="noopener noreferrer" className="hover:text-white dark:hover:text-gray-200">Documentation</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white dark:text-gray-100 font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white dark:hover:text-gray-200">About Us</a></li>
              <li><a href="#" className="hover:text-white dark:hover:text-gray-200">Blog</a></li>
              <li><a href="#" className="hover:text-white dark:hover:text-gray-200">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white dark:text-gray-100 font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white dark:hover:text-gray-200">Privacy</a></li>
              <li><a href="#" className="hover:text-white dark:hover:text-gray-200">Terms</a></li>
              <li><a href="#" className="hover:text-white dark:hover:text-gray-200">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-800 pt-8 flex items-center justify-between">
          <p className="text-sm">&copy; 2025 Dashboard Template. All rights reserved.</p>
          <div className="flex gap-4 text-sm">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white dark:hover:text-gray-200">Twitter</a>
            <a href="https://github.com/hfgftjh/react-admin-dashboard-template" target="_blank" rel="noopener noreferrer" className="hover:text-white dark:hover:text-gray-200">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white dark:hover:text-gray-200">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
