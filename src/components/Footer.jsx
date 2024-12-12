import logo from "/he-logo.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineCopyright } from "react-icons/ai";
export default function Footer() {
  return (
    <footer className="bg-black w-full">
      <section className=" py-28 lg:pt-20 pb-0 px-6 lg:px-2 lg:justify-center md:px-11 text-white flex flex-col lg:flex-row  gap-16 lg:gap-6 xl:gap-20">
        <div>
          <span>
            <h1 className="text-5xl md:mr-4">
              HE
              <h2 className=" text-[10px]">
                A GRAND FFRCOMPANY
                <p className="  h-[14px] w-32 bg-red-700 transform -skew-x-12 text-red-700 mt-1">
                  red
                </p>
              </h2>
            </h1>
          </span>
          <span className="text-white flex gap-2 mt-4 justify-between md:w-[300px] lg:w-[150px]">
            <FaFacebookF size={25} />
            <FaLinkedinIn size={25} />
            <FaInstagram size={25} />
            <FaTelegramPlane size={25} />
            <FaTwitter size={25} />
          </span>
        </div>
        <article className="flex flex-col gap-12 xl:gap-16">
          <div className="grid grid-cols-[1fr,1fr] gap-4 md:gap-0">
            <div className="flex flex-col gap-6 md:text-lg lg:text-[16px]">
              <h1>SERVICES</h1>
              <div className="flex flex-col gap-2 text-[17px] md:text-lg lg:text-[16px] ">
                <p>Event Security</p>
                <p>Event Security</p>
                <p>Event Consulting</p>
              </div>
            </div>
            <div className="flex flex-col gap-6 md:text-lg lg:text-[16px]">
              <h1>SECTORS</h1>
              <div className="flex flex-col gap-4 text-[17px] md:text-lg lg:text-[16px]">
                <p>Sporting Events</p>
                <p>consumer trade showes</p>
                <p>Sporting & Festivals</p>
                <p>Sporting & Festivals</p>
                <p>Sporting & Festivals</p>
                <p>Sporting & Festivals</p>
              </div>
            </div>
          </div>
        </article>
        <article>
          <div className="grid grid-cols-[1fr,1fr] gap-4 md:gap-0 lg:gap-6 xl:gap-16">
            <div className="flex flex-col gap-4 md:text-lg lg:text-[16px]">
              <h1>RESOURSES</h1>

              <h1>SUCCESS STORIES</h1>
              <h1>BLOG</h1>
              <h1>CLIENT & PARTNERS</h1>
              <h1>LOCATION</h1>
              <h1>CONTACT US</h1>
            </div>
            <div className="flex flex-col gap-4 md:text-lg lg:text-[16px] xl:mr-6">
              <h1>CARRIERS</h1>

              <h1>ABOUT US</h1>
              <h1>NPO FUNDRISING</h1>
              <h1>MEDIA ROOM </h1>
              <h1>GARDA WORLD</h1>
              <h1>SITE MAP</h1>
            </div>
          </div>
        </article>
        <article className=" lg:hidden text-sm flex flex-col md:flex-row gap-6 md:gap-0 md:text-[16px] md:mt-8 md:justify-between md:mr-10 lg:justify-center lg:gap-10">
          <div className="flex gap-1 items-center ">
            <AiOutlineCopyright size={20} />
            <p>HE</p>
          </div>
          <p>Privacy Policy</p>
          <p className="hidden md:block">|</p>
          <p>Cookie Policy</p>
          <p className="hidden md:block">|</p>
          <p>Terms of Use</p>
          <p className="hidden md:block">|</p>
          <p>Cookie Setting</p>
        </article>
      </section>
      <div className="hidden lg:block">
        <article className="pt-16 pb-10 text-sm flex flex-col md:flex-row gap-6 md:gap-0 md:text-[16px] md:mt-8 md:justify-between md:mr-10 lg:justify-center lg:gap-10 text-white">
          <div className="flex gap-1 items-center text-white ">
            <AiOutlineCopyright size={20} />
            <p>HE</p>
          </div>
          <p>Privacy Policy</p>
          <p className="hidden md:block">|</p>
          <p>Cookie Policy</p>
          <p className="hidden md:block">|</p>
          <p>Terms of Use</p>
          <p className="hidden md:block">|</p>
          <p>Cookie Setting</p>
        </article>
      </div>
    </footer>
  );
}
