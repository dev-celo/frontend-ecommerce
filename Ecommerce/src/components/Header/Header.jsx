import { useState, useEffect } from 'react';
import './header.css';
import logo from '../../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

  return (
    <>
      <section id="header">
        <a href="#">
          <img src={logo} className="logo" alt="cura logo da página" />
        </a>

        <div>
          <ul id="navbar" className={isMobileMenuOpen ? 'active' : ''}>
            <li><a className="active" href="index.html">Home</a></li>
            <li><a href="shop.html">Shop</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li>
              <a id="lg-bab" href="cart.html">Carrinho</a>
            </li>
          </ul>
        </div>

        <div id="mobile">
          <FontAwesomeIcon icon="shopping-cart" />
          <FontAwesomeIcon id="bar" icon="bars" />
          <FontAwesomeIcon id="close" style={{ display: 'none' }} icon="times" />
        </div>
      </section>
    </>
  );
}

export default Header;
