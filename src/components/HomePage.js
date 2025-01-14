import React from 'react'
import '../styles/Main.scss'
import { menu } from './MenuItems'
import { TotalValue } from './TotalValue'
import { useToasts } from 'react-toast-notifications'


export const HomePage = () => {
  const { addToast } = useToasts()
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

  //Checks for all the conditions/rules that results in successful order
  const handleSubmit = () => {
    let errorCount = 0
    //Check if each diner has ordered main
    if (diner1main.length === 0) {
      errorCount = 1
      addToast('Diner 1 needs a main', { appearance: 'warning', autoDismiss: true, autoDismissTimeout: 30000 })
    }
    if (diner2main.length === 0) {
      errorCount = 1
      addToast('Diner 2 needs a main', { appearance: 'warning', autoDismiss: true, autoDismissTimeout: 30000 })
    }

    //Check each diner has a min. of 2 different courses
    if (diner1starter.length === 0 && (diner1main.length === 0 || diner1dessert.length === 0)) {
      errorCount = 1
      addToast('Diner 1 needs to select a min. of 2 different courses', { appearance: 'warning', autoDismiss: true, autoDismissTimeout: 30000 })
    } else if (diner1main.length === 0 && (diner1starter.length === 0 || diner1dessert.length === 0)) {
      errorCount = 1
      addToast('Diner 1 needs to select a min. of 2 different courses', { appearance: 'warning', autoDismiss: true, autoDismissTimeout: 30000 })
    } else if (diner1dessert.length === 0 && (diner1starter.length === 0 || diner1main.length === 0)) {
      errorCount = 1
      addToast('Diner 1 needs to select a min. of 2 different courses', { appearance: 'warning', autoDismiss: true, autoDismissTimeout: 30000 })
    }

    if (diner2starter.length === 0 && (diner2main.length === 0 || diner2dessert.length === 0)) {
      errorCount = 1
      addToast('Diner 2 needs to select a min. of 2 different courses', { appearance: 'warning', autoDismiss: true, autoDismissTimeout: 30000 })
    } else if (diner2main.length === 0 && (diner2starter.length === 0 || diner2dessert.length === 0)) {
      errorCount = 1
      addToast('Diner 2 needs to select a min. of 2 different courses', { appearance: 'warning', autoDismiss: true, autoDismissTimeout: 30000 })
    } else if (diner2dessert.length === 0 && (diner2starter.length === 0 || diner2main.length === 0)) {
      errorCount = 1
      addToast('Diner 2 needs to select a min. of 2 different courses', { appearance: 'warning', autoDismiss: true, autoDismissTimeout: 30000 })
    }

    //Check each diner cannot have more than one of the same course
    if (diner1starter.length > 1 || diner1main.length > 1 || diner1dessert.length > 1) {
      errorCount = 1
      addToast('Diner 1 cannot have more than one of the same course', { appearance: 'warning', autoDismiss: true, autoDismissTimeout: 30000 })
    }
    if (diner2starter.length > 1 || diner2main.length > 1 || diner2dessert.length > 1) {
      errorCount = 1
      addToast('Diner 2 cannot have more than one of the same course', { appearance: 'warning', autoDismiss: true, autoDismissTimeout: 30000 })
    }

    //Check there is only 1 piece of cheesecake left
    for (let i = 0; i < diner1dessert.length; i++) {
      if (Object.values(diner1dessert[i]).includes('Cheesecake')) {
        for (let j = 0; j < diner2dessert.length; j++) {
          if (Object.values(diner2dessert[j]).includes('Cheesecake')) {
            errorCount = 1
            addToast('Cannot choose 2 cheesecakes, please remove 1 cheesecake', { appearance: 'warning', autoDismiss: true, autoDismissTimeout: 30000 })
          }
        }
      }
    }

    //Check for each diner if 'Prawn Cocktail' chosen, cannot choose 'Salmon Fillet'
    for (let i = 0; i < diner1starter.length; i++) {
      if (Object.values(diner1starter[i]).includes('Prawn cocktail')) {
        for (let j = 0; j < diner1main.length; j++) {
          if (Object.values(diner1main[j]).includes('Salmon fillet')) {
            errorCount = 1
            addToast('Diner 1 cannot choose Prawn Cocktail & Salmon Fillet', { appearance: 'warning', autoDismiss: true, autoDismissTimeout: 30000 })
          }
        }
      }
    }
    for (let i = 0; i < diner2starter.length; i++) {
      if (Object.values(diner2starter[i]).includes('Prawn cocktail')) {
        for (let j = 0; j < diner2main.length; j++) {
          if (Object.values(diner2main[j]).includes('Salmon fillet')) {
            errorCount = 1
            addToast('Diner 2 cannot choose Prawn Cocktail & Salmon Fillet', { appearance: 'warning', autoDismiss: true, autoDismissTimeout: 30000 })
          }
        }
      }
    }

    if (errorCount === 0) {
      addToast('Successful order', { appearance: 'success', autoDismiss: true, autoDismissTimeout: 30000 })
    }
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
        <section className="dessert-section">
          <h1>Desserts</h1>
          {renderCards('desserts', DinerNumber)}
        </section>
      </div>
    )
  }

  return (
    <div className="homepage-container">
      <TotalValue total={total}/>
      <div className="menu-container">
        {renderDinerMenu(1)}
        {renderDinerMenu(2)}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
