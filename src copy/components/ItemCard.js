const ItemCard = ({ clothingItem, onSelectedCard }) => {
  return (
    <div>
      <div className="main__cards_header">
        <div className="main__cards-name">{clothingItem.name}</div>
        <button type="button" className="main__cards-like" />
      </div>

      <div>
        <img
          className="main__cards-image"
          src={clothingItem.link}
          alt={clothingItem.name}
          onClick={() => onSelectedCard(clothingItem)}
        />
      </div>
    </div>
  );
};

export default ItemCard;
