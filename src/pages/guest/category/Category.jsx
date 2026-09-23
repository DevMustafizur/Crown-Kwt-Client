import React, { useState } from 'react'
import Card from './components/Card'
import "./category.css"
import { filterOptions, products } from '../../../assets/data/Data'
import { Link, useSearchParams } from 'react-router'
import { ChevronDown, ChevronUp } from 'lucide-react'

const Category = () => {
    // const [showCategory, setShowCategory] = useState("hidden")
    const [isCategoryOpen, setIsCategoryOpen] = useState(false)

    const [searchParams, setSearchParams] = useSearchParams();


    return (
        <section id='category'>
            <div className='container'>
                <div className='content-wrapper'>
                    <aside className='category-sidebar-sm'></aside>

                    <aside className="category-sidebar-lg">

                        {/* Fixed Header */}
                        <div className="filter-header">
                            <button className="clear-filter">
                                Clear Filters
                            </button>
                        </div>


                        {/* Scrollable Content */}
                        <div className="filter-content">

                            {/* Categories */}
                            <div className="sidebar-section">
                                <div className="sidebar-section-header">
                                    <h3>Categories</h3>

                                    <button
                                        className="section-toggle"
                                        onClick={() => setIsCategoryOpen(prev => !prev)}
                                        aria-label="Toggle categories"
                                    >
                                        {isCategoryOpen
                                            ? <ChevronUp size={17} />
                                            : <ChevronDown size={17} />
                                        }
                                    </button>
                                </div>
                                <ul
                                    className={`category-list filter-list ${isCategoryOpen ? "is-open" : ""}`}>

                                    {filterOptions.categories.map(category => (
                                        <Link
                                            key={category.value}
                                            className="action-link filter-item"
                                            to={`/category/${category.value}`}
                                        >
                                            {category.label}
                                        </Link>
                                    ))}

                                </ul>
                            </div>

                            {/* Price */}
                            <div className="sidebar-section">

                                <h3>Price</h3>

                                <div className="filter-options filter-list">

                                    {filterOptions.prices.map(price => (

                                        <label key={price.label} className="filter-item">
                                            <input type="checkbox" />
                                            {price.label}
                                        </label>

                                    ))}

                                </div>

                            </div>

                            {/* Flavour */}
                            <div className="sidebar-section">

                                <h3>Flavour</h3>

                                <div className="filter-options filter-list">

                                    {filterOptions.flavours.map(flavour => (
                                        <label key={flavour.value} className="filter-item" >
                                            <input type="checkbox" />
                                            {flavour.label}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Size */}
                            <div className="sidebar-section">

                                <h3>Size</h3>

                                <div className="filter-options filter-list">
                                    {filterOptions.sizes.map(size => (
                                        <label key={size.value} className="filter-item" >
                                            <input type="checkbox" />
                                            {size.label}
                                        </label>
                                    ))}
                                </div>

                            </div>

                        </div>

                    </aside>

                    <div className='main-content'>
                        <header className='main-content-header'>
                            <div className='header-top'>
                                <button>Filters</button>
                                <select name="" id="">
                                    <option value="">Defult</option>
                                    <option value="">option2</option>
                                    <option value="">option3</option>
                                </select>
                            </div>
                            <div className='header-bottom'>
                                product available is 245
                            </div>
                        </header>
                        <div className='category-wrapper'>
                            {
                                products.map((category) => {
                                    return <Card category={category} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category