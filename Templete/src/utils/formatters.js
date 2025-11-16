/**
 * Format a date to a readable string
 */
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Format a number as currency
 */
export const formatCurrency = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount)
}

/**
 * Format a number with thousand separators
 */
export const formatNumber = (num) => {
  return new Intl.NumberFormat('en-US').format(num)
}

/**
 * Truncate a string to a specific length
 */
export const truncate = (str, length = 50) => {
  if (str.length <= length) return str
  return str.substr(0, length) + '...'
}

/**
 * Debounce a function
 */
export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Get initials from a name
 */
export const getInitials = (name) => {
  return name
    .split(' ')
    .map((part) => part.charAt(0).toUpperCase())
    .join('')
    .substr(0, 2)
}
