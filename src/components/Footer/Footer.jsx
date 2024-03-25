import './footer.css';
 
function Footer() {
  return (
    <footer className="section-p1">
      <div className="col1" id="contact-section" data-testid="contact-section">
        <img className="logo-footer" src="/ecommerce/img/logo.png" alt="" />
        <h4>Contact</h4>
        <p><strong>Adress:</strong> 562 Wellington Road, Street 32, San Francisco</p>
        <p><strong>Phone:</strong> +01 2222 365/ (+91) 012345 6789</p>
        <p><strong>Opening hours:</strong> 10:00 - 18:00 Mon - Sat</p>
        <div className="follow">
          <h4>Folllow us</h4>
          <div className="icon">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </div>

      <div className="col1" id="about-section" data-testid="about-section">
        <h4>About</h4>
        <a href="#">About us</a>
        <a href="#">Delivery Information</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Contact us</a>
      </div>

      <div className="col1" id="my-count-section" data-testid="my-count-section">
        <h4>My count</h4>
        <a href="#">Sign in</a>
        <a href="#">View Cart</a>
        <a href="#">My wishlist</a>
        <a href="#">Track my order</a>
        <a href="#">Help</a>
      </div>

      <div className="col1 install" id="install-app-section" data-testid="install-app-section">
        <h4>Install App</h4>
        <p>From App Store or Google Play</p>
        <div className="row">
          <img src="./img/pay/play.jpg" alt="" />
          <img src="./img/pay/app.jpg" alt="" />
        </div>
        <p>Secure Payment Getways</p>
        <img className="payment" src="/ecommerce/img/pay/pay.png" alt="" />
      </div>

      <div className="copyright">
        <p>&copy; 2022, Marcelo Henrique - HTML CSS Ecommerce Template</p>
      </div>
    </footer>
  );
}

export default Footer;
