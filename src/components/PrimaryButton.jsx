import style from "./PrimaryButton.module.css"

function PrimaryButton({text}) {
  // props è un oggetto
  /**
   * props = {
   *  text: "Login",
   * }
   * 
   */

  // const {text} = props; 
  

  return (
    <button className={style.button}>
      {text}
    </button>
  )
}


export default PrimaryButton;