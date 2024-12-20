import { useState } from "react";
import logo from "/he-logo.svg";
import img from "/img2.jpg";

export default function PartnerLogos() {
  const [visibleSection, setVisibleSection] = useState(0);

  const handleSectionClick = (index) => {
    setVisibleSection((prev) => (prev === index ? index : index)); // Toggle visibility
  };

  const info = [
    {
      button: "All Clients & Partner",
      logos: [logo, logo, logo, logo, logo, logo],
    },
    {
      button: "Event Security",
      logos: [logo, logo, logo, logo, logo, logo],
    },
    {
      button: "Event Staffing",
      logos: [logo, logo, logo, logo, logo, logo],
    },
    {
      button: "Special Events",
      logos: [logo, logo, logo, logo, logo, logo],
    },
  ];

  return (
    <main className="flex flex-col justify-center mx-40 gap-10 my-20">
      {/* Buttons Section */}
      <section className="flex  justify-between mx-10">
        {info.map((section, sectionIndex) => (
          <button
            key={sectionIndex}
            className={`border-1 border-black p-1 ${
              visibleSection == sectionIndex
                ? "p-2 bg-black text-white border-2 border-black"
                : ""
            }border-2 border-black `}
            onClick={() => handleSectionClick(sectionIndex)}>
            <p className=" ">{section.button}</p>
          </button>
        ))}
      </section>

      {/* Logos Section */}
      <section className="">
        {visibleSection !== null && (
          <div className="flex justify-between">
            {info[visibleSection].logos.map((logo, i) => (
              <section>
                <div key={i} className="">
                  <img src={logo} alt="Partner logo" className="w-44" />
                </div>
                <div key={i} className="">
                  <img src={logo} alt="Partner logo" className="w-44" />
                </div>
                <div key={i} className="">
                  <img src={logo} alt="Partner logo" className="w-44" />
                </div>
              </section>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
