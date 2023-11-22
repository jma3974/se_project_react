// import logo from "../images/logo.svg";
import "./Header.css";

const Header = () => {
  console.log("header");

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={require("../images/logo.svg").default} alt="wtwr logo" />
        </div>
        <div>date</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button type="text">Add new clothes</button>
        </div>
        <div>name</div>
        <div>
          <img
            src={require("../images/avatar.svg").default}
            alt="the avatar image for the account"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
