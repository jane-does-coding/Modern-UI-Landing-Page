import { footer } from "../assets/dummy";

const Footer = () => {
  return (
    <div className=" py-6 pt-10">
      <div className=" w-full h-px bg-white"></div>
      <div className=" py-8 flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-10">
        <div className="md:flex-1 w-full mx-auto text-center md:text-left px-10">
          <h1 className=" text-2xl text-teal-200 font-semibold mb-2">
            {footer.h1}
          </h1>
          <p className=" text-zinc-400 text-sm">{footer.p}</p>
        </div>
        <div className="md:flex-1 w-full mx-auto text-center md:text-left">
          <h1 className=" text-2xl text-zinc-400 font-semibold mb-2">
            {footer.contact.h1}
          </h1>
          {footer.contact.others.map((el) => (
            <p className=" text-zinc-400 text-sm">{el}</p>
          ))}
        </div>
        <div className="md:flex-1 w-full mx-auto text-center md:text-left">
          <h1 className=" text-2xl text-zinc-400 font-semibold mb-2">
            {footer.quickMenu.h1}
          </h1>
          {footer.quickMenu.others.map((el) => (
            <p className=" text-zinc-400 text-sm underline cursor-pointer mb-1 hover:text-teal-200 duration-200">
              {el}
            </p>
          ))}
        </div>
        <div className="md:flex-1 w-full mx-auto text-center md:text-left">
          <h1 className=" text-2xl text-zinc-400 font-semibold mb-2">
            {footer.socials.h1}
          </h1>
          {footer.socials.others.map((el) => (
            <p className=" text-zinc-400 text-sm underline cursor-pointer mb-1 hover:text-teal-200 duration-200">
              {el}
            </p>
          ))}
        </div>
      </div>
      <div className="px-10 text-sm text-center md:text-left text-zinc-400">
        © 2023 by Gigaplay.
      </div>
    </div>
  );
};

export default Footer;
