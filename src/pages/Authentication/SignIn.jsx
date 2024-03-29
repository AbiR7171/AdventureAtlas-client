
import Logo from "../../components/Logo";
import AuthSwiper from "./AuthSwiper";
import { useForm } from "react-hook-form";
import cn from "../../utils/cn";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import {motion} from "framer-motion"





const SignIn = () => {
  const navigate = useNavigate();

  


  const { register, handleSubmit , watch    } = useForm();


  const [ id, password ] = watch(["id", "password"]);



  
  const isFormEmpty = !id || !password;


  const intro = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.25,
        delayChildren: 0.5,
      },
    },
  };
  
  const introChildren = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, type: 'spring', bounce: 0.5 },
    },
  };

  
  


 



 
  



  const onsubmit = (data) => {
    axios
      .get(
        `https://adventure-atlas-server.vercel.app/api/v1/user/get-a-user?nameOrEmail=${data.id}`
      )
      .then((res) => {
        const user = res?.data;

        console.log(res);

        if (user.success === true) {
          if (data.password !== user.data.password) {
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
              },
            });
            Toast.fire({
              icon: "error",
              title: "wrong password",
            });
          } else {
            localStorage.setItem("adventure-atlas", res.data.data?._id);

            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
              },
            });
            Toast.fire({
              icon: "success",
              title: "Signed in successfully",
            });

            navigate(`/main/dashboard`);
          }
        } else {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "error",
            title: `${user.message}  `,
          });
        }
      });
  };

  return (
    <div
    
      className={cn(
        "flex flex-col  justify-center items-center bg-white  bg-opacity-80 h-screen  w-full mx-auto "
      )}
    >
    
            <Logo className="text-4xl " color={true} />
  


      <div className="mt-10 grid lg:grid-cols-12 place-content-center grid-cols-1 w-full max-w-7xl mx-auto p-2">
        <motion.div   className=" w-full max-w-xl p-3 rounded lg:col-span-6 main-font space-y-5" variants={intro} initial="hidden" animate="visible">
          <motion.h1 variants={introChildren} className="text-black font-bold text-2xl mt-10 mb-2 text-center">
            Login
          </motion.h1>
          <motion.p variants={introChildren} className="text-black mb-3 text-center">
            Login to access your Golobe account
          </motion.p>
          <form  onSubmit={handleSubmit(onsubmit)}>
            <motion.div variants={introChildren} className="mb-4">
              <label htmlFor="username" className="block text-gray-700">
                Username or Email
              </label>
              <input
                type="text"
                id="username"
                name="username"
               autoComplete="new-username"
               placeholder="Enter User Name"
                className="input-border mt-1 p-2 block w-full rounded  shadow-sm "
                
                {...register("id", { required: true })}
              />
            </motion.div>

            <motion.div variants={introChildren} className="mb-4">
              <label htmlFor="password" className="block text-gray-700">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="new-password"
                placeholder="Enter password"
                className="input-border mt-1 p-2 block w-full rounded"
                {...register("password", { required: true })}
              />
            </motion.div>

        
          {/* <Button type="submit">Login</Button> */}


          <motion.button variants={introChildren} type="submit" disabled={isFormEmpty}  className={cn("w-full bg-[#BE31D3]  py-3 text-white", 
          {
            "bg-opacity-40":isFormEmpty
          })}>Submit</motion.button>
          
       
          </form>
          <motion.div variants={introChildren} className="flex justify-center mb-2 mt-4">
            <p>
              New at Adevnture Atlas? please{" "}
              <Link className="text-blue-800" to="/signUp">
                SignUp
              </Link>
            </p>
          </motion.div>
        </motion.div>

        <motion.div variants={introChildren} className="lg:col-span-5">
          <AuthSwiper />
        </motion.div>
      </div>
    </div>
  );
};

export default SignIn;
