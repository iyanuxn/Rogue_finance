import { useState } from "react";
import { IoDocumentText } from "react-icons/io5";
import { BsDiscord } from "react-icons/bs";
import { PiArrowUpRightThin } from "react-icons/pi";
import { FiInfo } from "react-icons/fi";
import { RxTwitterLogo } from "react-icons/rx";
import { PiMediumLogoFill, PiGearBold } from "react-icons/pi";
import { LiaArrowRightSolid } from "react-icons/lia";
import { AiOutlineCaretDown } from "react-icons/ai";
import MAV from "../assets/MAV.svg";

import LOGO from "../assets/rogue.svg";

const Body = () => {
  const [myShare, setMyshare] = useState(1);
  const [totalStaked, setTotalStaked] = useState(10);
  const [myStake, setmyStake] = useState(100);
  const [currentFAQIndex, setCurrentFAQIndex] = useState(null);
  const [activeButton, setActiveButton] = useState("deposit");
  const [inputValue, setInputValue] = useState("");
  const [inputUSD, setInputUSD] = useState(0.0);
  const [availableBal, setAvailableBal] = useState(0.0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("MAV");
  const [range, setRange] = useState(1);
  const [estimatedFee, setEstimatedFee] = useState(null);
  const [rMAV, setrMAV] = useState(null);

  const handleTextClick = (value) => {
    setRange(value);
  };

  const handleLineClick = (index) => {
    setRange(index);
  };

  const sliderStyles = {
    backgroundImage: `linear-gradient(to right, #1A82C5 ${
      range === 1 ? 0 : (range - 1) * 25
    }%, #27272a ${(range - 1) * 25}%, #27272a ${100 - (range - 1) * 25}%)`,
  };

  const handleSliderChange = (event) => {
    setRange(event.target.value);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    handleDropdownToggle();
  };

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

  const toggleFAQ = (index) => {
    if (currentFAQIndex === index) {
      setCurrentFAQIndex(null);
    } else {
      setCurrentFAQIndex(index);
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

  const options = [
    {
      name: "MAV",
      value: "MAV",
      img: MAV,
    },
    {
      name: "NOT MAV",
      value: "NOT MAV",
      img: MAV,
    },
  ];

  const textLabels = [
    { label: "Min", value: 1 },
    { label: "25%", value: 2 },
    { label: "50%", value: 3 },
    { label: "75%", value: 4 },
    { label: "100%", value: 5 },
  ];

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
          {weeksData.map((data, index) => (
            <div key={index} className="flex flex-col justify-center w-full">
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
              {myShare}%
            </span>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 w-full border-r-2 border-l-2 border-neutral-700">
            <span className="text-neutral-400 flex items-center gap-2">
              Total Staked <FiInfo className="text-white text-xl" />
            </span>
            <span className="font-secondary font-semibold text-5xl">
              {totalStaked}K MAV
            </span>
          </div>{" "}
          <div className="flex flex-col justify-center items-center gap-5 w-full">
            <span className="text-neutral-400 flex items-center gap-2">
              My Stake <FiInfo className="text-white text-xl" />
            </span>
            <span className="font-secondary font-semibold text-5xl">
              {myStake} MAV
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 w-full gap-5 mt-10">
          <div className="p-2 bg-zinc-900 rounded-3xl h-full">
            <div className="w-full grid grid-cols-2 gap-1 border-2 border-zinc-800 rounded-3xl">
              <div
                className={`${
                  activeButton === "deposit"
                    ? "otherBg bg-zinc-800"
                    : "bg-transparent"
                } flex flex-col justify-center items-center rounded-3xl transition-all duration-300 ease-in-out`}
              >
                <button
                  className={`font-secondary w-full h-28 font-semibold text-2xl ${
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
                  className={`font-secondary w-full h-28 font-semibold text-2xl ${
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
                <div className="mt-8 flex flex-col gap-1 justify-center items-center px-5">
                  <div className="w-full flex justify-between items-center">
                    <div className="flex flex-col gap-1">
                      <span className="text-sm text-neutral-500">Amount</span>
                      <input
                        className="bg-transparent text-white font-semibold font-secondary text-4xl w-full outline-none"
                        type="number"
                        placeholder="0.00"
                        value={inputValue}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="relative">
                      <button
                        className="bg-zinc-800 text-white font-semibold rounded-xl py-2 w-60 flex justify-center items-center px-4"
                        onClick={handleDropdownToggle}
                      >
                        <div className="flex gap-5 items-center w-full">
                          <img src={MAV} alt="mav" className="w-8" />
                          <span className="text-md">{selectedOption}</span>
                        </div>
                        <AiOutlineCaretDown
                          className={`transition-all duration-300 ease-in-out    ${
                            isDropdownOpen ? "transform rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-full bg-zinc-800 text-white rounded-xl shadow-lg fade-in">
                          {options.map((option, index) => (
                            <div
                              key={index}
                              className="hover:bg-zinc-900 px-4 py-3 cursor-pointer flex gap-5 items-center transition-all duration-300 ease-in-out"
                              onClick={() => {
                                handleOptionSelect(option.name);
                              }}
                            >
                              <img src={option.img} alt="mav" className="w-8" />
                              {option.name}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between items-center w-full">
                    <span className="text-md">
                      = $ {inputUSD.toFixed(2)} ( USD )
                    </span>

                    <div className="flex gap-2 items-center">
                      <span className="text-neutral-500 text-md">
                        ( Available Balance: {availableBal.toFixed(2)} )
                      </span>
                      <button>
                        <PiGearBold className="text-2xl" />
                      </button>
                    </div>
                  </div>

                  <div className="w-full mt-8 relative flex">
                    <input
                      type="range"
                      min="1"
                      max="5"
                      step="1"
                      value={range}
                      className="slider w-full rounded-full transition-all duration-300 ease-in-out z-0 cursor-pointer"
                      style={sliderStyles}
                      onChange={handleSliderChange}
                    />

                    <div className="absolute flex justify-between w-full top-1/2 transform -translate-y-1/2">
                      {[1, 2, 3, 4, 5].map((data, index) => (
                        <div
                          className="z-20 flex justify-center w-8"
                          key={index}
                          onClick={() => handleLineClick(data)}
                        >
                          <div
                            className={`w-1 h-[0.8vw] rounded-full bg-white cursor-pointer ${
                              index >= range ? "" : "hidden"
                            }`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between w-full mt-2">
                    {textLabels.map(({ label, value }) => (
                      <div
                        key={value}
                        className={`text-xs cursor-pointer transition-all duration-300 ease-in-out ${
                          value === range ? "text-white" : "text-gray-600"
                        }`}
                        onClick={() => handleTextClick(value)}
                      >
                        {label}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col justify-start items-start w-full border-t border-neutral-800 pt-9 pb-4 mt-6">
                    <div className="flex justify-between w-full">
                      <span className="text-neutral-500">Estimated Fee</span>
                      <span className="text-lg">
                        {estimatedFee === null ? "-" : estimatedFee}
                      </span>
                    </div>
                    <div className="flex justify-between w-full">
                      <span className="text-neutral-500">rMAV received</span>
                      <span className="text-lg">
                        {rMAV === null ? "-" : rMAV}
                      </span>
                    </div>
                  </div>

                  <button className="bg-white text-zinc-900 font-semibold rounded-xl text-sm py-3 w-full flex gap-2 items-center mt-5">
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
            <div className="otherBg bg-zinc-800 flex justify-center items-center h-32 rounded-3xl">
              <span className="font-secondary font-semibold text-2xl">FAQ</span>
            </div>
            <div
              className={`flex flex-col mb-10 mt-3 w-full ${
                currentFAQIndex !== null ? "max-h-[53vh] scroll" : ""
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
