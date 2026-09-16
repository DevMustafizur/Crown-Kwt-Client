import { useState } from 'react'
import { products } from '../../assets/data/Data'
import "./product.css"
import { useParams } from 'react-router'

const Product = () => {
    const { slug } = useParams()
    const matchProduct = products.find(product => product.slug === slug)

    const [image, setImage] = useState(matchProduct?.shape[0])

    function handelSmallImage(imgUrl) {
        setImage(imgUrl)
    }



    return (
        <section id="product">
            <div className="container">
                <div className="product-main">
                    <div className="product-gallery">
                        <div className="product-gallery-small">
                            {
                                products[2].shape.map((imgUrl, index) => {
                                    return (
                                        <img className={`${image ? "active" : ""}`} onClick={() => { handelSmallImage(imgUrl) }} key={index} src={imgUrl} alt="" />
                                    )
                                })
                            }
                        </div>
                        <div className="product-gallery-large">
                            <img
                                src={image}
                                alt="Chocolate Truffle Cake"
                            />
                        </div>
                    </div>

                    <div className="product-info">

                        {/* Product heading */}
                        <div className="product-header">
                            <small className="product-category">{matchProduct.category}</small>

                            <h1 className="product-name">
                                {matchProduct.name}
                            </h1>

                            <div className="product-rating">
                                {/* rating + review count */}
                            </div>
                        </div>

                        {/* Price */}
                        <div className="product-pricing">
                            <div className="product-price">
                                <span className="price-amount">{matchProduct.price}</span>
                                <span className="price-currency">KWD</span>
                            </div>

                            <div className="product-price-details">
                                {/* <del className="product-old-price">1.200 KWD</del>
                                <span className="product-discount">17% OFF</span> */}
                            </div>
                        </div>

                        {/* Description */}
                        <p className="product-description">
                            {matchProduct.description}
                        </p>

                        {/* Product options */}
                        <div className="product-options">

                            {/* Weight Option */}
                            <div className="product-option">
                                <div className="option-header">
                                    <span className="option-label">Weight</span>
                                    <span className="option-selected">1 kg</span>
                                </div>

                                <div className="option-list">
                                    <button className="option-item active">
                                        1 kg
                                    </button>

                                    <button className="option-item">
                                        1.5 kg
                                    </button>

                                    <button className="option-item">
                                        2 kg
                                    </button>
                                </div>
                            </div>


                            {/* Size Option */}
                            <div className="product-option">
                                <div className="option-header">
                                    <span className="option-label">Size</span>
                                    <span className="option-selected">8 inch</span>
                                </div>

                                <div className="option-list">
                                    <button className="option-item active">
                                        6 inch
                                    </button>

                                    <button className="option-item">
                                        8 inch
                                    </button>

                                    <button className="option-item">
                                        10 inch
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Flavor */}
                        <div className="product-option product-flavor">

                            <div className="option-header">
                                <span className="option-label">Flavor</span>
                                <span className="option-selected">{matchProduct.flavour}</span>
                            </div>

                            <div className="option-list">
                                <button className="option-item active">
                                    Chocolate
                                </button>

                                <button className="option-item">
                                    Vanilla
                                </button>

                                <button className="option-item">
                                    Strawberry
                                </button>
                            </div>

                        </div>

                        {/* Quantity */}
                        <div className="product-option product-quantity">

                            <span className="option-label">Quantity</span>

                            <div className="quantity-control">
                                <button className="quantity-btn btn">−</button>

                                <span className="quantity-value">1</span>

                                <button className="quantity-btn btn">+</button>
                            </div>

                        </div>

                        {/* Actions */}
                        <div className="product-actions">

                            <button className="add-to-cart">
                                Add To Cart
                            </button>

                            <button className="add-to-wishlist">
                                Add To Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product