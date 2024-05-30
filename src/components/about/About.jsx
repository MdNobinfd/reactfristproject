import React from 'react';
import './about.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import aboutleft from '../../assets/aboutleft.jpg';

const About = () => {
  return (
    <>
    <section id='about'>
        <Container>
        <div className="about-heading every_heading text-center">
        <Row className='justify-content-center' data-aos="fade-left">
            <Col lg={8}>
            <h2>ABOUT <span>US</span> </h2>
            <div className="line"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam</p>
            </Col>
            </Row>
        </div>
        <div className="about-main">
            <Row>
                <Col lg={6}>
                    <h3>We Are Creative And Awesome</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.Lorem Ipsum is simply dummy text of the printing and typesetting industry. book.</p>
                </Col>
                <Col lg={6}>
                    <img src={aboutleft} alt="aboutleft"/>
                </Col>
            </Row>
        </div>
        </Container>
        <div className="about-fotter">
            <Container>
                <Row className=' dskfj align-items-center'>
                    <Col lg={6}>
                        <h3>Premium quality free onepage template</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                    </Col>
                    <Col lg={{ span: 2, offset: 4 }}>
                        <Button>Download</Button>
                    
                    </Col>
                </Row>
            </Container>
        </div>
    </section>
    </>
  )
}

export default About