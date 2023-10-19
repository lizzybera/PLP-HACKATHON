import { Link } from "react-router-dom";
import {AiOutlineMenu} from "react-icons/ai"
import { useState } from "react";

const Header = () => {
  const [show,setShow] = useState<boolean>(false)

  const Change = () => {
    setShow(!show)
  }
  return (
    <>
      <div className="w-[100%] h-[70px] flex items-center justify-center ">
        <div className="w-[70%] h-[70px] flex items-center justify-between">
          <div className="flex text-[20px] font-bold text-white">
            <span>Logo</span>
            <p>WeatherData</p>
          </div>
          <div>
            <AiOutlineMenu size={23} className="text-white hidden screen425:flex" />
            <Link to={"/sign-in"}>
              <button className="px-4 py-2 hover:bg-[darkorange] rounded-md bg-slate-400 text-white text-[18px] font-bold duration-[350ms] mr-5 screen425:hidden">
                login
              </button>
            </Link>
            <Link to={"/register"}>
              <button className="px-4 py-2 hover:bg-[darkorange] rounded-md bg-slate-400 text-white text-[18px] font-bold duration-[350ms]   screen425:hidden">
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
