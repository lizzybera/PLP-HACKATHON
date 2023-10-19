import { FiSearch } from "react-icons/fi";
import { RiCompassLine } from "react-icons/ri";
import { LiaCloudSunRainSolid } from "react-icons/lia";
import { TiWeatherShower, TiWeatherDownpour } from "react-icons/ti";
import { IoNavigate } from "react-icons/io5";
import { MdArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleFalse, toggleTrue } from "../mainGlobal/Global";
import i from "../assets/Solar-radiation-map-of-Nigeria-Data-source-44.png";
import ii from "../assets/Connectivity-in-Nigeria-no-title-1.png";
import iii from "../assets/5-Figure2-1.png";
import { useState, useEffect } from "react";
import { weatherAPI } from "../api/authApis";

// gggghhnbniuy
const DetailScreen = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state: any) => state.toggle);

  const [text, setText] = useState("");
  const [state, setState] = useState({});

  const getWheather = () => {
    weatherAPI(text).then((res: any) => {
      setState(res);
    });
  };

  // useEffect(() => {
  //   getWheather();
  // }, [state]);

  console.log(state);
  const humidity = state?.current?.humidity;
  const cloud = state?.current?.cloud;

  return (
    // container
    <div className="w-full h-full bg-[#FFFFFF] flex">
      {/* main */}
      <div className="w-full h-full  flex flex-col items-center">
        {/* mini header */}
        <div className="h-[60px] w-full bg-[#e0d0d0] flex justify-center items-center ">
          <div className="w-[400px] h-[40px] screen375:h-[35px] screen320:h-[30px] screen375:w-[350px] screen320:w-[250px] border rounded bg-[#ebe5e5]  flex items-center">
            <input
              placeholder="Enter the city name...."
              type="text"
              value={text}
              onChange={(e: any) => {
                setText(e.target.value);
              }}
              className=" w-[90%] h-full outline-none border-none rounded pl-[5px]"
            />
            <FiSearch
              className="text-[25px]  ml-[5px] max-m"
              onClick={getWheather}
            />
          </div>
        </div>
        <div className="w-[70%] h-full screen320:w-[90%] screen375:w-[90%] py-8">
          {/* part A */}
          <div className="h-[40%] screen320:flex-col screen375:flex-col  w-full flex justify-between">
            <div className="w-[30%] flex flex-col screen320:w-full screen375:w-full screen375:my-2 pt-[10px]">
              <span className="text-[14px] font-[450] ml-1 text-[red] ">
                {state?.location?.localtime}
              </span>
              <span className="text-[20px] font-[700] ml-1 mb">
                {state?.location?.name}, {state?.location?.country}
              </span>
              <div>
                <div className="flex items-center">
                  <TiWeatherShower className="text-[30px] ml-1" />
                  <span className="text-[36px] font-[100]">
                    {state?.current?.temp_c}°C
                  </span>
                </div>
                <span className="text-[14px] font-[700] ml-1">
                  Feels like {state?.current?.feelslike_c}°C.{" "}
                  {state?.current?.condition.text}
                </span>
                {/* last */}
                <div className="border-l-[1px] border-[orange]">
                  {/* first */}
                  <div className="flex items-center ml-1 mt-3">
                    <TiWeatherDownpour className="text-[22px] mr-1" />
                    <span className="font-[400] text-[14px] ">
                      {state?.current?.cloud}%
                    </span>
                  </div>
                  <div className="flex items-center ml-1 mt-3">
                    <IoNavigate className="text-[20px] mr-1" />
                    <span className="font-[400] text-[14px]">
                      {state?.current?.wind_mph}m/h SSW
                    </span>
                  </div>
                  {/* second */}
                  <div className="flex items-center mt-3">
                    <div className="flex items-center ml-1">
                      <RiCompassLine className="text-[22px] mr-1" />
                      <span className="font-[400] text-[14px]">
                        {state?.current?.pressure_mb}
                        hPa
                      </span>
                    </div>

                    <span className="font-[400] text-[14px] ml-5">
                      Humidity: {state?.current?.humidity}%
                    </span>
                    <span className="font-[400] text-[14px] ml-5">
                      UV: {state?.current?.uv}
                    </span>
                  </div>
                  {/* third */}
                  <div className="mt-3">
                    <span className="font-[400] text-[14px] ml-2">
                      Dew point: 23°C
                    </span>
                    <span className="font-[400] text-[14px] ml-5">
                      Visibility: {state?.current?.vis_km}km
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[60%] bg-white flex justify-center screen320:w-full screen375:w-full items-center">
              <div className="border w-[450px] h-[300px] rounded shadow-sm flex">
                <img
                  src={i}
                  alt=""
                  className="w-[50%] h-full rounded-tl rounded-bl object-fit"
                />
                <div className="w-[50%] h-full rounded-tr rounded-br flex flex-col">
                  <img
                    src={ii}
                    alt=""
                    className="w-full h-[50%] rounded-tl rounded-bl object-fit"
                  />
                  <img
                    src={iii}
                    alt=""
                    className="w-full h-[50%] rounded-tl rounded-bl object-fit"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              className="
                  flex
                  "
            >
              <div
                className="
                    text-[14px]
                    font-[500]
                    ml-[10px]
                    "
              >
                Conclusion:
              </div>
              <div
                className="
                    text-[15px]
                    font-[500]
                    ml-[5px]
                    "
              >
                {humidity < 60 && cloud < 50
                  ? "There is a likelyhood for flood and erosion"
                  : "you're safe"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailScreen;
