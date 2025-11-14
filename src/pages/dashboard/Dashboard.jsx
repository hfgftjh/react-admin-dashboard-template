import React from 'react'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import LineChartComponent from '../../components/charts/LineChartComponent'
import useStore from '../../store/useStore'
import { ChartBarIcon } from '@heroicons/react/24/solid'

export default function Dashboard() {
  const { data, flip } = useStore()

  const chartData = [
    { name: 'Jan', value: 40 },
    { name: 'Feb', value: 30 },
    { name: 'Mar', value: 50 },
    { name: 'Apr', value: 70 },
    { name: 'May', value: 60 },
    { name: 'Jun', value: 80 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <Button onClick={flip} variant="primary">
          <ChartBarIcon className="w-4 h-4 inline mr-2" />
          Toggle Data
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card title="Total Users">
          <p className="text-3xl font-bold text-blue-600">1,234</p>
          <p className="text-sm text-gray-500 mt-2">+12% from last month</p>
        </Card>
        <Card title="Revenue">
          <p className="text-3xl font-bold text-green-600">$45,231</p>
          <p className="text-sm text-gray-500 mt-2">+8% from last month</p>
        </Card>
        <Card title="Orders">
          <p className="text-3xl font-bold text-purple-600">892</p>
          <p className="text-sm text-gray-500 mt-2">+5% from last month</p>
        </Card>
        <Card title="Conversion">
          <p className="text-3xl font-bold text-orange-600">3.24%</p>
          <p className="text-sm text-gray-500 mt-2">+0.5% from last month</p>
        </Card>
      </div>

      <Card title="Revenue Trend">
        <div className="h-80">
          <LineChartComponent data={data || chartData} />
        </div>
      </Card>
    </div>
  )
}
