import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
export default function ContactForm() {
  return (
    <section className="flex flex-col bg-[#D0CFCF] pt-20 lg:flex-row lg:gap-20 lg:py-32 xl:px-40">
      <div className="flex flex-col gap-10  ">
        <h1 className="text-2xl text-center mx-2 lg:mt-20 ">
          GET IN TOUCH WITH US AND SEE OUR BLOG
        </h1>
        <div className="flex flex-col gap-6 mx-4 pb-14 md:mx-40 lg:ml-10">
          <div className="flex items-center text-lg gap-2">
            <MdEmail size={35} />
            <p>yonasdeberu12@gmail.com</p>
          </div>
          <div className="flex items-center text-lg gap-2">
            <FaPhoneVolume size={30} />
            <p>+251977101892</p>
          </div>
          <div className="flex items-center text-lg gap-2">
            <MdLocationOn size={35} />
            <p>addis ababa,kazanchis</p>
          </div>
          <div className="flex items-center text-lg gap-2">
            <FaTelegram size={35} />
            <p>@yonasdebru</p>
          </div>
          <div className="flex items-center text-lg gap-2">
            <AiFillInstagram size={35} />
            <p>yonas debru</p>
          </div>
          <div className="flex items-center text-lg gap-2">
            <FaFacebook size={35} />
            <p>some one </p>
          </div>
        </div>
      </div>
      <div className="bg-white z-10 px-4 py-10 flex flex-col gap-4 lg:mr-10 rounded-lg shadow-2xl">
        <div className="flex flex-col gap-4 md:mx-36 lg:mx-0 lg:flex-row">
          <div className="flex flex-col gap-2">
            <h1>First Name</h1>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-[170px] max-w-xs"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1>Last Name</h1>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-[170px] max-w-xs"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 md:mx-36 lg:mx-0">
          <h1>E-mail (privacy policy)</h1>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-[] max-w-xs"
          />
        </div>
        <div className="md:mx-36 lg:mx-0 ">
          <label className="form-control">
            <div className="label">
              <span className="label-text font-normal text-lg">Message</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Bio"></textarea>
          </label>
        </div>
        <button className="btn btn-active btn-neutral bg-black hover:bg-slate-600 mt-6 mb-2 w-20 md:mx-36 lg:mx-0">
          submit
        </button>
      </div>
    </section>
  );
}
