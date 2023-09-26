import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-dark text-white">
      <section className="container py-4">
        <div className="row">
          <div className="col-lg-6 text-center text-lg-start mb-3">
            <span className="me-lg-5">Get connected with us on social networks:</span>
            <a href="https://www.facebook.com/" className="me-4 text-white">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://twitter.com/" className="me-4 text-white">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.google.co.in/webhp?gl=in" className="me-4 text-white">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
            <a href="https://www.instagram.com/?hl=en" className="me-4 text-white">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/feed/" className="me-4 text-white">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/MaheshBoopathiAP/" className="me-4 text-white">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <div className="col-lg-2 mb-3">
            <h6 className="text-uppercase fw-bold">Help</h6>
            <p className="mb-0">
              <a
                href="#"
                className="text-white text-decoration-none"
                onClick={() => navigate('/faq')}
              >
                FAQ
              </a>
            </p>
            <p className="mb-0">
              <a
                href="#"
                className="text-white text-decoration-none"
                onClick={() => navigate('/terms')}
              >
                Terms & Conditions
              </a>
            </p>
            <p className="mb-0">
              <a
                href="#"
                className="text-white text-decoration-none"
                onClick={() => navigate('/privacy')}
              >
                Privacy Policy
              </a>
            </p>
          </div>
          <div className="col-lg-4 mb-3">
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <p className="mb-0">
              <i className="fas fa-home me-3"></i> Los Angeles
            </p>
            <p className="mb-0">
              <i className="fas fa-envelope me-3"></i> indigo@gmail.com
            </p>
            <p className="mb-0">
              <i className="fas fa-phone me-3"></i> + 0987656789
            </p>
            <p className="mb-0">
              <i className="fas fa-print me-3"></i> + 9876544567
            </p>
          </div>
        </div>
      </section>
      <div className="text-center p-3 bg-dark text-white">
        &copy; {new Date().getFullYear()} Indigo AirLines. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
