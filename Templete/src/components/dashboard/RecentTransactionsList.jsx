import React from 'react'

export default function RecentTransactionsList({ transactions }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Transactions</h2>
      <div className="space-y-3">
        {transactions.map((tx, idx) => (
          <div key={idx} className="flex items-center justify-between py-3 border-b last:border-b-0">
            <div>
              <p className="text-sm font-medium text-gray-900">{tx.description}</p>
              <p className="text-xs text-gray-500">{tx.date}</p>
            </div>
            <p className={`text-sm font-semibold ${tx.amount < 0 ? 'text-red-600' : 'text-green-600'}`}>
              {tx.amount < 0 ? '-' : '+'}${Math.abs(tx.amount)}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
