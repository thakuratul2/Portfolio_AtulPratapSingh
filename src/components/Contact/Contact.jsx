import React from 'react'

import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Contact.css'

const Contact = () => {
  
    

    return(
        <Container style={{paddingTop: '50px'}} >
            <Row >
            <Col md={6} className="c-left" >
            <h1 >Get in Touch</h1>
            <h1 className="yellow">Contact me</h1>
            </Col>
            <Col md={6} className="c-right">
                <form action='https://formspree.io/f/mdovdqnl' method='POST'>
                <input type="text" name="from_name" className="user"  placeholder="Name" required/>
                <input type="email" name="reply_to" className="user" placeholder="Email" required/>
                <textarea name="message" className="user" placeholder="Message" required />
                
                <Button type="submit" className="button">Send</Button>
                
                </form>
            </Col>
            </Row>
        </Container>
    )
}

export default Contact