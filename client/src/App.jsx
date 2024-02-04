import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import ProductPopup from './components/productPopup/ProductPopup.jsx';
import ProductsPage from './pages/productsPage/ProductsPage.jsx';
import ScrollToTop from './components/scrollToTop/ScrollToTop.jsx';
import WishlistPage from './pages/wishlistPage/WishlistPage.jsx';
import Trial from './pages/Trial.jsx';
import CartPage from './pages/cartPage/CartPage.jsx';
import LoginSignupPopup from './components/loginSignupPopup/LoginSignupPopup.jsx';
import NavBar from './components/navBar/navBar.jsx';

export default function App() {
  const [PopupDisplay, setPopupDisplay] = useState("none");
  const [PopupImageURL, setPopupImageURL] = useState("none");
  const [PopupTitle, setPopupTitle] = useState("");
  const [PopupPrice, setPopupPrice] = useState("");
  const [PopupDescription, setPopupDescription] = useState("");
  const [PopupID, setPopupID] = useState("");
  const [LoginSignupDisplay, setLoginSignupDisplay] = useState("none");

  const loginPopupFunc = (loginDisplay) => {
    setLoginSignupDisplay(loginDisplay);
  }

  let popupDisplay = (display,id, imageURL, title, description, price) => {
    setPopupID(id);
    setPopupDisplay(display);
    setPopupImageURL(imageURL);
    setPopupTitle(title);
    setPopupDescription(description);
    setPopupPrice(price);
  }

  const location = useLocation();
  const {pathname} = location;

  const [pos, setPos] = useState("top");
    useEffect (() => {
    document.addEventListener("scroll", e => {
        let scrolled = document.scrollingElement.scrollTop;
        if (scrolled >= 600){
           setPos("moved")
        } else {
           setPos("top")
        }
    })
    },[]);

  return (
    <div className="app">
      <ScrollToTop />
      <NavBar loginPopupDisplay={loginPopupFunc} bgColor={pos === "top" && pathname === "/" ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 1)"}/>
      <div className="login" style={{ display: LoginSignupDisplay }}>
        <LoginSignupPopup func={loginPopupFunc} />
      </div>
      <div className="product-popup-visibility" style={{ display: PopupDisplay }}>
        <ProductPopup id={PopupID} popupDisplay={popupDisplay} description={PopupDescription} title={PopupTitle} imgURL={PopupImageURL} price={PopupPrice} />
      </div>

      <Routes>
        <Route path='/trial' element={<Trial />}></Route>
        <Route path='/' element={<Home func={popupDisplay} />}></Route>
        <Route path='/search' element={<ProductsPage func={popupDisplay} />}></Route>
        <Route path='/wishlist' element={<WishlistPage func={popupDisplay} />}></Route>
        <Route path='/cart' element={<CartPage />}></Route>
      </Routes>
      
    </div>
  )
}