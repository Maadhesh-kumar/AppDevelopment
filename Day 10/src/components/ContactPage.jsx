import Header from './Navbar';
import Footer from './Footer';

function ContactPage() {
  const contentStyle = {
    backgroundColor: '#121212',
    color: '#fff',
    padding: '20px',
    fontFamily: 'cursive',
  };

  const sectionStyle = {
    backgroundColor: '#333',
    border: '1px solid #555',
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    color: '#fff',
    fontFamily: 'cursive',
  };

  return (
    <div className="wrapper">
      <Header />
      <div className="wrapper" style={contentStyle}>
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-4 text-center mb-3" style={{ fontFamily: 'fantasy!important' }}>
              Support Page
            </h1>
            <p className="lead text-center mt-3" style={{ fontFamily: 'cursive' }}>
              Get Help with Your Bookings
            </p>
          </div>
        </div>

        {/* Support Sections */}
        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <div style={sectionStyle}>
              <h2 style={{ fontFamily: 'monospace' }}>Contact Support</h2>
              <p>
                If you need assistance with your bookings or have any questions, please feel free to contact our support team.
              </p>

              {/* Contact Form */}
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <form>
                    <div className="form-group mt-3">
                      <label htmlFor="name">Name</label>
                      <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="email">Email</label>
                      <input type="email" className="form-control" id="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="message">Message</label>
                      <textarea className="form-control" id="message" rows="4" placeholder="Your Message" required></textarea>
                    </div>
                    <div className="text-center mt-5 mt-3">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <div style={sectionStyle}>
              <h2 style={{ fontFamily: 'monospace' }}>Contact Information</h2>
              <p>
                Address: 123 Support St, Cityville<br />
                Phone: +1 (123) 456-7890<br />
                Email: support@example.com
              </p>
            </div>
          </div>
        </div>

        {/* Add more support sections as needed */}
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
