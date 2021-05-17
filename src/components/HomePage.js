import React from 'react'
import '../styles/Main.scss'
import { menu } from './MenuItems'


export const HomePage = () => {

  const renderCards = (course) => {
    const courseItems = menu[course]
    return (
      <div className="card-container">
        {courseItems.map((item) => {
          return (
            <div className="card"
              style={{
                backgroundImage: `url(../src/images/${item.name.replace(/\s+/g, '')}.jpg)`
              }}
              key={item.name}
            >
              <h2>{item.name}</h2>
              <h3>£{item.price}</h3>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="menu-container">
      <div className="diner1-menu">
        <section className="starter-section">
          <h1>Starters</h1>
          {renderCards('starters')}
        </section>
        <section className="main-section">
          <h1>Main courses</h1>
          {renderCards('mains')}
        </section>
        <section className="starter-section">
          <h1>Desserts</h1>
          {renderCards('desserts')}
        </section>
      </div>
      <div className="diner2-menu">
        <section className="starter-section">
          <h1>Starters</h1>
          {renderCards('starters')}
        </section>
        <section className="main-section">
          <h1>Main courses</h1>
          {renderCards('mains')}
        </section>
        <section className="starter-section">
          <h1>Desserts</h1>
          {renderCards('desserts')}
        </section>
      </div>
    </div>

  )
}
