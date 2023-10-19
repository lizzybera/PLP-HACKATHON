import { BsArrowRight } from "react-icons/bs";
// import pic1 from "../assets/Daimler_AG.svg.png";
import pic1 from "../assets/Daimler.jpeg"
import pic2 from "../assets/c and a.jpeg"
import pic3 from "../assets/deloitte.jpeg"
import pic4 from "../assets/ericsson.jpeg"
import pic5 from "../assets/mackinsey and company.jpeg"
import pic6 from "../assets/microsoft.jpeg"
import pic7 from "../assets/rimowa.jpeg"
import pic8 from "../assets/s.....electric.jpeg"
import pic9 from "../assets/warner media.jpeg"
import pic10 from "../assets/wawa.jpeg"
// import pic2 from "../assets/images (1).png";
// import pic3 from "../src/assets/ericsson.jpg.png";
// import pic4 from "../src/assets/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg";
// import pic5 from "../src/assets/download (16).png";
// import pic6 from "../src/assets/large_thumb@3x.jpg";
// import pic7 from "../src/assets/images (2).png";
// import pic8 from "../src/assets/ca-logo.png";
// import pic9 from "../src/assets/mckinsey-and-company.jpg";
// import pic10 from "../src/assets/Rimowa_logo.svg.png";

const App = () => {
  return (
    <div>
      <div className="h-[700px] w-full">
        <div className="h-[555px] w-full flex justify-between flex-col items-center">
          <div className="font-bold text-[25px] mt-4">
            Join more than 75,000 companies worldwide using the weatherstack API
          </div>
          <div className="text-center">
            We are proud of delivering accurate weather data to some of the <br />
            smartest brands out there.
          </div>
          <div className="h-[400px] w-[1000px] justify-between ">
            <div className="flex">
              <div className="h-[120px] w-[300px] bg-[#3f99ee] rounded-[10px] m-2">
                <img src={pic1} style={{ width: "100%", height: "100%", borderRadius: "5px" }} />
              </div>
              <div className="h-[120px] w-[300px] bg-[#eef2f5] rounded-[10px] m-2">
                <img src={pic2} style={{ width: "100%", height: "100%", borderRadius: "5px" }} />
              </div>
              <div className="h-[120px] w-[200px] rounded-[10px] m-2">
                <img src={pic3} style={{ width: "100%", height: "100%", borderRadius: "5px" }} />
              </div>
              <div className="h-[140px] w-[300px] bg-[#eef2f5] rounded-[10px] m-2">
                <img src={pic4} style={{ width: "100%", height: "100%", borderRadius: "5px" }} />
              </div>
              <div className="h-[140px] w-[260px] bg-[#263e6a] rounded-[10px] m-2">
                <img src={pic5} style={{ width: "100%", height: "100%", borderRadius: "5px" }} />
              </div>
            </div>
            <div className="flex mt-7">
              <div className="h-[140px] w-[300px] bg-[#027ac2] rounded-[10px] m-2">
                <img src={pic6} style={{ width: "100%", height: "100%", borderRadius: "5px" }} />
              </div>
              <div className="h-[140px] w-[300px] bg-[#ee2e25] rounded-[10px] m-2">
                <img src={pic7} style={{ width: "100%", height: "100%", borderRadius: "5px" }} />
              </div>
              <div className="h-[140px] w-[240px] bg-[#01275b] rounded-[10px] m-2">
                <img src={pic8} style={{ width: "100%", height: "100%", borderRadius: "5px" }} />
              </div>
              <div className="h-[140px] w-[300px] bg-[#eef2f5] rounded-[10px] m-2">
                <img src={pic9} style={{ width: "100%", height: "100%", borderRadius: "5px" }} />
              </div>
              <div className="h-[140px] w-[260px] bg-[#eef2f5] rounded-[10px] m-2">
                <img src={pic10} style={{ width: "100%", height: "100%", borderRadius: "5px" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[100px] w-full bg-[#eef2f5] flex justify-center items-center">
          <div className="w-[750px] flex justify-between items-center">
            <h1 className="font-bold">
              Sign up for our Free Plan to get instant access to weather data
              
            </h1>
            <div className="font-bold text-[20px] text-black">
              <BsArrowRight />
            </div>
            <div className="h-[60px] w-[200px] bg-[#f47b21] rounded-[10px] flex justify-center items-center font-bold text-white">
              GET FREE API ACCESS
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;