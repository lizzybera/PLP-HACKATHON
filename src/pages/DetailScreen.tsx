import { FiSearch } from "react-icons/fi";
import { RiCompassLine } from "react-icons/ri";
import { TiWeatherShower, TiWeatherDownpour } from "react-icons/ti";
import { IoNavigate } from "react-icons/io5";
import { MdArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleFalse, toggleTrue } from "../mainGlobal/Global";

const DetailScreen = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state: any) => state.toggle);
  return (
    // container
    <div className="w-full h-full bg-[#FFFFFF] flex ">
      {/* main */}
      <div className="w-full h-full  flex flex-col items-center">
        {/* mini header */}
        <div className="h-[60px] w-full bg-[#F2F2F2] flex justify-center items-center ">
          <div className="w-[400px] h-[40px] border rounded bg-[#ebe5e5]  flex items-center">
            <input
              placeholder="Enter the city name...."
              type="text"
              className=" w-[90%] h-full outline-none border-none rounded pl-[5px]"
            />
            <FiSearch className="text-[25px]  ml-[5px]" />
          </div>
        </div>
        <div className="w-[70%] h-[600px] ">
          {/* part A */}
          <div className="h-[40%] w-full flex justify-between">
            <div className="w-[30%] flex flex-col">
              <span className="text-[14px] font-[400] ml-1">
                Oct 18, 04:35pm
              </span>
              <span className="text-[24px] font-[700] ml-1 mb">Ifo, NG</span>
              <div>
                <div className="flex items-center">
                  <TiWeatherShower className="text-[30px] ml-1" />
                  <span className="text-[36px] font-[100]">31°C</span>
                </div>
                <span className="text-[14px] font-[700] ml-1">
                  Feels like 36°C. Light rain. Light breeze
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
            <div className="w-[60%] bg-white flex justify-center items-center">
              <div className="border w-[450px] h-[180px] rounded shadow-sm"></div>
            </div>
          </div>
          {/* part B */}
          <div className="h-[60%] w-full  bg-[white] flex pt-[10px]">
            <div className="w-[55%] h-full    ">
              <p className="text-[18px] font-[700] ml-2">Hourly forecast</p>
            </div>
            <div className="w-[45%] h-full  bg-[silver]  ">
              <p className="text-[18px] font-[700] ml-3">8-day forecast</p>
              {/* props */}
              <div className="flex items-center justify-between w-full px-[15px] my-[15px] ">
                <span className="text-[14px] font-[400]">Wed, Oct 18</span>
                <div className="flex justify-between items-center">
                  <IoNavigate />
                  <span className="text-[14px] font-[400] w-[75px] text-end">
                    33 / 22°C
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] w-[80px] ">moderate rain</span>
                  {toggle ? (
                    <MdArrowDropDown
                      className="text-[20px] "
                      onClick={() => {
                        dispatch(toggleTrue());
                        console.log(dispatch);
                      }}
                    />
                  ) : (
                    <MdOutlineArrowDropUp
                      className="text-[20px] "
                      onClick={() => {
                        dispatch(toggleFalse());
                        console.log(dispatch);
                      }}
                    />
                  )}
                </div>
              </div>
              {/* props */}
              <div className="flex items-center justify-between w-full px-[15px] my-[15px]">
                <span className="text-[14px] font-[400]">Thur, Oct 19</span>
                <div className="flex justify-between items-center">
                  <IoNavigate />
                  <span className="text-[14px] font-[400] w-[75px] text-end">
                    33 / 22°C
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] w-[80px] ">moderate rain</span>
                  <MdArrowDropDown className="text-[20px] " />
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
