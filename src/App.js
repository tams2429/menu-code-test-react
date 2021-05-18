import React from 'react'
import { render } from 'react-dom'
import { HomePage } from './components/HomePage'

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <HomePage />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
