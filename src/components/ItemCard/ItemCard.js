import "../ItemCard/ItemCard.css";

const ItemCard = ({ clothingItem, onSelectedCard }) => {
  return (
    <div className="itemCard">
      <div className="main__cards_header itemCard__header">
        <div className="main__cards-name">{clothingItem.name}</div>
        <button type="button" className="main__cards-like" />
      </div>

      <div>
        <img
          className="main__cards-image"
          src={clothingItem.imageUrl}
          alt={clothingItem.name}
          onClick={() => onSelectedCard(clothingItem)}
        />
      </div>
    </div>
  );
};

export default ItemCard;
