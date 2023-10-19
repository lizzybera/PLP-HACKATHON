import  {BsPinAngle,BsSpeedometer2} from "react-icons/bs"
import img from "../assets/world_map_vector.svg"
import { IoPricetagsOutline } from "react-icons/io5"
import { SlDirections } from "react-icons/sl"
import { HiOutlineArrowPath } from "react-icons/hi2"
import { PiClockCounterClockwiseFill,PiCalendarCheckLight,PiStackThin } from "react-icons/pi"
import { TiWeatherWindyCloudy } from "react-icons/ti"
import UniversalCard from "../UniversalCard"

const Comp2 = () => {
  return (
    <div className="
    mt-10
    w-full
    flex
    flex-col
    items-center    
    justify-center 
    ">
    <div className="
    w-[90%]
    bg-[#EFF2F5]
    flex
    flex-col
    justify-center
    items-center
    ">
        <div className="
        w-[100%]
        min-h-[240px]
        flex
        items-center
    screen320:flex-wrap
    justify-around
        ">
          <UniversalCard 
          icon={<TiWeatherWindyCloudy className="
          text-[35px]
          mt-[15px]
          "/>}
          title="Real-Time, History, Forecast"
          text="Our API covers global weather data across the board — from a multi-year history all the way to live information and accurate weather forecasts."
          />
          <UniversalCard 
          icon={<BsPinAngle className="
          text-[30px]
          mt-[15px]
          "/>}
          title="Real-Time, History, Forecast"
          text="Our API covers global weather data across the board — from a multi-year history all the way to live information and accurate weather forecasts."
          />
          <UniversalCard 
          icon={<BsSpeedometer2 className="
          text-[30px]
          mt-[15px]
          "/>}
          title="Real-Time, History, Forecast"
          text="Our API covers global weather data across the board — from a multi-year history all the way to live information and accurate weather forecasts."
          />
          <UniversalCard 
          icon={<IoPricetagsOutline className="
          text-[30px]
          mt-[15px]
          "/>}
          title="Real-Time, History, Forecast"
          text="Our API covers global weather data across the board — from a multi-year history all the way to live information and accurate weather forecasts."
          />
    </div>
        </div>
        <div className="
        mt-10
        w-[90%]
       min-h-[400px]
        flex
        screen320:flex-col
        ">
          <div className="
          w-[50%]
          h-[100%]
          flex
          flex-col
          justify-center
        screen320:w-[100%]
          ">
            <div className="
            w-[355px]
            text-[25px]
            font-[500]
            mt-[20px]
        screen320:w-[290px]
        screen320:text-[20px]
        screen320:text-center
            ">Access to Global Weather Data, Developer-friendly</div>
            <div className="
            w-[450px]
            text-[17px]
            mt-[5px]
            mb-[15px]
        screen320:w-[290px]
        screen320:text-[16px]
        screen320:text-center
            ">Get instant access to accurate weather data for any geo-point in the world and enjoy a rich set of capabilities:</div>
            <div className="
            h-[190px]
            flex
            flex-col
            justify-around
        screen320:flex
        screen320:items-center
            ">
              <div className="
              flex
              items-center
              ">
                <HiOutlineArrowPath className="
                text-[30px]
                "/>
                <div className="
                text-[16px]
                ml-[10px]
                ">Real-Time Weather API</div>
              </div>
              <div className="
              flex
              items-center
              ">
                <PiClockCounterClockwiseFill className="
                text-[30px]
                "/>
                <div className="
                text-[16px]
                ml-[10px]
                ">Historical Weather API</div>
              </div>
              <div className="
              flex
              items-center
              ">
                <PiCalendarCheckLight className="
                text-[30px]
                "/>
                <div className="
                text-[16px]
                ml-[10px]
                ">Real-Time Weather API</div>
              </div>
              <div className="
              flex
              items-center
              ">
                <SlDirections className="
                text-[30px]
                "/>
                <div className="
                text-[16px]
                ml-[10px]
                ">Real-Time Weather API</div>
              </div>
              <div className="
              flex
              items-center
              ">
                <PiStackThin className="
                text-[30px]
                "/>
                <div className="
                text-[16px]
                ml-[10px]
                ">Real-Time Weather API</div>
              </div>
            </div>
          </div>
          <div className="
          w-[50%]
          h-[100%]
          flex
          justify-center
          items-center
        screen320:w-[100%]
        screen320:mt-[10px]
          ">
            <img src={img} className="
            h-[100%]
            w-[100%]
            "/>
          </div>
        </div>
    </div>
  )
}

export default Comp2