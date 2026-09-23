import { useNavigate } from "react-router"

const Card = ({ category }) => {
  const navigate = useNavigate()
  const changeRoot = () => {
    navigate("/product/1")
  }
  return (
    <div className="category-card" onClick={changeRoot}>
      <div className="category-image">
        <img src={category.image} alt="" />

        <div className="category-overlay">
          <button className="category-add-btn">+</button>

          <div className="category-quantity">
            <button className="quantity-btn quantity-decrease">-</button>
            <span className="quantity-value">1</span>
            <button className="quantity-btn quantity-increase">+</button>
          </div>
        </div>
      </div>
      <div className="category-details">
        <div className="category-top-details">
          <h5 className="category-name">{category.name}</h5>
          <h5 className="category-desc">{category.description}</h5>
        </div>
        <div className="category-bottom-details">
          <h5>$<span>14</span></h5>
        </div>
      </div>
    </div>
  )
}

export default Card