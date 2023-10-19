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

  return (
    // container
    <div className="w-full h-full bg-[#FFFFFF] flex ">
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
        <div className="w-[70%] h-full screen320:w-[90%] screen375:w-[90%]">
          {/* part A */}
          <div className="h-[40%] screen320:flex-col screen375:flex-col  w-full flex justify-between">
            <div className="w-[30%] flex flex-col screen320:w-full screen375:w-full screen375:my-2 pt-[10px]">
              <span className="text-[14px] font-[450] ml-1 text-[red] ">
                Oct 18, 04:35pm
              </span>
              <span className="text-[24px] font-[700] ml-1 mb">Ifo, NG</span>
              <div>
                <div className="flex items-center">
                  <TiWeatherShower className="text-[30px] ml-1" />
                  <span className="text-[36px] font-[100]">
                    {state?.current?.temp_c}°C
                  </span>
                </div>
                <span className="text-[14px] font-[700] ml-1">
                  Feels like {state?.current?.feelslike_c}°C.{" "}
                  {state?.current?.condition.text}. Light breeze
                </span>
                {/* last */}
                <div className="border-l-[1px] border-[orange]">
                  {/* first */}
                  <div className="flex items-center ml-1 ">
                    <TiWeatherDownpour className="text-[22px] mr-1" />
                    <span className="font-[400] text-[14px] ">0.13mm</span>
                  </div>
                  <div className="flex items-center ml-1">
                    <IoNavigate className="text-[20px] mr-1" />
                    <span className="font-[400] text-[14px]">1.8m/s SSW</span>
                  </div>
                  {/* second */}
                  <div className="flex items-center ">
                    <div className="flex items-center ml-1">
                      <RiCompassLine className="text-[22px] mr-1" />
                      <span className="font-[400] text-[14px]">1009hPa</span>
                    </div>

                    <span className="font-[400] text-[14px] ml-2">
                      Humidity: 60%
                    </span>
                    <span className="font-[400] text-[14px] ml-2">UV: 1</span>
                  </div>
                  {/* third */}
                  <div>
                    <span className="font-[400] text-[14px] ml-2">
                      Dew point: 23°C
                    </span>
                    <span className="font-[400] text-[14px] ml-2">
                      Visibility: 10.0km
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[60%] bg-white flex justify-center screen320:w-full screen375:w-full items-center">
              <div className="border w-[450px] h-[180px] rounded shadow-sm flex">
                <img
                  src={i}
                  alt=""
                  className="w-[50%] h-full rounded-tl rounded-bl object-cover"
                />
                <div className="w-[50%] h-full rounded-tr rounded-br flex flex-col">
                  <img
                    src={ii}
                    alt=""
                    className="w-full h-[50%] rounded-tl rounded-bl object-cover"
                  />
                  <img
                    src={iii}
                    alt=""
                    className="w-full h-[50%] rounded-tl rounded-bl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* part B */}
          <div className="h-[60%]  w-full screen320:flex-col screen375:flex-col  bg-[white] flex pt-[10px]">
            <div className="w-[55%] h-[350px] screen320:w-full  screen375:w-full ">
              <p className="text-[18px] font-[700] ml-2 screen320:m-0 screen375:m-0">
                Hourly forecast
              </p>
            </div>
            <div className="w-[45%] h-[350px] screen320:w-full screen375:w-full bg-[white]  ">
              <p className="text-[18px] font-[700] ml-3 screen320:m-0">
                8-day forecast
              </p>
              {/* props */}
              <div className="flex items-center justify-between w-full screen320:px-0 screen375:px-0 px-[15px] my-[15px] screen320:mx-0 screen375:mx-0">
                <span className="text-[14px] font-[400]">Wed, Oct 18</span>
                <div className="flex justify-between items-center">
                  <LiaCloudSunRainSolid />
                  <span className="text-[14px] font-[400] w-[75px] text-end">
                    33 / 22°C
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] w-[80px] ">moderate rain</span>
                  {toggle ? (
                    <MdArrowDropDown
                      className="text-[20px] cursor-pointer"
                      onClick={() => {
                        dispatch(toggleFalse());
                      }}
                    />
                  ) : (
                    <MdOutlineArrowDropUp
                      className="text-[20px] "
                      onClick={() => {
                        dispatch(toggleTrue());
                      }}
                    />
                  )}
                </div>
              </div>
              {/* props */}
              <div className="flex items-center justify-between w-full screen320:px-0 screen375:px-0 px-[15px] my-[15px] screen320:mx-0 screen375:mx-0">
                <span className="text-[14px] font-[400]">Thu, Oct 19</span>
                <div className="flex justify-between items-center">
                  <LiaCloudSunRainSolid />
                  <span className="text-[14px] font-[400] w-[75px] text-end">
                    33 / 22°C
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] w-[80px] ">light rain</span>
                  {toggle ? (
                    <MdArrowDropDown
                      className="text-[20px] cursor-pointer"
                      onClick={() => {
                        dispatch(toggleFalse());
                      }}
                    />
                  ) : (
                    <MdOutlineArrowDropUp
                      className="text-[20px] "
                      onClick={() => {
                        dispatch(toggleTrue());
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailScreen;
