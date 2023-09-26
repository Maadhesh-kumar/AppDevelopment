
import Header from './Navbar';
import Footer from './Footer';

function PrivacyPolicy() {
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

  // Privacy Policy Content
  const privacyPolicyData = [
    {
      title: 'Information We Collect',
      content:
        'We collect personal information such as your name, email address, and phone number when you use our services. We may also collect information about your device and usage patterns.'
    },
    {
      title: 'How We Use Your Information',
      content:
        'We use your information to provide and improve our services, personalize your experience, and communicate with you about bookings and promotions. We do not share your personal information with third parties without your consent.'
    },
    {
      title: 'Cookies and Tracking Technologies',
      content:
        'We use cookies and similar tracking technologies to enhance your browsing experience and analyze how you use our website. You can manage your cookie preferences in your browser settings.'
    },
    {
      title: 'Data Security',
      content:
        'We implement security measures to protect your data, but no method of transmission over the internet is completely secure. We cannot guarantee the security of your information.'
    },
    {
      title: 'Your Choices',
      content:
        'You can review and update your personal information by logging into your account. You may also contact us to access, correct, or delete your data. You can opt out of promotional emails at any time.'
    },
    {
      title: 'Changes to Privacy Policy',
      content:
        'We may update our privacy policy to reflect changes in our practices or for legal reasons. We will notify you of any significant changes.'
    },
  ];

  return (
    <div className="wrapper">
      <Header />
      <div className="wrapper" style={contentStyle}>
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-4 text-center mb-3" style={{ fontFamily: 'fantasy!important' }}>
              Privacy Policy
            </h1>
            <p className="lead text-center mt-3" style={{ fontFamily: 'cursive' }}>
              Your Privacy Matters to Us
            </p>
          </div>
        </div>

        {/* Privacy Policy Sections */}
        <div className="row mt-4">
          <div className="col-md-12">
            {privacyPolicyData.map((item, index) => (
              <div key={index} style={sectionStyle}>
                <h2 style={{ fontFamily: 'monospace' }}>{item.title}</h2>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Add more privacy policy sections as needed */}
      </div>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
