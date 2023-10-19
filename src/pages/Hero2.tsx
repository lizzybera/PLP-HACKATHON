import Header from "./static/Header";
import { GiTrophyCup } from "react-icons/gi";
import pic1 from "../assets/weather_icon_cloud_slight_rain.svg"
import pic3 from "../assets/weather_icon_full_clouds.svg"
import pic5 from "../assets/weather_icon_partly_cloudy.svg"
import pic4 from "../assets/weather_icon_sun_rain_clouds.svg"
const Hero2 = () => {
  return (
    <>
      <div
        className="w-[100%] h-[90vh] hello "
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        
      >
        <div
          className="w-[100%] h-[90vh] "
        >
          <Header />
          <div className="w-[100%] h-[200px]  flex items-center justify-center ">
            <div className="w-[85%] h-[200px]  flex items-center justify-between">
              <div className="text-white flex items-center justify-center flex-col  mt-[300px]">
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
              <div className="w-[460px] h-[400px] border-[5px] mt-[300px] bg-[#16394C] rounded-lg border-[#5F8094] ml-[20px] flex flex-col justify-between py-5 px-10">
                <div className="flex items-center justify-center text-white text-[20px] font-bold">Makoko, Lagos, Nigeria</div>
                <div className="flex w-[100%]  justify-between">
                  <div>
                    <img src={pic4} alt="Loading..." className="h-[100px]"/>
                    <span className="ml-3 font-[600] text-white">Light Drizzle</span>
                     </div>
                  <div className="text-white mt-12 text-[25px] font-bold">28°c</div>
                  <div className="text-white mt-12">
                    <div>Wind: 12 kmph</div>
                    <div>Precip: 0 mm</div>
                    <div>Pressure: 1014 mb</div>
                    </div>
                </div>

                <div className="w-full flex items-center justify-between text-white">
                  
                  <div className="">
                    <span className="font-[700]">Mon</span>
                    <img src={pic5} alt="Loading..." />
                    <p>27°c</p>
                  </div>

                  <div className="">
                    <span className="font-[700]">Mon</span>
                    <img src={pic1} alt="Loading..." />
                    <p>27°c</p>
                  </div>

                  <div className="">
                    <span className="font-[700]">Mon</span>
                    <img src={pic3} alt="Loading..." />
                    <p>27°c</p>
                  </div>

                  <div className="">
                    <span className="font-[700]">Mon</span>
                    <img src={pic1} alt="Loading..." />
                    <p>27°c</p>
                  </div>

                  <div className="">
                    <span className="font-[700]">Mon</span>
                    <img src={pic1} alt="Loading..." />
                    <p>27°c</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero2;
