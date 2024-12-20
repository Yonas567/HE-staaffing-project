import { GoDotFill } from "react-icons/go";
import { useLocation } from "react-router-dom";

export default function GrayBgDescription() {
  const { pathname } = useLocation();
  const normalizedPathname = decodeURIComponent(pathname); // Handle special characters in URL

  const descriptions = {
    "/securityStaffing": [
      {
        title: "DISCOVER THE BEST EVENT SECURITY SERVICES",
        info: "Ensuring a safe and successful guest experience starts with the right access controls and screening. Our access control specialists focus on ensuring tight control of the most sensitive areas of your facility by monitoring credentials and admitting only those verified to enter.",
      },
      {
        title: "OUR EVENT SECURITY SERVICES INCLUDE",
        infos: [
          "Walk-through metal detectors and magnetometer security screening",
          "Handheld metal detecting operators to prevent guests from entering your event with contraband",
          "Parking lot attendants to check passes and collect parking fees",
          "Bag checkers and buffer zone personnel to turn people away with prohibited items",
          "Entry ticket scanning so that no one sneaks through",
        ],
      },
    ],
    "/cleaningStaffing": [
      {
        title: "DISCOVER THE BEST CLEANING SERVICES",
        info: "Our cleaning staff ensure spotless and hygienic environments, tailored to meet the needs of every event.",
      },
      {
        title: "OUR CLEANING SERVICES INCLUDE",
        infos: [
          {
            header: "THE GUARDIAN",
            hey: [
              "Pre-event venue cleaning",
              "Post-event cleanup and waste management",
              "Dedicated restroom attendants",
              "Sanitization and disinfection services",
              "Event floor maintenance and spot cleaning",
            ],
          },
          {
            header: "THE MENACE",
            hey: [
              "Pre-event venue cleaning",
              "Post-event cleanup and waste management",
              "Dedicated restroom attendants",
              "Sanitization and disinfection services",
              "Event floor maintenance and spot cleaning",
            ],
          },
          {
            header: "THE MENACE",
            hey: [
              "Pre-event venue cleaning",
              "Post-event cleanup and waste management",
              "Dedicated restroom attendants",
              "Sanitization and disinfection services",
              "Event floor maintenance and spot cleaning",
            ],
          },
        ],
      },
    ],
    "/consulting": [
      {
        title: "DISCOVER THE BEST EVENT SECURITY SERVICES",
        info: "Ensuring a safe and successful guest experience starts with the right access controls and screening. Our access control specialists focus on ensuring tight control of the most sensitive areas of your facility by monitoring credentials and admitting only those verified to enter.",
      },
      {
        title: "OUR EVENT SECURITY SERVICES INCLUDE",
        infos: [
          "Walk-through metal detectors and magnetometer security screening",
          "Handheld metal detecting operators to prevent guests from entering your event with contraband",
          "Parking lot attendants to check passes and collect parking fees",
          "Bag checkers and buffer zone personnel to turn people away with prohibited items",
          "Entry ticket scanning so that no one sneaks through",
        ],
      },
    ],
  };

  const description = descriptions[normalizedPathname] || [];

  return (
    <section className="bg-[#D0CFCF] pt-20 lg:pb-40 flex flex-col gap-20">
      <div className="mx-52">
        {description.map((section, index) => (
          <div key={index} className="flex flex-col gap-10">
            <div>
              <h1 className={` ${index === 0 ? "text-5xl" : "text-3xl"}`}>
                {section.title}
              </h1>
              {section.info && <p className="mt-14 text-xl">{section.info}</p>}
            </div>
            <div>
              {section.infos && (
                <div
                  className={`grid grid-cols-1 gap-10
                  } `}>
                  {section.infos.map((item, i) =>
                    typeof item === "string" ? (
                      <p key={i} className="flex text-lg gap-3">
                        <span className="mt-1 text-red-700">
                          <GoDotFill size={17} />
                        </span>
                        {item}
                      </p>
                    ) : (
                      <div
                        key={i}
                        className="grid grid-cols-[1fr,1fr,1fr] gap-4">
                        <h4 className="text-lg font-bold ">{item.header}</h4>
                        {item.hey.map((subItem, j) => (
                          <p key={j} className=" flex text-lg gap-3">
                            <span className="mt-1 text-red-700">
                              <GoDotFill size={17} />
                            </span>
                            {subItem}
                          </p>
                        ))}
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {normalizedPathname !== "/consulting" && (
        <article className="grid lg:grid-cols-[1.3fr,1fr]">
          <div>
            <img src="/img2.jpg" className="hidden lg:block xl:h-[444px]" />
          </div>
          <div className="bg-black flex flex-col gap-14 pt-20 pl-4 pb-44 md:pl-10 lg:pb-32 xl:pb-10 xl:pl-40 xl:pr-20 text-white">
            <h1 className="text-3xl md:text-4xl lg:text-4xl xl:text-4xl">
              EVENT SECURITY GUARD PATROLS
            </h1>
            <h3 className="text-lg md:text-lg">
              Proactive, vigilant, and highly trained, our security patrols are
              among the best in the industry. Ensure the safety and security of
              key assets at your event through our wide range of security patrol
              services.
            </h3>
          </div>
        </article>
      )}

      <article>
        {normalizedPathname === "/cleaningStaffing" && (
          <section>
            <article className="grid lg:grid-cols-[1.3fr,1fr] mt-20">
              <div className="bg-black flex flex-col gap-14 pt-20 pl-4 pb-44 md:pl-10 lg:pb-32 xl:pb-10 xl:pl-40 xl:pr-20 text-white">
                <h1 className="text-3xl md:text-4xl lg:text-4xl xl:text-4xl">
                  EVENT SECURITY GUARD PATROLS
                </h1>
                <h3 className="text-lg md:text-lg">
                  Proactive, vigilant, and highly trained, our security patrols
                  are among the best in the industry. Ensure the safety and
                  security of key assets at your event through our wide range of
                  security patrol services.
                </h3>
              </div>
              <div>
                <img src="/img2.jpg" className="hidden lg:block xl:h-[444px]" />
              </div>
            </article>
          </section>
        )}
      </article>
    </section>
  );
}
