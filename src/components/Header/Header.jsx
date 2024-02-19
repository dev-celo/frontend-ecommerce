import { useState, useEffect } from 'react';
import './header.css';
import logo from '/img/logo.png';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav, Navbar as NavbarBs } from 'react-bootstrap';

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const close = document.getElementById('close');
    let bar = document.getElementById('bar');


    const openBar = () => {
      setMobileMenuOpen(true);
      bar.style.display = 'none';
      close.style.display = 'flex';
    };

    const closeBar = () => {
      setMobileMenuOpen(false);
      close.style.display = 'none';
      bar.style.display = 'flex';
    };

    if (close) {
      close.addEventListener('click', closeBar);
    }

    if (bar) {
      bar.addEventListener('click', openBar);
    }

    return () => {
      if (close) {
        close.removeEventListener('click', closeBar);
      }

      if (bar) {
        bar.removeEventListener('click', openBar);
      }
    };
  }, []);

  function isMobile() {
    return window.innerWidth <= 900; // Defina o ponto de interrupção de largura de acordo com suas necessidades
  }

  return (
    <NavbarBs className="shadow-sm" id="header">
      {
        !isMobile() ? (
          <Nav className="">
            <Nav.Link to="/ecommerce/" as={NavLink}>
              <img src={logo} className="logo" alt="Cura logo da página" />
            </Nav.Link>
          </Nav>
        ) : null
      }

      <div>
        <ul id="navbar" className={isMobileMenuOpen ? 'active' : ''}>
          <Nav>
            <Nav.Link to="/ecommerce/" as={NavLink}>
              <li><a className="active" href="index.html">Home</a></li>
            </Nav.Link>
            <Nav.Link to="/ecommerce/shop" as={NavLink}>
              <li><a href="shop.html">Shop</a></li>
            </Nav.Link>
            <Nav.Link to="/ecommerce/blog" as={NavLink}>
              <li><a href="blog.html">Blog</a></li>
            </Nav.Link>
            <Nav.Link to="/ecommerce/about" as={NavLink}>
              <li><a href="about.html">About</a></li>
            </Nav.Link>
            <Nav.Link to="/ecommerce/contact" as={NavLink}>
              <li><a href="contact.html">Contact</a></li>
            </Nav.Link>
            <Nav.Link to="/ecommerce/cart" as={NavLink}>
              <li><a id="lg-bab" href="cart.html">Carrinho</a></li>
            </Nav.Link>
            <Nav.Link to="/ecommerce/login" as={NavLink}>
              <li><a className="custom-button">Login</a></li>
            </Nav.Link>
          </Nav>
        </ul>
      </div>

      <div id="mobile">
        <FontAwesomeIcon id="bar" icon="bars" />
        <FontAwesomeIcon id="close" style={{ display: 'none' }} icon="times" />
        {
          isMobile() ? (
            <Nav>
              <Nav.Link to="/ecommerce" as={NavLink}>
                <img src={logo} className="logo" alt="Cura logo da página" />
              </Nav.Link>
            </Nav>
          ) : null
        }
        <FontAwesomeIcon id="cart" icon="shopping-cart" />
      </div>
    </NavbarBs>
  );
}

export default Header;
