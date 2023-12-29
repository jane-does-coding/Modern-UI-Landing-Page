import { motion } from "framer-motion"
import { variant1 } from '../utils/motion';
import Button from "./button";
import { homeData } from "../assets/dummy";
const Home = () => {
  return (
    <motion.div
      variants={variant1(0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}>
      <div className=" p-5 text-center md:text-left flex justify-center md:justify-end items-center min-h-screen h-full max-w-[1440px] w-full mx-auto">
        <div className=" max-w-xl md:max-w-md w-full mx-auto sm:mx-0 grid gap-10">
          <h1 className="text-teal-200 text-7xl font-medium font-['Poppins'] leading-[60px]">{homeData.h1}</h1>
          <p className="text-stone-400 text-opacity-60 text-sm font-medium tracking-wide">{homeData.p}</p>
          <Button text={homeData.button} />
        </div>
      </div>
    </motion.div>
  )
}

export default Home