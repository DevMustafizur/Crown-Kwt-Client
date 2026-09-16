import { categories } from "../../assets/data/Data"
import Category from "./Category"
import "./Home.css"

const Categories = () => {
    return (
        <section id='categories'>
            <div className='container'>
                <header className='category-header'>
                    
                </header>
                <div className='categories-wrapper'>
                    {
                        categories.map((category, index)=> {
                           return <Category key={index} category={category} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Categories