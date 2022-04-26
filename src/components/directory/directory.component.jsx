import CategoryItem from "../category-item/category-items.component";
import './directory.styles.scss';

const Directory = (props) => {
  const {categories} = props;
  const categories_container = categories.map((item) => {
    return (
      <CategoryItem key={item.id} title={item.title} imageUrl={item.imageUrl} />
    );
  });

  return (
    <div className="categories-container">
      {categories_container}
    </div>
  )
}

export default Directory