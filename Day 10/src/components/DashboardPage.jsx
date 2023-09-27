import Header from './Navbar';
import Footer from './Footer';

function DashboardPage() {
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

  const recentBookings = [
    { id: 1, flightName: 'Flight AA123', date: '2023-10-10', passengerName: 'John Smith' },
    { id: 2, flightName: 'Flight BC456', date: '2023-10-11', passengerName: 'Jane Johnson' },
    { id: 3, flightName: 'Flight XY789', date: '2023-10-12', passengerName: 'Alice Davis' },
  ];

  const flightStatistics = {
    totalBookings: 450,
    revenue: '$50,000',
    averagePrice: '$111.11',
  };



  return (
    <div className="wrapper">
      <Header />
      <div className="wrapper" style={contentStyle}>
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-4 text-center mb-3" style={{ fontFamily: 'fantasy!important' }}>
              Dashboard
            </h1>
            <p className="lead text-center mt-3" style={{ fontFamily: 'cursive' }}>
              Flight Booking App Dashboard
            </p>
          </div>
        </div>

        {/* Recent Bookings */}
        <div className="row mt-4">
          <div className="col-md-6">
            <div style={sectionStyle}>
              <h2 style={{ fontFamily: 'monospace' }}>Recent Bookings</h2>
              <ul>
                {recentBookings.map((booking) => (
                  <li key={booking.id}>
                    <strong>Flight:</strong> {booking.flightName}<br />
                    <strong>Date:</strong> {booking.date}<br />
                    <strong>Passenger:</strong> {booking.passengerName}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div style={sectionStyle}>
              <h2 style={{ fontFamily: 'monospace' }}>Flight Statistics</h2>
              <p>
                Total Bookings: {flightStatistics.totalBookings}<br />
                Revenue: {flightStatistics.revenue}<br />
                Average Price: {flightStatistics.averagePrice}
              </p>
            </div>
          </div>
        </div>

      

        {/* Reports and More Sections */}
        {/* Add more sections as needed */}

      </div>
      <Footer />
    </div>
  );
}

export default DashboardPage;
