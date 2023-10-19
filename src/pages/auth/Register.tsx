import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
// import { RiTwitterXFill } from "react-icons/ri";
// import { BsLinkedin } from "react-icons/bs";
import imgs from "../../assets/undraw_weather_re_qsmd (1).svg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { create } from "../../api/authApis";

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
      navigate("/sign-in")
      console.log(res);
      
    })
  });

  return (
    <div className="w-full h-[100vh] bg-slate-200 rounded-lg flex items-center justify-center max-sm:flex-col">
      <div className="w-[699px] h-[661px]  flex items-center justify-center max-md:hidden">
        <img src={imgs} alt="loading..." className="h-[300px]" />
      </div>
      <div
        className="w-[350px] h-[550px] bg-white rounded-xl mr-3"
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
            <span className="text-[20px] font-bold ">Name</span>
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
            <span className="text-[20px] font-bold ">E-mail</span>
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
            <span className="text-[20px] font-bold pl-3">Password</span>
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
            className=" px-5 py-3 flex items-center justify-center bg-[#004AAD] rounded-3xl  font-bold text-white  mt-5"
            type="submit"
          >
            Sign up
          </button>
          <div className="flex mt-5 items-center justify-between">
            <span className="mr-4 text-[20px] font-bold">
              Create account with
            </span>
            <p className="w-[50px] h-[50px] rounded-full border flex items-center justify-center mr-3">
              <FcGoogle size={30} />
            </p>
            <p className="w-[50px] h-[50px] rounded-full border flex items-center justify-center">
              <SiFacebook size={30} style={{ color: "blue" }} />
            </p>
            {/* { <p className="w-[50px] h-[50px] rounded-full border flex items-center justify-center ml-3">
              <BsLinkedin size={30} style={{ color: "blue" }} />
            </p> */}
            {/* <p className="w-[50px] h-[50px] rounded-full border flex items-center justify-center ml-6">
              <RiTwitterXFill size={30} />
            </p> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
