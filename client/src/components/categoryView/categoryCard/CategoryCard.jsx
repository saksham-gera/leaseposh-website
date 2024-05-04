import "./CategoryCard.css"

export default function CategoryCard({title,imageURL}) {
    return(
        <div className="category-card">
            <div className="category-card-bg">
                <img src={imageURL}></img>
            </div>
            <div className="category-card-overlay">{title}</div>
        </div>
    );
}
