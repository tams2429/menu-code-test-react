import React from 'react'
import { render } from 'react-dom'
import { CourseCards } from './components/CourseCards'
import { HomePage } from './components/HomePage'

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <HomePage />
        <CourseCards />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
