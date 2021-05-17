import React from 'react'
import '../styles/Main.scss'
import { menu } from './MenuItems'


export const HomePage = () => {
  const [diner1starter, setdiner1starter] = React.useState([{
    'id': 0,
    'name': '',
    'price': 0
  }])
  const [diner1main, setdiner1main] = React.useState([{
    'id': 0,
    'name': '',
    'price': 0
  }])
  const [diner1dessert, setdiner1dessert] = React.useState([{
    'id': 0,
    'name': '',
    'price': 0
  }])
  const [diner2starter, setdiner2starter] = React.useState([{
    'id': 0,
    'name': '',
    'price': 0
  }])
  const [diner2main, setdiner2main] = React.useState([{
    'id': 0,
    'name': '',
    'price': 0
  }])
  const [diner2dessert, setdiner2dessert] = React.useState([{
    'id': 0,
    'name': '',
    'price': 0
  }])
  const [total, settotal] = React.useState(0)

  //Everytime the user clicks a menu item
  //We want to add a class 'active' to show green border
  //Check whether selection is invalid based on rules
  //Update state by adding selected menu item
  //Calculate the new total value and update state
  const handleClick = (e) => {
    // console.log(e.target.id)
    // console.log(e.target.classList.contains('starters'))
    let selectedItem = []
    if (e.target.classList.contains('starters')){
      // Add 'active' class to menu items if not selected otherwise remove 'active' class
      if (!e.target.classList.contains('active')) {
        e.target.classList.add('active')
      } else {
        e.target.classList.remove('active')
      }

      //Access array of menu items depending on course selected
      const courseItems = menu['starters']
      //Filter through array and return only selected menu item
      selectedItem = courseItems.filter((item) => {
        if (e.target.id === item.name) {
          return item
        }
      })
    } else if (e.target.classList.contains('mains')) {
      if (!e.target.classList.contains('active')) {
        e.target.classList.add('active')
      } else {
        e.target.classList.remove('active')
      }

      const courseItems = menu['mains']
      selectedItem = courseItems.filter((item) => {
        if (e.target.id === item.name) {
          return item
        }
      })
    } else if (e.target.classList.contains('desserts')) {
      if (!e.target.classList.contains('active')) {
        e.target.classList.add('active')
      } else {
        e.target.classList.remove('active')
      }

      const courseItems = menu['desserts']
      selectedItem = courseItems.filter((item) => {
        if (e.target.id === item.name) {
          return item
        }
      })
    }

    //Set selected item to state
    console.log('Final Item array is:', selectedItem)
  }

  const renderCards = (course) => {
    const courseItems = menu[course]
    return (
      <div className="card-container">
        {courseItems.map((item) => {
          return (
            <div className={`card ${course}`}
              style={{
                backgroundImage: `url(../src/images/${item.name.replace(/\s+/g, '')}.jpg)`
              }}
              key={item.name}
              id={`${item.name}`}
              onClick={handleClick}
            >
              <h2>{item.name}</h2>
              <h3>£{item.price}</h3>
            </div>
          )
        })}
      </div>
    )
  }

  const renderDinerMenu = (DinerNumber) => {
    return (
      <div className={`diner${DinerNumber}-menu`}>
        <h1>Diner {DinerNumber}, please select your food:</h1>
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
    )
  }

  return (
    <div className="menu-container">
      {renderDinerMenu(1)}
      {renderDinerMenu(2)}
    </div>
  )
}
