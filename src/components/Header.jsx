import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "/he-logo.svg";
import { IoMenu } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";

const Dropdown = ({ label, to, items }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      {/* Main Menu */}
      <Link
        to={to}
        className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
        {label}
      </Link>

      {/* Submenu */}
      <div
        className={`absolute top-[63px] left-0 w-72 p-4 bg-black transition-all duration-300 ${
          isHovered ? "opacity-100 visible" : "opacity-0 invisible"
        }`}>
        <ul className="grid grid-cols-[0.7fr,1fr] p-4 gap-6 text-[12px]">
          {items.map(({ text, to }, index) => (
            <li key={index}>
              <Link className="hover:text-red-700 text-sm" to={to}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default function Header() {
  const [nav, setNav] = useState(false);
  const navItems = [
    {
      label: "SERVICE",
      to: "/service", // Main link for SECTOR
      items: [
        { text: "SECURITY STAFFING", to: "/securityStaffing" },
        { text: "CLEANING STAFFING", to: "/cleaningStaffing" },
        { text: "MANAGEMENT STAFFING", to: "/managementStaffing" },
        { text: "CONSULTING", to: "/consulting" },
      ],
    },
    {
      label: "SECTOR",
      to: "/sector", // Main link for SERVICE
      items: [
        { text: "HOTELS", to: "/service/item1" },
        { text: "COLLEGE", to: "/service/item2" },
        { text: "HOSPITALS", to: "/service/item3" },
        { text: "PRIVATE COMPANIES", to: "/service/item4" },
        { text: "GOVERNMENTAL INSTITUTIONS", to: "/" },
      ],
    },
    {
      label: "RESOURCES",
      to: "/resources", // Main link for RESOURCES
      items: [
        { text: "item-1", to: "/resources/item1" },
        { text: "item-2", to: "/resources/item2" },
        { text: "item-3", to: "/resources/item3" },
        { text: "item-4", to: "/resources/item4" },
      ],
    },
    {
      label: "CLIENTS&PARTNERS",
      to: "/client & partnership", // Main link for CLIENTS&PARTNERS
      items: [
        { text: "item-1", to: "/clients/item1" },
        { text: "item-2", to: "/clients/item2" },
        { text: "item-3", to: "/clients/item3" },
        { text: "item-4", to: "/clients/item4" },
      ],
    },
    {
      label: "COMPANY",
      to: "/company", // Main link for COMPANY
      items: [
        { text: "item-1", to: "/company/item1" },
        { text: "item-2", to: "/company/item2" },
        { text: "item-3", to: "/company/item3" },
        { text: "item-4", to: "/company/item4" },
      ],
    },
  ];

  return (
    <header className="bg-black fixed z-50 top-0 w-full left-0">
      <article className="bg-black text-white flex items-center justify-between">
        <Link
          className="text-2xl lg:text-5xl md:mr-4 block md:hidden ml-5 py-2 md:py-0"
          to="./"
          onClick={() => setNav(false)}>
          HE
          <h2 className="text-[10px]">
            A GRAND FFRCOMPANY
            <p className="w-[80px] h-[14px] bg-red-700 transform -skew-x-12 text-red-700 mt-1">
              red
            </p>
          </h2>
        </Link>

        <div className="hidden md:block">
          <div className="flex flex-col p-2 lg:pt-1 lg:pb-4 xl:px-[150px]">
            <div className="flex justify-end gap-4 items-center">
              <h1>+251-983-373-67</h1>
              <button className="border-[1px] border-white p-2">CARRIER</button>
              <h1>FR</h1>
            </div>

            <div className="flex justify-between items-center xl:gap-10">
              <Link className="lg:text-5xl md:mr-4 " to="./">
                HE
                <h2 className="text-[10px]">
                  A GRAND FFRCOMPANY
                  <p className="h-[14px] bg-red-700 transform -skew-x-12 text-red-700 mt-1">
                    red
                  </p>
                </h2>
              </Link>

              <div className="flex text-[11px] lg:text-[14px] gap-2 md:gap-6 xl:gap-10 xl:ml-34">
                {navItems.map((item, index) => (
                  <Dropdown
                    key={index}
                    label={item.label}
                    to={item.to}
                    items={item.items}
                  />
                ))}
              </div>

              <button className="border-2 border-red-700 text-[11px] xl:text-[15px] p-1 xl:px-4 xl:py-2 bg-red-700 ml-4 xl:ml-20">
                <Link to="/talk-to-expert">TALK TO AN EXPERT</Link>
              </button>
            </div>
          </div>
        </div>

        <IoMenu
          color="#ffff"
          size={30}
          className={`${nav && "-rotate-90"} md:hidden transition-all mr-5`}
          onClick={() => setNav(!nav)}
        />
      </article>

      <article
        className={`${
          nav ? "block" : "hidden"
        } text-xl md:hidden ml-4 mr-5 text-white`}>
        <div className="flex flex-col h-screen justify-between">
          <div
            className="flex flex-col gap-6 mt-16"
            onClick={() => setNav(false)}>
            {navItems.map(({ label, to }) => (
              <Link key={label} to={to}>
                <div className="flex justify-between items-center pb-2 border-b-2 border-transparent hover:border-red-500">
                  <h1>{label}</h1>
                  <button>
                    <FaChevronRight />
                  </button>
                </div>
              </Link>
            ))}

            <div className="flex justify-between">
              <h1>FR</h1>
              <button>
                <Link>
                  <FaChevronRight />
                </Link>
              </button>
            </div>
          </div>

          <div className="flex text-[12px] justify-between items-center text-[#ffff] mb-24">
            <button className="border-[1px] px-4 py-2 bg-black border-white">
              <Link to="/careers">CAREERS</Link>
            </button>
            <button className="border-[1px] px-4 py-2 bg-red-700 border-red-700">
              <Link to="/talk-to-expert">TALK TO AN EXPERT</Link>
            </button>
          </div>
        </div>
      </article>
    </header>
  );
}
