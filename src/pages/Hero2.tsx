import bg from "../assets/mountains.svg";
import Header from "./static/Header";
import { GiTrophyCup } from "react-icons/gi";
const Hero2 = () => {
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
          className="w-[100%] h-[90vh] "
          style={{ backgroundColor: "rgba(45, 88, 112, 0.4)" }}
        >
          <Header />
          <div className="w-[100%] h-[200px]  flex items-center justify-center">
            <div className="w-[85%] h-[200px]  flex items-center justify-between">
              <div className="text-white flex items-center justify-center flex-col mt-[300px]">
                <span className=" text-[30px] font-bold ">
                  Real-Time & Historical <br /> World Weather Data API
                </span>
                <p className=" text-[17px] font-bold my-7">
                  Retrieve instant, accurate weather information for <br /> any
                  location in the world in lightweight JSON format
                </p>
                <div className=" px-10 py-3 rounded-full bg-[#43677C] flex items-center justify-center my-5">
                  <GiTrophyCup size={25} />
                  <span className="text-[20px] font-bold">
                    Trusted by 75,000
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="px-5 cursor-pointer py-3 rounded-md text-white bg-[#F47E45] font-bold mt-4">
                    START USING THE API
                  </div>
                  <span className="ml-3">— It's free!</span>
                </div>
              </div>
              <div className="w-[450px] h-[400px] border-[2px] mt-[300px] border-[#5F8094] ml-[20px] flex-col grid grid-rows-1fr grid-cols-1 ">
                <div className="border flex items-center justify-center">kkkkkkkkkk</div>
                <div className="grid grid-rows-3 gap-3">
                    <div>a</div>
                    <div>b</div>
                    <div>c</div>
                </div>
                <div>kkkkkkkkkk</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero2;
