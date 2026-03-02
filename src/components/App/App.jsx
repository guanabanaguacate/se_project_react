import { Routes, Route } from "react-router-dom";
import Profile from "../Profile/Profile";
import { useEffect, useState } from "react";
import AddItemModal from "../AddItemModal/AddItemModal";
import { coordinates, APIkey } from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ItemModal from "../ItemModal/ItemModal";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import Footer from "../Footer/Footer";
import "./App.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import {getItems, addItem, removeItem} from "../../utils/api";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "",
    isDay: false,
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState([]);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "F") {
      setCurrentTemperatureUnit("C");
    } else {
      setCurrentTemperatureUnit("F");
    }
  };

  // const handleGetItem = () => {
  //   fetch().then(item => {
  //     setClothingItems(oldArray => [...oldArray, item])
  //   })
  // }

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const onAddItem = (inputValues) => {
    const newCardData = {
      name: inputValues.name,
      imageUrl: inputValues.imageUrl,
      weather: inputValues.weather,
    };
    
addItem(newCardData) 
.then((data) => {
    setClothingItems([data, ...clothingItems]);
    closeActiveModal(); 
})
.catch(console.error);

    // closeActiveModal();
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    // api
      getItems()
      .then((items) => {
        setClothingItems(items.reverse());
        console.log(items);
      })
      .catch(console.error);
  }, []);

  // todo 
  // add delete bgutton to the preview modal
  // declare a handler in app.jsx (deleteItemHandler)
  // pass handler to preview modal
  //inside the preview modal, pass the ID as an argument to the handler
  // use this pattern (use the handler pattern found in itemCard): function ItemCard({ item, onCardClick }) {
  //const handleCardClick = () => {
  //  onCardClick(item);
  //};
  //... Inside the handler
  // -call the remove item funciton, pass it the ID
  // -in the .then() remove the item from the array
  // -how? filter


  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="page">
        <div className="page__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  onAddButtonClick={setActiveModal}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route
              path="/profile"
              element={
                clothingItems.length !==0 &&
                <Profile
                  onCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
          </Routes>
        </div>
        {activeModal === "add-garment" && (
          <AddItemModal
            onCloseModal={closeActiveModal}
            onClose={closeActiveModal}
            isOpen={activeModal === "add-garment"}
            onAddItem={onAddItem}
          />
        )}
        <ItemModal
          activeModal={activeModal}
          card={selectedCard || {}}
          onClose={closeActiveModal}
          isOpen={activeModal === "preview"}
        />
        <Footer />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
