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
        <p>Text</p>
        <button type="button">BUTTON</button>
      </div>

      <ul className="clothes-section__items">
        {clothingItems
          .filter((item) => item.weather === weatherData.type)
          .map((item) => (
            <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
          ))}
      </ul>
    </section>
  );
}
