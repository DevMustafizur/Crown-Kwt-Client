import { products } from "../../../assets/data/Data";
import "./product.css";
const Product = () => {
  console.log(products[0].shape.map((src)=> {}))
  return (
    <section id="product">
      <div className="container">
        <div className="product-main">
          <div className="product-gallery">
            <div className="product-gallery-thamnails">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSS1F2bqwKXqSEBh3jFmSUjB5vGoPYWv9hGNDFuRxPNw&s=10" alt="" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSS1F2bqwKXqSEBh3jFmSUjB5vGoPYWv9hGNDFuRxPNw&s=10" alt="" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSS1F2bqwKXqSEBh3jFmSUjB5vGoPYWv9hGNDFuRxPNw&s=10" alt="" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSS1F2bqwKXqSEBh3jFmSUjB5vGoPYWv9hGNDFuRxPNw&s=10" alt="" />
            </div>
            <div className="product-gallery-main">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSS1F2bqwKXqSEBh3jFmSUjB5vGoPYWv9hGNDFuRxPNw&s=10" alt="" />
            </div>
          </div>
          <div className="product-info"></div>
        </div>
      </div>
    </section>
  );
};

export default Product;