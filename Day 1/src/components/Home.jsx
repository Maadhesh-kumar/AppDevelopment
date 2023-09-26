import  { useState } from 'react';
import backgroundImage from '../assets/images/bg.jpg';
import Footer from './Footer';
import Header from './Navbar';
import '../assets/css/home.css';
import { useSelector} from 'react-redux'
import { selectUser } from '../redux/userSlice'




function Home() {

  const user = useSelector(selectUser); 
  const username = user.username;



  
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const wrapperStyle = {
    background: `url(${backgroundImage}) center/cover no-repeat fixed`,
    minHeight: '100vh', // Ensure the background covers the entire viewport height
    position: 'relative', // Add relative positioning to the wrapper
  };

  const contentStyle = {
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    position: 'relative', // Add relative positioning to the content
    zIndex: '1', // Set a higher z-index to make it appear above the Header
  };

  
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const [fromInputValue, setFromInputValue] = useState('');
  const [toInputValue, setToInputValue] = useState('');
  const [departureDate] = useState('25 Sep, Mon');
  const [returnDate] = useState('');
  const [passengerInput] = useState('1 Passenger, Economy');

  const handleSwap = () => {
    const temp = fromInputValue;
    setFromInputValue(toInputValue);
    setToInputValue(temp);
  };

  return (
    <div className="wrapper" style={wrapperStyle}>
      <div className={`content ${isSidebarOpen ? 'shifted' : ''}`} style={contentStyle}>
        <Header toggleSidebar={toggleSidebar} />
        <div className='container' id='homec'>
          <div className='d-flex flex-column text-center'>
          <div className='p-2'>
         <h1 style={{fontFamily:"monospace"}} className='text-light'><strong> Book a Flight , {username}</strong> </h1>
         </div>
         <div className='p-2 d-flex justify-content-center'>
          <div>
          <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="form-group text-light">
            <label htmlFor="fromInput"><strong>From</strong></label>
            <input
              id="fromInput"
              className="form-control"
              value={fromInputValue}
              placeholder="Enter city or airport"
              type="text"
              autoComplete="off"
              onChange={(e) => setFromInputValue(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-1">
          <div className="form-group text-light">
            <button className="btn btn-default swap-icon" onClick={handleSwap}>
              <i className="fa fa-exchange" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group text-light">
            <label htmlFor="toInput"><strong>To</strong></label>
            <input
              id="toInput"
              className="form-control"
              value={toInputValue}
              placeholder="Enter city or airport"
              type="text"
              autoComplete="off"
              onChange={(e) => setToInputValue(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group ">
            <button className="btn btn-primary search-btn mt-4" >
              <i className="fa fa-search" aria-hidden="true"></i> Search
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="form-group mt-3 text-light">
            <label htmlFor="departureDate "><strong>Departure</strong></label>
            <input
              id="departureDate"
              className="form-control"
              value={departureDate}
              placeholder="Depart"
              type="text"
              
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group mt-3 text-light" style={{marginLeft:"27%",minWidth:"100%"}}>
            <label htmlFor="returnDate"><strong>Return</strong></label>
            <input
              id="returnDate"
              className="form-control"
              value={returnDate}
              placeholder="Return"
              type="text"
              
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group text-light mt-3" style={{marginLeft:"27%"}}>
            <label htmlFor="passengerInput "><strong >Travellers | Class</strong></label>
            <input
              id="passengerInput"
              className="form-control"
              value={passengerInput}
              placeholder=""
              type="text"
              
            />
          </div>
        </div>
      </div>
    </div>
        </div>
        </div>
        </div>  
        </div>
       
      </div>

      <Footer />
    </div>
  );
}

export default Home;
