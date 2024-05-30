import React from 'react'
import './servics.css'
import servics from '../../assets/servics.png'
import { Col, Container, Row } from 'react-bootstrap'
import { FaChartLine } from "react-icons/fa6";
import { FaCubes } from "react-icons/fa";
import { BiSolidPieChartAlt2 } from "react-icons/bi";
import { FaChartColumn } from "react-icons/fa6";
import { LiaLanguageSolid } from "react-icons/lia";
import { BiBullseye } from "react-icons/bi";
import ProgressBar from "@ramonak/react-progress-bar";

const Servics = () => {
  return (
    <>
    <section id='service'>
        <Container>
            <div className="service-heading every_heading">
                <Row className='justify-content-center text-center'>
                <Col lg={8}>
                    <h2>OUR SERVI <span>CE</span></h2>
                    <div className="line"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam</p>
                </Col>
                </Row>
            </div>
            <div className="service_meddle">
                <Row>
                    <Col lg={4} md={6} sm={12}>
                        <div className="service-item">
                            <div className="service_item_right">
                            <div className="service-item-icon">
                               <FaChartLine/>
                            </div>
                            </div>
                            <div className="service-item-content">
                                <h5>UI Design</h5>
                                <p>Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className="service-item">
                            <div className="service_item_right">
                            <div className="service-item-icon">
                            <FaCubes />
                            </div>
                            </div>
                            <div className="service-item-content">
                                <h5>UX Design</h5>
                                <p>Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className="service-item">
                            <div className="service_item_right">
                            <div className="service-item-icon">
                            <BiSolidPieChartAlt2 />
                            </div>
                            </div>
                            <div className="service-item-content">
                                <h5>Marketing</h5>
                                <p>Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className="service-item">
                            <div className="service_item_right">
                            <div className="service-item-icon">
                            <FaChartColumn />
                            </div>
                            </div>
                            <div className="service-item-content">
                                <h5>SEO Services</h5>
                                <p>Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className="service-item">
                            <div className="service_item_right">
                            <div className="service-item-icon">
                            <LiaLanguageSolid />
                            </div>
                            </div>
                            <div className="service-item-content">
                                <h5>Android App</h5>
                                <p>Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className="service-item">
                            <div className="service_item_right">
                            <div className="service-item-icon">
                            <BiBullseye />
                            </div>
                            </div>
                            <div className="service-item-content">
                                <h5>Clean Code</h5>
                                <p>Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="service_fotter">
                <Row>
                    <Col lg={6} sm={12} md={6}>
                        <div className="service_fotter_left">
                        <p>User Experiances</p>
                        <ProgressBar completed={95} animateOnRender={true}  bgColor=' #e73131' transitionDuration='5s' />
                        {/* <ProgressBar now={95} label={`${95}%`} /> */}
                        <p>Web Design</p>
                        <ProgressBar completed={80} animateOnRender={true}  bgColor=' #e73131' transitionDuration='5s'/>
                        {/* <ProgressBar now={80} label={`${80}%`} /> */}
                        <p>Programming</p>
                        <ProgressBar completed={60} animateOnRender={true}  bgColor=' #e73131' transitionDuration='5s'/>
                        {/* <ProgressBar now={60} label={`${60}%`} /> */}
                        <p>Fun</p>
                        <ProgressBar completed={70} animateOnRender={true}  bgColor=' #e73131' transitionDuration='5s'/>
                        {/* <ProgressBar now={70} label={`${70}%`} /> */}
                        </div>
                    </Col>
                    <Col lg={{span:4, offset:2}} sm={12} md={{span:4, offset:2}}>
                    <div className="service-fotter-right">
                        <img src={servics} alt="" />
                    </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </section>
    </>
  )
}

export default Servics