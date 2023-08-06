
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import scheduler from "../style/imgs/scheduler.PNG";
import weather from "../style/imgs/weather.PNG";
import nosql from "../style/imgs/nosql.PNG";
import notes from "../style/imgs/notes.png";
import gamer from "../style/imgs/gamer.PNG";
import profiles from "../style/imgs/profiles.png"
import "../style/Portfolio.css"


export default function Portfolio() {

  return (
    
    <Container className="layout">
     
    <Card style={{ width: '50rem'  }}>
    <Row className="justify-content-md-center">
    <Col xs={6}>
    <Card.Img variant="top" src={scheduler}  />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    <Card.Body className="example">
      <Card.Title>Work Day Scheduler</Card.Title> 
      <Card.Text>
        An online scheduling application to allow the user to plan their work days.
      </Card.Text>
      <Button variant="primary" id="link" href="https://github.com/ThalVal/work-day-cal">Visit GitHub Repo</Button>
    </Card.Body>
    </Col>
    <Col xs={6}>
    <Card.Img variant="top" src={weather}  />
    <Card.Body className="example">
      <Card.Title>Weather Application</Card.Title> 
      <Card.Text>
        A web application to look up and save five day weather forecasts for various cities. 
      </Card.Text>
      <Button variant="primary" id="link" href="https://github.com/ThalVal/weather-api">Visit GitHub Repo</Button>
    </Card.Body>
    </Col>
    </Row>
    <Row className="justify-content-md-center">
    <Col xs={6}>
    <Card.Img variant="top" src={nosql}   />
    <Card.Body className="example">
      <Card.Title>NoSQL CRUD Application</Card.Title> 
      <Card.Text>
        A NoSql CLI generated app with full CRUD function and built with MongooseDB
      </Card.Text>
      <Button variant="primary" id="link" href="https://github.com/ThalVal/social-network-api">Visit GitHub Repo</Button>
    </Card.Body>
    </Col>
    <Col xs={6}>
    <Card.Img variant="top" src={notes}   />
    <Card.Body className="example">
      <Card.Title>Web App Notes</Card.Title>
      <Card.Text>
        An easy to you web application to take notes
      </Card.Text>
      <Button variant="primary" id="link" href="https://github.com/ThalVal/taking-notes">Visit GitHub Repo</Button>
    </Card.Body>
    </Col>
    </Row>
    <Row className="justify-content-md-center">
    <Col xs={6}>
    <Card.Img variant="top" src={gamer}  />
    <Card.Body className="example" >
      <Card.Title>They're Coming to Get You</Card.Title>
      <Card.Text>
        A Horror themed, text based, create-your-own-adventure game with a variety of endings based on the users decisions. Multiple endings can be reached through the story tree.
      </Card.Text>
      <Button variant="primary"  id="link" href="https://github.com/ThalVal/back-end-Horror">Visit GitHub Repo</Button>
    </Card.Body>
    </Col>
    
    <Col xs={6}>
    <Card.Img variant="top" src={profiles}  />
    <Card.Body className="example" >
      <Card.Title>Team Profiles</Card.Title>
      <Card.Text>
        A Command Line application to generate a webpage that displays a manager's team information
      </Card.Text>
      <Button variant="primary"  id="link" href="https://github.com/ThalVal/team-generate-her">Visit GitHub Repo</Button>
    </Card.Body>
    </Col>
    </Row>
  </Card>
  </Container>
);
}