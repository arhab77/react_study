import { Container, Nav, Navbar } from "react-bootstrap";
import "./index.css"
import { Link, Outlet } from "react-router-dom";

const TugasRouter = () => {
    return(
        <div>
            <Navbar style={{backgroundColor: "#1F8A70"}}>
                <Container>
                    <Navbar.Brand href="#home" className="text-light"><b>React News</b></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link><Link to="/us" className="Link">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/id" className="Link">Indonesia</Link></Nav.Link>
                        <Nav.Link><Link to="/in" className="Link">India</Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Outlet/>
        </div>
    )
}

export default TugasRouter;