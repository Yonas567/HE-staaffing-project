import img1 from "/img1.jpg";
import { FaChevronRight } from "react-icons/fa";
export default function ServiceCards() {
  return (
    <section className="bg-[#D0CFCF] py-[80px] flex flex-col gap-8 md:gap-16 items-center">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl xl:text-[48px] xl:leading-normal">
        WE PROVIDE END-TO-END EVENT MANAGEMENT SERVICES
      </h1>
      <p className="text-center mb-4 leading-relaxed md:text-xl xl:text-2xl">
        Our team excels in tailoring services to seamlessly align with the needs
        and requirements of your events, ensuring a perfect fit every time.
      </p>
      <article className="flex flex-col lg:flex-row justify-center gap-10  ">
        <div className=" flex flex-col w-[320px] md:w-[500px] lg:w-[300px] xl:w-[356px] drop-shadow-2xl shadow-2xl">
          <img src="/img2.jpg" className="" />
          <div className="bg-black text-white flex flex-col gap-10 p-8">
            <h1>EVENT SECURITY</h1>
            <p className="text-[1rem] font-[400]  leading-normal">
              No matter the scale or size of your event, we offer the best in
              event management to ensure the energy at your event keeps going
              with custom-tailored solutions that make all the difference.
            </p>
            <span className="flex gap-2  items-center">
              <h1>LEARN MORE</h1>
              <span className="bg-red-700 rounded-full p-2">
                <FaChevronRight />
              </span>
            </span>
          </div>
        </div>
        <div className=" flex flex-col w-[320px] md:w-[500px] lg:w-[300px] xl:w-[356px] shadow-2xl drop-shadow-2xl">
          <img src="/img2.jpg" className="" />
          <div className="bg-black text-white flex flex-col gap-10 p-8">
            <h1>EVENT SECURITY</h1>
            <p className="text-[1rem] font-[400]  leading-normal">
              No matter the scale or size of your event, we offer the best in
              event management to ensure the energy at your event keeps going
              with custom-tailored solutions that make all the difference.
            </p>
            <span className="flex gap-2  items-center">
              <h1>LEARN MORE</h1>
              <span className="bg-red-700 rounded-full p-2">
                <FaChevronRight />
              </span>
            </span>
          </div>
        </div>
        <div className=" flex flex-col w-[320px] md:w-[500px] lg:w-[300px] xl:w-[356px] shadow-2xl drop-shadow-2xl">
          <img src="/img2.jpg" className="" />
          <div className="bg-black text-white flex flex-col gap-10 p-8">
            <h1>EVENT SECURITY</h1>
            <p className="text-[1rem] font-[400]  leading-normal">
              No matter the scale or size of your event, we offer the best in
              event management to ensure the energy at your event keeps going
              with custom-tailored solutions that make all the difference.
            </p>
            <span className="flex gap-2  items-center">
              <h1>LEARN MORE</h1>
              <span className="bg-red-700 rounded-full p-2">
                <FaChevronRight />
              </span>
            </span>
          </div>
        </div>
      </article>
    </section>
  );
}
