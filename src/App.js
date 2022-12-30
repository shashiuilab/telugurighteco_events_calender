import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import { Chrono } from "react-chrono";
import BasicExample from "./BasicExample";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { monthsEvents } from "./data/monthsEvents";
import './App.css';

function App() {
  const [showEvents, setShowEvents] = useState(false);
  const [eventItems, setEventItems] = useState(null);
  const getEvents = (id) => {
    setShowEvents(true);
    const filteredEvents = monthsEvents.filter(month => month.id === id);
    setEventItems(filteredEvents[0].items);
}
  return (
    <>
    <main className='main-container'>
    <div className='bg-orange'>
      <Navbar sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Telugu Right Ecosystem
          </Navbar.Brand>
        </Container>
      </Navbar>
      </div>
      <div className="container">
      <Row>
        { !showEvents && <BasicExample data={monthsEvents} click={getEvents}/> }
        { showEvents && <div>
            <Chrono items={eventItems} mode="VERTICAL_ALTERNATING" useReadMore style={{ height: "100px" }}/>
        </div> }
      </Row>
      { showEvents &&  <Row>
        <Button variant="primary" onClick={() => setShowEvents(false)}>Show Months</Button>
      </Row> }
    </div>
    </main>
    </>
  );
}

export default App;
