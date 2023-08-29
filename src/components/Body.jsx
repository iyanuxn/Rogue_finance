import { useState } from "react";
import { IoDocumentText } from "react-icons/io5";
import { BsDiscord } from "react-icons/bs";
import { PiArrowUpRightThin } from "react-icons/pi";
import { FiInfo } from "react-icons/fi";
import { RxTwitterLogo } from "react-icons/rx";
import { PiMediumLogoFill } from "react-icons/pi";
import { LiaArrowRightSolid } from "react-icons/lia";
import LOGO from "../assets/rogue.svg";

const Body = () => {
  const [myShare, setMyshare] = useState("1%");
  const [totalStaked, setTotalStaked] = useState("10K MAV");
  const [myStake, setmyStake] = useState("100 MAV");
  const [currentFAQIndex, setCurrentFAQIndex] = useState(null);
  const [activeButton, setActiveButton] = useState("deposit");
  const [inputValue, setInputValue] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = (buttonType) => {
    if (buttonType === "deposit") {
      setActiveButton("deposit");
    } else if (buttonType === "withdraw") {
      setActiveButton("withdraw");
    }
  };

  const weeksData = [
    {
      week: "PHASE 2",
      title: "0.8% of ROG Supply",
    },
    {
      week: "WEEK 2",
      title: "0.6% of ROG Supply",
    },
    {
      week: "WEEK 3",
      title: "0.4% of ROG Supply",
    },
    {
      week: "WEEK 4",
      title: "0.2% of ROG Supply",
    },
  ];

  const FAQs = [
    {
      question: "Why is there a Pre-Launch Program?",
      answer:
        "The purpose of this program is to bootstrap the initial share of veLIT held by the Liquis protocol. Over the course of four weeks, users will be able to commit the BAL20-WETH-80LIT Balancer Pool Token. After the pre-launch period your BPTs will be converted into liqLIT which can then be withdrawn and staked to earn liqLIT rewards. One BPT is equivalent to one liqLIT token. For your convenience you can also deposit LIT which are converted into the BPT automatically.",
    },
    {
      question: "What tokens will I receive and when will I receive them?",
      answer:
        "The purpose of this program is to bootstrap the initial share of veLIT held by the Liquis protocol. Over the course of four weeks, users will be able to commit the BAL20-WETH-80LIT Balancer Pool Token. After the pre-launch period your BPTs will be converted into liqLIT which can then be withdrawn and staked to earn liqLIT rewards. One BPT is equivalent to one liqLIT token. For your convenience you can also deposit LIT which are converted into the BPT automatically.",
    },
    {
      question: "What tokens will I receive and when will I receive them?",
      answer:
        "The purpose of this program is to bootstrap the initial share of veLIT held by the Liquis protocol. Over the course of four weeks, users will be able to commit the BAL20-WETH-80LIT Balancer Pool Token. After the pre-launch period your BPTs will be converted into liqLIT which can then be withdrawn and staked to earn liqLIT rewards. One BPT is equivalent to one liqLIT token. For your convenience you can also deposit LIT which are converted into the BPT automatically.",
    },
  ];

  const toggleFAQ = (index) => {
    if (currentFAQIndex === index) {
      setCurrentFAQIndex(null);
    } else {
      setCurrentFAQIndex(index);
    }
  };

  return (
    <div>
      <section className="hexBg flex flex-col justify-center items-center gap-5 p-40">
        <span className="font-secondary font-bold text-7xl">Pre-Launch</span>
        <span className="font-bold">
          Help bootstrap Rogue, the liquid stater & yield booster for Maverick
          AMM
        </span>
        <div className="flex gap-5">
          <button className="bg-white text-zinc-900 font-semibold rounded-xl text-sm py-3 w-56 justify-center flex gap-2 items-center">
            <IoDocumentText />
            Read Documentation
          </button>{" "}
          <button className="bg-neutral-700 text-white font-semibold rounded-xl text-sm py-3 w-56 justify-center flex gap-2 items-center">
            <BsDiscord /> Join our Discord
          </button>
        </div>
      </section>

      <section className="mainBg flex flex-col justify-center items-center gap-5 py-7 px-10">
        <span className="font-bold text-xl">Join us !</span>
        <div className="grid grid-cols-4 gap-5 w-full mt-10">
          {weeksData.map((data) => (
            <div className="flex flex-col justify-center w-full">
              <div className="bg-gradient-to-r from-blue-600 from-1% to-indigo-500 to-90% flex justify-center items-center py-2 rounded-t-3xl w-4/6">
                <span>{data.week}</span>
              </div>
              <div className="bg-neutral-700 flex justify-center items-center py-3 w-full rounded-r-2xl rounded-b-2xl ">
                <span>{data.title}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex w-full gap-5 justify-between mt-10">
          <div className="flex flex-col justify-center items-center gap-5 w-full">
            <span className="text-neutral-400 flex items-center gap-2">
              My share <FiInfo className="text-white text-xl" />
            </span>
            <span className="font-secondary font-semibold text-5xl">
              {myShare}
            </span>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 w-full border-r-2 border-l-2 border-neutral-700">
            <span className="text-neutral-400 flex items-center gap-2">
              Total Staked <FiInfo className="text-white text-xl" />
            </span>
            <span className="font-secondary font-semibold text-5xl">
              {totalStaked}
            </span>
          </div>{" "}
          <div className="flex flex-col justify-center items-center gap-5 w-full">
            <span className="text-neutral-400 flex items-center gap-2">
              My Stake <FiInfo className="text-white text-xl" />
            </span>
            <span className="font-secondary font-semibold text-5xl">
              {myStake}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 w-full gap-5 mt-10">
          <div className="p-2 bg-zinc-900 rounded-3xl">
            <div className="w-full grid grid-cols-2 gap-1 border-2 border-zinc-800 rounded-3xl">
              <div
                className={`${
                  activeButton === "deposit"
                    ? "otherBg bg-zinc-800"
                    : "bg-transparent"
                } flex flex-col justify-center items-center rounded-3xl transition-all duration-300 ease-in-out`}
              >
                <button
                  className={`font-secondary w-full py-12 font-semibold text-2xl ${
                    activeButton === "deposit" ? "" : "text-neutral-500"
                  }`}
                  onClick={() => handleButtonClick("deposit")}
                >
                  Deposit
                </button>
                {activeButton === "deposit" && (
                  <div className="bg-white w-40 h-1 rounded-full glow-top"></div>
                )}
              </div>
              <div
                className={`${
                  activeButton === "withdraw"
                    ? "otherBg bg-zinc-800"
                    : "bg-transparent"
                } flex flex-col justify-center items-center rounded-3xl transition-all duration-300 ease-in-out`}
              >
                <button
                  className={`font-secondary w-full py-12 font-semibold text-2xl ${
                    activeButton === "withdraw" ? "" : "text-neutral-500"
                  }`}
                  onClick={() => handleButtonClick("withdraw")}
                >
                  Withdraw
                </button>
                {activeButton === "withdraw" && (
                  <div className="bg-white w-40 h-1 rounded-full glow-top"></div>
                )}
              </div>
            </div>

            <div>
              {activeButton === "deposit" ? (
                <div className="mt-10 flex flex-col gap-7 justify-center items-center px-5">
                  <div className="w-full flex justify-between items-center">
                    <div className="flex flex-col gap-1">
                      <span className="text-sm text-neutral-500">Amount</span>
                      <input
                        className="bg-transparent text-white font-semibold font-secondary text-5xl w-full outline-none"
                        type="number"
                        placeholder="0.00"
                        value={inputValue}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="relative">
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        onClick={handleDropdownToggle}
                      >
                        Dropdown
                      </button>
                      {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-40 bg-white text-black border border-gray-300 rounded-md shadow-lg">
                          <ul className="py-2">
                            <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                              Option 1
                            </li>
                            <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                              Option 2
                            </li>
                            <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                              Option 3
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  <button className="bg-white text-zinc-900 font-semibold rounded-xl text-sm py-3 w-full flex gap-2 items-center">
                    <div className="w-11/12">
                      <span className="ml-12"> Deposit MAV</span>
                    </div>
                    <LiaArrowRightSolid className="text-xl" />
                  </button>
                </div>
              ) : (
                <div className="flex flex-col mb-10 mt-3 ">
                  <div className="flex flex-col justify-center items-center gap-3 w-full cursor-pointer px-12 py-7">
                    <span className="font-medium flex justify-between items-center w-full">
                      Withdraw LIT
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="p-2 bg-zinc-900 rounded-3xl">
            <div className="otherBg bg-zinc-800 flex justify-center items-center py-12 rounded-t-3xl">
              <span className="font-secondary font-semibold text-2xl">FAQ</span>
            </div>
            <div
              className={`flex flex-col mb-10 mt-3 w-full ${
                currentFAQIndex !== null ? "max-h-[50vh] scroll" : ""
              }`}
            >
              {FAQs.map((data, index) => (
                <div
                  className={`flex flex-col justify-center items-center gap-2 w-full cursor-pointer px-12 ${
                    index !== FAQs.length - 1
                      ? "border-b border-neutral-800"
                      : ""
                  } py-7`}
                  key={index}
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium flex justify-between items-center w-full">
                    {data.question}
                    <div className="rounded-full flex items-center p-2 justify-center border border-white">
                      <PiArrowUpRightThin
                        className={`text-sm transition-all duration-300 ease-in-out ${
                          currentFAQIndex === index ? "transform rotate-90" : ""
                        }`}
                      />
                    </div>
                  </span>
                  <span
                    className={`text-neutral-500 text-sm ${
                      currentFAQIndex === index ? "fade-in" : "truncate"
                    }`}
                  >
                    {data.answer}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          {" "}
          <img src={LOGO} alt="logo" className="w-6 mt-7" />
          <div className="bg-white w-20 h-1 mt-5 rounded-full glow-top"></div>
        </div>
      </section>
      <section className="footerBg flex flex-col justify-center items-center gap-5 py-7 px-10 h-96 -mt-12">
        <span className="text-4xl">Join the Liquis Community!</span>
        <span className="text-neutral-400 text-center">
          Our Discord and Twitter are the best places to stay up to date on all
          of Rogue’s latest developments.
        </span>
        <div className="flex">
          <button className="text-white font-semibold rounded-full text-sm py-3 w-64 justify-center flex gap-2 items-center border border-gray-600 ">
            <RxTwitterLogo className="text-xl" />
            <span>Follow on Twitter</span>
          </button>
          <button className="text-white font-semibold rounded-full text-sm py-3 w-64 justify-center flex gap-2 items-center border border-gray-600 ">
            <BsDiscord className="text-xl" />
            <span>Join our Discord</span>
          </button>
          <button className="text-white font-semibold rounded-full text-sm py-3 w-64 justify-center flex gap-2 items-center border border-gray-600 ">
            <PiMediumLogoFill className="text-xl" />
            <span>Read more on Medium</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Body;
