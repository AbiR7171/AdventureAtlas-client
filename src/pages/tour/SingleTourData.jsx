import { Link, useLoaderData, useNavigate } from "react-router-dom";
import SectionTitels from "../../components/SectionTitels";
import MembersCard from "./MembersCard";
import { Icon } from "@iconify-icon/react";
import axios from "axios";
import Swal from "sweetalert2";
import Modal from "../../components/Modal";
import {  useEffect, useState } from "react";


const SingleTourData = () => {
  const { data } = useLoaderData();
  console.log(data);
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [totalInitail, setTotalInitial]=useState(0)


   useEffect(()=>{

    let initial = 0
           
         data?.members?.forEach( i =>{
              initial += parseInt(i?.initial);
              console.log(initial);
              setTotalInitial(initial)
         })
          
   },[data])

   console.log(totalInitail);




  console.log(data);

  const handleDeleteTour = (tourId) => {
    console.log(tourId);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://adventure-atlas-server.vercel.app/api/v1/tour/delete-tour/${tourId}`
          )
          .then((res) => {
            if (res.data.success === true) {
              navigate("/main/dashboard");
              return Swal.fire({
                title: "Deleted!",
                text: "Tour Deleted",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="main-font">
      <SectionTitels titel="Tour Information" />

      <div className="container mx-auto p-10 bg-gray-200 shadow-xl max-w-4xl flex  justify-between">
        <div>
          <p className="text-2xl">
            Tour Name : <span className="text-gray-500">{data?.tourName}</span>
          </p>
          <p>
            Initial Amount :{" "}
            <span className="text-gray-500">{data?.price}</span>
          </p>
          <p>
            Date : <span className="text-gray-500">{data?.startDate}</span> -{" "}
            <span className="text-gray-500">{data?.endDate}</span>
          </p>
        </div>

        <div className="space-y-3">
          <Link to={`/main/edit-tour/${data?._id}`}>
            <button className="bg-blue-500 text-white p-2 px-6 flex items-center gap-2">
              Edit <Icon icon="bxs:edit" className="text-2xl" />
            </button>
          </Link>

          <button
            onClick={() => handleDeleteTour(data?._id)}
            className="bg-red-500 text-white w-full p-2  flex items-center justify-center gap-2"
          >
            Delete <Icon icon="ic:baseline-delete" className="text-2xl" />
          </button>
        </div>
      </div>

      <p className="mt-10 text-2xl text-center  underline">Members</p>

    <div className="flex gap-2 justify-end  max-w-5xl">
    <div className="flex justify-end max-w-5xl">
        <button
          className="btn bg-blue-500 text-white p-2 flex items-center gap-2"
          onClick={() => setOpenModal(true)}
        >
          Add Expense <Icon icon="zondicons:add-solid" />
        </button>
      </div>
      
      <div className="flex justify-end max-w-5xl">
      <Link to={`/main/expense-history/${data?._id}`}>
      <button className="btn bg-purple-500 text-white p-2">  Expense History <Icon icon="ic:baseline-history" /></button>
      </Link>
         
        
      </div>
    </div>

      <div className="grid grid-cols-3 gap-3">
        {data?.members?.map((m) => (
          <MembersCard key={m._id} member={m} tourId={data?._id} members={data?.members}  totalInitail={totalInitail}/>
        ))}
      </div>

      <Modal data={data} openModal={openModal} setOpenModal={setOpenModal} />
      
    </div>
  );
};

export default SingleTourData;
