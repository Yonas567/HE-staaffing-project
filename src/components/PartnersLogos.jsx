import { useState } from "react";
import logo from "/he-logo.svg";

export default function PartnerLogos() {
  const [visibleSection, setVisibleSection] = useState(0);

  const handleSectionClick = (index) => {
    setVisibleSection((prev) => (prev === index ? index : index)); // Toggle visibility
  };

  const info = [
    {
      button: "All Partner",
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
    <main className="my-10">
      {/* Buttons Section */}
      <section className=" flex flex-wrap gap-4 lg:gap-10 xl:gap-40 justify-center items-center">
        {info.map((section, sectionIndex) => (
          <button
            key={sectionIndex}
            className={`border-1 w-40 border-black px-3 py-3 ${
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
      <section className=" mt-20">
        {visibleSection !== null && (
          <div className=" flex flex-wrap justify-center gap-6">
            {info[visibleSection].logos.map((logo, i) => (
              <section className="flex flex-col gap-10">
                <div key={i} className=" ">
                  <img src={logo} alt="Partner logo" className="w-44" />
                </div>
                <div key={i} className=" hidden lg:block">
                  <img src={logo} alt="Partner logo" className="w-44" />
                </div>
                <div key={i} className="hidden lg:block">
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
