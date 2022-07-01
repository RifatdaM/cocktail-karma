import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewCatagory() {
  const [catagory, setCatagory] = useState([]);
  let params = useParams();

  const getCatagory = async (name) => {
    const api = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${name}`
    );
    const data = await api.json();

    // console.log(data.drinks);
    setCatagory(data.drinks);
  };

  useEffect(() => {
    getCatagory(params.type);
    // console.log(params.type);
  }, [params.type]);

  return (
    <div>
      <h2 className="text-secondary font-semibold text-5xl mb-8 text-center">
        {params.type} Drinks
      </h2>

      <div className="grid grid-cols-4 gap-12">
        {catagory.map((item) => {
          return (
            <div
              key={item.idDrink}
              className="block overflow-hidden group"
              href="/products/basic-tee"
            >
              <div className="shadow-[0_4px_0_0_rgba(0,0,0,1)] border-2 border-black rounded-3xl overflow-hidden">
                <img
                  className="group-hover:scale-105 transition-transform duration-500 object-cover w-full h-[350px] sm:h-[450px]"
                  src={item.strDrinkThumb}
                  alt={item.strDrink}
                />
              </div>

              <div className="relative pt-4">
                <h3 className="text-sm group-hover:underline text-secondary group-hover:underline-offset-4">
                {params.type}
                </h3>

                <p className="mt-2">
                  <span className=" text-primary text-2xl font-semibold tracking-wider">
                    {item.strDrink}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ViewCatagory;
