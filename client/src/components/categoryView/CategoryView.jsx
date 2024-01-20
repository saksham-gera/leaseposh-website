import CategoryCard from "./categoryCard/CategoryCard";
import "./categoryView.css"

export default function CategoryView() {
    return(
        <div className="category-view">
            <CategoryCard title="Men" imageURL="/assets/men.jpg"/>
            <CategoryCard title="Women" imageURL="/assets/women.jpg"/>
            <CategoryCard title="Boys" imageURL="/assets/boy.jpg"/>
            <CategoryCard title="Girls" imageURL="/assets/girl.avif"/>
        </div>
    );
}