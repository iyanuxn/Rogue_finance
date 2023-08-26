import { useState } from "react";
import { IoDocumentText } from "react-icons/io5";
import { BsDiscord } from "react-icons/bs";
import { PiArrowUpRightThin } from "react-icons/pi";
import { FiInfo } from "react-icons/fi";

const Body = () => {
  const [myShare, setMyshare] = useState("1%");
  const [totalStaked, setTotalStaked] = useState("10K MAV");
  const [myStake, setmyStake] = useState("100 MAV");
  const [currentFAQIndex, setCurrentFAQIndex] = useState(null);

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
        <div className="flex w-full gap-5 justify-between mt-16">
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
        <div className="grid grid-cols-2 gap-5 w-full mt-16">
          <div>Left</div>
          <div className="p-2 bg-zinc-900 rounded-3xl">
            <div className="otherBg bg-zinc-800 flex justify-center items-center py-12 rounded-3xl">
              <span className="font-secondary font-semibold text-2xl">FAQ</span>
            </div>
            <div className="flex flex-col mb-10 mt-3 ">
              {FAQs.map((data, index) => (
                <div
                  className={`flex flex-col justify-center items-center gap-3 w-full cursor-pointer px-12 ${
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
                        className={`text-md transition-all duration-300 ease-in-out ${
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
      </section>
    </div>
  );
};

export default Body;
