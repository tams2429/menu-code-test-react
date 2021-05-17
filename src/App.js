import React from 'react'
import { render } from 'react-dom'
import { CourseCards } from './components/CourseCards'
import { HomePage } from './components/HomePage'

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <h1>Menu Test</h1>
        <HomePage />
        <CourseCards />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
