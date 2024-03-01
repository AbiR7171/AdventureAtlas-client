import Button from "../../components/Button";
import Logo from "../../components/Logo";
import AuthSwiper from "./AuthSwiper";
import { useForm } from "react-hook-form"
import cn from "../../utils/cn";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";


const SignIn = () => {


  const  navigate = useNavigate()

  

  const {
    register,
    handleSubmit
  } = useForm()


  const onsubmit = (data) =>{

          axios.get(`http://localhost:5000/api/v1/user/get-a-user?nameOrEmail=${data.id}`)
          .then(res =>{

                const user = res?.data;

                console.log(res);

                if(user.success === true){
                       
                    if(data.password !== user.data.password ){
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
                        title: "wrong password"
                      });
                    }else{

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
                        title: "Signed in successfully"
                      });

                      navigate(`/main/create-service`)

                      
                    }


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
                    title: `${user.message}  `
                  });
                }

          })
       
       

   
  }


  return (
    <div className={cn("flex justify-center items-center bg-gradient-to-r from-cyan-500 to-cyan-900  bg-opacity-80 h-screen  w-full mx-auto ")}>
      <div className="grid lg:grid-cols-12 items-center grid-cols-1 w-full max-w-7xl mx-auto p-2">
        <div className=" w-full max-w-xl p-3 rounded lg:col-span-6 main-font">
          <Logo className="text-4xl" />

          <h1 className="text-black font-bold text-2xl mt-10 mb-2">Login</h1>
          <p className="text-black mb-3">Login to access your Golobe account</p>
          <form onSubmit={handleSubmit(onsubmit)}>
          
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700">
                Username or Email
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="mt-1 p-2 block w-full rounded border-gray-300 bg-slate-200  shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                {...register("id", {required: true})}
              />


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

           
            </div>

            <div className="flex justify-end mb-2">
                    <p>New at Adevnture Atlas? please <Link className="text-blue-800" to="/signUp">SignUp</Link></p>
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

export default SignIn;
