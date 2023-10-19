import imgs from "../../assets/undraw_weather_re_qsmd (1).svg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { create } from "../../api/authApis";
import Swal from "sweetalert2"

const Register = () => {
  const navigate = useNavigate()
  const Schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
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
    const {email, password, name} = data
    create({email, password, name}).then((res)=>{
      if(res){
        Swal.fire({
            icon : 'success',
            title: `Registered Successfully` ,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
              }
          })
          navigate("/sign-in")
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!, un-able to Register',
      })
      navigate("/register")
    }
      
    })
  });

  return (
    <div className="w-full min-h-[100vh] bg-slate-200 rounded-lg flex items-center justify-center screen425:flex-wrap">
      <div className="w-[699px] h-[600px]  flex items-center justify-center screen425:h-[370px]  screen768:w-[400px] ">
        <img src={imgs} alt="loading..." className="h-[270px] screen425:h-[150px] screen768:h-[180px] screen768:ml-5 " />
      </div>
      <div
        className="w-[350px] h-[500px] bg-white  rounded-xl mr-3 screen425:mb-5 screen425:ml-3"
        onSubmit={onSubmit}
      >
        <div className="flex items-center justify-end mt-5">
          <span className="flex items-center justify-center text-[18px] font-bold">
            Already have an account?
          </span>
          <Link to={"/sign-in"}>
            <p className="px-5 py-2 rounded-xl bg-red-400 border text-[15px] mr-3 flex items-center justify-center  font-bold ml-3">
              Signin
            </p>
          </Link>
        </div>
        <form className="flex items-center justify-center flex-col mt-7">
          <span className="text-[20px] font-bold">Reigster your account</span>
          <div className="mt-5 pl-5 w-full">
            <span className="text-[20px] font-bold screen425:text-[14px] ">Name</span>
            <input
              type="text"
              placeholder="Enter your Name"
              className="outline-none w-[90%] h-[40px] bg-white border-[#004AAD] border pl-4 rounded-md mr-8"
              required
              {...register("name")}
            />
            <span className="text-[red] flex items-center justify-end">
              {errors?.name?.message}
            </span>
          </div>
          <div className="mt-5 pl-5 w-full">
            <span className="text-[20px] font-bold screen425:text-[14px] ">E-mail</span>
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
            <span className="text-[20px] font-bold  screen425:text-[14px]">Password</span>
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
            className=" px-5 py-3 flex items-center justify-center bg-[#004AAD] rounded-3xl  font-bold text-white  mt-9 mr-3 screen425:text-[14px] screen425:px-[125px]  screen425:rounded-[10px] screen768:py-[10px] screen768:px-[40px] "
            type="submit"
          >
            Sign up
          </button>
         
        </form>
      </div>
    </div>
  );
};

export default Register;
