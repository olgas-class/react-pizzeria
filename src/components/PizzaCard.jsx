import style from "./PizzaCard.module.css";
import PrimaryButton from "./PrimaryButton";

function PizzaCard({ image, title, description, price, available }) {
  const imagePath = `/images/${image}`;

  return (
    <div className={style.card}>
      {/* Card Image */}
      <div className={style.image}>
        <img src={imagePath} alt="" />
      </div>
      {/* Card content */}
      <div className={style.content}>
        <h5 className="mb-1">{title}</h5>
        <p className={style.description}>{description}</p>
        <div className={style.price}>{price}</div>
        {available && <PrimaryButton text="Aggiungi al carrello" />}
      </div>
    </div>
  );
}

export default PizzaCard;
