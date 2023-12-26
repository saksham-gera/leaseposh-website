import './App.css';
import CategoryView from './components/categoryView/CategoryView.jsx';
import Footer from './footer/Footer.jsx';
import Header from './pages/home/Header.jsx';
import ProductsView from './components/productsView/ProductsView.jsx';


export default function App() {
  return (
    <div className="headerParent">
      <Header />
      <CategoryView />
      <ProductsView title="Designer's Collection" />
      <ProductsView title="Today's Picks" />
      <ProductsView title="Trending These Days" />
      <Footer />
    </div>
  )
}