import './header.css';
import logo from '../../img/logo.png';

function Header() {
  return (
    <>
      <section id="header">
        <a href="#"><img src={logo} className="logo" alt="cura logo da páginax" /></a>

        <div>
          <ul id="navbar">
            <li><a className="active" href="index.html">Home</a></li>
            <li><a href="shop.html">Shop</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li>
              <a id="lg-bab" href="cart.html"><i className="fas fa-shopping-bag"></i></a>
            </li>

            <a href="#" id="close"><i className="fas fa-times"></i></a>
          </ul>
        </div>

        <div id="mobile">        
          <a href="cart.html"><i className="fas fa-shopping-bag"></i></a>

          <i onClick="openBar()" id="bar" className="fas fa-outdent"></i>
        </div>

      </section>
    </>
  )
}

export default Header
