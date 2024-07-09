import { Offcanvas, Nav } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";
import { NavLink } from 'react-router-dom';
import './nav.css';

function NavBar({ isOpen }) {
    const { closeBar } = useShoppingCart();

    const handleLinkClick = () => {
        closeBar();
    };

    return (
        <section id="navbar-component" data-testid="navbar-component">
            <Offcanvas show={isOpen} onHide={closeBar} placement="start" data-testid="close-button" >
                <Offcanvas.Header closeButton >
                    <Offcanvas.Title>
                        <h3 className="display-4">NavBar</h3>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="flex-column">
                        <Nav.Link to="/frontend-ecommerce/login/" as={NavLink} className="nav-link login active" onClick={handleLinkClick}>Login</Nav.Link>
                        <Nav.Link to="/frontend-ecommerce/" as={NavLink} className="nav-link" onClick={handleLinkClick}>Home</Nav.Link>
                        <Nav.Link to="/frontend-ecommerce/shop/" as={NavLink} className="nav-link" onClick={handleLinkClick}>Shop</Nav.Link>
                        <Nav.Link to="/frontend-ecommerce/blog/" as={NavLink} className="nav-link" onClick={handleLinkClick}>Blog</Nav.Link>
                        <Nav.Link to="/frontend-ecommerce/about/" as={NavLink} className="nav-link" onClick={handleLinkClick}>About</Nav.Link>
                        <Nav.Link to="/frontend-ecommerce/contact/" as={NavLink} className="nav-link" onClick={handleLinkClick}>Contact</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </section>
    )
}

export default NavBar;
