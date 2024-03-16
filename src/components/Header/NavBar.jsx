import { Offcanvas, Nav } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";
import { NavLink } from 'react-router-dom';
import './nav.css';

function NavBar({ isOpen }) {
    const { closeBar } = useShoppingCart();

    return (
        <section id="navbar-component" data-testid="navbar-component">
            <Offcanvas show={isOpen} onHide={closeBar()} placement="start" data-testid="close-button" >
                <Offcanvas.Header closeButton >
                    <Offcanvas.Title>
                        <h3 className="display-4">NavBar</h3>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="flex-column">
                        <Nav.Link to="/ecommerce/login/" as={NavLink} className="nav-link login active">Login</Nav.Link>
                        <Nav.Link to="/ecommerce/" as={NavLink} className="nav-link">Home</Nav.Link>
                        <Nav.Link to="/ecommerce/shop/" as={NavLink} className="nav-link">Shop</Nav.Link>
                        <Nav.Link to="/ecommerce/blog/" as={NavLink} className="nav-link">Blog</Nav.Link>
                        <Nav.Link to="/ecommerce/about/" as={NavLink} className="nav-link">About</Nav.Link>
                        <Nav.Link to="/ecommerce/contact/" as={NavLink} className="nav-link">Contact</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </section>
    )
}

export default NavBar;
