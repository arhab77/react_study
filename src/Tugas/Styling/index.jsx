import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, Col, Navbar, Row} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import "./index.css"


class Styling extends React.Component{
    render() {
        return(
            <div>
                <Navbar bg="dark" data-bs-theme="dark">
                    <Container>
                    <Navbar.Brand href="#home">Muh. Fadhil Arhab</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Biografi</Nav.Link>
                        <Nav.Link href="#features">Pendidikan</Nav.Link>
                        <Nav.Link href="#pricing">Pengalaman</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
                <div>
                    <Card className="text-center">
                        <Card.Img src="https://st5.depositphotos.com/35914836/63547/i/600/depositphotos_635479512-stock-photo-brown-wooden-wall-texture-background.jpg" style={{height:600}}/>
                        <Card.ImgOverlay>
                            <Card.Body className="header">
                                <Card.Title className="title">Fullstack Developer</Card.Title>
                                <Card.Text>
                                Muh. Fadhil arhab
                                </Card.Text>
                                <Button variant="primary" size="lg">LinkedIn Profile</Button>
                            </Card.Body>
                        </Card.ImgOverlay>
                    </Card>
                </div>
                <Container>
                    <h1 className="myBio">My Bio</h1>
                    <p className="myBio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                    tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                    quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
                    sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                    recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
                    minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
                    quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
                    fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
                    consequuntur! Commodi minima excepturi repudiandae velit hic maxime
                    doloremque. Quaerat provident commodi consectetur veniam similique ad 
                    earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
                    fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
                    suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
                    modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
                    totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
                    quasi aliquam eligendi, placeat qui corporis!</p>
                    <Row className="text-center">
                        <Col>
                            <h2>Pendidikan</h2>
                            <li>Lorem ipsum dolor</li>
                            <li>blanditiis harum quisquam</li>
                            <li>similique accusantium</li>
                        </Col>
                        <Col>
                            <h2>Pengalaman</h2>
                            <li>sint? Sed quibusdam</li>
                            <li>architecto voluptate aliquam</li>
                            <li>voluptates a cumque velit</li>
                        </Col>
                    </Row>
                </Container>
                    <footer className="text-center">
                        <h4>Contact Us</h4>
                        <Row className="bg-dark">
                            <Col><a href="#">Instagram</a></Col>
                            <Col><a href="#">FaceBook</a></Col>
                            <Col><a href="#">Twitter</a></Col>
                            <Col><a href="#">LinkedIn</a></Col>
                            <Col><a href="#">WhatsApp</a></Col>
                        </Row>
                    </footer>

            </div>
        )
    }
}

export default Styling;
