import "../Header/Header.css";
import avatarImage from "../../images/avatar.svg";
import wtwrlogo from "../../images/logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

const Header = ({ onCreateModal }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img src={wtwrlogo} alt="wtwr logo" />
          </Link>
        </div>
        <div>{currentDate}</div>
      </div>
      <div className="header__user-interface">
        <div>
          <ToggleSwitch />
        </div>

        <div className="header__avatar-logo">
          <div>
            <button
              className="header__button"
              type="text"
              onClick={onCreateModal}
            >
              + Add clothes
            </button>
          </div>
          <Link to="/profile">name</Link>
          <div>
            <img src={avatarImage} alt="the avatar image for the account" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
