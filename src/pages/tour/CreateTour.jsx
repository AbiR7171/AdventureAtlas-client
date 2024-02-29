import Button from "../../components/Button";
import SectionTitels from "../../components/SectionTitels";
import { useForm } from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import tourValidationSchema from "./tour.validation";
import axios from "axios";
import useUser from "../../hooks/useUser";
import Swal from "sweetalert2";

const CreateTour = () => {

    const [userData] = useUser();

    console.log(userData);


    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
      } = useForm({
        resolver: zodResolver(tourValidationSchema)
      })


      const onsubmit = (data)=>{

        axios.post("http://localhost:5000/api/v1/tour/create-tour",{
            tourName: data.tourName,
            price: data?.price,
            startDate: data?.startDate,
            endDate: data?.endDate,
            admin:userData._id

            
        })
        .then(res =>{
             console.log(res);
             if(res.data.success === true){
                reset()
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
                    title: "Tour created  successfully"
                  });
             }
        }).catch(err =>{
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
                title: `${err.message}`
              });
        
            })
      }

       

    return (
       
             <div className="bg-gray-200 w-full h-full bg-opacity-50 flex flex-col justify-center items-center">

                <SectionTitels titel="Create Tour" icon="ic:sharp-create-new-folder"/>

                 <div className="w-full max-w-4xl ">
                 <form onSubmit={handleSubmit(onsubmit)}  className="bg-gradient-to-r from-cyan-500 to-cyan-900  shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="tourName" className="block text-gray-700 text-sm font-bold mb-2">
            Tour Name
          </label>
          <input
            type="text"
            id="tourName"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Tour Name"

            {...register("tourName", {required: true})}
        
          />
          {errors.tourName && <p className="text-red-600 mt-1">{errors.tourName.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">
            Price
          </label>
          <input
            type="number"
            id="price"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Price"
            {...register("price")}
       
          />

             {errors.price && <p className="text-red-600 mt-1">{errors.price.message}</p>}  
        </div>
        <div className="mb-4">
          <label htmlFor="startDate" className="block text-gray-700 text-sm font-bold mb-2">
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("startDate")}
      
          />
          {errors.startDate && <p className="text-red-600 mt-1">{errors.startDate.message}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="endDate" className="block text-gray-700 text-sm font-bold mb-2">
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("endDate")}
         
          />
          {errors.endDate && <p className="text-red-600 mt-1">{errors.endDate.message}</p>}
          
        </div>
        <div className="w-full">
         <Button className="w-full">
             Create
         </Button>
        </div>
      </form>
                 </div>

             </div>
  
    );
};

export default CreateTour;