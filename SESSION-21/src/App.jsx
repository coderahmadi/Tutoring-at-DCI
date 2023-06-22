import "bootstrap/dist/css/bootstrap.css";
import ProductList from "./ProductList";
function App() {
  // const [count, setCount] = useState(0)

  const products = [
    { id: 1, name: "Apple", price: 2, category: "Fruit" },
    { id: 2, name: "Pear", price: 3, category: "Fruit" },
    { id: 3, name: "Carrot", price: 1, category: "Vegetable" },
    { id: 4, name: "Cheese", price: 4, category: "Dairy" },
    { id: 5, name: "Milk", price: 3, category: "Dairy" },
    { id: 6, name: "Bread", price: 2, category: "Bakery" },
    { id: 7, name: "Tomato", price: 1, category: "Vegetable" },
  ];

  return (
    <>
      <ProductList products={products} />
    </>
  );
}

export default App;
