import React from 'react'
import { render } from 'react-dom'
import { HomePage } from './components/HomePage'
import { ToastProvider } from 'react-toast-notifications'

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <ToastProvider>
          <HomePage />
        </ToastProvider>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
