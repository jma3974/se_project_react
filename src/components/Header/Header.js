import "../Header/Header.css";
import avatarImage from "../../images/avatar.svg";
import wtwrlogo from "../../images/logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

const Header = ({ onCreateModal }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={wtwrlogo} alt="wtwr logo" />
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
          <div>name</div>
          <div>
            <img src={avatarImage} alt="the avatar image for the account" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
