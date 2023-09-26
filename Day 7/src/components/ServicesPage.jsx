
import Header from './Navbar';
import Footer from './Footer';

function FlightBookingPage() {
  const contentStyle = {
    backgroundColor: '#121212', // Dark background color
    color: '#fff', // Light text color
    padding: '20px',
    fontFamily: 'cursive', // Cursive font family
  };

  const sectionStyle = {
    backgroundColor: '#333', // Darker section background
    border: '1px solid #555',
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    color: '#fff', // Light text color for sections
    fontFamily: 'cursive', // Cursive font family
  };

  return (
    <div className="wrapper">
      <Header />
      <div className="wrapper" style={contentStyle}>
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-4 text-center mb-3" style={{fontFamily:"fantasy!important"}}>Provided Services</h1>
            <p className="lead text-center mt-3" style={{fontFamily:"cursive"}}>
              Find and book your flights with ease.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div style={sectionStyle}>
              <h2 style={{fontFamily:"monospace"}}>Search Flights</h2>
              <p>
                Use our flight search feature to find the best flights for your travel needs.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div style={sectionStyle}>
              <h2 style={{fontFamily:"monospace"}}>Book Tickets</h2>
              <p>
                Securely book your flight tickets online and receive instant confirmation.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <div style={sectionStyle}>
              <h2 style={{fontFamily:"monospace"}}>Manage Bookings</h2>
              <p>
                Access your bookings, make changes, and check your flight status.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div style={sectionStyle}>
              <h2 style={{fontFamily:"monospace"}}>Contact Support</h2>
              <p>
                Need assistance? Contact our support team for help with your bookings.
              </p>
            </div>
          </div>
        </div>

        {/* Flight Deals Section */}
        <div className="row mt-4">
          <div className="col-md-6">
            <div style={sectionStyle}>
              <h2 style={{fontFamily:"monospace"}}>Special Flight Deals</h2>
              <p>
                Explore our exclusive flight deals and discounts for your next adventure.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div style={sectionStyle}>
              <h2 style={{fontFamily:"monospace"}}>Travel Tips</h2>
              <p>
                Check out our travel tips and guides for a smooth journey.
              </p>
            </div>
          </div>
        </div>

        {/* Baggage Information Section */}
        <div className="row mt-4">
          <div className="col-md-12">
            <div style={sectionStyle}>
              <h2 style={{fontFamily:"monospace"}}>Baggage Information</h2>
              <p>
                Learn about baggage allowances, restrictions, and packing tips.
              </p>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="row mt-4">
          <div className="col-md-12">
            <div style={sectionStyle}>
              <h2 style={{fontFamily:"monospace"}}>Customer Reviews</h2>
              <p>
                Read reviews from our satisfied customers who have had great experiences with us.
              </p>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default FlightBookingPage;
