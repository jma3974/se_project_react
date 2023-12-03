// import logo from "../images/logo.svg";
import "../blocks/Header.css";

const Header = ({onCreateModal}) => {
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
          <button type="text" onClick={onCreateModal}> Add new clothes</button>
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
