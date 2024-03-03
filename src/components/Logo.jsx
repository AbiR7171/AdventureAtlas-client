/* eslint-disable react/prop-types */
import {Icon} from "@iconify-icon/react"
import cn from "../utils/cn";
import {motion} from "framer-motion"

const Logo = ({className, color}) => {

    const LogoIntro = {
        hidden: { opacity: 0, y: 100 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration:1, type: 'spring', bounce: 0.5 },
        },
    }


    const introChildren = {
         hidden: {opacity:1,  rotate:0},
         visible: {opacity:1, x:0, transition: { duration: 2 }, rotate:30}
    }
   
    return (
        <motion.div className="flex items-center justify-center logo-font" variants={LogoIntro} initial="hidden" animate="visible">
              <h1 className={cn("font-bold truncate text-white",
              {
                 "bg-gradient-to-r from-fuchsia-600 to-indigo-400 bg-clip-text text-transparent": color
              },
              className)}>Adventure Atlas</h1>
             <motion.div variants={introChildren}>
             <Icon icon="streamline:travel-places-beach-island-waves-outdoor-recreation-tree-beach-palm-wave-water"  className="text-red-600 text-2xl" />
             </motion.div>
        </motion.div>
    );
};

export default Logo;