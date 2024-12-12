import style from "./PrimaryButton.module.css"

function PrimaryButton() {
  const buttonText = "Add to Cart";

  return (
    <button className={style.button}>
      {buttonText}
    </button>
  )
}

export default PrimaryButton;