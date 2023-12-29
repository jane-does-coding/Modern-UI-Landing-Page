import { subscribe } from "../assets/dummy"
const Subscribe = () => {
  return (
    <div className=" text-center mx-auto my-20">
      <h1 className=" text-teal-200 font-medium text-3xl mb-2">{subscribe.h1}</h1>
      <p className=" text-zinc-400 mb-2">{subscribe.p}</p>
      <input className=" my-4 w-full max-w-3xl text-center py-4 px-10 rounded-full bg-transparent border-2 border-zinc-400 hover:bg-teal-200/30 duration-200 outline-teal-500" type="text" placeholder="Email Address" /> <br />
      <button className=" w-full md:w-fit bg-teal-200 hover:bg-white duration-200 rounded-full md:px-10 md:py-4 py-3 px-8 text-gray-700">Submit</button>
    </div>
  )
}

export default Subscribe