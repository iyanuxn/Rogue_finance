import { useState } from "react";
import { IoDocumentText } from "react-icons/io5";
import { BsDiscord } from "react-icons/bs";
import { PiCaretDown } from "react-icons/pi";
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
    <>
      <section className="hexBg flex flex-col justify-center items-center gap-5 md:py-40 py-0 pt-24 pb-16">
        <span className="font-secondary font-bold w-full text-center text-5xl md:text-7xl">
          Pre-Launch
        </span>
        <span className="font-bold text-xs md:text-base text-center">
          Help bootstrap Rogue, the liquid stater & yield booster for Maverick
          AMM
        </span>
        <div className="flex gap-5">
          <button className="bg-white text-zinc-900 font-semibold rounded-xl text-xs px-2 md:text-sm py-3 w-40 md:w-56 justify-center flex gap-2 items-center hover:bg-zinc-200 transition-all duration-300 ease-in-out">
            <IoDocumentText />
            Read Documentation
          </button>{" "}
          <button className="bg-neutral-700 text-white font-semibold rounded-xl text-xs px-2 md:text-sm py-3 w-40 md:w-56 justify-center flex gap-2 items-center hover:bg-neutral-800 transition-all duration-300 ease-in-out">
            <BsDiscord /> Join our Discord
          </button>
        </div>
      </section>

      <section className="mainBg flex flex-col justify-center items-center gap-5 md:py-7 py-3 md:px-10 px-3">
        <span className="font-bold md:text-xl text-sm">Join us !</span>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-5 w-full md:mt-10 mt-1">
          {weeksData.map((data, index) => (
            <div key={index} className="flex flex-col justify-center w-full">
              <div className="bg-gradient-to-r from-blue-600 from-1% to-indigo-500 to-90% flex justify-center items-center py-2 rounded-t-xl md:rounded-t-3xl w-4/6">
                <span className="md:text-base text-xs">{data.week}</span>
              </div>
              <div className="bg-neutral-700 flex justify-center items-center py-3 w-full rounded-r-lg rounded-b-lg md:rounded-r-2xl md:rounded-b-2xl ">
                <span className="md:text-base text-xs">{data.title}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="md:hidden flex flex-col justify-center items-center">
          <img src={LOGO} alt="logo" className="w-3 mt-3" />
          <div className="bg-white w-7 h-1 mt-2 rounded-full glow-top"></div>
        </div>
        <div className="flex w-full gap-5 justify-between mt-10">
          <div className="flex flex-col justify-start items-center gap-2 md:gap-5 w-3/5 md:w-full">
            <span className="text-neutral-400 flex items-center gap-2 text-xs md:text-base">
              My share <FiInfo className="text-white text-xs md:text-xl" />
            </span>
            <span className="font-secondary font-semibold md:text-5xl">
              {myShare}%
            </span>
          </div>
          <div className="flex flex-col justify-start items-center gap-2 md:gap-5 w-full border-r-2 border-l-2 border-neutral-700">
            <span className="text-neutral-400 flex items-center gap-2 text-xs md:text-base">
              Total Staked <FiInfo className="text-white text-xs md:text-xl" />
            </span>
            <span className="font-secondary font-semibold md:text-5xl">
              {totalStaked}K MAV
            </span>
          </div>{" "}
          <div className="flex flex-col justify-start items-center gap-2 md:gap-5 w-3/5 md:w-full">
            <span className="text-neutral-400 flex items-center gap-2 text-xs md:text-base">
              My Stake <FiInfo className="text-white text-xs md:text-xl" />
            </span>
            <span className="font-secondary font-semibold md:text-5xl">
              {myStake} MAV
            </span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-5 mt-10">
          <div className="md:p-1 bg-zinc-900 rounded-3xl h-full">
            <div className="w-full grid grid-cols-2 gap-1 border-2 border-zinc-800 rounded-xl md:rounded-3xl">
              <div
                className={`${
                  activeButton === "deposit"
                    ? "otherBg bg-zinc-800"
                    : "bg-transparent"
                } flex flex-col justify-center items-center rounded-xl md:rounded-3xl transition-all duration-300 ease-in-out`}
              >
                <button
                  className={`font-secondary w-full h-16 md:h-28 font-semibold text-lg md:text-2xl ${
                    activeButton === "deposit" ? "" : "text-neutral-500"
                  }`}
                  onClick={() => handleButtonClick("deposit")}
                >
                  Deposit
                </button>
                {activeButton === "deposit" && (
                  <div className="bg-white w-20 md:w-40 h-1 rounded-full glow-top"></div>
                )}
              </div>
              <div
                className={`${
                  activeButton === "withdraw"
                    ? "otherBg bg-zinc-800"
                    : "bg-transparent"
                } flex flex-col justify-center items-center rounded-xl md:rounded-3xl transition-all duration-300 ease-in-out`}
              >
                <button
                  className={`font-secondary w-full h-16 md:h-28 font-semibold text-lg md:text-2xl ${
                    activeButton === "withdraw" ? "" : "text-neutral-500"
                  }`}
                  onClick={() => handleButtonClick("withdraw")}
                >
                  Withdraw
                </button>
                {activeButton === "withdraw" && (
                  <div className="bg-white w-20 md:w-40 h-1 rounded-full glow-top"></div>
                )}
              </div>
            </div>

            <div>
              {activeButton === "deposit" ? (
                <div className="mt-8 flex flex-col gap-1 justify-center items-center px-2 md:px-5">
                  <div className="w-full flex justify-between items-center">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs md:text-sm text-neutral-500">
                        Amount
                      </span>
                      <input
                        className="bg-transparent text-white font-semibold font-secondary text-2xl md:text-4xl w-full outline-none"
                        type="number"
                        placeholder="0.00"
                        value={inputValue}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="relative">
                      <button
                        className="bg-zinc-800 text-white font-semibold rounded-xl py-2 w-36 md:w-60 flex justify-center items-center px-4"
                        onClick={handleDropdownToggle}
                      >
                        <div className="flex gap-5 items-center w-full">
                          <img src={MAV} alt="mav" className="w-6 md:w-8" />
                          <span className="text-sm md:text-md">
                            {selectedOption}
                          </span>
                        </div>
                        <AiOutlineCaretDown
                          className={`transition-all duration-300 ease-in-out md:text-base text-xs  ${
                            isDropdownOpen ? "transform rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isDropdownOpen && (
                        <div className="absolute z-30 right-0 mt-2 w-full bg-zinc-800 text-white rounded-xl shadow-lg fade-in">
                          {options.map((option, index) => (
                            <div
                              key={index}
                              className="hover:bg-zinc-900 px-4 py-3 cursor-pointer flex gap-5 items-center transition-all duration-300 ease-in-out"
                              onClick={() => {
                                handleOptionSelect(option.name);
                              }}
                            >
                              <img
                                src={option.img}
                                alt="mav"
                                className="w-6 md:w-8"
                              />
                              <span className="text-sm md:text-md">
                                {option.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between items-center w-full mt-3 md:mt-0">
                    <span className="text-xs md:text-md">
                      = $ {inputUSD.toFixed(2)} ( USD )
                    </span>

                    <div className="flex gap-2 items-center">
                      <span className="text-neutral-500 text-xs md:text-md">
                        ( Available Balance: {availableBal.toFixed(2)} )
                      </span>
                      <button>
                        <PiGearBold className="text-lg md:text-2xl" />
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
                            className={`w-[0.8vw] md:w-1 h-3 md:h-[0.8vw] rounded-full bg-white cursor-pointer ${
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
                        className={`text-xs text-center cursor-pointer transition-all duration-300 ease-in-out ${
                          value === range ? "text-white" : "text-gray-600"
                        }`}
                        onClick={() => handleTextClick(value)}
                      >
                        {label}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col justify-start items-start w-full border-t border-neutral-800 pt-5 md:pt-4 pb-2 md:pb-2 mt-6">
                    <div className="flex justify-between w-full">
                      <span className="text-neutral-500 md:text-base text-sm">
                        Estimated Fee
                      </span>
                      <span className="text-lg">
                        {estimatedFee === null ? "-" : estimatedFee}
                      </span>
                    </div>
                    <div className="flex justify-between w-full">
                      <span className="text-neutral-500 md:text-base text-sm">
                        rMAV received
                      </span>
                      <span className="text-lg">
                        {rMAV === null ? "-" : rMAV}
                      </span>
                    </div>
                  </div>

                  <button className="bg-white text-zinc-900 font-semibold rounded-xl text-sm py-3 w-full flex gap-2 items-center mt-3 hover:bg-zinc-200 transition-all duration-300 ease-in-out">
                    <div className="md:w-11/12 w-5/6">
                      <span className="ml-12"> Deposit MAV</span>
                    </div>
                    <LiaArrowRightSolid className="text-xl" />
                  </button>
                </div>
              ) : (
                <div className="flex flex-col mb-10 mt-3 ">
                  <div className="flex flex-col justify-center items-center gap-3 w-full cursor-pointer md:px-12 py-7">
                    <span className="font-medium flex justify-between items-center w-full">
                      Withdraw LIT
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="md:p-1 md:mt-0 mt-10 bg-zinc-900 rounded-3xl">
            <div className="otherBg bg-zinc-800 flex justify-center items-center h-20 md:h-32 rounded-xl md:rounded-3xl">
              <span className="font-secondary font-semibold text-lg md:text-2xl">
                FAQ
              </span>
            </div>
            <div
              className={`flex flex-col mb-10 mt-2 md:mt-3 w-full ${
                currentFAQIndex !== null
                  ? "max-h-[70vh] md:max-h-[48vh] scroll"
                  : ""
              }`}
            >
              {FAQs.map((data, index) => (
                <div
                  className={`flex flex-col justify-center items-center gap-2 w-full cursor-pointer px-5 md:px-12 ${
                    index !== FAQs.length - 1
                      ? "border-b border-neutral-800"
                      : ""
                  } py-7`}
                  key={index}
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium flex justify-between gap-2 items-center w-full md:text-base text-sm">
                    {data.question}
                    <PiCaretDown
                      className={`md:text-lg text-sm transition-all duration-300 ease-in-out ${
                        currentFAQIndex === index ? "transform rotate-180" : ""
                      }`}
                    />
                  </span>
                  <span
                    className={`text-neutral-500 text-xs md:text-sm ${
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
        <div className="md:flex hidden flex-col justify-center items-center">
          <img src={LOGO} alt="logo" className="w-6 mt-7" />
          <div className="bg-white w-20 h-1 mt-5 rounded-full glow-top"></div>
        </div>
      </section>

      <section className="footerBg flex flex-col justify-center items-center gap-2 md:gap-5 py-8 px-5 md:px-10 h-auto md:h-96 md:-mt-[3vw] md:rounded-none rounded-t-3xl">
        <span className="text-xl md:text-4xl text-center">
          Join the Liquis Community!
        </span>
        <span className="text-neutral-400 text-center md:text-base text-sm">
          Our Discord and Twitter are the best places to stay up to date on all
          of Rogue’s latest developments.
        </span>
        <div className="flex flex-col md:flex-row gap-3 md:mt-0 mt-5">
          <button className="text-white font-semibold rounded-full text-sm px-4 py-3 w-72 md:w-64 justify-center flex gap-2 items-center border border-gray-600 hover:bg-white hover:text-zinc-900 transition-all duration-300 ease-in-out">
            <RxTwitterLogo className="md:text-xl text-lg" />
            <span className="md:text-base text-xs">Follow on Twitter</span>
          </button>
          <button className="text-white font-semibold rounded-full text-sm px-4 py-3 w-72 md:w-64 justify-center flex gap-2 items-center border border-gray-600 hover:bg-white hover:text-zinc-900 transition-all duration-300 ease-in-out">
            <BsDiscord className="md:text-xl text-lg" />
            <span className="md:text-base text-xs">Join our Discord</span>
          </button>
          <button className="text-white font-semibold rounded-full text-sm px-4 py-3 w-72 md:w-64 justify-center flex gap-2 items-center border border-gray-600 hover:bg-white hover:text-zinc-900 transition-all duration-300 ease-in-out">
            <PiMediumLogoFill className="md:text-xl text-lg" />
            <span className="md:text-base text-xs">Read more on Medium</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default Body;
