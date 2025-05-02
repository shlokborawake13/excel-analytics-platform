import React, { useState } from 'react';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';

const Settings = ({ onLogout }) => {
  const [settings, setSettings] = useState({
    general: {
      siteName: 'Excel Analytics Platform',
      allowRegistration: true,
      defaultUserRole: 'user',
      sessionTimeout: 30
    },
    notifications: {
      emailNotifications: true,
      reportCompletionNotification: true,
      systemUpdates: false,
      weeklyDigest: true
    },
    security: {
      twoFactorAuth: false,
      passwordExpiry: 90,
      minPasswordLength: 8,
      requireSpecialChars: true
    },
    dataProcessing: {
      maxFileSize: 10,
      allowedFileTypes: '.xlsx,.xls,.csv',
      autoProcessFiles: true,
      retentionPeriod: 30
    }
  });
  
  const [activeTab, setActiveTab] = useState('general');
  const [saveSuccess, setSaveSuccess] = useState(false);
  
  const handleChange = (section, setting, value) => {
    setSettings({
      ...settings,
      [section]: {
        ...settings[section],
        [setting]: value
      }
    });
    setSaveSuccess(false);
  };
  
  const handleSave = () => {
    // In a real app, you would save settings to a backend
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar userRole="admin" />
      
      <div className="ml-64">
        <Header userRole="admin" onLogout={onLogout} />
        
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
            
            <div className="mt-6">
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="border-b border-gray-200">
                  <nav className="-mb-px flex">
                    {['general', 'notifications', 'security', 'dataProcessing'].map((tab) => (
                      <button
                        key={tab}
                        className={`${
                          activeTab === tab
                            ? 'border-indigo-500 text-indigo-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        } whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm capitalize`}
                        onClick={() => setActiveTab(tab)}
                      >
                        {tab === 'dataProcessing' ? 'Data Processing' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                    ))}
                  </nav>
                </div>
                
                <div className="px-4 py-5 sm:p-6">
                  {/* General Settings */}
                  {activeTab === 'general' && (
                    <div>
                      <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">General Settings</h3>
                      
                      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                        <div>
                          <label htmlFor="siteName" className="block text-sm font-medium text-gray-700">Site Name</label>
                          <input
                            type="text"
                            name="siteName"
                            id="siteName"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            value={settings.general.siteName}
                            onChange={(e) => handleChange('general', 'siteName', e.target.value)}
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="defaultUserRole" className="block text-sm font-medium text-gray-700">Default User Role</label>
                          <select
                            id="defaultUserRole"
                            name="defaultUserRole"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={settings.general.defaultUserRole}
                            onChange={(e) => handleChange('general', 'defaultUserRole', e.target.value)}
                          >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="sessionTimeout" className="block text-sm font-medium text-gray-700">Session Timeout (minutes)</label>
                          <input
                            type="number"
                            name="sessionTimeout"
                            id="sessionTimeout"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            value={settings.general.sessionTimeout}
                            onChange={(e) => handleChange('general', 'sessionTimeout', parseInt(e.target.value))}
                          />
                        </div>
                        
                        <div className="flex items-center">
                          <input
                            id="allowRegistration"
                            name="allowRegistration"
                            type="checkbox"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            checked={settings.general.allowRegistration}
                            onChange={(e) => handleChange('general', 'allowRegistration', e.target.checked)}
                          />
                          <label htmlFor="allowRegistration" className="ml-2 block text-sm text-gray-900">
                            Allow Public Registration
                          </label>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Notification Settings */}
                  {activeTab === 'notifications' && (
                    <div>
                      <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Notification Settings</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="emailNotifications"
                              name="emailNotifications"
                              type="checkbox"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                              checked={settings.notifications.emailNotifications}
                              onChange={(e) => handleChange('notifications', 'emailNotifications', e.target.checked)}
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="emailNotifications" className="font-medium text-gray-700">Email Notifications</label>
                            <p className="text-gray-500">Receive email notifications for important events.</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="reportCompletionNotification"
                              name="reportCompletionNotification"
                              type="checkbox"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                              checked={settings.notifications.reportCompletionNotification}
                              onChange={(e) => handleChange('notifications', 'reportCompletionNotification', e.target.checked)}
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="reportCompletionNotification" className="font-medium text-gray-700">Report Completion</label>
                            <p className="text-gray-500">Get notified when a report is generated.</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="systemUpdates"
                              name="systemUpdates"
                              type="checkbox"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                              checked={settings.notifications.systemUpdates}
                              onChange={(e) => handleChange('notifications', 'systemUpdates', e.target.checked)}
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="systemUpdates" className="font-medium text-gray-700">System Updates</label>
                            <p className="text-gray-500">Receive notifications about system updates and maintenance.</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="weeklyDigest"
                              name="weeklyDigest"
                              type="checkbox"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                              checked={settings.notifications.weeklyDigest}
                              onChange={(e) => handleChange('notifications', 'weeklyDigest', e.target.checked)}
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="weeklyDigest" className="font-medium text-gray-700">Weekly Digest</label>
                            <p className="text-gray-500">Receive a weekly summary of activities and reports.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Security Settings */}
                  {activeTab === 'security' && (
                    <div>
                      <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Security Settings</h3>
                      
                      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="twoFactorAuth"
                              name="twoFactorAuth"
                              type="checkbox"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                              checked={settings.security.twoFactorAuth}
                              onChange={(e) => handleChange('security', 'twoFactorAuth', e.target.checked)}
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="twoFactorAuth" className="font-medium text-gray-700">Two-Factor Authentication</label>
                            <p className="text-gray-500">Require two-factor authentication for all users.</p>
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="passwordExpiry" className="block text-sm font-medium text-gray-700">Password Expiry (days)</label>
                          <input
                            type="number"
                            name="passwordExpiry"
                            id="passwordExpiry"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            value={settings.security.passwordExpiry}
                            onChange={(e) => handleChange('security', 'passwordExpiry', parseInt(e.target.value))}
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="minPasswordLength" className="block text-sm font-medium text-gray-700">Minimum Password Length</label>
                          <input
                            type="number"
                            name="minPasswordLength"
                            id="minPasswordLength"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            value={settings.security.minPasswordLength}
                            onChange={(e) => handleChange('security', 'minPasswordLength', parseInt(e.target.value))}
                          />
                        </div>
                        
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="requireSpecialChars"
                              name="requireSpecialChars"
                              type="checkbox"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                              checked={settings.security.requireSpecialChars}
                              onChange={(e) => handleChange('security', 'requireSpecialChars', e.target.checked)}
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="requireSpecialChars" className="font-medium text-gray-700">Require Special Characters</label>
                            <p className="text-gray-500">Passwords must contain special characters.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Data Processing Settings */}
                  {activeTab === 'dataProcessing' && (
                    <div>
                      <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Data Processing Settings</h3>
                      
                      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                        <div>
                          <label htmlFor="maxFileSize" className="block text-sm font-medium text-gray-700">Maximum File Size (MB)</label>
                          <input
                            type="number"
                            name="maxFileSize"
                            id="maxFileSize"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            value={settings.dataProcessing.maxFileSize}
                            onChange={(e) => handleChange('dataProcessing', 'maxFileSize', parseInt(e.target.value))}
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="allowedFileTypes" className="block text-sm font-medium text-gray-700">Allowed File Types</label>
                          <input
                            type="text"
                            name="allowedFileTypes"
                            id="allowedFileTypes"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            value={settings.dataProcessing.allowedFileTypes}
                            onChange={(e) => handleChange('dataProcessing', 'allowedFileTypes', e.target.value)}
                          />
                          <p className="mt-1 text-sm text-gray-500">Comma-separated list of file extensions</p>
                        </div>
                        
                        <div>
                          <label htmlFor="retentionPeriod" className="block text-sm font-medium text-gray-700">Data Retention Period (days)</label>
                          <input
                            type="number"
                            name="retentionPeriod"
                            id="retentionPeriod"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            value={settings.dataProcessing.retentionPeriod}
                            onChange={(e) => handleChange('dataProcessing', 'retentionPeriod', parseInt(e.target.value))}
                          />
                        </div>
                        
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="autoProcessFiles"
                              name="autoProcessFiles"
                              type="checkbox"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                              checked={settings.dataProcessing.autoProcessFiles}
                              onChange={(e) => handleChange('dataProcessing', 'autoProcessFiles', e.target.checked)}
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="autoProcessFiles" className="font-medium text-gray-700">Auto-Process Files</label>
                            <p className="text-gray-500">Automatically process files upon upload.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Save Button */}
                  <div className="mt-8 flex justify-end">
                    {saveSuccess && (
                      <div className="mr-4 flex items-center text-sm text-green-600">
                        <svg className="h-5 w-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Settings saved successfully!
                      </div>
                    )}
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={handleSave}
                    >
                      Save Settings
                    </button>
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

export default Settings;