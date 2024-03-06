import { Link } from 'react-router-dom'
import data from '../data.json'
import { motion } from "framer-motion"

const Main = () => {

    console.log(data)
  return (
    <>
     <motion.section whileInView={{
      
     }} className='flex flex-col max-w-[1920px] m-auto w-[90%]  gap-5 mb-10 xl:mt-[100px]   grid2'>
          {data.map((el,index) => (
            <motion.div 
             whileTap={{scale:0.8}} 
             whileInView={{
              opacity:1,
              y:0
            }} 
             initial={{
               opacity:0,
               y:100
             }}
             transition={{
               duration:1
            }} className={`flex relative  justify-center flex-col  items-center  ${el.name}`  }>
              <Link state={el} to={`/info/${index+1}`} className='relative'>
                <img  className='hover:scale-105 hover:opacity-75 cursor-pointer '  src={el.images.thumbnail} alt="images" />
                <div className='absolute bottom-6 flex flex-col self-start pl-7'>
                <h2 className='text-white  pb-2 text-[24px] font-bold'>{el.name}</h2>
                <h2 className='text-white text-[13px] font-medium opacity-60'>{el.artist.name}</h2>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.section>
    </>
  )
}

export default Main