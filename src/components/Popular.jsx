import { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopuler();
  }, []);

  const getPopuler = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`
      );
      const data = await api.json();

      localStorage.setItem("popular", JSON.stringify(data.drinks));
      console.log(data.drinks);
      setPopular(data.drinks);
    }
  };
  return (
    <div>
      <h2 className=" text-slate-900 font-semibold text-3xl mb-8">
        Cocktail You Want
      </h2>

      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "4rem",
        }}
      >
        {popular.map((drinks) => {
          return (
            <SplideSlide key={drinks.idDrink}>
              <div className="relative block border border-gray-100 rounded-xl hover:shadow-xl overflow-hidden">
                <img
                  className="object-cover w-full h-56 lg:h-72"
                  src={drinks.strDrinkThumb}
                  alt={drinks.strDrink}
                  loading="lazy"
                />

                <div className="p-6">
                  <h3 className="my-2 text-2xl font-bold text-primary">
                    {drinks.strDrink}
                  </h3>
                  <small className=" block mb-4 text-secondary uppercase tracking-wider">
                    {drinks.strCategory}
                  </small>
                  <span className="text-xs mb-4 font-semibold inline-block py-1 px-2 uppercase rounded text-primary bg-third last:mr-0 mr-1">
                    {drinks.strAlcoholic}
                  </span>

                  <button
                    className="block w-full p-4 mt-4 text-md text-white bg-secondary hover:bg-secondary/80 rounded-md font-semibold"
                    type="button"
                  >
                    View Recipe
                  </button>
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}

export default Popular;
