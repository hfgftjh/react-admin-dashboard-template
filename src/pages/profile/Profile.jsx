import React from 'react'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import { CameraIcon, PencilIcon } from '@heroicons/react/24/outline'

export default function Profile() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Profile</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto flex items-center justify-center text-white text-3xl font-bold mb-4">
              JD
            </div>
            <h2 className="text-xl font-bold">John Doe</h2>
            <p className="text-gray-600">Administrator</p>
            <div className="mt-4 space-y-2">
              <p className="text-sm text-gray-600">john.doe@example.com</p>
              <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div className="mt-4 flex gap-2">
              <Button variant="primary" className="flex-1">
                <CameraIcon className="w-4 h-4 inline mr-1" />
                Upload Photo
              </Button>
              <Button variant="secondary">
                <PencilIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>

        <div className="md:col-span-2 space-y-6">
          <Card title="Personal Information">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" defaultValue="John Doe" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" defaultValue="john.doe@example.com" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input type="tel" defaultValue="+1 (555) 123-4567" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                <textarea rows="4" defaultValue="Full-stack developer with 5+ years of experience" className="w-full px-3 py-2 border border-gray-300 rounded-lg"></textarea>
              </div>
              <Button variant="primary">Save Changes</Button>
            </div>
          </Card>

          <Card title="Account Security">
            <div className="space-y-3">
              <Button variant="secondary" className="w-full">Change Password</Button>
              <Button variant="secondary" className="w-full">Two-Factor Authentication</Button>
              <Button variant="secondary" className="w-full">Connected Devices</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
