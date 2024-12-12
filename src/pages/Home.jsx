/////// react hooks///////

////////components//////
import SlidingLogos from "../components/SlidingLogos";
import ServiceCards from "../components/ServiceCards";
import OurAchievements from "../components/OurAchievements";
import ServiceOverview from "../components/ServicesOverview";
import SucessStories from "../components/SuccessStories";
///////assets////////
import logo from "/he-logo.svg";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import img1 from "/img1.jpg";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <main className="mt-[79px] md:mt-[114px]   lg:mt-[146px] xl:mt-[133px]">
      <section className="hero contrast-100  ">
        <div className="Section_top">
          <div className=" flex flex-col justify-center items-center text-white lg:mx-40 mt-20 sm:mt-[50px] md:mt-[100px] lg:mt-[190px]">
            <h1 className="text-2xl md:text-5xl xl:text-[75px]">
              SECURITY, MANAGEMENT, AND CLEANING STAFFING
            </h1>
            <p className=" text-center w-40 lg:w-[700px] h-2 lg:h-[20px]  bg-red-700 transform -skew-x-12 text-red-700 my-6">
              .
            </p>
            <h1 className="  text-xl mx-4 lg:text-3xl mt-4">
              BEST ENSURES A SAFE AND SUCCESSFUL GUEST EXPERIENCE WITH OUR EVENT
              SECURITY SERVICES.
            </h1>
            <div className="   flex gap-12 justify-center items-center mt-10 ">
              <div className="flex justify-center items-center gap-3 ">
                <h1>DISCOVER OUR SERVICES</h1>
                <button className=" bg-red-700 border-red-700 border-2 rounded-full p-2">
                  <FaChevronRight />
                </button>
              </div>
              <button className=" hidden sm:block border-2 bg-red-700 px-5 py-4 border-red-700">
                TALK TO AN EXPERT
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <SlidingLogos />
      </section>
      <section>
        <ServiceCards />
      </section>
      <section>
        <OurAchievements />
      </section>
      <section>
        <ServiceOverview />
      </section>
      <section>
        <SucessStories />
      </section>
      <section className="flex flex-col items-center gap-12 md:gap-16 bg-black py-[70px] md:py-20 px-5 leading-4 text-white">
        <h1 className="text-[27px] md:text-5xl text-center xl:w-[1400px]">
          GET EXPERT EVENT SECURITY & STAFFING SERVICES TODAY
        </h1>
        <button className="  border-2 bg-red-700 px-5 py-4 border-red-700">
          TALK TO AN EXPERT
        </button>
      </section>
      <section className="flex flex-col items-center gap-8 py-24">
        <h1 className="text-3xl text-center ">
          LOOKING TO WORK FOR BEST
          <h2 className="text-center">WE'RE HIRING ?!</h2>
        </h1>
        <p className="text-lg text-center">
          We're looking for staff to join our world-class team of event security
          and guest service professionals.
        </p>
        <span className="flex items-center gap-2 mt-4">
          <h1 className="text-xl">visit our carrier page</h1>
          <button className=" bg-red-700 border-red-700 border-2 rounded-full p-1">
            <FaChevronRight />
          </button>
        </span>
      </section>
    </main>
  );
}
