import "../Profile/Profile.css";
import SideBar from "../SideBar/SideBar.js";
import ClothesSection from "../ClothesSection/ClothesSection.js";

function Profile({ onCreateModal, onSelectedCard, clothingItems }) {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection
        onCreateModal={onCreateModal}
        onSelectedCard={onSelectedCard}
        clothingItems={clothingItems}
      />
    </div>
  );
}

export default Profile;
