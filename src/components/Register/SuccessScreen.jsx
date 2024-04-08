  import { Button } from 'react-bootstrap';
  import './successScreen.css';
import { Link } from 'react-router-dom';

  const SuccessScreen = ({ onContinue }) => {
    return (
      <section className="success-screen">
        <div className="content">
          <div className="message">
            <h2>Thank you for Logging in!</h2>
            <p>You are now logged in.</p>
            <Link to={onContinue}>
              <Button variant="primary">Login</Button>
            </Link>
          </div>
        </div>
        <footer className="footer">
          <p>Illustration by Artist</p>
        </footer>
      </section >
    );
  };

  export default SuccessScreen;
