import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

export default function ClothesSection({
  clothingItems,
  weatherData,
  onCardClick,
}) {
  return (
    <section className="clothes-section">
      <div className="clothes-section__row">
        <p className="clothes-section__row-items-text">Your items</p>
        <button className="clothes-section__row-button" type="button">+ Add new</button>
      </div>

      <ul className="clothes-section__items">
        {
          console.log(clothingItems)
        }
        { clothingItems.length !==0 &&
        clothingItems 
          .map((item) => (
            <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
          ))}
      </ul>
    </section>
  );
}
