import "./App.css";
import FoodItem from "./components/FoodItem";
import burger from "./assets/burger.png";
import sharwama from "./assets/sharwama.png";
import logo from "./assets/hotstoplogo.png";

const App = () => {
  const foodItems = [
    {
      name: "Pizza",
      imageSrc: burger,
      price: "NGN 2,500.00",
    },
    {
      name: "Burger",
      imageSrc: sharwama,
      price: "NGN 2,000.00",
    },
  ];

  return (
    <>
      <div>
        <header>
          <img src={logo} alt="Logo" />
        </header>
        <h1>Food Ordering Site</h1>
        <div className="container">
          {foodItems.map((foodItem, index) => (
            <FoodItem
              key={index}
              name={foodItem.name}
              imageSrc={foodItem.imageSrc}
              price={foodItem.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
