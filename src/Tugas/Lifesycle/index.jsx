import React from "react";
import "./index.css"
import { Button, Card, Col, Container, Form, Navbar, Row } from "react-bootstrap";

export default class Lifesycle extends React.Component{

    state = {
        articles: [],
        input: '',
    }

    getData(){
        var url = `https://newsapi.org/v2/top-headlines?q=${this.state.input}&country=us&apiKey=1cdc9aff451b4733aef1cebbf5fcfc7b`;
    
        var req = new Request(url);
        fetch(req)
            .then(response => response.json())
            .then(data => {
                this.setState({articles: data.articles});
            })
            .catch(err => console.error(err));
    }

    componentDidMount(){
        this.getData()
    }

    componentDidUpdate(_prevProps, prevState){
        if(prevState.input !== this.state.input){
            this.getData()
        }
    }

    render(){
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
                        value={this.state.input}
                        onChange={e => this.setState({input: e.target.value})}
                    />
                    <br/>
                    <Row>
                        {
                            this.state.articles.map((articles, index) => 
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
}