import { useNavigate } from "react-router"

const Card = ({ card }) => {
    const navigate = useNavigate()
    const handelCategoryDetails = (card) => {
        navigate(`/category/${card.slug}`)
    }
    return (
        <div onClick={() => { handelCategoryDetails(card) }} className="category-item">
            <div className="category-image">
                <img src={card.image} alt="" />
            </div>
            <div className="category-info">
                <h4 className="category-info-name">{card.name}</h4>
                {/* <button className="category-get-btn">See More</button> */}
            </div>
        </div>
    )
}

export default Card