import React from 'react'
import './banner.css'
import Carousel from 'react-bootstrap/Carousel';
import { Col, Container, Row } from 'react-bootstrap';
const Banner = () => {
  return (
    <>
    <div className="banner">
    <Carousel>
      <Carousel.Item className='ami'>
      <Container>
        <Row>
          <Col lg={6}>
          <h1>WE ARE COSMIX</h1>
          <h2>Creative Themes</h2>
          <p>Cosmix – A One Page Parallax, HTML5 and Responsive Template suitable for any creative business agency. Multiple pages layouts also in this theme with lots of CSS and JQuery animations</p>
          </Col>
        </Row>
      </Container>
      </Carousel.Item>
      <Carousel.Item className='ami'>
      <Container>
        <Row>
          <Col lg={6} md={12}>
          <h1>WE ARE COSMIX</h1>
          <h2>Creative Themes</h2>
          <p>Cosmix – A One Page Parallax, HTML5 and Responsive Template suitable for any creative business agency. Multiple pages layouts also in this theme with lots of CSS and JQuery animations</p>
          </Col>
        </Row>
      </Container>
      </Carousel.Item>
      <Carousel.Item className='ami'>
      <Container>
        <Row>
          <Col lg={6}>
          <h1>WE ARE COSMIX</h1>
          <h2>Creative Themes</h2>
          <p>Cosmix – A One Page Parallax, HTML5 and Responsive Template suitable for any creative business agency. Multiple pages layouts also in this theme with lots of CSS and JQuery animations</p>
          </Col>
        </Row>
      </Container>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  )
}

export default Banner