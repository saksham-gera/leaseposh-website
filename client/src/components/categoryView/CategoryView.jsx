import { Link } from "react-router-dom";
import CategoryCard from "./categoryCard/CategoryCard";
import "./CategoryView.css"

export default function CategoryView() {
    return(
        <div className="category-view">
            <Link to={"/search?gender=men"} style={{textDecoration:"none"}} onClick={location.reload}><CategoryCard title="Men" imageURL="/assets/men.jpg"/></Link>
            <Link to={"/search?gender=women"} style={{textDecoration:"none"}} onClick={location.reload}><CategoryCard title="Women" imageURL="/assets/women.jpg"/></Link>
            <Link to={"/search?gender=boys"} style={{textDecoration:"none"}} onClick={location.reload}><CategoryCard title="Boys" imageURL="/assets/boy.jpg"/></Link>
            <Link to={"/search?gender=girls"} style={{textDecoration:"none"}} onClick={location.reload}><CategoryCard title="Girls" imageURL="/assets/girl.avif"/></Link>
        </div>
    );
}
