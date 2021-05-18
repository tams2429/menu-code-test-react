import React from 'react'
import '../styles/Main.scss'
import { menu } from './MenuItems'
import { TotalValue } from './TotalValue'


export const HomePage = () => {
  const [diner1starter, setdiner1starter] = React.useState([])
  const [diner1main, setdiner1main] = React.useState([])
  const [diner1dessert, setdiner1dessert] = React.useState([])
  const [diner2starter, setdiner2starter] = React.useState([])
  const [diner2main, setdiner2main] = React.useState([])
  const [diner2dessert, setdiner2dessert] = React.useState([])
  const [total, settotal] = React.useState(0)

  //Everytime the user clicks a menu item
  //We want to add/remove a class 'active' to show/disable green border
  //Update state by adding/remove selected menu item
  //Calculate the new total value and update state
  const handleClick = (e) => {
    let selectedItem = []
    let itemToRemoveIndex = 0
    if (e.target.classList.contains('starters')){

      //Access array of menu items depending on course selected
      const courseItems = menu['starters']
      //Filter through array and return only selected menu item
      selectedItem = courseItems.filter((item) => {
        if (e.target.id === item.name) {
          return item
        }
      })

      // Add 'active' class to menu items if not selected otherwise remove 'active' class
      if (!e.target.classList.contains('active')) {
        e.target.classList.add('active')

        //Check which diner ordered
        if (e.target.classList.contains('1')) {
          //Set selectedItem to state and update total
          diner1starter.push(selectedItem[0])
          setdiner1starter(diner1starter)
          settotal(total + selectedItem[0].price)
        } else if (e.target.classList.contains('2')) {
          diner2starter.push(selectedItem[0])
          setdiner2starter(diner2starter)
          settotal(total + selectedItem[0].price)
        }

      } else {
        e.target.classList.remove('active')

        //Check which diner ordered
        if (e.target.classList.contains('1')) {
          //Find index of selected item in state array
          itemToRemoveIndex = diner1starter.findIndex((item) => {
            return item.name === e.target.id
          })

          //Remove selected item from state array and update state and total
          diner1starter.splice(itemToRemoveIndex, 1)
          setdiner1starter(diner1starter)
          settotal(total - selectedItem[0].price)
        } else if (e.target.classList.contains('2')) {
          itemToRemoveIndex = diner1starter.findIndex((item) => {
            return item.name === e.target.id
          })
          diner2starter.splice(itemToRemoveIndex, 1)
          setdiner2starter(diner2starter)
          settotal(total - selectedItem[0].price)
        }
      }

    } else if (e.target.classList.contains('mains')) {
      const courseItems = menu['mains']
      selectedItem = courseItems.filter((item) => {
        if (e.target.id === item.name) {
          return item
        }
      })
      if (!e.target.classList.contains('active')) {
        e.target.classList.add('active')
        if (e.target.classList.contains('1')) {
          diner1main.push(selectedItem[0])
          setdiner1main(diner1main)
          settotal(total + selectedItem[0].price)
        } else if (e.target.classList.contains('2')) {
          diner2main.push(selectedItem[0])
          setdiner2main(diner2main)
          settotal(total + selectedItem[0].price)
        }
      } else {
        e.target.classList.remove('active')
        if (e.target.classList.contains('1')) {
          itemToRemoveIndex = diner1main.findIndex((item) => {
            return item.name === e.target.id
          })
          diner1main.splice(itemToRemoveIndex, 1)
          setdiner1main(diner1main)
          settotal(total - selectedItem[0].price)
        } else if (e.target.classList.contains('2')) {
          itemToRemoveIndex = diner1main.findIndex((item) => {
            return item.name === e.target.id
          })
          diner2main.splice(itemToRemoveIndex, 1)
          setdiner2main(diner2main)
          settotal(total - selectedItem[0].price)
        }
      }
    } else if (e.target.classList.contains('desserts')) {
      const courseItems = menu['desserts']
      selectedItem = courseItems.filter((item) => {
        if (e.target.id === item.name) {
          return item
        }
      })
      if (!e.target.classList.contains('active')) {
        e.target.classList.add('active')
        if (e.target.classList.contains('1')) {
          diner1dessert.push(selectedItem[0])
          setdiner1dessert(diner1dessert)
          settotal(total + selectedItem[0].price)
        } else if (e.target.classList.contains('2')) {
          diner2dessert.push(selectedItem[0])
          setdiner2dessert(diner2dessert)
          settotal(total + selectedItem[0].price)
        }
      } else {
        e.target.classList.remove('active')
        if (e.target.classList.contains('1')) {
          itemToRemoveIndex = diner1dessert.findIndex((item) => {
            return item.name === e.target.id
          })
          diner1dessert.splice(itemToRemoveIndex, 1)
          setdiner1dessert(diner1dessert)
          settotal(total - selectedItem[0].price)
        } else if (e.target.classList.contains('2')) {
          itemToRemoveIndex = diner1dessert.findIndex((item) => {
            return item.name === e.target.id
          })
          diner2dessert.splice(itemToRemoveIndex, 1)
          setdiner2dessert(diner2dessert)
          settotal(total - selectedItem[0].price)
        }
      }
    }

  }

  //Check whether selection is invalid based on rules
  //Checks whether a min of 2 course selected for each diner (i.e. combine all diner 1 states into 1 array and check length of array >= 5 => min 2 courses)
  //Checks whether main course has been selected (i.e. diner1main.length && diner2main.length === 2)
  const handleSubmit = () => {

  }

  const renderCards = (course, dinerNumber) => {
    const courseItems = menu[course]
    return (
      <div className="card-container">
        {courseItems.map((item) => {
          return (
            <div className={`card ${course} ${dinerNumber}`}
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
          {renderCards('starters', DinerNumber)}
        </section>
        <section className="main-section">
          <h1>Main courses</h1>
          {renderCards('mains', DinerNumber)}
        </section>
        <section className="starter-section">
          <h1>Desserts</h1>
          {renderCards('desserts', DinerNumber)}
        </section>
      </div>
    )
  }

  console.log('Total value state is:',total)
  console.log('Diner 1 Starter State is:',diner1starter)
  console.log('Diner 1 Main State is:',diner1main)
  console.log('Diner 1 Dessert State is:',diner1dessert)
  console.log('Diner 2 Starter State is:',diner2starter)
  console.log('Diner 2 Main State is:',diner2main)
  console.log('Diner 2 Dessert State is:',diner2dessert)

  return (
    <div className="homepage-container">
      <TotalValue total={total}/>
      <div className="menu-container">
        {renderDinerMenu(1)}
        {renderDinerMenu(2)}
      </div>
      <button onSubmit={handleSubmit}>Submit</button>
    </div>

  )
}
