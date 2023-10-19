// import { RiTwitterXFill } from "react-icons/ri";
// import { BsLinkedin } from "react-icons/bs";
import imgs from "../../assets/undraw_weather_re_qsmd (1).svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signIn, verify } from "../../api/authApis";
import { useEffect } from "react";
import jwtDecode from "jwt-decode"
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../mainGlobal/Global";
import Swal from "sweetalert2"

const Login = () => {
  const {token} = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state : any) => state.user)
  console.log(user);
  

  const Schema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });
  const onSubmit = handleSubmit(async (data: any) => {
    const {email, password} = data
    signIn({email, password}).then((res)=>{
      console.log("res",res);
      
      if(res){
        Swal.fire({
          icon : 'success',
          title: `Welcome` ,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
        dispatch(createUser(res))
          navigate("/")
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!, un-able to sign-in',
        })
        navigate("/register")
      }
      
    })
  });

  
  useEffect(() => {
    console.log(token)
  if(token){
    const data : any = jwtDecode(token)
    verify(token)
    console.log(data?.id);
    
  }
  }, [])

  return (
    <div className="w-full h-[100vh] bg-slate-200 rounded-lg flex items-center justify-center screen425:flex-wrap">
      <div className="w-[699px] h-[661px]  flex items-center justify-center screen425:h-[370px]  screen768:w-[400px]">
        <img src={imgs} alt="loading..." className="h-[300px] screen425:h-[150px] screen768:h-[180px] screen768:ml-5 " />
      </div>
      <div
        className="w-[350px] h-[500px] bg-white rounded-xl mr-3 screen425:mb-5 screen425:ml-3"
        onSubmit={onSubmit}
      >
        <div className="flex items-center justify-end mt-5">
          <span className="flex items-center justify-center text-[18px] font-bold">
            Don't have an account?
          </span>
          <Link to={"/register"}>
            <p className="px-5 py-2 rounded-xl bg-red-400 border text-[15px] mr-3 flex items-center justify-center  font-bold ml-3">
              Signup
            </p>
          </Link>
        </div>
        <form className="flex items-center justify-center flex-col mt-7">
          <span className="text-[20px] font-bold">
            Welcome back to your account
          </span>
          <div className="mt-5 pl-5 w-full">
            <span className="text-[20px] font-bold screen425:text-[14px]">E-mail</span>
            <input
              type="text"
              placeholder="Enter your E-mail"
              className="outline-none w-[90%] h-[40px] bg-white border-[#004AAD] border pl-4 rounded-md mr-8"
              required
              {...register("email")}
            />
            <span className="text-[red] flex items-center justify-end">
              {errors?.email?.message}
            </span>
          </div>
          <div className="mt-5 pl-5 w-full">
            <span className="text-[20px] font-bold pl-3 screen425:text-[14px]">Password</span>
            <input
              type="text"
              placeholder="Enter your Password"
              className="outline-none w-[90%] h-[40px] bg-white border border-[#004AAD] rounded-md pl-4 mr-8"
              required
              {...register("password")}
            />
            <span className="text-[red] flex items-center justify-end">
              {errors?.password?.message}
            </span>
          </div>
          <button
            className=" px-12 py-3 flex items-center justify-center bg-[#004AAD] rounded-3xl  font-bold text-white  mt-11 screen425:text-[14px] screen425:px-[125px]  screen425:rounded-[10px] screen768:py-[10px] screen768:px-[40px]"
            type="submit"
          >
            Sign in
          </button>
         
        </form>
      </div>
    </div>
  );
};

export default Login;
