import { useNavigate } from "react-router"
import "./Home.css"

const Category = ({ category }) => {
    const navigate = useNavigate()
    const handelCategoryDetails = (category) => {
        navigate(`/category/${category.slug}`)
    }
    return (
        <div onClick={() => { handelCategoryDetails(category) }} className="category-item">
            <div className="category-image">
                <img src={category.image} alt="" />
            </div>
            <div className="category-info">
                <h4 className="category-info-name">{category.name}</h4>
                <button className="category-get-btn">See More</button>
            </div>
        </div>
    )
}

export default Category