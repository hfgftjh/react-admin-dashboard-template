import React from 'react'
import Card from '../../components/ui/Card'
import Badge from '../../components/ui/Badge'
import BarChartComponent from '../../components/charts/BarChartComponent'

export default function Sales() {
  const chartData = [
    { name: 'Mon', value: 3200 },
    { name: 'Tue', value: 2800 },
    { name: 'Wed', value: 4100 },
    { name: 'Thu', value: 3900 },
    { name: 'Fri', value: 5200 },
    { name: 'Sat', value: 4800 },
    { name: 'Sun', value: 2900 },
  ]

  const sales = [
    { id: 1, product: 'Product A', amount: '$1,250', status: 'completed' },
    { id: 2, product: 'Product B', amount: '$980', status: 'pending' },
    { id: 3, product: 'Product C', amount: '$2,100', status: 'completed' },
    { id: 4, product: 'Product D', amount: '$750', status: 'pending' },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Sales</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Total Sales">
          <p className="text-3xl font-bold text-blue-600">$24,583</p>
          <p className="text-sm text-gray-500 mt-2">This week</p>
        </Card>
        <Card title="Orders">
          <p className="text-3xl font-bold text-green-600">1,234</p>
          <p className="text-sm text-gray-500 mt-2">This week</p>
        </Card>
        <Card title="Avg Order Value">
          <p className="text-3xl font-bold text-purple-600">$89.50</p>
          <p className="text-sm text-gray-500 mt-2">This week</p>
        </Card>
      </div>

      <Card title="Sales Trend">
        <div className="h-80">
          <BarChartComponent data={chartData} dataKey="value" />
        </div>
      </Card>

      <Card title="Recent Orders">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-2">Product</th>
                <th className="text-left py-2 px-2">Amount</th>
                <th className="text-left py-2 px-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {sales.map((sale) => (
                <tr key={sale.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-2">{sale.product}</td>
                  <td className="py-3 px-2">{sale.amount}</td>
                  <td className="py-3 px-2">
                    <Badge color={sale.status === 'completed' ? 'green' : 'yellow'}>
                      {sale.status}
                    </Badge>
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
