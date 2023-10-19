import bg from "../assets/mountains.svg";
import Header from "./static/Header";
import { GiTrophyCup } from "react-icons/gi";
const Hero = () => {
  return (
    <>
      <div
        className="w-[100%] h-[90vh] "
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="w-[100%] h-[90vh]"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <Header />
          <div className="w-[100%] h-[200px]  flex items-center justify-center">
            <div className="w-[85%] h-[200px]  flex items-center justify-between">
              <div className="text-white flex items-center justify-center flex-col mt-56">
                <span className=" text-[35px] font-bold  mr-20">
                  Real-Time & Historical <br /> World Weather Data API
                </span>
                <p className=" text-[20px] font-bold ">
                  Retrieve instant, accurate weather information for <br /> any
                  location in the world in lightweight JSON format
                </p>
                <div className=" px-10 py-3 rounded-full bg-[#43677C] flex items-center justify-center">
                  <GiTrophyCup size={25} />
                  <span className="text-[20px] font-bold">
                    Trusted by 75,000 companies worldwide
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="px-7 py-4 rounded-md text-white bg-[#F47E45] font-bold">
                    START USING THE API
                  </div>
                  <span className="ml-3">— It's free!</span>
                </div>
              </div>
              <div className="w-[550px] h-[400px] border-[2px] mt-56 border-[#5F8094] ml-5 flex-col grid grid-rows-1fr grid-cols-1 ">
                <div>kkkkkkkkkk</div>
                <div>kkkkkkkkkk</div>
                <div>kkkkkkkkkk</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
