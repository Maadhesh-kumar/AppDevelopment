import Header from './Navbar';
import Footer from './Footer';

function FAQPage() {
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

  // Frequently Asked Questions and Answers
  const faqs = [
    {
      question: 'How do I find the best flight deals?',
      answer:
        'To find the best flight deals, use our search feature and be flexible with your travel dates. Consider booking in advance and subscribe to our newsletter for exclusive promotions and discounts.'
    },
    {
      question: 'What is the baggage allowance for my flight?',
      answer:
        'Baggage allowance varies by airline and ticket class. You can find detailed information on baggage allowances when booking your flight or by visiting the airline’s official website.'
    },
    {
      question: 'How can I check my flight status?',
      answer:
        'You can check your flight status by entering your flight number and date of departure on our website or by visiting the airline’s official website. Additionally, many airlines offer mobile apps for real-time updates.'
    },
    {
      question: 'Can I book flights for international travel?',
      answer:
        'Yes, you can book international flights through our website. Be sure to check visa and entry requirements for your destination before booking.'
    },
    {
      question: 'What should I do if I miss my flight?',
      answer:
        'If you miss your flight, contact the airline as soon as possible. Depending on the airline’s policy and the reason for missing your flight, they may offer rebooking options.'
    }
  ];

  return (
    <div className="wrapper">
      <Header />
      <div className="wrapper " style={contentStyle}>
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-4 text-center mb-3" style={{ fontFamily: 'fantasy!important' }}>
              FAQ
            </h1>
            <p className="lead text-center mt-3" style={{ fontFamily: 'cursive' }}>
              Answers to Your Frequently Asked Questions
            </p>
          </div>
        </div>

        {/* Frequently Asked Questions Section */}
        <div className="row mt-4">
          <div className="col-md-12">
            {faqs.map((faq, index) => (
              <div key={index} style={sectionStyle}>
                <h2 style={{ fontFamily: 'monospace' }}>{faq.question}</h2>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Add more frequently asked questions and answers as needed */}
      </div>
      <Footer />
    </div>
  );
}

export default FAQPage;
