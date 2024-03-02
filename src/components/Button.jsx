/* eslint-disable react/prop-types */

import cn from "../utils/cn";

const Button = ({children, type,className}) => {
    return (
       <div>
         <button type={type} className={cn("text-xl relative w-full h-14 bg-[#BE31D3] text-white  duration-500 overflow-hidden border-sky-950 z-50 group", className)}>{children}<span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">{children}</span><span className={cn("bg-sky-950 absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000",className)}></span><span className="bg-sky-950 absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span><span className="bg-sky-950 absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span><span className="bg-sky-950 absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span></button>
       </div>
    );
};

export default Button;