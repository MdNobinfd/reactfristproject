import React from 'react'
import './portfolio.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Tab,Tabs } from 'react-bootstrap'
import protfoilo1 from '../../assets/protfolio1.jpg'
import protfoilo2 from '../../assets/protfolio2.jpg'
import protfoilo3 from '../../assets/protfolio3.jpg'
import protfoilo4 from '../../assets/protfolio4.jpg'
import protfoilo5 from '../../assets/protfolio5.jpg'
import protfoilo6 from '../../assets/protfolio6.jpg'
import { FaPlusCircle } from "react-icons/fa";
const Portfolio = () => {
  return (
    <>
    <section id='protfolio'>
        <Container>
            <div className="protfolio_headding every_heading" data-aos="fade-up">
                <Row className='justify-content-center text-center'>
                    <Col lg={8}>
                        <h2>AWESOME FEATUR <span>ES</span></h2>
                        <div className="line"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam</p>
                    </Col>
                </Row>
            </div>
            <div className="protfolio_contant">
        <Tabs defaultActiveKey="profile"id="justify-tab-example"className="protfolio_tab_custom"justify>
            <Tab eventKey="home" title="All Work">
                <Row>
                    <Col lg={4}>
                        <div className="protfolio_item">
                            <img src={protfoilo1} alt="" />
                            <div className="protfolio_overly">
                                <FaPlusCircle />
                                <h6>ITEM-1</h6>
                                <p>Lorem Ipsum</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="protfolio_item">
                            <img src={protfoilo2} alt="" />
                            <div className="protfolio_overly">
                                <FaPlusCircle />
                                <h6>ITEM-1</h6>
                                <p>Lorem Ipsum</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="protfolio_item">
                            <img src={protfoilo3} alt="" />
                            <div className="protfolio_overly">
                                <FaPlusCircle />
                                <h6>ITEM-1</h6>
                                <p>Lorem Ipsum</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="protfolio_item">
                            <img src={protfoilo4} alt="" />
                            <div className="protfolio_overly">
                                <FaPlusCircle />
                                <h6>ITEM-1</h6>
                                <p>Lorem Ipsum</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="protfolio_item">
                            <img src={protfoilo5} alt="" />
                            <div className="protfolio_overly">
                                <FaPlusCircle />
                                <h6>ITEM-1</h6>
                                <p>Lorem Ipsum</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="protfolio_item">
                            <img src={protfoilo6} alt="" />
                            <div className="protfolio_overly">
                                <FaPlusCircle />
                                <h6>ITEM-1</h6>
                                <p>Lorem Ipsum</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Tab>
            <Tab eventKey="profile" title="Creative">
                 <Row>
                    <Col lg={4}>
                        <div className="protfolio_item">
                            <img src={protfoilo1} alt="" />
                            <div className="protfolio_overly">
                            <FaPlusCircle />
                            <h6>ITEM-1</h6>
                            <p>Lorem Ipsum</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="protfolio_item">
                            <img src={protfoilo3} alt="" />
                            <div className="protfolio_overly">
                            <FaPlusCircle />
                            <h6>ITEM-1</h6>
                            <p>Lorem Ipsum</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="protfolio_item">
                            <img src={protfoilo5} alt="" />
                            <div className="protfolio_overly">
                            <FaPlusCircle />
                            <h6>ITEM-1</h6>
                            <p>Lorem Ipsum</p>
                            </div>
                        </div>
                    </Col>
     
                </Row>
            </Tab>
            <Tab eventKey="longer-tab" title="Corporate">
                 <Row>
                    <Col lg={4}>
                        <div className="protfolio_item">
                            <img src={protfoilo2} alt="" />
                            <div className="protfolio_overly">
                            <FaPlusCircle />
                            <h6>ITEM-1</h6>
                            <p>Lorem Ipsum</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="protfolio_item">
                            <img src={protfoilo4} alt="" />
                            <div className="protfolio_overly">
                            <FaPlusCircle />
                            <h6>ITEM-1</h6>
                                <p>Lorem Ipsum</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="protfolio_item">
                            <img src={protfoilo6} alt="" />
                            <div className="protfolio_overly">
                            <FaPlusCircle />
                            <h6>ITEM-1</h6>
                            <p>Lorem Ipsum</p>
                            </div>
                        </div>
                    </Col>
     
                </Row>
            </Tab>
            <Tab eventKey="contact" title="Portfolio">
                 <Row>
                    <Col lg={4}>
                        <div className="protfolio_item">
                            <img src={protfoilo2} alt="" />
                            <div className="protfolio_overly">
                            <FaPlusCircle />
                            <h6>ITEM-1</h6>
                            <p>Lorem Ipsum</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="protfolio_item">
                            <img src={protfoilo5} alt="" />
                            <div className="protfolio_overly">
                            <FaPlusCircle />
                            <h6>ITEM-1</h6>
                            <p>Lorem Ipsum</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Tab>
        </Tabs>
            </div>
        </Container>
    </section>
    </>
  )
}

export default Portfolio