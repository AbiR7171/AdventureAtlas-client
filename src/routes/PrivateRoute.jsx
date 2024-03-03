import { useEffect } from "react";
import { useNavigate, } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const navigate = useNavigate()

    const loginKey = localStorage.getItem("adventure-atlas");
    console.log(loginKey);
    
  useEffect(()=>{
    if(!loginKey){
        return  navigate("/")
    }

    return children
       
    
  },[loginKey])
  

};

export default PrivateRoute;