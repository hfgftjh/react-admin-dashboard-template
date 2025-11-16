import React, { useState } from 'react'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/outline'

export default function Products() {
  const [showAddModal, setShowAddModal] = useState(false)
  
  const handleAddProduct = () => {
    alert('Product added successfully!')
    setShowAddModal(false)
  }
  const [products] = useState([
    { id: 1, name: 'Laptop Pro', category: 'Electronics', price: '$1,299', stock: 45, status: 'In Stock' },
    { id: 2, name: 'Wireless Mouse', category: 'Accessories', price: '$29', stock: 150, status: 'In Stock' },
    { id: 3, name: 'USB Hub', category: 'Accessories', price: '$49', stock: 8, status: 'Low Stock' },
    { id: 4, name: '4K Monitor', category: 'Electronics', price: '$599', stock: 0, status: 'Out of Stock' },
    { id: 5, name: 'Keyboard Mechanical', category: 'Accessories', price: '$159', stock: 32, status: 'In Stock' },
  ])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Products & Inventory</h1>
        <Button onClick={() => setShowAddModal(true)} variant="primary">
          <PlusIcon className="w-4 h-4 inline mr-2" />
          Add Product
        </Button>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-xl font-bold mb-4">Add New Product</h2>
            <div className="space-y-4">
              <input type="text" placeholder="Product Name" className="w-full px-3 py-2 border rounded-lg" />
              <input type="text" placeholder="Category" className="w-full px-3 py-2 border rounded-lg" />
              <input type="text" placeholder="Price" className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div className="flex gap-2 mt-6">
              <Button onClick={handleAddProduct} variant="primary" className="flex-1">Add</Button>
              <Button onClick={() => setShowAddModal(false)} variant="secondary" className="flex-1">Cancel</Button>
            </div>
          </div>
        </div>
      )}

      <Card title="Product List">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-2">Product Name</th>
                <th className="text-left py-2 px-2">Category</th>
                <th className="text-left py-2 px-2">Price</th>
                <th className="text-left py-2 px-2">Stock</th>
                <th className="text-left py-2 px-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-2 font-medium">{product.name}</td>
                  <td className="py-3 px-2 text-gray-600">{product.category}</td>
                  <td className="py-3 px-2">{product.price}</td>
                  <td className="py-3 px-2">{product.stock}</td>
                  <td className="py-3 px-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      product.status === 'In Stock' ? 'bg-green-100 text-green-800' :
                      product.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {product.status}
                    </span>
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
