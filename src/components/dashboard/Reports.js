import React from 'react';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';

const Reports = ({ onLogout }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar userRole="user" />
      
      <div className="ml-64">
        <Header userRole="user" onLogout={onLogout} />
        
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <h1 className="text-2xl font-semibold text-gray-900">Reports</h1>
            
            <div className="mt-6">
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                  <div>
                    <h2 className="text-lg leading-6 font-medium text-gray-900">Generated Reports</h2>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">View and download your Excel reports</p>
                  </div>
                  <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Generate New Report
                  </button>
                </div>
                
                {/* Reports List */}
                <div className="border-t border-gray-200">
                  <div className="bg-white">
                    <ul className="divide-y divide-gray-200">
                      {/* Report Item 1 */}
                      <li>
                        <div className="px-4 py-4 sm:px-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-md flex items-center justify-center">
                                <svg className="h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                              </div>
                              <div className="ml-4">
                                <h3 className="text-lg font-medium text-gray-900">Q2 Sales Performance Report</h3>
                                <p className="text-sm text-gray-500">Generated on May 15, 2023</p>
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                View
                              </button>
                              <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                Download
                              </button>
                            </div>
                          </div>
                          <div className="mt-2">
                            <div className="text-sm text-gray-700">
                              <p>Comprehensive analysis of Q2 sales data with regional breakdowns and product performance metrics.</p>
                            </div>
                            <div className="mt-2 flex">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-2">
                                Sales
                              </span>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mr-2">
                                Quarterly
                              </span>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Excel
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      
                      {/* Report Item 2 */}
                      <li>
                        <div className="px-4 py-4 sm:px-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-md flex items-center justify-center">
                                <svg className="h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                              </div>
                              <div className="ml-4">
                                <h3 className="text-lg font-medium text-gray-900">Marketing Campaign Analysis</h3>
                                <p className="text-sm text-gray-500">Generated on April 28, 2023</p>
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                View
                              </button>
                              <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                Download
                              </button>
                            </div>
                          </div>
                          <div className="mt-2">
                            <div className="text-sm text-gray-700">
                              <p>Detailed analysis of marketing campaign performance, ROI calculations, and audience engagement metrics.</p>
                            </div>
                            <div className="mt-2 flex">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mr-2">
                                Marketing
                              </span>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 mr-2">
                                Campaign
                              </span>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Excel
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      
                      {/* Report Item 3 */}
                      <li>
                        <div className="px-4 py-4 sm:px-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-md flex items-center justify-center">
                                <svg className="h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                              </div>
                              <div className="ml-4">
                                <h3 className="text-lg font-medium text-gray-900">Customer Feedback Analysis</h3>
                                <p className="text-sm text-gray-500">Generated on April 15, 2023</p>
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                View
                              </button>
                              <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                Download
                              </button>
                            </div>
                          </div>
                          <div className="mt-2">
                            <div className="text-sm text-gray-700">
                              <p>Analysis of customer feedback data, sentiment analysis, and key improvement areas identified.</p>
                            </div>
                            <div className="mt-2 flex">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800 mr-2">
                                Customer
                              </span>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 mr-2">
                                Feedback
                              </span>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Excel
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
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

export default Reports;