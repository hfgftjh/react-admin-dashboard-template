import React from 'react'

export default function Card({ title, children, footer }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-lg p-6">
      {title && <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">{title}</h3>}
      <div>{children}</div>
      {footer && <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">{footer}</div>}
    </div>
  )
}
