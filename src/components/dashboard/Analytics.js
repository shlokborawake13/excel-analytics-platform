import React from 'react';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';

const Analytics = ({ onLogout }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar userRole="user" />
      
      <div className="ml-64">
        <Header userRole="user" onLogout={onLogout} />
        
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <h1 className="text-2xl font-semibold text-gray-900">Analytics</h1>
            
            <div className="mt-6">
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h2 className="text-lg leading-6 font-medium text-gray-900">Excel Data Analytics</h2>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">Insights from your uploaded Excel files</p>
                </div>
                
                {/* Analytics Charts Section */}
                <div className="border-t border-gray-200">
                  <div className="bg-white p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Chart 1: Bar Chart */}
                      <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Monthly Revenue</h3>
                        <div className="h-64 bg-white rounded-lg border border-gray-200 p-4">
                          <div className="flex h-full items-end">
                            <div className="flex-1 bg-blue-500 mx-1" style={{ height: '60%' }}></div>
                            <div className="flex-1 bg-blue-500 mx-1" style={{ height: '75%' }}></div>
                            <div className="flex-1 bg-blue-500 mx-1" style={{ height: '50%' }}></div>
                            <div className="flex-1 bg-blue-500 mx-1" style={{ height: '85%' }}></div>
                            <div className="flex-1 bg-blue-500 mx-1" style={{ height: '70%' }}></div>
                            <div className="flex-1 bg-blue-500 mx-1" style={{ height: '90%' }}></div>
                          </div>
                          <div className="flex justify-between mt-2 text-xs text-gray-500">
                            <span>Jan</span>
                            <span>Feb</span>
                            <span>Mar</span>
                            <span>Apr</span>
                            <span>May</span>
                            <span>Jun</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Chart 2: Pie Chart */}
                      <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Sales Distribution</h3>
                        <div className="h-64 bg-white rounded-lg border border-gray-200 p-4 flex items-center justify-center">
                          <div className="relative w-40 h-40 rounded-full overflow-hidden">
                            <div className="absolute inset-0 bg-blue-500" style={{ clipPath: 'polygon(50% 50%, 100% 0, 100% 100%)' }}></div>
                            <div className="absolute inset-0 bg-green-500" style={{ clipPath: 'polygon(50% 50%, 100% 100%, 0 100%)' }}></div>
                            <div className="absolute inset-0 bg-yellow-500" style={{ clipPath: 'polygon(50% 50%, 0 100%, 0 0)' }}></div>
                            <div className="absolute inset-0 bg-red-500" style={{ clipPath: 'polygon(50% 50%, 0 0, 100% 0)' }}></div>
                            <div className="absolute inset-0 flex items-center justify-center w-16 h-16 bg-white rounded-full m-auto"></div>
                          </div>
                        </div>
                        <div className="flex justify-center mt-4">
                          <div className="flex items-center mr-4">
                            <div className="w-3 h-3 bg-blue-500 mr-1"></div>
                            <span className="text-xs">Product A (30%)</span>
                          </div>
                          <div className="flex items-center mr-4">
                            <div className="w-3 h-3 bg-green-500 mr-1"></div>
                            <span className="text-xs">Product B (25%)</span>
                          </div>
                          <div className="flex items-center mr-4">
                            <div className="w-3 h-3 bg-yellow-500 mr-1"></div>
                            <span className="text-xs">Product C (25%)</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-red-500 mr-1"></div>
                            <span className="text-xs">Product D (20%)</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Chart 3: Line Chart */}
                      <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Growth Trend</h3>
                        <div className="h-64 bg-white rounded-lg border border-gray-200 p-4 flex items-end">
                          <svg className="w-full h-full" viewBox="0 0 100 50">
                            <polyline
                              points="0,40 20,35 40,25 60,30 80,15 100,10"
                              fill="none"
                              stroke="#3B82F6"
                              strokeWidth="2"
                            />
                            <circle cx="0" cy="40" r="1.5" fill="#3B82F6" />
                            <circle cx="20" cy="35" r="1.5" fill="#3B82F6" />
                            <circle cx="40" cy="25" r="1.5" fill="#3B82F6" />
                            <circle cx="60" cy="30" r="1.5" fill="#3B82F6" />
                            <circle cx="80" cy="15" r="1.5" fill="#3B82F6" />
                            <circle cx="100" cy="10" r="1.5" fill="#3B82F6" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Chart 4: Data Table */}
                      <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Key Metrics</h3>
                        <div className="overflow-hidden rounded-lg border border-gray-200">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Metric</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Revenue</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$24,500</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">+12.5%</td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Customers</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,245</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">+8.3%</td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Conversion</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3.2%</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">-0.5%</td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Avg. Order</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$175</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">+4.2%</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Analytics;