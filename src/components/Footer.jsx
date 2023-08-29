import LOGO from "../assets/rogue.svg";

const Footer = () => {
  return (
    <div className="flex justify-between items-center w-full -mt-8 px-7 pb-7">
      <div className="flex justify-center items-center gap-5">
        <img src={LOGO} alt="logo" className="w-6" />
        <span className="font-bold text-3xl font-secondary">Rogue</span>
      </div>
      <div className="flex justify-center items-center gap-5 text-sm">
        <button>Twitter</button>
        <button>Discord</button>
        <button>Blog</button>
        <button>Docs</button>
      </div>
    </div>
  );
};

export default Footer;
