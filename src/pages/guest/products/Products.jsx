import { useParams } from "react-router"
import { categories, products } from "../../assets/data/Data"
import Card from "./Card"
import "./products.css"
import { useState } from "react"

const Products = () => {
  const { slug } = useParams()

  const matchCategory = categories.find((category) => {
    return category.slug === slug;
  });

  const categoryId = matchCategory?.id;

  const relatedProducts = products.filter(
    product => product.category === categoryId
  );

  return (
    <section id="products">
      <div className="container">
        <div className="products-content">

          <aside className="products-sidebar-large">

            {/* Filter Header */}
            <header className="products-filter-header">
              <h4 className="products-filter-title">Filters</h4>

              <button className="products-filter-clear">
                Clear All
              </button>
            </header>


            {/* Category */}
            <div className="filter-group category">

              <h5 className="filter-title">
                Category
              </h5>

              <div className="filter-options">

                <label className="filter-option">
                  <span>Birthday</span>
                </label>

                <label className="filter-option">
                  <span>Wedding</span>
                </label>

                <label className="filter-option">
                  <span>Anniversary</span>
                </label>

                <label className="filter-option">
                  <span>Kids</span>
                </label>

              </div>

            </div>


            {/* Price */}
            <div className="filter-group">

              <h5 className="filter-title">
                Price
              </h5>

              <div className="filter-options">

                <label className="filter-option">
                  <input type="checkbox" />
                  <span>Under 2 KWD</span>
                </label>

                <label className="filter-option">
                  <input type="checkbox" />
                  <span>2 KWD & Above</span>
                </label>

              </div>

            </div>


            {/* Flavor */}
            <div className="filter-group">

              <h5 className="filter-title">
                Flavor
              </h5>

              <div className="filter-options">

                <label className="filter-option">
                  <input type="checkbox" />
                  <span>Chocolate</span>
                </label>

                <label className="filter-option">
                  <input type="checkbox" />
                  <span>Vanilla</span>
                </label>

                <label className="filter-option">
                  <input type="checkbox" />
                  <span>Strawberry</span>
                </label>

                <label className="filter-option">
                  <input type="checkbox" />
                  <span>Red Velvet</span>
                </label>

              </div>

            </div>


          </aside>

          <aside className="products-sidebar-small">
          </aside>

          <div className="products-main">

            <div className="products-toolbar">

            </div>

            <div className="products-wrapper">
              {
                relatedProducts.length === 0 ? <h1>Product not found</h1> : 
                
                relatedProducts.map((product, index) => {
                  
                  return (
                    <Card key={index} product={product} />
                  )
                })
              }

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Products