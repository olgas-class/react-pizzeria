import PizzaCard from "./PizzaCard";

function AppMain() {
  const pizzas = [1, 2, 3, 4, 5,6];

  return (
    <main>
      <div className="container">
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
            {pizzas.map((curPizza) => (
              <div className="col">
                <PizzaCard />
              </div>
            ))}
            {/* <div className="col">
              <PizzaCard />
            </div>
            <div className="col">
              <PizzaCard />
            </div>
            <div className="col">
              <PizzaCard />
            </div>
            <div className="col">
              <PizzaCard />
            </div> */}
          </div>
        </section>
      </div>
    </main>
  );
}

export default AppMain;
