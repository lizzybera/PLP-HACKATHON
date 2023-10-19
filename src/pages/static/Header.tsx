import { Link } from "react-router-dom";
import {AiOutlineMenu} from "react-icons/ai"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../mainGlobal/Global";
import { GiTripleCorn } from "react-icons/gi";

const Header = () => {
  const [show,setShow] = useState<boolean>(false)
  const user = useSelector((state : any) => state.user)
  const dispatch = useDispatch()

  const Change = () => {
    setShow(!show)
  }

  return (
    <>
      <div className="w-[100%] h-[70px] flex items-center justify-center ">
        <div className="w-[70%] h-[70px] flex items-center justify-between ">
          <div className="flex text-[20px] font-bold text-white">
          <div
            className="
        flex
        items-center
        "
          >
            <GiTripleCorn
              className="
          text-[#ffff]
          text-[40px]
          screen375:text-[30px]
          "
            />
            <div
              className="
          text-[30px]
          text-[#fff]
          ml-[5px]
          font-[500]
          screen375:text-[25px] screen375:font-[700]
          "
            >
              ECO~DATA
            </div>
          </div>
          </div>
          
          {
            user ? (
              <div className="px-4 py-2 hover:bg-[darkorange] rounded-md bg-slate-400 text-white text-[18px] font-bold duration-[350ms]   screen425:hidden"
              onClick={()=>{
                dispatch(logOut())
              }}
              >logout</div>
            ) : (
              <div>
            <AiOutlineMenu size={23} className="text-white hidden screen425:flex " 
            onClick={()=>{
              Change()
            }}
            />
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
            )
          }

         
        </div>

         {
          show ? (
              <div className="w-[100%] absolute h-[50px] top-[50px] bg-white hidden screen425:flex screen425:flex-col">
              <Link to={"/register"}>
            <div className="w-full h-[40px] bg-white border flex items-center px-5 cursor-pointer justify-center hover:text-white hover:bg-green-400 duration-[350ms] font-[600]">Sign up</div></Link>

            <Link to={"/sign-in"}>
            <div className="w-full h-[40px] bg-white border flex items-center px-5 cursor-pointer justify-center hover:text-white hover:bg-green-400 duration-[350ms] font-[600]">login in</div></Link>
          </div>
          ) : null
         }
      </div>
    </>
  );
};

export default Header;
