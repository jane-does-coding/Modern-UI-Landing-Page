import { motion } from "framer-motion"
import { textContainer, variant1 } from "../utils/motion"
import { awardData } from "../assets/dummy"

const Award = () => {
  return (
    <motion.div variants={textContainer} className=" min-h-screen mt-28 bg-gradient-to-t from-gray-900 to-transparent">
      <div className=" p-5 flex justify-center md:justify-end lg:justify-start max-w-[1440px] w-full mx-auto">
        <div className=" text-center md:text-left md:max-w-md w-full py-8">
          <motion.img className=" mx-auto md:mx-0" variants={variant1(0.5)} initial='hidden' whileInView='show' src={awardData.img_url} alt="" />
          <motion.h1 variants={variant1(0.6)} initial='hidden' whileInView='show' className='text-teal-200 font-medium text-4xl mt-7'>{awardData.h1}</motion.h1>
          <motion.p variants={variant1(0.7)} initial='hidden' whileInView='show' className=" text-lg my-5 text-white opacity-40">{awardData.p}</motion.p>
        </div>
      </div>
    </motion.div>
  )
}

export default Award