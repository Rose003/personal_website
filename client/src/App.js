import './App.css';
import CustomNavbar from './components/header/CustomNavbar';
// import Navbar2 from './components/header/new_navbar/Navbar2';
import Main from './components/home/Main';
import Faqs from './components/Items/Faqs';
import Login from './components/sign/Login';
import SignUp from './components/sign/SignUp';
import Donations from './components/Items/Donations';
import { Routes, Route } from 'react-router-dom';
import MarketPlace from './components/marketplace/Marketplace';
import Sell from './components/marketplace/Sell';
import { useState } from 'react'; // Import useState
import ProductDetails from './components/marketplace/ProductDetails';
import Attire from './components/Items/Attire';

function App() {
  const [products, setProducts] = useState([]); // State to hold products

  // Function to add a product
  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <>
      <CustomNavbar />
      {/* <Navbar2/> */}

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/marketplace' element={<MarketPlace products={products} />} />
        <Route path='/sell' element={<Sell addProduct={addProduct} />} />
        <Route path='/services' element={<Donations />} />
        <Route path='/FAQs' element={<Faqs />} />
        <Route path='/school-attire' element={<Attire />} />
        <Route path="/product/:id" element={<ProductDetails />} /> {/* Use element instead of component */}
      </Routes>

      {/* <Main/>  */}
    </>
  );
}

export default App;
