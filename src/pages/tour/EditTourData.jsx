import { useLoaderData } from "react-router-dom";
import useUser from "../../hooks/useUser";
import { useForm } from "react-hook-form";
import SectionTitels from "../../components/SectionTitels";
import Button from "../../components/Button";
import axios from "axios";
import Swal from "sweetalert2";

const EditTourData = () => {
  const { data } = useLoaderData();
  console.log(data);

  const [userData] = useUser();

  console.log(userData);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = (updateData) => {
    axios
      .put(
        `https://adventure-atlas-server.vercel.app/api/v1/tour/edit-tour/${data?._id}`,
        {
          tourName: updateData?.tourName,
          price: updateData?.price,
          startDate: updateData?.startDate,
          endDate: updateData?.endDate,
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data.success === true) {
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
            title: "Tour update successfully",
          });
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
            title: "something went wrong",
          });
        }
      });
  };

  return (
    <div>
      <div className="bg-white w-full h-full bg-opacity-50 flex flex-col justify-center items-center">
        <SectionTitels titel="Edit Tour" icon="ic:sharp-create-new-folder" />

        <div className="w-full max-w-4xl ">
          <form
            onSubmit={handleSubmit(onsubmit)}
            className="shadow-2xl rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                htmlFor="tourName"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Tour Name
              </label>
              <input
                type="text"
                id="tourName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={data?.tourName}
                placeholder="Enter Tour Name"
                {...register("tourName", { required: true })}
              />
              {errors.tourName && (
                <p className="text-red-600 mt-1">{errors.tourName.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="price"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={data?.price}
                placeholder="Enter Price"
                {...register("price")}
              />

              {errors.price && (
                <p className="text-red-600 mt-1">{errors.price.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="startDate"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={data?.startDate}
                {...register("startDate")}
              />
              {errors.startDate && (
                <p className="text-red-600 mt-1">{errors.startDate.message}</p>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="endDate"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={data?.endDate}
                {...register("endDate")}
              />
              {errors.endDate && (
                <p className="text-red-600 mt-1">{errors.endDate.message}</p>
              )}
            </div>
            <div className="w-full">
              <Button className="w-full">Update</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditTourData;
