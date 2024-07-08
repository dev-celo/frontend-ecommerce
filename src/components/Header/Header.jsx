import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav, Navbar as NavbarBs, Button } from 'react-bootstrap';
import { useShoppingCart } from '../context/shoppingCartContext';
import logo from '/img/logo.png';
import './header.css';

function Header() {
  const { cartQuantity, openCart, openBar } = useShoppingCart();

  return (
    <NavbarBs sticky="top" className="shadow-sm" id="header">
      <div id="mobile">
      <Button id="bar" style={{ width: "4rem", height: "4rem" }} variant="none" data-testid="bar" className="bar" onClick={openBar}>
        <FontAwesomeIcon onClick={openBar} data-testid="bar" id="bar" icon="bars" />
      </Button>  
        <Nav>
          <Nav.Link to="/ecommerce/" as={NavLink}>
            <img id="logo" src={logo} className="logo" alt="Cura logo da página" />
          </Nav.Link>
        </Nav>
        <Button id="cart-button" data-testid="shopping-cart" style={{ width: "4rem", height: "4rem" }} variant="outline-light" className="cart" onClick={openCart}>
          <FontAwesomeIcon id="cart" data-testid="shopping-cart" icon="shopping-cart" />
          <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{ color: "white", width: "1.5rem", height: "1.5rem", position: "absolute", bottom: 50, right: 30, transform: "translate(25%, 25%)", fontSize: "1.1rem" }}>
            {cartQuantity}
          </div>
        </Button>
      </div>

      <div>
        <ul id="navbar">
          <Nav>
            <NavItem link="/ecommerce/" text="Home" />
            <NavItem link="/ecommerce/shop/" text="Shop" />
            <NavItem link="/ecommerce/blog/" text="Blog" />
            <NavItem link="/ecommerce/about/" text="About" />
            <NavItem link="/ecommerce/contact/" text="Contact" />
            <NavItem handleClick={openCart} text="Cart" hasItems={cartQuantity > 0} />
            <NavItem link="/ecommerce/login" text="Login" className="custom-button" />
          </Nav>
        </ul>
      </div>
    </NavbarBs>
  );
}

// Componente de item de menu
function NavItem({ link, text, className, handleClick, hasItems }) {
  return (
    <Nav.Link to={link} as={NavLink}>
      <li>
        <a onClick={handleClick} className={className}>{text}</a>
        {hasItems && <span className="cart-identifier"></span>}
      </li>
    </Nav.Link>
  );
}

export default Header;
