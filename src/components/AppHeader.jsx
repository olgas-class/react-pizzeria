import style from "./AppHeader.module.css";

function AppHeader() {
  return (
    <header className={style.header}>
      <div className="container">
        <h1 className={style.title}>Menu</h1>
      </div>
    </header>
  );
}

export default AppHeader;
