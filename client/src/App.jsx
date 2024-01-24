import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import ProductPopup from './components/productPopup/productPopup.jsx';
import ProductsPage from './pages/productsPage/ProductsPage.jsx';
import ScrollToTop from './components/scrollToTop/ScrollToTop.jsx';
import WishlistPage from './pages/wishlistPage/WishlistPage.jsx';
import Trial from './pages/Trial.jsx';
import CartPage from './pages/cartPage/CartPage.jsx';

export default function App() {
  const [PopupDisplay,setPopupDisplay] = useState("none");
  const [PopupImageURL,setPopupImageURL] = useState("none");
  const [PopupTitle,setPopupTitle] = useState("");
  const [PopupPrice,setPopupPrice] = useState("");
  const [PopupDescription,setPopupDescription] = useState("");

  let popupDisplay = (display,imageURL,title,description,price) => {
    setPopupDisplay(display);
    setPopupImageURL(imageURL);
    setPopupTitle(title);
    setPopupDescription(description);
    setPopupPrice(price);
  }

  return (
    <div className="app">
      <ScrollToTop />
      <div className="product-popup-visibility" style={{display: PopupDisplay}}>
        <ProductPopup popupDisplay={popupDisplay} description={PopupDescription} title={PopupTitle} imgURL={PopupImageURL} price={PopupPrice}/>
      </div>
      <Routes>
        <Route path='/trial' element={<Trial />}></Route>
        <Route path='/' element={<Home func={popupDisplay}/>}></Route>
        <Route path='/search' element={<ProductsPage func={popupDisplay}/>}></Route>
        <Route path='/wishlist' element={<WishlistPage func={popupDisplay}/>}></Route>
        <Route path='/cart' element={<CartPage />}></Route>
      </Routes>
      
    </div>
  )
}