import { motion } from "framer-motion";
import { variant2 } from "../utils/motion";
import { featuredData } from "../assets/dummy";
import Button from "./button";

const Features = () => {
  return (
    <div className="min-h-screen p-5 pr-16 lg:sticky top-4 pb-10 flex justify-center md:justify-end max=w=[1440px] w-full mx-auto">
      <div className="md:max-w-md w-full">
        <motion.h1
          variants={variant2(0.5)}
          initial={"hidden"}
          whileInView={"show"}
          className="text-teal-200 font-medium text-4xl my-5"
        >
          {featuredData.h1}
        </motion.h1>
        <motion.div
          variants={variant2(0.7)}
          initial="hidden"
          whileInView={"show"}
          className="bg-slate-900/50 mg:bg-slate-700/50 border-2 border-slate-700 p-8 rounded-xl"
        >
          <video
            src={featuredData.video_url}
            className="rounded-lg"
            playsInline
            loop
            muted
            autoPlay
            preload="true"
          ></video>
          <h1 className="text-4xl text-white font-semibold mt-6">
            {featuredData.card_h1}
          </h1>
          <p className="text-lg my-5 text-white opacity-40">
            {featuredData.card_p}
          </p>
          <Button text={"Play Now"} />
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
