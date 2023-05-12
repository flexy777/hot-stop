import "./App.css";
import FoodItem from "./components/FoodItem";
import Banner from "./components/Banner";
import logo from "./assets/hotstoplogo.png";
import { foodItems } from "./fooditems";

const App = () => {
  return (
    <>
      <div>
        <header>
          <img src={logo} alt="Logo" />
        </header>

        <h1 className="fw-bold text-center mb-4">Food Ordering Site</h1>
        <Banner />
        <div className="container">
          {foodItems.map((foodItem, index) => (
            <FoodItem
              key={index}
              name={foodItem.name}
              imageSrc={foodItem.imageSrc}
              small_price={foodItem.small_price}
              medium_price={foodItem.medium_price}
              large_price={foodItem.large_price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
