import  { useState } from 'react';
import backgroundImage from '../assets/images/bg.jpg';
import Footer from './Footer';
import Header from './Navbar';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS


function Products() {
  const featuredProducts = useSelector((state) => state.featuredProducts.products);

  const [isSidebarOpen, setSidebarOpen] = useState(false);


  const wrapperStyle = {
    background: `url(${backgroundImage}) center/cover no-repeat fixed`,
    minHeight: '100vh',
    position: 'relative',
  };

  const contentStyle = {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    position: 'relative',
    zIndex: '1',
  };

  const cardImageStyle = {
    objectFit: 'cover',
    objectPosition: 'center center',
    maxHeight: '100%',
    maxWidth: '100%',
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };




  return (
    <div className="wrapper" style={wrapperStyle}>
      <div className={`content ${isSidebarOpen ? 'shifted' : ''}`} style={contentStyle}>
        <Header toggleSidebar={toggleSidebar} />

        <div className="container-fluid mx-1 col-12">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center mb-3 mt-4 text-info"><strong  style={{fontFamily:"monospace"}}>All Packages</strong></h1>
            </div>
          </div>

          <div className="row" >
  {featuredProducts.map((product) => (
    <div className="col-md-4 mb-3" key={product.id}>
      <div className="card h-100" style={{cursor:"pointer"}}> {/* Use the 'h-100' class here */}
        <img
          src={product.imageUrl}
          alt={product.name}
          className="card-img-top"
          style={cardImageStyle}
         
        />
        <div className="card-body d-flex flex-column"> 
        <div className='d-flex flex-row'>
          <div className='col-8'>
          <h5 className="card-title">{product.flightNumber}</h5>
          <h6 className="card-title"><strong>From : </strong>{product.from}</h6>
          <h6 className="card-title"><strong>To : </strong>{product.to}</h6>
          </div>
          <div className='col-4'>
          <h4 className="card-title ms-auto"><strong>₹{product.price}</strong> </h4>
            </div>
            </div>
          
        </div>
      </div>
    </div>
  ))}
</div>
        </div>
      </div>




      <Footer />
    </div>
  );
}

export default Products;
