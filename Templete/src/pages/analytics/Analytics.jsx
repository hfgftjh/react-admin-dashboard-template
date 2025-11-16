import React from 'react'
import Card from '../../components/ui/Card'
import BarChartComponent from '../../components/charts/BarChartComponent'

export default function Analytics() {
  const chartData = [
    { name: 'Page A', value: 2400 },
    { name: 'Page B', value: 1398 },
    { name: 'Page C', value: 9800 },
    { name: 'Page D', value: 3908 },
    { name: 'Page E', value: 4800 },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card title="Page Views">
          <p className="text-3xl font-bold text-blue-600">124,543</p>
          <p className="text-sm text-gray-500 mt-2">This month</p>
        </Card>
        <Card title="Unique Visitors">
          <p className="text-3xl font-bold text-green-600">82,391</p>
          <p className="text-sm text-gray-500 mt-2">This month</p>
        </Card>
      </div>

      <Card title="Traffic by Page">
        <div className="h-80">
          <BarChartComponent data={chartData} dataKey="value" />
        </div>
      </Card>

      <Card title="Analytics Summary">
        <div className="space-y-4">
          <div className="flex justify-between items-center pb-2 border-b">
            <span className="text-gray-600">Bounce Rate</span>
            <span className="font-semibold">42.3%</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b">
            <span className="text-gray-600">Avg Session Duration</span>
            <span className="font-semibold">4m 32s</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Conversion Rate</span>
            <span className="font-semibold">2.1%</span>
          </div>
        </div>
      </Card>
    </div>
  )
}
