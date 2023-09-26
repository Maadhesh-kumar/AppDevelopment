
import Header from './Navbar';
import Footer from './Footer';

function TermsAndConditionsPage() {
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
    textAlign: 'center', // Center the content within each section
  };

  // Terms and Conditions Content
  const termsAndConditions = [
    {
      title: 'Acceptance of Terms',
      content:
        'By using our website, you agree to comply with and be bound by these terms and conditions. If you do not agree with any part of these terms, please do not use our services.'
    },
    {
      title: 'Use of Our Services',
      content:
        'You may use our services solely for your personal and non-commercial purposes. Any unauthorized use or reproduction of our content is prohibited.'
    },
    {
      title: 'Privacy Policy',
      content:
        'Our privacy policy outlines how we collect, use, and protect your personal information. By using our services, you consent to the practices described in our privacy policy.'
    },
    {
      title: 'Booking and Payment',
      content:
        'When you make a booking through our website, you agree to provide accurate and complete information. Payments for bookings are subject to the terms and conditions of the airline or service provider.'
    },
    {
      title: 'Changes and Cancellations',
      content:
        'Changes to bookings and cancellations are subject to the policies of the airline or service provider. We recommend reviewing these policies before making a booking.'
    },
    {
      title: 'Intellectual Property',
      content:
        'All content on our website, including text, graphics, logos, and images, is the property of our company and is protected by copyright laws.'
    },
    {
      title: 'Limitation of Liability',
      content:
        'We do not guarantee the accuracy or completeness of information on our website and are not liable for any losses or damages resulting from your use of our services.'
    },
  ];

  return (
    <div className="wrapper">
      <Header />
      <div className="wrapper" style={contentStyle}>
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-4 text-center mb-3" style={{ fontFamily: 'fantasy!important' }}>
              Terms and Conditions
            </h1>
            <p className="lead text-center mt-3" style={{ fontFamily: 'cursive' }}>
              Please Read Our Terms and Conditions Carefully
            </p>
          </div>
        </div>

        {/* Terms and Conditions Sections */}
        <div className="row mt-4">
          <div className="col-md-12">
            {termsAndConditions.map((item, index) => (
              <div key={index} style={sectionStyle}>
                <h2 style={{ fontFamily: 'monospace' }}>{item.title}</h2>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Add more terms and conditions sections as needed */}
      </div>
      <Footer />
    </div>
  );
}

export default TermsAndConditionsPage;
