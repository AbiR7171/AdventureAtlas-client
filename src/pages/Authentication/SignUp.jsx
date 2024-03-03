import Logo from "../../components/Logo";
import AuthSwiper from "./AuthSwiper";
import "./auth.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authValidationSchema } from "./authenticationForm.validation";
import cn from "../../utils/cn";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SignUp = () => {
  const navigate = useNavigate();

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
    hidden: { opacity: 0, y: -200 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, type: "spring", bounce: 0.5 },
    },
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(authValidationSchema),
  });

  const [name, userName, email, password] = watch([
    "name",
    "username",
    "email",
    "password",
  ]);

  const isFormEmpty = !name || !userName || !email || !password;

  const onsubmit = (data) => {
    axios
      .post(
        "https://adventure-atlas-server.vercel.app/api/v1/user/create-user",
        {
          name: data.name,
          userName: data.username,
          email: data.email,
          password: data.password,
        }
      )
      .then((res) => {
        if (res.data.success === true) {
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
            title: "SigUp successfully",
          });

          console.log(res);

          navigate(`/main/dashboard`);
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
            title: `${res.data.message}`,
          });
        }
      });
  };

  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center  h-screen  w-full mx-auto md:p-3",
        {
          "h-full": errors,
        }
      )}
    >
      <Logo className="text-4xl" color={true} />
      <div
       
        className="grid lg:grid-cols-12 items-center grid-cols-1 w-full max-w-7xl mx-auto p-2"
      >
        <motion.div  variants={intro}
        initial="hidden"
        animate="visible" className=" w-full max-w-xl p-3 rounded lg:col-span-6 main-font">
          <div>
            <motion.h1
              variants={introChildren}
              className="text-black font-bold text-2xl mt-10 mb-2 text-center"
            >
              SignUp
            </motion.h1>
            <motion.p
              variants={introChildren}
              className="text-black mb-3 text-center"
            >
              SignUp to access your Golobe account
            </motion.p>
          </div>

          <form onSubmit={handleSubmit(onsubmit)}>
            <motion.div variants={introChildren} className="mb-4">
              <label htmlFor="name" className="block text-gray-700 ">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Name"
                className=" input-border mt-1 p-2 block w-full rounded border-gray-300 bg-slate-200 text-black shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                {...register("name", { required: true })}
              />

              {errors.name && (
                <p className=" mt-1 text-red-600">{errors.name.message}</p>
              )}
            </motion.div>
            <motion.div variants={introChildren} className="mb-4">
              <label htmlFor="username" className="block text-gray-700">
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                autoComplete="new-username"
                placeholder="Enter user name"
                className="input-border mt-1 p-2 block w-full rounded border-gray-300 bg-slate-200  shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                {...register("username", { required: true })}
              />

              {errors.username && (
                <p className=" mt-1 text-red-600">{errors.username.message}</p>
              )}
            </motion.div>

            <motion.div variants={introChildren} className="mb-4">
              <label htmlFor="username" className="block text-gray-700">
                Email:
              </label>
              <input
                type="email"
                id="username"
                name="username"
                placeholder="Enter Email"
                className="input-border mt-1 p-2 block w-full rounded border-gray-300 bg-slate-200  shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                {...register("email", { required: true })}
              />

              {errors.email && (
                <p className=" mt-1 text-red-600">{errors.email.message}</p>
              )}
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
                className="input-border mt-1 p-2 block w-full rounded border-gray-300 bg-slate-200 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                {...register("password", { required: true })}
              />

              {errors.password && (
                <p className=" mt-1 text-red-600">{errors.password.message}</p>
              )}
            </motion.div>

            <motion.button
              variants={introChildren}
              type="submit"
              disabled={isFormEmpty}
              className={cn("w-full bg-[#BE31D3]  py-3 text-white", {
                "bg-opacity-40": isFormEmpty,
              })}
            >
              Submit
            </motion.button>
          </form>

          <motion.div variants={introChildren} className="flex justify-center items-center mt-3">
            <p>
              Already have an account? please{" "}
              <Link className="text-blue-800" to="/">
                Login
              </Link>
            </p>
          </motion.div>
        </motion.div>

        <div className="lg:col-span-5">
          <AuthSwiper />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
