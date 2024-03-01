import Button from "../../components/Button";
import Logo from "../../components/Logo";
import AuthSwiper from "./AuthSwiper";
import "./auth.css";
import { useForm } from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { authValidationSchema } from "./authenticationForm.validation";
import cn from "../../utils/cn";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
// import image from "../../assets/images/signUp.jpg"

const SignUp = () => {


  const  navigate = useNavigate()

  

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm({
    resolver: zodResolver(authValidationSchema)
  })


  const onsubmit = (data) =>{

    axios.post("http://localhost:5000/api/v1/user/create-user", {
        name: data.name,
        userName: data.username,
        email:data.email,
        password: data.password
    })
    .then(res =>{

        if(res.data.success === true){


          localStorage.setItem("adventure-atlas", res.data.data?._id)

          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "SigUp successfully"
          });

          console.log(res);

          navigate(`/main/create-service`)
         
        }else{

          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "error",
            title: `${res.data.message}`
          });
            
        }
       
       

    })
  }


  return (
    <div className={cn("flex justify-center items-center bg-gradient-to-r from-cyan-500 to-cyan-900 bg-opacity-80 h-screen  w-full mx-auto md:p-3",
    {
        "h-full" : errors
    })}>
      <div className="grid lg:grid-cols-12 items-center grid-cols-1 w-full max-w-7xl mx-auto p-2">
        <div className=" w-full max-w-xl p-3 rounded lg:col-span-6 main-font">
          <Logo className="text-4xl" />

          <h1 className="text-black font-bold text-2xl mt-10 mb-2">Login</h1>
          <p className="text-black mb-3">Login to access your Golobe account</p>
          <form onSubmit={handleSubmit(onsubmit)}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 block w-full rounded border-gray-300 bg-slate-200 text-black shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                {...register("name", {required: true})}
              />

              {
                errors.name && ( <p className=" mt-1 text-red-600">{errors.name.message}</p>)
              }

            </div>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700">
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="mt-1 p-2 block w-full rounded border-gray-300 bg-slate-200  shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                {...register("username", {required: true})}
              />

{
                errors.username && ( <p className=" mt-1 text-red-600">{errors.username.message}</p>)
              }

            </div>

            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700">
                Email:
              </label>
              <input
                type="email"
                id="username"
                name="username"
                className="mt-1 p-2 block w-full rounded border-gray-300 bg-slate-200  shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                {...register("email", {required: true})}
              />

               {
                errors.email && ( <p className=" mt-1 text-red-600">{errors.email.message}</p>)
              }
              
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 block w-full rounded border-gray-300 bg-slate-200 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                {...register("password", {required: true})}
              />

              {
                errors.password && ( <p className=" mt-1 text-red-600">{errors.password.message}</p>)
              } 
            </div>

            <div className="flex justify-end mb-2">
                    <p>Already have an account? please <Link className="text-blue-800" to="/">Login</Link></p>
            </div>
            <Button type="submit">Login</Button>
          </form>
        </div>

        <div className="lg:col-span-5">
          <AuthSwiper />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
