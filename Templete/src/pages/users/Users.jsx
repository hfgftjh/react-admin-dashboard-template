import React, { useState } from 'react'
import Card from '../../components/ui/Card'
import Badge from '../../components/ui/Badge'
import Button from '../../components/ui/Button'
import { PlusIcon } from '@heroicons/react/24/outline'

export default function Users() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Moderator', status: 'inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User', status: 'active' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'User', status: 'active' },
  ])

  const handleAddUser = () => {
    alert('Add new user dialog opened')
  }

  const handleEditUser = (userId, userName) => {
    alert(`Editing user: ${userName}`)
  }

  const handleDeleteUser = (userId) => {
    setUsers(users.filter(u => u.id !== userId))
    alert('User deleted')
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Users</h1>
        <Button onClick={handleAddUser} variant="primary">
          <PlusIcon className="w-4 h-4 inline mr-2" />
          Add User
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Total Users">
          <p className="text-3xl font-bold text-blue-600">5,234</p>
          <p className="text-sm text-gray-500 mt-2">Registered users</p>
        </Card>
        <Card title="Active Users">
          <p className="text-3xl font-bold text-green-600">4,892</p>
          <p className="text-sm text-gray-500 mt-2">Last 30 days</p>
        </Card>
        <Card title="New Users">
          <p className="text-3xl font-bold text-purple-600">342</p>
          <p className="text-sm text-gray-500 mt-2">This month</p>
        </Card>
      </div>

      <Card title="User List">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-2">Name</th>
                <th className="text-left py-2 px-2">Email</th>
                <th className="text-left py-2 px-2">Role</th>
                <th className="text-left py-2 px-2">Status</th>
                <th className="text-left py-2 px-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-2">{user.name}</td>
                  <td className="py-3 px-2 text-gray-600">{user.email}</td>
                  <td className="py-3 px-2">{user.role}</td>
                  <td className="py-3 px-2">
                    <Badge color={user.status === 'active' ? 'green' : 'red'}>
                      {user.status}
                    </Badge>
                  </td>
                  <td className="py-3 px-2 space-x-2">
                    <button onClick={() => handleEditUser(user.id, user.name)} className="text-blue-600 hover:underline text-sm">Edit</button>
                    <button onClick={() => handleDeleteUser(user.id)} className="text-red-600 hover:underline text-sm">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
