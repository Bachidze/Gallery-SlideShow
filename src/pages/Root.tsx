import { Outlet } from "react-router-dom"

const Root = () => {
  return (
    <>
    <header className="mt-7 after:border-2 after:bg-black after:w-[100px]">
        <div className="flex  justify-between items-center max-w-[1920px] w-[90%] m-auto">
            <img className="hover:scale-105 cursor-pointer" src="/assets/galleria..svg" alt="" />
            <h3 className="text-[#7D7D7D] text-[9px] font-bold tracking-[2px] xl:text-[12px] hover:scale-105 cursor-pointer">START SLIDESHOW</h3>
        </div>
        <div className="w-100% h-[1px] bg-[gray] opacity-40 mt-8 mb-6">
        </div>
        <Outlet />
    </header>
    </>
  )
}

export default Root