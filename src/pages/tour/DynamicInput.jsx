import  { useState } from 'react';
import useTour from '../../hooks/useTour';
import useAllUsers from '../../hooks/useAllUsers';
import { Icon } from '@iconify-icon/react';
import Button from '../../components/Button';
import axios from 'axios';
import Swal from 'sweetalert2';

const DynamicInput = () => {

  const [userAllTour]=useTour();
  const [allUsers] = useAllUsers();

  const initialTourId = userAllTour?.[0]?._id;

  console.log(initialTourId);

  const [tourId, setTourId]=useState(initialTourId);

  console.log(tourId);


  const initialMembers = allUsers?.[0]?._id

  console.log(allUsers);

  console.log(userAllTour);

  const [inputs, setInputs] = useState([{ initial: 0, membersInfo: initialMembers }]);

  console.log(inputs);

  const handleChange = (index, event) => {
    const values = [...inputs];
    if (event.target.name === 'input') {
      values[index].initial = event.target.value;
    } else if (event.target.name === 'select') {
      values[index].membersInfo = event.target.value;
    }
    setInputs(values);
  };

  const handleAddInput = () => {
    const values = [...inputs];
    values.push({ initial: '0', membersInfo: 'option1' });
    setInputs(values);
  };

  const handleRemoveInput = (index) => {
    const values = [...inputs];
    values.splice(index, 1);
    setInputs(values);
  };


  const handleSubmit = () =>{

    console.log("yes");
                
         if(tourId === undefined){
          axios.put(`https://adventure-atlas-server.vercel.app/api/v1/tour/add-members?tourId=${initialTourId}`, {
            members: inputs
           })
           .then(res =>{
                  console.log(res)
  
                  if(res.data.success === true){
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
                      title: "Members added successfully"
                    });
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
                      title: "Something went wrong"
                    });
                  }
           })
         }else{
          axios.put(`https://adventure-atlas-server.vercel.app/api/v1/tour/add-members?tourId=${tourId}`, {
            members: inputs
           })
           .then(res =>{
                  console.log(res)
  
                  if(res.data.success === true){
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
                      title: "Members added successfully"
                    });
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
                      title: "Something went wrong"
                    });
                  }
           })
         }
  }

  return (
   <div>
      <div className=" p-4 space-y-2 main-font w-6/12 mx-auto">
      <div>
            <p>Select Tour</p>

             <select onChange={(e)=>setTourId(e.target.value)} className="p-2 text-lg border rounded-md border-gray-300">

                    {
                       userAllTour?.length > 0 ?  userAllTour?.map(t => <option key={t._id} value={t?._id}>{t?.tourName}</option>) : <option>No tour Available</option>
                    }

                </select>
      </div>
      <p className='text-start'>Add Member</p>
      {inputs.map((input, index) => (
        <div key={index} className="mb-4  space-y-2 flex flex-col">
          
          <select
            name="select"
            value={input.membersInfo}
            onChange={(event) => handleChange(index, event)}
            className="p-2 text-lg border rounded-md border-gray-300 mr-2"
          > 
             <option selected>Select Members</option>
            {allUsers?.map(u => <option key={u._id} value={u?._id}>{u?.userName}</option>)}
            
          </select>

          <label htmlFor="input">Initial Amount</label>
         <div className='flex items-center'>
      
          <input
            type="text"
            name="input"
            value={input.initial}
            onChange={(event) => handleChange(index, event)}
            className="border border-gray-300 rounded py-2 px-4 mr-2 w-9/12"
            placeholder="Enter Initial Amount"
          />
          <button
            type="button"
            onClick={() => handleRemoveInput(index)}
            className=" text-white font-bold py-2 px-4 rounded"
          >
            <Icon icon="system-uicons:cross-circle" className='text-3xl text-red-700 ' />
          </button>
      </div>
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddInput}
        className=" font-bold py-2 px-4 rounded"
      >
        <Icon icon="icons8:plus" className='text-4xl text-blue-800' />
      </button>
     
       <div onClick={handleSubmit}>
             <Button >Submit</Button>
       </div>
    </div>

     
   </div>
  );
};

export default DynamicInput;
