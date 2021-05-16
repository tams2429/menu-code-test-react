import React from 'react'
import '../styles/MainActivities.scss'
import { Card, CardDeck } from 'react-bootstrap'
import Bruschetta from '../images/Bruschetta.jpg'
import Cheesecake from '../images/Cheesecake.jpg'

export const CourseCards = () => {
  return (
    <div className="MainActivities-Weekly-Wrapper">
      <h2>This Week's Events</h2>
      <div className="MainActivities-Weekly-Container">
        <CardDeck>
          <Card bg="card-theme">
            <Card.Img variant="top" src={Bruschetta} />
            <Card.Body>
              <Card.Title>Bruschetta</Card.Title>
              <Card.Text className="date">Jan 7, 2020</Card.Text>
              <Card.Text className="price">$15.00/person</Card.Text>
            </Card.Body>
          </Card>
          <Card bg="card-theme">
            <Card.Img variant="top" src={Cheesecake} />
            <Card.Body>
              <Card.Title>Scrumptious Salads</Card.Title>
              <Card.Text className="date">Jan 9, 2020</Card.Text>
              <Card.Text className="price">$20.00/person</Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    </div>
  )
}
