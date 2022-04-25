import './category-item.styles.scss';

import CategoryBody from './category-body.conponent.jsx';

const CategoryItem = (props) => {
  const { imageUrl, title} = props;

  return (
    <div  className="category-container">
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
         <div className="category-body-container">
          <h2>{props.title}</h2>
          <p>Shop Now</p>
         </div>
      </div>
  );
}

export default CategoryItem;