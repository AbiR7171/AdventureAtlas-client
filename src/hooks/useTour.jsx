import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useTour = () => {

     const id = localStorage.getItem("adventure-atlas");
   
   
     const {data: userAllTour} = useQuery(
        {
            queryKey: ["user-tour", id],
            queryFn:async ()=>{
                 const res= await axios.get(`http://localhost:5000/api/v1/tour/user-all-tour?userId=${id}`)
                 return res.data.data
            }
        }
     )

     return [userAllTour]
};

export default useTour;