import {defaultClothingItems,} from "../utils/constants";


const ItemCard = () => {
  return (
    <section id="card-section" className="main__card">
      {defaultClothingItems.map((x) => {
        return (
          <div>
            <div>
              <img src={x.link} className="main__card-image" />
            </div>
            <div className="main__card-name"> {x.name}</div>
          </div>
        );
      })}
    </section>
  );
};

export default ItemCard;
