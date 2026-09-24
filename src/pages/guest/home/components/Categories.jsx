import { categories } from "../../../../assets/data/Data"
import Card from "./Card"

const Categories = () => {
    return (
        <section id='categories'>
            <div className='container'>
                <div className="categories-main">
                    <header className="category-header">
                       <h2>CATEGORIES</h2>
                    </header>
                    <div className='categories-wrapper'>
                        {
                            categories.map((category, index) => {
                                return <Card key={index} card={category} />
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categories