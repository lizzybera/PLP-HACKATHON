


interface iCard {
    icon:any
    title:string
    text:string
}
const UniversalCard:React.FC<iCard> = ({
    icon,
    title,
    text
}) => {
  return (
    <div>
        <div className="
flex
flex-col
h-[80%]
w-[260px]
bg-[#e9ecee]
    screen320:mt-[10px]
">
            {icon}
    
    <div className="
    text-[17px]
    font-[500]
    mt-[10px]
    mb-[5px]
    ">{title}</div>
    <div className="
    text-[15px]
    ">{text}</div>
</div>
    </div>
  )
}

export default UniversalCard