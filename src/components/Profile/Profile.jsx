import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";

export default function Profile({ clothingItems, onCardClick, onAddClick }) {
  return (
    <section className="profile">
      <SideBar />
      <ClothesSection
        onCardClick={onCardClick}
        clothingItems={clothingItems}
        onAddClick={onAddClick}
      />
    </section>
  );
}
