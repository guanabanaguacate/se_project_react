import { useContext } from "react";
import "./SideBar.css";
import avatarDefault from "../../assets/avatar.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function SideBar({ onEditProfileClick, onSignOut }) {
  const currentUser = useContext(CurrentUserContext);

  const username = currentUser?.name;
  const avatar = currentUser?.avatar;

  return (
    <aside className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar__username">{username}</div>
        {avatar ? (
          <img
            src={avatar || avatarDefault}
            alt="user avatar"
            className="sidebar__avatar"
          />
        ) : (
          <span className="sidebar__avatar sidebar__avatar_none">
            {username?.toUpperCase().charAt(0) || ""}
          </span>
        )}
        <button
          type="button"
          className="sidebar__edit-button"
          onClick={onEditProfileClick}
        >
          Change profile data
        </button>
        <button
          type="button"
          className="sidebar__signout-button"
          onClick={onSignOut}
        >
          Log out
        </button>
      </div>
    </aside>
  );
}