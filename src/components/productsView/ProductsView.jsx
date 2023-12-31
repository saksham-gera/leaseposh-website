import Button from "../Button.jsx";
import ProductCard from "./productCard/ProductCard";
import "./ProductsView.css"

export default function ProductsView({title = "Title"}) {
    return (
        <div className="products-view">
            <div className="products-view-top">
                <div className="title-of-view">
                    {title}
                </div>
                <div className="view-all-button">
                    <div className="innerText">
                        View All
                    </div>
                </div>
            </div>
            <div className="product-list">
                <ProductCard imageURL="https://images.unsplash.com/photo-1638456266087-09b1d160748b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                <ProductCard imageURL="https://images.unsplash.com/photo-1693336429270-094637e16d38?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <ProductCard imageURL="https://plus.unsplash.com/premium_photo-1682090778813-3938ba76ee57?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                <ProductCard imageURL="https://images.unsplash.com/photo-1610047402714-307d99a677db?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hlcndhbml8ZW58MHx8MHx8fDA%3D" />
                <ProductCard imageURL="https://images.unsplash.com/photo-1610047402714-307d99a677db?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hlcndhbml8ZW58MHx8MHx8fDA%3D" />
                <ProductCard imageURL="https://images.unsplash.com/photo-1638456266087-09b1d160748b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                <ProductCard imageURL="https://images.unsplash.com/photo-1693336429270-094637e16d38?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <ProductCard imageURL="https://plus.unsplash.com/premium_photo-1682090778813-3938ba76ee57?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            </div>
        </div>
    );
}