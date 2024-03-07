import { Link, Outlet } from "react-router-dom"
import { motion } from "framer-motion"
const Root = () => {
  
  return (

    <>
    <header className="mt-7 after:border-2 after:bg-black  after:w-[100px]">
        <motion.div 
        initial={{
          y:'-100%'
        }}
        whileInView={{
          y:0
        }}
        transition={{
          duration:0.5
        }}
        className="flex  justify-between items-center max-w-[1920px] w-[90%] m-auto">
            <Link to={'/'}><img className="hover:scale-105 cursor-pointer" src="/assets/galleria..svg" alt="" /></Link>
            <h3 className="text-[#7D7D7D] text-[9px] font-bold tracking-[2px] xl:text-[12px] hover:scale-105 cursor-pointer">START SLIDESHOW</h3>
        </motion.div>
        <div className="flex m-auto">
        <motion.div initial={{
          x:'-100%'
        }}
        whileInView={{
          x:'6%'
        }}
        className="w-[45%] m-auto absolute left-[9.5px] h-[1px] bg-[gray] opacity-40 mt-8 mb-6 md:left-5 xl:left-[38px]">
        </motion.div>
        <motion.div  initial={{
          x:'100%'
        }}
        whileInView={{
          x:'-5%'
        }}
        className="w-[45%] m-auto absolute right-[9.5px] h-[1px] bg-[gray] opacity-40 mt-8 mb-6 md:right-5 xl:right-[38px]">
        </motion.div>
        </div>
        <Outlet />
    </header>
    </>
  )
}

export default Root