import { useNavigate } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const navigate = useNavigate()

    const loginKey = localStorage.getItem("adventure-atlas");
    console.log(loginKey);
    
    if(loginKey){
        return children
    }
        return  navigate("/")
    
  

};

export default PrivateRoute;