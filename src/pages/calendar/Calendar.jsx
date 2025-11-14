import React, { useState } from 'react'
import Card from '../../components/ui/Card'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 10, 14))

  const daysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay()

  const monthName = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const totalDays = daysInMonth(currentDate)
  const firstDay = firstDayOfMonth(currentDate)

  const calendarDays = []
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null)
  }
  for (let i = 1; i <= totalDays; i++) {
    calendarDays.push(i)
  }

  const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Calendar</h1>

      <Card title={monthName}>
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <button onClick={prevMonth} className="p-2 hover:bg-gray-200 rounded">
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <h2 className="text-lg font-semibold">{monthName}</h2>
            <button onClick={nextMonth} className="p-2 hover:bg-gray-200 rounded">
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {days.map((day) => (
              <div key={day} className="text-center font-semibold text-sm text-gray-600 py-2">
                {day}
              </div>
            ))}
            {calendarDays.map((day, idx) => (
              <div
                key={idx}
                className={`aspect-square flex items-center justify-center rounded border ${
                  day === null
                    ? 'bg-gray-50'
                    : day === 14
                    ? 'bg-blue-500 text-white font-bold'
                    : 'bg-white hover:bg-gray-50 cursor-pointer'
                }`}
              >
                {day}
              </div>
            ))}
          </div>
        </div>
      </Card>

      <Card title="Upcoming Events">
        <div className="space-y-3">
          <div className="p-3 border-l-4 border-blue-500 bg-blue-50 rounded">
            <p className="font-medium">Team Meeting</p>
            <p className="text-sm text-gray-600">Today at 2:00 PM</p>
          </div>
          <div className="p-3 border-l-4 border-green-500 bg-green-50 rounded">
            <p className="font-medium">Project Deadline</p>
            <p className="text-sm text-gray-600">Tomorrow</p>
          </div>
          <div className="p-3 border-l-4 border-purple-500 bg-purple-50 rounded">
            <p className="font-medium">Client Review</p>
            <p className="text-sm text-gray-600">November 20</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
