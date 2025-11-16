import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <Card>
        <div className="w-96 space-y-6">
          <div>
            <Link to="/login" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-4">
              <ArrowLeftIcon className="w-4 h-4" />
              Back to Login
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Reset Password</h1>
            <p className="text-gray-600 mt-2">
              {submitted
                ? 'Check your email for reset instructions'
                : 'Enter your email to receive password reset instructions'}
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <Button variant="primary" className="w-full">Send Reset Link</Button>
            </form>
          ) : (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <p className="text-green-800 font-medium">Check your email!</p>
              <p className="text-green-600 text-sm mt-2">
                We've sent password reset instructions to {email}
              </p>
              <Button variant="primary" className="w-full mt-4">
                <Link to="/login">Back to Login</Link>
              </Button>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}
