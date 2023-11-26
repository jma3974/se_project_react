const ItemCard = ({ clothingItem }) => {
  console.log("item card")
  return (
    <div>
      <div>
        <img
          className="main__cards-image"
          src={clothingItem.link}
          alt={clothingItem.name}
        />
      </div>
      <div className="main__cards-name">{clothingItem.name}</div>
    </div>
  );
};

export default ItemCard;
