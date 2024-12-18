import { FaChevronRight } from "react-icons/fa";
export default function SucessStoriesBgWhite() {
  const contents = [
    {
      title: "EVENT SECURITY",
      description:
        "No matter the scale or the size of your event, we offer the best in event management to ensure the energy at your event keeps going with custom-tailored solutions that make all the difference",
    },
    {
      title: "EVENT SECURITY",
      description:
        "No matter the scale or the size of your event, we offer the best in event management to ensure the energy at your event keeps going with custom-tailored solutions that make all the difference",
    },
    {
      title: "EVENT SECURITY",
      description:
        "No matter the scale or the size of your event, we offer the best in event management to ensure the energy at your event keeps going with custom-tailored solutions that make all the difference",
    },
  ];

  return (
    <section className="bg-[#ffff] pt-20 pb-14 flex flex-col items-center ">
      <h1 className="mb-10 text-3xl text-center lg:text-5xl lg:mr-[700px]">
        SUCESS STORIES
      </h1>
      <article>
        <article className="flex flex-col lg:flex-row justify-center gap-10  ">
          {contents.map((section, index) => (
            <div
              className=" flex flex-col w-[320px] md:w-[500px] lg:w-[300px] xl:w-[356px] drop-shadow-2xl shadow-2xl"
              key={index}>
              <img src="/img2.jpg" />
              <div className=" flex flex-col gap-10 p-8">
                <h1>{section.title}</h1>
                <p>{section.description}</p>
                <span className="flex gap-2  items-center">
                  <h1>READ MORE</h1>
                  <span className="bg-red-700 rounded-full p-2">
                    <FaChevronRight />
                  </span>
                </span>
              </div>
            </div>
          ))}
        </article>
      </article>
      <span className="flex gap-2 items-center mr-10 md:mr-[250px] lg:mr-[720px] xl:mr-[890px]  mt-14">
        <h1 className="bg-red-700 border-1 border-red-700 px-2 py-4 text-white">
          SEE ALL SUCESS STORIES
        </h1>
      </span>
    </section>
  );
}
