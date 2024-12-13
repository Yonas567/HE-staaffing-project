import { GoDash } from "react-icons/go";

export default function ServiceOverview2() {
  const allItems = [
    {
      title: "EVENT SECURITY 1",
      image: "/img1.jpg", // Unique image for the first section
      items: [
        "Concert/Festival Security",
        "Private Event Security",
        "Corporate Event Security",
        "Sports Event Security",
        "Wedding Security",
        "Party Security",
        "VIP Security",
        "Exhibition Security",
        "Charity Event Security",
        "School Event Security",
      ],
    },
    {
      title: "GUEST EXPERIANCE",
      image: "/img2.jpg", // Unique image for the second section
      items: [
        "Concert/Festival Security",
        "Private Event Security",
        "Corporate Event Security",
        "Sports Event Security",
        "Wedding Security",
        "Party Security",
        "VIP Security",
        "Exhibition Security",
        "Charity Event Security",
        "School Event Security",
      ],
    },
    {
      title: "CONFERENCE & CONVENTION SERVICE",
      image: "/img4.jpg", // Unique image for the third section
      items: [
        "Concert/Festival Security",
        "Private Event Security",
        "Corporate Event Security",
        "Sports Event Security",
        "Wedding Security",
        "Party Security",
        "VIP Security",
      ],
    },
  ];

  return (
    <section className="pt-10 pb-14 flex flex-col items-center">
      <h1 className="mb-10 text-2xl px-2 md:text-5xl lg:text-5xl xl:px-44">
        DEDICATED CROWD MANAGEMENT SERVICE FOR EVENTS
      </h1>
      <p className="px-4 pb-20 text-lg md:text-xl xl:px-44">
        Our team excels in tailoring positions to seamlessly align with the
        needs and requirements of your events, ensuring a perfect fit every
        time.
      </p>
      <article>
        <article className="flex flex-col lg:flex-row justify-center gap-10">
          {allItems.map((section, index) => (
            <div
              key={index}
              className="flex flex-col w-[320px] md:w-[700px] lg:w-[300px] xl:w-[360px]">
              <img
                src={section.image}
                alt={section.title}
                className="lg:h-[240px] xl:h-[300px]"
              />
              <div className="flex flex-col gap-10 p-8">
                <h1 className="text-xl md:text-2xl pl-1">{section.title}</h1>
                <div className="text-[18px] font-[400] leading-normal flex flex-col gap-4">
                  {section.items.map((text, idx) => (
                    <div key={idx} className="flex gap-1 items-center">
                      <span className="text-xl text-red-700">
                        <GoDash size={27} />
                      </span>
                      <p className="font-[700]">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </article>
      </article>
      <button className="border-2 border-red-700 bg-red-700 px-4 py-4 text-white my-10">
        TALK TO AN EXPERT
      </button>
    </section>
  );
}
