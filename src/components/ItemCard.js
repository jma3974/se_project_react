const ItemCard = ({ clothingItem, onSelectedCard }) => {
  
  return (
    <div>
      <div>
        <img
          className="main__cards-image"
          src={clothingItem.link}
          alt={clothingItem.name}
          onClick={() => onSelectedCard(clothingItem)}
        />
      </div>
      <div className="main__cards-name">{clothingItem.name}</div>
    </div>
  );
};

export default ItemCard;
