import PizzaCard from "./PizzaCard";
import pizzasArray from "../data/pizze";

function AppMain() {
  const isBlackFirday = true;

  const printPizzas = () => {
    return pizzasArray.map((curPizza) => (
      <div className="col" key={curPizza.id}>
        <PizzaCard
          image={curPizza.image}
          title={curPizza.title}
          description={curPizza.description}
          price={curPizza.price}
          available={curPizza.available}
          vegetarian={curPizza.vegetarian}
        />
      </div>
    ));
  };

  const printEmptyState = () => <p>Non ci sono le pizze che cerchi!</p>;

  const printBlackFridayBanner = () => (
    <section className="mb-2 text-center">
      OGGI é il BLACK FRIDAY! Sconto 50% su tutte le pizze
    </section>
  );

  return (
    <main>
      <div className="container">
        {isBlackFirday && printBlackFridayBanner()}

        <section className="text-center mb-2">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            placeat dolorem voluptatibus vero laudantium autem omnis architecto
            quis consequatur ullam optio est, fuga molestiae sit explicabo
            deserunt? Et, pariatur sapiente!
          </p>
        </section>

        <section>
          <div className="row">
            {/* Se l'array non è vuoto
              stampo le pizze
            Altrimenti
              stampo empty state message */}
            {pizzasArray.length > 0 ? printPizzas() : printEmptyState()}
          </div>
        </section>
      </div>
    </main>
  );
}

export default AppMain;
