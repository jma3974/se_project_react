import "../Profile/Profile.css";
import SideBar from "../SideBar/SideBar.js";
import ClothingSection from "../ClothesSection/ClothesSection.js";

function Profile({ onCreateModal }) {
  return (
    <div className="profile">
      <SideBar />
      <ClothingSection />
    </div>
  );
}

export default Profile;
