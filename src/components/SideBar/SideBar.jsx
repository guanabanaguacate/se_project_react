import { useContext } from "react";
import "./SideBar.css";
import avatarDefault from "../../assets/avatar.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function SideBar({ onEditProfileClick, onSignOut }) {
  const currentUser = useContext(CurrentUserContext);

  const username = currentUser?.name;
  const avatar = currentUser?.avatar;

  return (
    <div className="sidebar-container">
      <div className="sidebar__top">
        {avatar ? (
          <img
            src={avatar}
            alt="user avatar"
            className="sidebar__avatar"
          />
        ) : (
          <span className="sidebar__avatar sidebar__avatar_none">
            {username?.toUpperCase().charAt(0) || ""}
          </span>
        )}

        <div className="sidebar__username">{username}</div>
      </div>

      <button
        className="sidebar__edit-button"
        onClick={onEditProfileClick}
      >
        Change profile data
      </button>

      <button
        className="sidebar__signout-button"
        onClick={onSignOut}
      >
        Log out
      </button>
    </div>
  );
}