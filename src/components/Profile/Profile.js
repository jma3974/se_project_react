import "../Profile/Profile.css";
import SideBar from "../SideBar/SideBar.js";
import ClothingSection from "../ClotheSection/ClothesSection.js"

function Profile({ onCreateModal }) {
  return (
    <div className="profile">
        <SideBar />
        <ClothingSection />
      {/* <div className="profile__avatar">
        <div>
          <img src={avatarImage} alt="the avatar image for the account" />
        </div>
        <div className="profile__avatar_name">name</div>
      </div> */}
      {/* <div className="profile__clothingItems">
      <div className="profile__clothingItems_header">
        <div>Your Items</div>
        <div>
          <button
            className="profile__clothingItems_add header__button"
            type="text"
            onClick={onCreateModal}
          >
            + Add clothes
          </button>
          </div>
        </div>
        <div>

Cards with profile

        </div>
      </div> */}
    </div>
  );
}

export default Profile;
