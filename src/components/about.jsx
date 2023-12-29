import { motion } from "framer-motion"
import { variant2 } from "../utils/motion"
import Button from "./button"
import { aboutData } from "../assets/dummy"
const About = () => {
  return (
    <motion.div variants={variant2(0.4)} initial='hidden' whileInView='show' className="max-w-xl md:max-w-md w-full mx-auto md:mx-0 mt-36 text-center md:text-left">
      <h1 className=" text-teal-200 text-6xl">{aboutData.h1}</h1>
      <p className="text-zinc-400 text-sm my-6">{aboutData.p}</p>
      <Button text={aboutData.button} />
    </motion.div>
  )
}

export default About