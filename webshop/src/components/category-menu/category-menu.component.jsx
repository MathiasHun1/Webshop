import CategoryItem from "../category-item/category-item.component"
import './category-menu.component.scss'

export default function CategoryMenu({categories}) {
  return (
    <div className='categories-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category}/>
      ))}
    </div>
  )
}