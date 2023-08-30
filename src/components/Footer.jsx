import LOGO from "../assets/rogue.svg";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full mt-8 md:-mt-8 px-5 md:px-7 pb-4 md:pb-7">
      <div className="flex justify-center items-center gap-2 md:gap-5">
        <img src={LOGO} alt="logo" className="w-4 md:w-6" />
        <span className="font-bold text-2xl md:text-3xl font-secondary">
          Rogue
        </span>
      </div>
      <div className="flex justify-center items-center mt-3 md:mt-0 gap-2 md:gap-5 text-xs md:text-sm">
        <button className="px-2 py-1">Twitter</button>
        <button className="px-2 py-1">Discord</button>
        <button className="px-2 py-1">Blog</button>
        <button className="px-2 py-1">Docs</button>
      </div>
    </div>
  );
};

export default Footer;
