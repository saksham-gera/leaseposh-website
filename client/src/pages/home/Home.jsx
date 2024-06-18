import CategoryView from "../../components/categoryView/CategoryView";
import ProductsView from "../../components/productsView/ProductsView";
import Header from "./Header";
import "./Home.css";

import React from 'react'

export default function Home({func}) {
  
  return (
    <div>
        <div className="headerParent">
            <Header />
            <CategoryView />
            <ProductsView category="Designer's Collection" func={func}/>
            <ProductsView category="Today's Picks" func={func}/>
            <ProductsView category="Trending These Days" func={func}/>
        </div>
    </div>
  )
}
