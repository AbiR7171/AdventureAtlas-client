/* eslint-disable react/prop-types */
import {Icon} from "@iconify-icon/react"
import cn from "../utils/cn";

const Logo = ({className, color}) => {
    return (
        <div className="flex items-center justify-center logo-font">
              <h1 className={cn("font-bold truncate text-white",
              {
                 "bg-gradient-to-r from-fuchsia-600 to-indigo-400 bg-clip-text text-transparent": color
              },
              className)}>Adventure Atlas</h1>
              <Icon icon="streamline:travel-places-beach-island-waves-outdoor-recreation-tree-beach-palm-wave-water"  className="text-red-600 text-2xl" />
        </div>
    );
};

export default Logo;