import "./Header.css";

const Header = () => {
  console.log('Header')
  return (
    <header className="header">
      <div className="header__logoDate">
        <div>
          <img src={require("../images/logo.svg").default} alt="WTWR" />
        </div>
        <div>Date</div>
      </div>
      <div className="header__buttonNameAvatar">
        <div>
          <button type="text">Add clothing</button>
        </div>
        <div>Name</div>
        <div>
          <img src= {require("../images/avatar.svg").default} />
        </div>
      </div>
    </header>
  );
};

export default Header;
