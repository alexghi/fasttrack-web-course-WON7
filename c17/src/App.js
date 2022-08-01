import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import MyComponent from './MyComponent';
import SettingsContext from './contexts/SettingsContext';

const userSettings = {
  timeFormat: '12h',
}

function App() {
	return (
    <SettingsContext.Provider value={userSettings}>
      <div className="App">
        <div>
            <MyComponent />
        </div>
      </div>
    </SettingsContext.Provider>
	)
}

export default App
