import "./catgories.styles.scss";
import CategoryItem from "./components/category-item/category-items.component";
const App = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];

  const categories_container = categories.map((item) => {
    return (
      <CategoryItem key={item.id} title={item.title} imageUrl={item.imageUrl} />
    );
  });

  return (
    <div className="categories-container">
      {categories_container}
      <h1>Hello</h1>
    </div>
  );
};

export default App;
