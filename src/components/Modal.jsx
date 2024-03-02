/* eslint-disable react/prop-types */

import { useForm } from "react-hook-form";
import Button from "./Button";
import { zodResolver } from "@hookform/resolvers/zod";
import expenseValidationSchema from "../pages/tour/expense.validation";
import axios from "axios";
import Swal from "sweetalert2";
import useTour from "../hooks/useTour";

const Modal = ({ data, openModal, setOpenModal }) => {
  console.log(data);
  const { members } = data;
  const [, refetch] = useTour();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(expenseValidationSchema),
  });

  const onsubmit = (formData) => {
    console.log(formData);
    console.log("hit");

    const costNumber = parseFloat(formData?.cost);
    console.log(costNumber);

    axios
      .put(
        `https://adventure-atlas-server.vercel.app/api/v1/tour/add-expense/${data?._id}`,
        {
          spender: formData?.spender,
          date: formData?.date,
          cost: costNumber,
          description: formData?.details,
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data.success === true) {
          reset();
          refetch();
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
            title: "expense added successfully",
          });
        }
      });
  };

  return (
    <div className="w-72 mx-auto flex items-center justify-center">
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed flex justify-center items-center z-[100] ${
          openModal ? "visible opacity-1" : "invisible opacity-0"
        } inset-0 w-full h-full backdrop-blur-sm bg-black/20 duration-100`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute w-full lg:w-[500px] bg-white drop-shadow-2xl rounded-lg ${
            openModal
              ? "opacity-1 duration-300 translate-y-0"
              : "-translate-y-20 opacity-0 duration-150"
          }`}
        >
          <form onSubmit={handleSubmit(onsubmit)} className="p-12">
            <svg
              onClick={() => setOpenModal(false)}
              className="w-10 mx-auto mr-0 cursor-pointer"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                  fill="#000000"
                ></path>
              </g>
            </svg>
            <h3 className="font-bold text-lg text-center">Add Expense</h3>
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              {...register("spender", { required: true })}
            >
              {members.map((m) => (
                <option key={m?._id} value={m?.membersInfo?._id}>
                  {m?.membersInfo.userName}
                </option>
              ))}
            </select>
            {errors.spender && (
              <p className="text-red-600 mt-1">{errors.spender.message}</p>
            )}
            <div className="flex justify-between mt-3 gap-2">
              <div className="mb-4 w-full">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Date
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="date"
                  type="date"
                  {...register("date")}
                />
              </div>
              {errors.date && (
                <p className="text-red-600 mt-1">{errors.date.message}</p>
              )}
              <div className="mb-4 w-full">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  cost
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="number"
                  placeholder="Enter Cost"
                  {...register("cost", { required: true })}
                />
                {errors.cost && (
                  <p className="text-red-600 mt-1">{errors.cost.message}</p>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Details
              </label>
              <textarea
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows="4"
                placeholder="Enter Details"
                {...register("details", { required: true })}
              ></textarea>
            </div>

            {errors.details && (
              <p className="text-red-600  mb-2">{errors.details.message}</p>
            )}

            <Button type="submit">Add</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
