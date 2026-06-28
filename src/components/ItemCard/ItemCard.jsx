import { useContext } from "react";
import "./ItemCard.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import likeActive from "../../assets/likedbutton.png";
import likeInactive from "../../assets/likebutton.png";

function ItemCard({ item, onCardClick, onCardLike, isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);

  const handleCardClick = () => {
    onCardClick(item);
  };

  // Check if the item was liked by the current user
  const isLiked = item.likes?.some((id) => id === currentUser?._id);

  const itemLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_active" : ""
  }`;

  const handleLike = () => {
    onCardLike({ id: item._id, isLiked });
  };

  return (
    <li className="card">
      <div className="card__header">
        <h2 className="card__name">{item.name}</h2>

        {isLoggedIn && (
          <button
            type="button"
            className={itemLikeButtonClassName}
            onClick={handleLike}
          >
            <img
              src={isLiked ? likeActive : likeInactive}
              alt={isLiked ? "Unlike item" : "Like item"}
              className="card__like-icon"
            />
          </button>
        )}
      </div>

      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      ></img>
    </li>
  );
}

export default ItemCard;
