import React, { useState } from 'react'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import { EnvelopeIcon, TrashIcon, ArrowUturnLeftIcon } from '@heroicons/react/24/outline'

export default function Messages() {
  const [messages, setMessages] = useState([
    { id: 1, from: 'John Smith', subject: 'Project Update', preview: 'Here is the latest update on the project...', time: '2 hours ago', read: false },
    { id: 2, from: 'Sarah Johnson', subject: 'Meeting Scheduled', preview: 'I have scheduled a meeting for tomorrow at...', time: '5 hours ago', read: false },
    { id: 3, from: 'Mike Davis', subject: 'Report Completed', preview: 'The quarterly report has been completed...', time: '1 day ago', read: true },
    { id: 4, from: 'Emily Wilson', subject: 'Feedback on Design', preview: 'Great design! I have a few suggestions...', time: '2 days ago', read: true },
  ])

  const handleDelete = (id) => {
    setMessages(messages.filter(m => m.id !== id))
    alert('Message deleted')
  }

  const handleReply = (from) => {
    alert(`Replying to ${from}`)
  }

  const handleCompose = () => {
    alert('Compose new message window opened')
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Messages & Inbox</h1>
        <Button onClick={handleCompose} variant="primary">
          <EnvelopeIcon className="w-4 h-4 inline mr-2" />
          Compose
        </Button>
      </div>

      <Card title="Inbox">
        <div className="space-y-2">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition ${
                message.read ? 'bg-white' : 'bg-blue-50 border-blue-200'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className={`font-semibold ${message.read ? 'text-gray-600' : 'text-gray-900 font-bold'}`}>
                      {message.from}
                    </h3>
                    {!message.read && <span className="w-2 h-2 bg-blue-500 rounded-full"></span>}
                  </div>
                  <p className="text-sm font-medium text-gray-700 mt-1">{message.subject}</p>
                  <p className="text-sm text-gray-500 mt-1">{message.preview}</p>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <span className="text-xs text-gray-500">{message.time}</span>
                  <div className="flex gap-1">
                    <button onClick={() => handleReply(message.from)} className="p-1 hover:bg-gray-200 rounded">
                      <ArrowUturnLeftIcon className="w-4 h-4 text-gray-600" />
                    </button>
                    <button onClick={() => handleDelete(message.id)} className="p-1 hover:bg-gray-200 rounded">
                      <TrashIcon className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
