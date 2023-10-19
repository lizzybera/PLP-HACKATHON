/** @format */
import {GiTripleCorn} from "react-icons/gi"
import {BsGithub} from "react-icons/bs"
import {AiOutlineTwitter} from "react-icons/ai"
// import Globalcard from "../../Global/Globalcard";

import img1 from "../../assets/linkedin-original.svg"
import img2 from "../../assets/instagram.png"
import img3 from "../../assets/facebook-original.svg"
import img4 from "../../assets/youtube.png"
import Globalcard from "../../../src/GlobalCard"

const Footer = () => {
  return <div className="
  w-[100%]
  min-h-[450px]
  bg-[#184157]
  flex
  justify-center
  ">
    <div className="
    w-[90%]
    min-h-[100%]
    flex
    flex-col
    justify-center
    ">
    <div className="
    w-[100%]
    min-h-[50%]
    flex
    justify-between
    medium:flex-wrap
    ">
      <div className="
      medium:hidden
      ">
        <div className="
        flex
        items-center
        ">
          <GiTripleCorn className="
          text-[white]
          text-[40px]
          "/>
          <div className="
          text-[30px]
          text-[white]
          ml-[5px]
          font-[500]
          ">ECO~DATA</div>
        </div>
        <div className="
        flex
        mt-[20px]
        text-[25px]
        w-[200px]
        justify-around
        ">
          <BsGithub/>
          <div className="
          w-[25px]
          h-[25px]
          ">
          <img src={img3}/>
          </div>
          <div className="
          w-[25px]
          h-[25px]
          ">
          <img src={img4}/>
          </div>
          <div className="
          w-[23px]
          h-[23px]
          ">
          <img src={img2}/>
          </div>
          <AiOutlineTwitter className="
          text-[#1DA1F2]
          "/>
          <div className="
          w-[25px]
          h-[25px]
          ">
          <img src={img1}/>
          </div>
        </div>
      </div>
      

      <Globalcard
      title="PRODUCT"
      text1="Pricing"
      text2="List Your API"
      text3="Why choose us?"
      text4="Marketplace"
      />
      <Globalcard
      title="DOCS & HELP"
      text1="Documentation"
      text2="Blogs"
      text3="FAQs"
      text4="API Glossary"
      />
      <Globalcard
      title="ACCOUNT"
      text1="Log in"
      text2="Forgot Password"
      text3="FREE Signup"
      
      />
      <Globalcard
      title="GET IN TOUCH"
      text1="Contact"
      text2="Get a quote today"
      />
    </div>
    <div className="
    hidden medium:flex flex-col mt-[5px] small:mt-[30px] mb-[30px] 
    ">
        <div className="
        flex
        items-center
        ">
          <GiTripleCorn className="
          text-[#698899]
          text-[40px]
          small:text-[30px]
          "/>
          <div className="
          text-[30px]
          text-[#698899]
          ml-[5px]
          font-[500]
          small:text-[25px] small:font-[700]
          ">ECO~DATA</div>
        </div>
        <div className="
        flex
        mt-[5px]
        text-[25px]
        w-[180px]
        justify-around
        small:text-[19px]
        ">
          <BsGithub/>
          <div className="
          w-[25px]
          h-[25px]
          small:h-[20px]
          small:w-[20px]
          ">
          <img src={img3}/>
          </div>
          <div className="
          w-[25px]
          h-[25px]
          small:h-[20px]
          small:w-[20px]
          ">
          <img src={img4}/>
          </div>
          <div className="
          w-[23px]
          h-[23px]
          small:h-[20px]
          small:w-[20px]
          ">
          <img src={img2}/>
          </div>
          <AiOutlineTwitter className="
          text-[#1DA1F2]
          "/>
          <div className="
          w-[25px]
          h-[25px]
          small:h-[20px]
          small:w-[20px]
          ">
          <img src={img1}/>
          </div>
        </div>
      </div>
    <div className="
    w-[100%]
    h-[30%]
    flex
    flex-col
    justify-center
    items-center
    small:text-center
    ">
      <div className="
      mb-[10px]
      text-[16px]
      text-white
      small:text-[15px ]
      ">Imprint / Legal | Privacy | Terms | Cookie Preference | Sitemap</div>
      <div className="
      mb-[10px]
      text-[14px]
      text-white
      ">© 2022 Weatherstack API, an APILayer product. All rights reserved.</div>
    </div>
    </div>
  </div>;
};

export default Footer;
