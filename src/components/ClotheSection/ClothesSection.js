import { defaultClothingItems } from "../../utils/constants.js";
import ItemCard from "../ItemCard/ItemCard";

const ClothingSection =({ onCreateModal, onSelectedCard }) => {
return (

<div className="profile__clothingItems">
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
        <section>

{defaultClothingItems.map((clothingItem) => (
          <ItemCard
            clothingItem={clothingItem}
            key={clothingItem._id}
            onSelectedCard={onSelectedCard}
          />
        ))}

        </section>
      </div>

)


}

export default ClothingSection;