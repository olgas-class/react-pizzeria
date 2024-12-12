import style from "./PizzaCard.module.css";
import PrimaryButton from "./PrimaryButton";

function PizzaCard() {
  const pizza = {
    image: "/images/diavola.jpeg",
    title: "Original",
    description: "Tomato souce, mozzarella & oregano",
    price: "€ 6.00",
  };

  return (
    <div className={style.card}>
      {/* Card Image */}
      <div className={style.image}>
        <img src={pizza.image} alt="" />
      </div>
      {/* Card content */}
      <div className={style.content}>
        <h5 className="mb-1">{pizza.title}</h5>
        <p className={style.description}>{pizza.description}</p>
        <div className={style.price}>{pizza.price}</div>
        <PrimaryButton />
      </div>
    </div>
  );
}

export default PizzaCard;
