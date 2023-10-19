import React from "react"


interface iData {
    title:string,
    text1?:string,
    text2?:string,
    text3?:string,
    text4?:string,
}

const Globalcard:React.FC<iData> = ({
    title,
    text1,
    text2,
    text3,
    text4
}) => {
  return (
    <div className="
    w-[130px]
    text-white
    text-[15px]
    mt-[20px]
    ">
        <div className="
        font-[500]
        mb-[5px]
        text-[16]
        ">{title}</div>
        <div>{text1}</div>
        <div>{text2}</div>
        <div>{text3}</div>
        <div>{text4}</div>
    </div>
  )
}

export default Globalcard