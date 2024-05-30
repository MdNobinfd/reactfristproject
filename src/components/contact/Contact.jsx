import React, { useEffect } from 'react'
import './contact.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Form,Button } from 'react-bootstrap'
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { AiFillWechat } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { ImInstagram } from "react-icons/im";
import { FaBehance } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(()=> {
        AOS.init();
    },[])
  return (

    <>
    <section id='contact'>
        <Container>
            <div className="contact_heading every_heading text-center">
                <Row className='justify-content-center'>
                    <Col lg={8}>
                        <h2>CONTACT <span>US</span> </h2>
                        <div className="line"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam</p>
                    </Col>
                </Row>
            </div>
            <div className="contact_meddle">
                <Row>
                    <Col lg={6} sm={12} md={6}>
                        <div className="contact_meddle_left">
                            <h3>CONTACT <span>INFO</span> </h3>
                            <p><FaLocationDot className='contact_icon' /><strong>Address:</strong>No 123 , Wallstreet, India</p>
                            <p><IoMdMail className='contact_icon' /><strong>Mail Us:</strong><a href="#">mdnobin2266@gmail.com</a></p>
                            <p><FaPhone className='contact_icon' /><strong>Phone:</strong><a href="#">01749094255</a></p>
                            <p><AiFillWechat className='contact_icon' /><strong>Website:</strong><a href="#"> www.Cosmix.com</a></p>
                        </div>
                    </Col>
                    <Col lg={6} sm={12} md={6}>
                        <div className="contact_meddle_right">
        
                             <Form>
                                <Row>
                                    <Col lg={6} sm={12}>
                                    <Form.Group className="mb-3" controlId="formBasicText">

                                    <Form.Control type="text" placeholder="Name" required />
                                    <Form.Text className="text-muted">

                                    </Form.Text>
                                </Form.Group>
                                    </Col>
                                    <Col lg={6} sm={12}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">

                                    <Form.Control type="email" placeholder="Email Address" required />
                                    <Form.Text className="text-muted">

                                    </Form.Text>
                                </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group className="mb-3" controlId="formBasicText">

                                    <Form.Control type="text" placeholder="Name" required />
                                    <Form.Text className="text-muted">

                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                                    <Form.Control as="textarea" rows={5} placeholder="Enter your message" required/>
                                </Form.Group>
                                <Button className='from_button' variant="primary" type="submit">Send Now</Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
        <div className="contact_brack text-center" data-aos="fade-up">
            <h2>LOOKING FORWARD TO <strong>HEARING </strong>FROM YOU!</h2>
        </div>
        <div className="contact_fotter" data-aos-anchor-placement="center-bottom" data-aos="fade-up">
            <Container>
                <Row className=' justify-content-center text-center'>
                    <Col lg={6}>
                        <h2>Follow Us On</h2>
                        <ul className='justify-content-center'>
                            <li> <a className='conatct_fotter_icon1' href="#"><FaFacebookF /></a></li>
                            <li> <a className='conatct_fotter_icon2' href="#"><FaTwitter /> </a></li>
                            <li> <a className='conatct_fotter_icon3' href="#"><RiLinkedinFill /></a></li>
                            <li> <a className='conatct_fotter_icon4' href="#"><FaGoogle /></a></li>
                            <li> <a className='conatct_fotter_icon5' href="#"><TfiYoutube /></a></li>
                            <li> <a className='conatct_fotter_icon6' href="#"><ImInstagram /></a></li>
                            <li> <a className='conatct_fotter_icon7' href="#"><FaBehance /></a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    </section>
    </>
  )
}

export default Contact


