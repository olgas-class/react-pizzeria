import style from "./AppHeader.module.css";
import PrimaryButton from "./PrimaryButton";

function AppHeader() {
  const isLoggedIn = true;
  const username = ""

  const printGreeting = () => <p>Ciao {username || "unknown user"}</p>;
  const printLogin = () => <PrimaryButton text="Login" />;

  return (
    <header className={style.header}>
      <div>
        {isLoggedIn ? printGreeting() : printLogin()}
      </div>
      <div className="container">
        <h1 className={style.title}>Menu</h1>
      </div>
    </header>
  );
}

export default AppHeader;
