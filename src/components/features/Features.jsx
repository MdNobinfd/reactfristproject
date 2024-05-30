import React from 'react'
import './features.css'
import { Col, Container, Row } from 'react-bootstrap'
import {Tabs,Tab } from 'react-bootstrap'
import featuresleft1 from '../../assets/featuresleft1.jpg'
import featuresleft2 from '../../assets/featuresleft2.jpg'
import featuresleft3 from '../../assets/featuresleft3.jpg'
import featuresleft4 from '../../assets/featuresleft4.jpg'
import featuresleft5 from '../../assets/featuresleft5.jpg'
import { FaPaperPlane } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { IoCodeSlashOutline } from "react-icons/io5";
import { FaThLarge } from "react-icons/fa";
import { FaFileImage } from "react-icons/fa";

const Features = () => {
  return (
    <>
    <section id='feature'>
        <Container>
        <div className="feature_headding every_heading">
        <Row className='justify-content-center text-center'>
                <Col lg={8}>
                    <h2>AWESOME FEATUR <span>ES</span></h2>
                    <div className="line"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing  elit, sed do eiusmod tempor incididunt ut et dolore magna    aliqua. Ut enim ad minim veniam</p>
                </Col>
            </Row>
        </div>
        <div className="feature_content">
        <Tabs defaultActiveKey="profile"id="justify-tab-example"className="mb-3 tabs_customiz" justify>
      <Tab eventKey="home" title={<FaPaperPlane />}>
      <Row className='features-tap-item'>
                <Col lg={6}>
                  <h3>Web Design</h3>
                  <div className="feature_line"></div>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</p>
                  <p>Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound</p>
                </Col>
                <Col lg={{span:5,offset:1}}>
                  <img src={featuresleft1} alt="" />
                </Col>
            </Row>
      </Tab>
      <Tab eventKey="profile" title={<FaLaptop />}>
      <Row className='features-tap-item'>
                <Col lg={6}>
                  <h3>Web Design</h3>
                  <div className="feature_line"></div>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</p>
                  <p>Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound</p>
                </Col>
                <Col lg={{span:5,offset:1}}>
                  <img src={featuresleft2} alt="" />
                </Col>
            </Row>
      </Tab>
      <Tab eventKey="longer-tab" title={<IoCodeSlashOutline />}>
      <Row className='features-tap-item'>
                <Col lg={6}>
                  <h3>Web Design</h3>
                  <div className="feature_line"></div>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</p>
                  <p>Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound</p>
                </Col>
                <Col lg={{span:5,offset:1}}>
                  <img src={featuresleft3} alt="" />
                </Col>
            </Row>
      </Tab>
      <Tab eventKey="contact" title={<FaThLarge />} >
      <Row className='features-tap-item'>
                <Col lg={6}>
                  <h3>Web Design</h3>
                  <div className="feature_line"></div>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</p>
                  <p>Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound</p>
                </Col>
                <Col lg={{span:5,offset:1}}>
                  <img src={featuresleft4} alt="" />
                </Col>
            </Row>
      </Tab>
      <Tab eventKey="contacst" title={<FaFileImage />} >
      <Row className='features-tap-item'>
                <Col lg={6}>
                  <h3>Web Design</h3>
                  <div className="feature_line"></div>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</p>
                  <p>Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound</p>
                </Col>
                <Col lg={{span:5,offset:1}}>
                  <img src={featuresleft5} alt="" />
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

export default Features