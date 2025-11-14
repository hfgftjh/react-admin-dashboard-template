import React from 'react'
import SimpleChart from '../components/SimpleChart'
import useStore from '../store/useStore'
import { ChartBarIcon } from '@heroicons/react/24/solid'

export default function Dashboard() {
  const { data, flip } = useStore()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <div className="flex items-center gap-3">
          <button
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-md"
            onClick={flip}
          >
            <ChartBarIcon className="w-5 h-5" />
            Toggle Data
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <div className="h-64">
          <SimpleChart data={data} />
        </div>
      </div>
    </div>
  )
}
