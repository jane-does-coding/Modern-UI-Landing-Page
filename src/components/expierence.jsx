import { motion } from "framer-motion"
import { experienceData } from "../assets/dummy"
import Button from "./button"
import { variant1, variant2 } from "../utils/motion"

const Expierence = () => {
  return (
    <div className=" z-10 md:sticky top-10 my-10 flex gap-x-10 gap-y-20 items-center justify-evenly md:justify-between flex-wrap-reverse md:flex-nowrap">
      <motion.div variants={variant1(0.5)} initial='hidden' whileInView='show' className=" md:flex-1">
        <img className=" animate-pulse max-w-3xl w-full" src={experienceData.img} alt="" />
      </motion.div>
      <motion.div variants={variant2(0.7)} initial='hidden' whileInView='show' className="flex-1 max-w-xl md:max-w-md w-full mx-auto md:mx-0 md:mt-36 text-center md:text-left">
        <h1 className=" text-teal-200 text-6xl">{experienceData.h1}</h1>
        <p className=" py-5 text-zinc-400 text-sm">{experienceData.p}</p>
        <Button text={experienceData.button} />
      </motion.div>
    </div>
  )
}

export default Expierence