import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";

export default function Profile({
  clothingItems,
  onCardClick,
  onAddClick,
  onCardLike,
  isLoggedIn,
  onEditProfileClick,
  onSignOut,
}) {
  return (
    <section className="profile">
      <SideBar
        onEditProfileClick={onEditProfileClick}
        onSignOut={onSignOut}
      />
      <ClothesSection
        onCardClick={onCardClick}
        clothingItems={clothingItems}
        onAddClick={onAddClick}
        onCardLike={onCardLike}
        isLoggedIn={isLoggedIn}
      />
    </section>
  );
}