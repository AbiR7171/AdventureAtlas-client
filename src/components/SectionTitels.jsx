/* eslint-disable react/prop-types */
import vector from "../assets/images/Vector 14.png"
import { Icon } from "@iconify-icon/react";

const SectionTitels = ({titel, icon}) => {
    return (
        <div className="flex flex-col justify-center items-center  pt-14 mb-5 ">
            <p className="text-black text-4xl main-font font-extrabold flex items-center gap-2">{titel} <span><Icon icon={icon} /></span>   </p>
            <img src={vector} alt="" />
        </div>
    );
};

export default SectionTitels;