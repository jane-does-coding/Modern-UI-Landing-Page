import { motion } from "framer-motion"
import { navVariants } from "../utils/motion"
import { useState } from "react"
import { navbar } from "../assets/dummy"
const Navbar = () => {
  let [click, setClick] = useState(false)
  return (
    <motion.div variants={navVariants} initial='hidden' whileInView='show' className=" fixed top-0 left-0 right-0 bg-transparent p-5 max-w-[1440px] w-full mx-auto flex justify-between z-50">
      <h1 className=" font-semibold text-2xl text-white my-3">{navbar.logo}</h1>
      <div className=" flex gap-5 flex-col-reverse items-end md:flex-row">
        <div className={` ${click ? ' w-60 text-center sm:text-left py-32 sm:py-0 sm:w-fit px-5 opacity-100' : 'w-0 px-0 opacity-0'} overflow-hidden duration-200 sm:duration-1000 bg-white rounded-lg sm:h-14 flex flex-col sm:flex-row p-5 sm:items-center sm:justify-between gap-4`}>
          {navbar.links.map(({url, text})=> <a className=" text-xs hover:text-teal-400 duration-500" href={url}>{text}</a>)}
        </div>
        <div onClick={() => setClick(!click)} className=" w-14 h-14 bg-teal-200 rounded-xl flex items-center justify-center"><i class={`fa-solid ${click ? 'fa-xmark' : 'fa-bars-staggered'} text-2xl`}></i></div>
      </div>
    </motion.div>
  )
}

export default Navbar