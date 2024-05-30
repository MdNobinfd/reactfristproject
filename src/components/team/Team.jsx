import React from 'react'
import './team.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Card,Carousel  } from 'react-bootstrap'
import team1 from '../../assets/team1.jpg'
import team2 from '../../assets/team2.jpg'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import { FaPinterestP } from "react-icons/fa";

import { TiSocialInstagram } from "react-icons/ti";

import { IoLogoGoogleplus } from "react-icons/io";



const Team = () => {
  return (
    <>
    <section id='team'>
        <Container>
            <div className="team_headding every_heading">
                <Row className='justify-content-center text-center'>
                    <Col lg={8}>
                    <h2>OUR TE <span>AM</span></h2>
                    <div className="line"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam</p>
                    </Col>
                </Row>
            </div>
            <div className="team_content">
                <Row>
                    <Col lg={3} md={6} sm={12}>
                        <div className="card_main">
                        <Card>
                        <Card.Img variant="top" src={team1} />
                        <Card.Body>
                            <Card.Title>JULIA AMANDA</Card.Title>
                            <Card.Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry
                            </Card.Text>
                            <ul className='team_icon'>
                                <li className='icon_design1 d-inline-block'><a href="#"><FaFacebookF  /> <div className="toltip">Facebook</div></a></li>
                                <li className='icon_design2 d-inline-block'><a href="#"><FaTwitter  /><div className="toltip">Twitter</div></a></li>
                                <li className='icon_design3 d-inline-block'><a href="#"><FaPinterestP  /><div className="toltip">Pinterest</div></a></li>
                                <li className='icon_design4 d-inline-block'><a href="#"><TiSocialInstagram  /><div className="toltip">Instagram</div></a></li>
                                <li className='icon_design5 d-inline-block'><a href="#"><IoLogoGoogleplus  /><div className="toltip">Google</div></a></li>
                            </ul>
                        </Card.Body>
                        </Card>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <div className="card_main">
                        <Card>
                        <Card.Img variant="top" src={team1} />
                        <Card.Body>
                            <Card.Title>JULIA AMANDA</Card.Title>
                            <Card.Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry
                            </Card.Text>
                            <ul className='team_icon'>
                                <li className='icon_design1 d-inline-block'><a href="#"><FaFacebookF  /> <div className="toltip">Facebook</div></a></li>
                                <li className='icon_design2 d-inline-block'><a href="#"><FaTwitter  /><div className="toltip">Twitter</div></a></li>
                                <li className='icon_design3 d-inline-block'><a href="#"><FaPinterestP  /><div className="toltip">Pinterest</div></a></li>
                                <li className='icon_design4 d-inline-block'><a href="#"><TiSocialInstagram  /><div className="toltip">Instagram</div></a></li>
                                <li className='icon_design5 d-inline-block'><a href="#"><IoLogoGoogleplus  /><div className="toltip">Google</div></a></li>
                            </ul>
                        </Card.Body>
                        </Card>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <div className="card_main">
                        <Card>
                        <Card.Img variant="top" src={team2} />
                        <Card.Body>
                            <Card.Title>JULIA AMANDA</Card.Title>
                            <Card.Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry
                            </Card.Text>
                            <ul className='team_icon'>
                                <li className='icon_design1 d-inline-block'><a href="#"><FaFacebookF  /> <div className="toltip">Facebook</div></a></li>
                                <li className='icon_design2 d-inline-block'><a href="#"><FaTwitter  /><div className="toltip">Twitter</div></a></li>
                                <li className='icon_design3 d-inline-block'><a href="#"><FaPinterestP  /><div className="toltip">Pinterest</div></a></li>
                                <li className='icon_design4 d-inline-block'><a href="#"><TiSocialInstagram  /><div className="toltip">Instagram</div></a></li>
                                <li className='icon_design5 d-inline-block'><a href="#"><IoLogoGoogleplus  /><div className="toltip">Google</div></a></li>
                            </ul>
                        </Card.Body>
                        </Card>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <div className="card_main">
                        <Card>
                        <Card.Img variant="top" src={team1} />
                        <Card.Body>
                            <Card.Title>JULIA AMANDA</Card.Title>
                            <Card.Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry
                            </Card.Text>
                            <ul className='team_icon'>
                                <li className='icon_design1 d-inline-block'><a href="#"><FaFacebookF  /> <div className="toltip">Facebook</div></a></li>
                                <li className='icon_design2 d-inline-block'><a href="#"><FaTwitter  /><div className="toltip">Twitter</div></a></li>
                                <li className='icon_design3 d-inline-block'><a href="#"><FaPinterestP  /><div className="toltip">Pinterest</div></a></li>
                                <li className='icon_design4 d-inline-block'><a href="#"><TiSocialInstagram  /><div className="toltip">Instagram</div></a></li>
                                <li className='icon_design5 d-inline-block'><a href="#"><IoLogoGoogleplus  /><div className="toltip">Google</div></a></li>
                            </ul>
                        </Card.Body>
                        </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </section>
    </>
  )
}

export default Team