import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import ProductPopup from './components/productPopup/productPopup.jsx';
import ProductsPage from './pages/productsPage/ProductsPage.jsx';
import ScrollToTop from './components/scrollToTop/ScrollToTop.jsx';

export default function App() {
  const [PopupDisplay,setPopupDisplay] = useState("none");
  const [PopupImageURL,setImageURL] = useState("none");

  let popupDisplay = (display,imageURL) => {
    setPopupDisplay(display);
    setImageURL(imageURL);
  }

  return (
    <div className="app">
      <ScrollToTop />
      <div className="product-popup-visibility" style={{display: PopupDisplay}}>
        <ProductPopup popupDisplay={popupDisplay} imgURL={PopupImageURL}/>
      </div>
      <Routes>
        {/* <Route path='/contactus' element={<ContactUs />}></Route> */}
        <Route path='/' element={<Home func={popupDisplay}/>}></Route>
        <Route path='/search' element={<ProductsPage func={popupDisplay}/>}></Route>
        {/* <Route path='/gallery' element={<Gallery />}></Route> */}
      </Routes>
      
    </div>
  )
}