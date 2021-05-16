import React from 'react'
import { render } from 'react-dom'
import { CourseCards } from './components/CourseCards'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Menu Test</h1>
        <CourseCards />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
