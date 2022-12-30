import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import monthsSymbol from "./img/jan.png";

function BasicExample({ data, click }) {
   return (
    <>
        { data.map((month) =>
        <Col lg={4} md={6} xs={12} className="p-3">
        <Card>
            <Card.Img variant="top" src={monthsSymbol} style={{ width: "200px", height: "200px"}}/>
            <Card.Body>
            <Card.Title>{month.name}</Card.Title>
            <Card.Text>
                {month.desc}
            </Card.Text>
            <Button variant="primary" onClick={() => click(month.id)}>Get Events</Button>
            </Card.Body>
        </Card>
        </Col>
        ) }
    </>
   )
}

export default BasicExample;