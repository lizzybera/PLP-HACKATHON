/** @format */

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="w-[100%] h-[70px] bg-[#2F5972] flex items-center justify-center">
        <div className="w-[70%] h-[70px] flex items-center justify-between">
          <div className="flex text-[20px] font-bold text-white">
            <span>Logo</span>
            <p>WeatherData</p>
          </div>
          <div>
            <Link to={"/sign-in"}>
              <button className="px-5 py-3 rounded-md bg-slate-400 text-white text-[18px] font-bold mr-4">
                login
              </button>
            </Link>
            <Link to={"/register"}>
              <button className="px-5 py-3 rounded-md bg-slate-400 text-white text-[18px] font-bold">
                sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
