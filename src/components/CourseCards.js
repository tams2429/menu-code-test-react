import React from 'react'
import '../styles/Main.scss'
// import { Card, CardDeck } from 'react-bootstrap'
import Bruschetta from '../images/Bruschetta.jpg'
import Cheesecake from '../images/Cheesecake.jpg'

const cardBackgroundStyle = {
  backgroundImage: `url(${Bruschetta})`
}

export const CourseCards = () => {
  return (
    <div className="card-container">
      <div className="card" style={cardBackgroundStyle}>
        <h2>Bruschetta</h2>
        <h3>£3.50</h3>
      </div>
      <div className="card" style={cardBackgroundStyle}>
        <h2>Bruschetta</h2>
        <h3>£3.50</h3>
      </div>
      <div className="card" style={cardBackgroundStyle}>
        <h2>Bruschetta</h2>
        <h3>£3.50</h3>
      </div>
    </div>
    // <div className="MainActivities-Weekly-Wrapper">
    //   <div className="MainActivities-Weekly-Container">
    //     <CardDeck>
    //       <Card bg="card-theme" className="dish">
    //         <Card.Img variant="top" src={Bruschetta} />
    //         <Card.Body>
    //           <Card.Title>Bruschetta</Card.Title>
    //           <Card.Text className="date">Jan 7, 2020</Card.Text>
    //           <Card.Text className="price">$15.00/person</Card.Text>
    //         </Card.Body>
    //       </Card>
    //       <Card bg="card-theme" className="dish">
    //         <Card.Img variant="top" src={Cheesecake} />
    //         <Card.Body>
    //           <Card.Title>Scrumptious Salads</Card.Title>
    //           <Card.Text className="date">Jan 9, 2020</Card.Text>
    //           <Card.Text className="price">$20.00/person</Card.Text>
    //         </Card.Body>
    //       </Card>
    //     </CardDeck>
    //   </div>
    // </div>
  )
}
