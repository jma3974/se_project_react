import { defaultClothingItems } from "../../utils/constants.js";
import ItemCard from "../ItemCard/ItemCard.js";
import "../ItemCard/ItemCard.css";
import "./ClothesSection.css";

const ClothingSection = ({ onCreateModal, onSelectedCard, clothingItems }) => {
  return (
    <div>
      <section className="profile__clothingItems_header">
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
      </section>
      <section className="profile__clothingItems">
        {clothingItems.map((clothingItem) => (
          <ItemCard
            clothingItem={clothingItem}
            key={clothingItem._id}
            onSelectedCard={onSelectedCard}
          />
        ))}
      </section>
    </div>
  );
};

export default ClothingSection;
