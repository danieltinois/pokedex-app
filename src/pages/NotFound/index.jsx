import { Link, useNavigate } from "react-router-dom";

import iconNotFound from "../../assets/Team_Rocket_trio_OS 1.png";
import buttonReturn from "../../assets/svg/buttonReturn.svg";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-red-500 text-white relative overflow-hidden">
      <h1 className="relative -top-14 text-[250px] inset-0 flex justify-center items-center text-red-900 sm:text-[400px] md:text-[400px] lg:text-[600px] xl:text-[900px] font-extrabold">
        404
      </h1>
      <div className="absolute top-20 inset-0 flex flex-col justify-center items-center">
        <img src={iconNotFound} alt="Icon notfound" />
        <h2 className="text-4xl font-bold">
          The rocket team <span className="text-black">has won this time.</span>
        </h2>
        <Link className="mt-20 transition-all hover:scale-105" to="/">
          <img src={buttonReturn} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
