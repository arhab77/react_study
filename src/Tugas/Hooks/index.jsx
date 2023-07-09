import { useEffect, useState } from "react"
import { Button, Card, Col, Container, Form, Navbar, Row } from "react-bootstrap";
import "./index.css";

const TugasHooks = () => {
    let[articles,setArticles] = useState([]);
    let[input, setInput] = useState('');

    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?q=${input}&country=us&apiKey=1cdc9aff451b4733aef1cebbf5fcfc7b`)
        .then(res => res.json())
        .then(res => setArticles(res.articles))
    },[input]);

    return(
        <div>
            <Navbar style={{backgroundColor: "#1F8A70"}}>
                <Container>
                    <Navbar.Brand href="#home" className="text-light"><b>React News</b></Navbar.Brand>
                </Container>
            </Navbar>
            <br/>
            <Container>
                <Form.Control
                    type="Text"
                    placeholder="Search"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                
                <br/>
                <Row>
                    {
                        articles.map((articles, index) => 
                            (
                                <Col key={index}>
                                    <Card style={{ width: '18rem'}}>
                                        <Card.Img variant="top" src={articles.urlToImage} style={{height: '180px'}}/>
                                        <Card.Body>
                                            <Card.Title className="title">{articles.title}</Card.Title>
                                            <Card.Text className="description">
                                            {articles.description}
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <a href={articles.url} target="blank">
                                            <Button variant="primary" className="text-center">Go somewhere</Button>
                                            </a>
                                        </Card.Footer>
                                    </Card>
                                    <br />
                                </Col>
                            )
                        )
                    }
                </Row>
            </Container>
        </div>
    )
}

export default TugasHooks;