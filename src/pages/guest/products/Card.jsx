import { useNavigate } from "react-router"
import { products } from "../../assets/data/Data"
import "./Products.css"

const Card = ({product}) => {
    const navigate = useNavigate()
    const productHandel = () => {
        navigate(`/product/${product.slug}`)
    }

    return (
        <article onClick={()=> {productHandel()}} className="product">

            {/* Image */}
            <div className="product-image">
                <img

                    src={product.image}
                    alt={product.name}
                />
            </div>

            {/* Basic Info */}
            <div className="product-content">

                {/* Name + Review */}
                <div className="product-title-row">

                    <h3 className="product-name">
                        {product.name}
                    </h3>

                    <div className="product-review">
                        <span className="review-stars">★★★★★</span>
                        {/* <span className="review-count">(24)</span> */}
                    </div>

                </div>

                {/* Description */}
                <p className="product-description">
                    {product.description}
                </p>

                {/* Flavor */}
                <span className="product-flavor">
                    {product.flavour}
                </span>

                {/* Price */}
                <span className="product-price">
                    {product.price} KWD
                </span>

                {/* Action */}
                <button className="product-add-to-cart">
                    Add To Cart
                </button>

            </div>

        </article>
    )
}

export default Card