import Header from './Navbar';
import Footer from './Footer';

function AboutPage() {
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
              About Us
            </h1>
            <p className="lead text-center mt-3" style={{ fontFamily: 'cursive' }}>
              Learn More About Our Flight Ticket Booking Service
            </p>
          </div>
        </div>

        {/* About Us Section */}
        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <div style={sectionStyle}>
              <h2 style={{ fontFamily: 'monospace' }}>Our Story</h2>
              <p>
                We are dedicated to providing you with the best flight ticket booking experience. Our journey began in 20XX when a group of passionate travelers came together to simplify and enhance the way people book flights.
              </p>
              <p>
                Since then, we have been committed to offering a wide range of flight options, competitive prices, and a user-friendly platform that makes booking your next adventure a breeze.
              </p>
            </div>
          </div>
        </div>

        {/* Mission and Vision Section */}
        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <div style={sectionStyle}>
              <h2 style={{ fontFamily: 'monospace' }}>Our Mission</h2>
              <p>
                Our mission is to make air travel easy and accessible to everyone by offering a seamless booking experience. We strive to provide exceptional customer service and ensure that every journey is as smooth as possible.
              </p>
              <h2 style={{ fontFamily: 'monospace' }}>Our Vision</h2>
              <p>
                We envision a world where travel is not just a means to reach a destination but an exciting part of the journey itself. Our goal is to become the preferred choice for travelers seeking flight ticket booking solutions worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <div style={sectionStyle}>
              <h2 style={{ fontFamily: 'monospace' }}>Meet Our Team</h2>
              <p>
                Our team is made up of experienced professionals who are passionate about travel. We work tirelessly to ensure that your flight booking experience is top-notch. Meet the people behind the scenes who make it all happen.
              </p>
              {/* Display team members with their names and roles */}
              <div className="row mt-3">
                <div className="col-md-4">
                  <h3>John Doe</h3>
                  <p>Founder & CEO</p>
                </div>
                <div className="col-md-4">
                  <h3>Jane Smith</h3>
                  <p>Head of Customer Support</p>
                </div>
                <div className="col-md-4">
                  <h3>David Lee</h3>
                  <p>Lead Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <div style={sectionStyle}>
              <h2 style={{ fontFamily: 'monospace' }}>Contact Information</h2>
              <p>
                Address: 123 Flight Ave, Skytown<br />
                Phone: +1 (123) 456-7890<br />
                Email: info@flightbooking.com
              </p>
            </div>
          </div>
        </div>

        {/* Add more sections about your company as needed */}
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
