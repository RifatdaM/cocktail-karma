import { FaCocktail, FaCoffee } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Catagory() {
  return (
    <div className="flex gap-8 justify-center my-8 mx-0">
      <NavLink to={"/catagory/Alcoholic"} className="icon__card">
        <FaCocktail className=" text-3xl " />
        <small className=" text-sm pt-2">Alcoholic</small>
      </NavLink>
      <NavLink to={"/catagory/Non_Alcoholic"} className="icon__card">
        <FaCoffee className=" text-3xl " />
        <small className=" text-sm pt-2">Non Alcoholic</small>
      </NavLink>
    </div>
  );
}

export default Catagory;
