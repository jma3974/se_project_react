import "../SideBar/SideBar.css";
import avatarImage from "../../images/avatar.svg";

const SideBar = () => {
  return (
    <div className="profile__avatar">
      <div>
        <img src={avatarImage} alt="the avatar image for the account" />
      </div>
      <div className="profile__avatar_name">name</div>
    </div>
  );
};

export default SideBar;
