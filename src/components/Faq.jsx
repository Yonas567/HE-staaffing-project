import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { AiOutlineMinus } from "react-icons/ai";

export default function Faq() {
  const [expandedIndex, setExpandedIndex] = useState(null); // Track which question is expanded

  const handleShow = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Toggle the expanded state
  };

  const questionandAnswer = [
    {
      qn: "What sets BEST Crowd Management and GardaWorld apart from other event security service providers?",
      ans: " Quality control is maintained through comprehensive training, on-site supervision, and real-time communication with event organizers.",
    },
    {
      qn: "How do you ensure quality control at events?",
      ans: " Quality control is maintained through comprehensive training, on-site supervision, and real-time communication with event organizers.",
    },
    {
      qn: "What kind of events does BEST Crowd Management support?",
      ans: " We support a wide range of events including concerts, sports games, corporate events, and more.",
    },
    {
      qn: "What sets BEST Crowd Management and GardaWorld apart from other event security service providers?",
      ans: " Quality control is maintained through comprehensive training, on-site supervision, and real-time communication with event organizers.",
    },
  ];

  return (
    <section className="flex flex-col gap-10 pt-20 pb-20 px-6 md:px-10 xl:mx-40">
      <h1 className="text-2xl md:text-5xl mb-4">FAQ</h1>
      <div className="flex flex-col gap-10">
        {questionandAnswer.map((section, index) => (
          <div key={index} className="flex flex-col gap-4">
            {/* Question Section */}
            <div
              className={`flex justify-between items-center ${
                expandedIndex === index
                  ? null
                  : "border-b-[0.5px] border-black pb-4"
              }`}>
              <p className="md:text-xl">{section.qn}</p>
              <button onClick={() => handleShow(index)}>
                {expandedIndex === index ? (
                  <AiOutlineMinus size={30} />
                ) : (
                  <IoAdd size={30} />
                )}
              </button>
            </div>
            {/* Answer Section */}
            {expandedIndex === index && (
              <h1 className="border-b-[2px] border-red-700 mx-2 pb-2">
                {section.ans}
              </h1>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
