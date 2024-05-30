import React from 'react'
import './pricing.css'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Pricing = () => {
  return (
    <>
    <section id='pricing'>
        <Container>
            <div className="pricing_headding every_heading">
                <Row className='justify-content-center text-center'>
                    <Col lg={8}>
                        <h2>PRICE PACKAG <span>ES</span></h2>
                        <div className="line"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam</p>
                    </Col>
                </Row>
            </div>
            <div className="pricing_item">
                <Row>
                    <Col lg={3}>
                        <div className="pricing text-center">
                            <div className="pricing_top">
                                <h3>STARTER</h3>
                            </div>
                            <div className="pricing_cercel">
                            <h4> $39 </h4>
                            <p> per month </p>
                        </div>
                            <ul>
                                <li> <strong>1</strong>  DOMAIN</li>
                                <li> <strong>100GB</strong>  DISK SPACE</li>
                                <li> <strong>UNLIMITED </strong> BANDWIDTH</li>
                                <li> <strong></strong> SHARED SSL CERTIFICATE</li>
                                <li> <strong>10</strong>  EMAIL ADDRESS</li>
                                <li><strong>24/7</strong> SUPPORT</li>
                            </ul>
                            <Button className='btn pricing_button'>Order Now</Button>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="pricing text-center">
                            <div className="pricing_top">
                                <h3>STARTER</h3>
                            </div>
                            <div className="pricing_cercel">
                            <h4> $69 </h4>
                            <p> per month </p>
                        </div>
                            <ul>
                                <li> <strong>1</strong>  DOMAIN</li>
                                <li> <strong>100GB</strong>  DISK SPACE</li>
                                <li> <strong>UNLIMITED </strong> BANDWIDTH</li>
                                <li> <strong></strong> SHARED SSL CERTIFICATE</li>
                                <li> <strong>10</strong>  EMAIL ADDRESS</li>
                                <li><strong>24/7</strong> SUPPORT</li>
                            </ul>
                            <Button className='btn pricing_button'>Order Now</Button>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="pricing text-center">
                            <div className="pricing_top">
                                <h3>STARTER</h3>
                            </div>
                            <div className="pricing_cercel">
                            <h4> $99 </h4>
                            <p> per month </p>
                        </div>
                            <ul>
                                <li> <strong>1</strong>  DOMAIN</li>
                                <li> <strong>100GB</strong>  DISK SPACE</li>
                                <li> <strong>UNLIMITED </strong> BANDWIDTH</li>
                                <li> <strong></strong> SHARED SSL CERTIFICATE</li>
                                <li> <strong>10</strong>  EMAIL ADDRESS</li>
                                <li><strong>24/7</strong> SUPPORT</li>
                            </ul>
                            <Button className='btn pricing_button'>Order Now</Button>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="pricing text-center">
                            <div className="pricing_top">
                                <h3>STARTER</h3>
                            </div>
                            <div className="pricing_cercel">
                            <h4> $199 </h4>
                            <p> per month </p>
                        </div>
                            <ul>
                                <li> <strong>1</strong>  DOMAIN</li>
                                <li> <strong>100GB</strong>  DISK SPACE</li>
                                <li> <strong>UNLIMITED </strong> BANDWIDTH</li>
                                <li> <strong></strong> SHARED SSL CERTIFICATE</li>
                                <li> <strong>10</strong>  EMAIL ADDRESS</li>
                                <li><strong>24/7</strong> SUPPORT</li>
                            </ul>
                            <Button className='btn pricing_button'>Order Now</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </section>
    </>
  )
}

export default Pricing