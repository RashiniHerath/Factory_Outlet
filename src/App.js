
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory cateory="mens"/>} />
          <Route path="/womens" element={<ShopCategory cateory="womens"/>} />
          <Route path="/kids" element={<ShopCategory cateory="kids"/>} />
          <Route path="/product" element={<Product/>}>
            <Route path=":productID" element={<Product/>}/>
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
