import { FaChevronRight } from "react-icons/fa";
export default function SucessStories() {
  return (
    <section className="bg-[#D0CFCF] pt-20 pb-14 flex flex-col items-center ">
      <h1 className="mb-10 text-3xl text-center lg:text-5xl lg:mr-[700px]">
        SUCESS STORIES
      </h1>
      <article>
        <article className="flex flex-col lg:flex-row justify-center gap-10  ">
          <div className=" flex flex-col w-[320px] md:w-[500px] lg:w-[300px] xl:w-[356px] drop-shadow-2xl shadow-2xl">
            <img src="/img2.jpg" className="" />
            <div className=" flex flex-col gap-10 p-8">
              <h1>EVENT SECURITY</h1>
              <p className="text-[1rem] font-[400]  leading-normal">
                No matter the scale or size of your event, we offer the best in
                event management to ensure the energy at your event keeps going
                with custom-tailored solutions that make all the difference.
              </p>
              <span className="flex gap-2  items-center">
                <h1>READ MORE</h1>
                <span className="bg-red-700 rounded-full p-2">
                  <FaChevronRight />
                </span>
              </span>
            </div>
          </div>
          <div className=" flex flex-col w-[320px] md:w-[500px] lg:w-[300px] xl:w-[356px] shadow-2xl drop-shadow-2xl">
            <img src="/img2.jpg" className="" />
            <div className=" flex flex-col gap-10 p-8">
              <h1>EVENT SECURITY</h1>
              <p className="text-[1rem] font-[400]  leading-normal">
                No matter the scale or size of your event, we offer the best in
                event management to ensure the energy at your event keeps going
                with custom-tailored solutions that make all the difference.
              </p>
              <span className="flex gap-2  items-center">
                <h1>READ MORE</h1>
                <span className="bg-red-700 rounded-full p-2">
                  <FaChevronRight />
                </span>
              </span>
            </div>
          </div>
          <div className=" flex flex-col w-[320px] md:w-[500px] lg:w-[300px] xl:w-[356px] shadow-2xl drop-shadow-2xl z-30">
            <img src="/img2.jpg" className="" />
            <div className=" flex flex-col gap-10 p-8">
              <h1>EVENT SECURITY</h1>
              <p className="text-[1rem] font-[400]  leading-normal">
                No matter the scale or size of your event, we offer the best in
                event management to ensure the energy at your event keeps going
                with custom-tailored solutions that make all the difference.
              </p>
              <span className="flex gap-2  items-center">
                <h1>READ MORE</h1>
                <span className="bg-red-700 rounded-full p-2">
                  <FaChevronRight />
                </span>
              </span>
            </div>
          </div>
        </article>
      </article>
      <span className="flex gap-2 items-center mr-20 md:mr-[250px] lg:mr-[750px] xl:mr-[920px]  mt-14">
        <h1>SEE ALL RESOURCES</h1>
        <span className="bg-red-700 rounded-full p-2">
          <FaChevronRight />
        </span>
      </span>
    </section>
  );
}
