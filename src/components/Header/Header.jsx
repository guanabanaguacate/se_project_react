import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { NavLink } from "react-router-dom";

function Header({ handleAddClick, weatherData, username }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <NavLink to="/" className="header__logo-link">
        <img className="header__logo" src={logo} alt="header logo" />
      </NavLink>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch />
      <button
        onClick={handleAddClick}
        type="button"
        className="header__add-clothes-btn"
      >
        + Add clothes
      </button>
      <NavLink className="header__nav-link" to="/profile">
        <div className="header__user-container">
          <div className="header__username">
            {username || "Terence Tegegne"}
          </div>
          {avatar ? (
            <img
              src={avatar || avatarDefault}
              alt="user avatar"
              className="header__avatar"
            />
          ) : (
            <span className="header__avatar header__avatar_none">
              {username?.toUpperCase().charAt(0) || ""}
            </span>
          )}
        </div>
      </NavLink>
    </header>
  );
}

export default Header;
