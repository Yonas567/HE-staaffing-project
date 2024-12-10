import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "/he-logo.svg";
import { IoMenu } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";
export default function Header({ nav, setNav }) {
  return (
    <header className="bg-black">
      <article className="bg-black text-white flex items-center justify-between ">
        <h1 className="text-2xl lg:text-5xl md:mr-4 block md:hidden ml-5 py-2 md:py-0">
          HE
          <h2 className=" text-[10px]">
            A GRAND FFRCOMPANY
            <p className=" w-[80px] h-[14px]  bg-red-700 transform -skew-x-12 text-red-700 mt-1">
              red
            </p>
          </h2>
        </h1>

        <div className="hidden md:block">
          <div className=" flex flex-col  p-2 lg:pt-1 lg:pb-4 xl:px-[150px] ">
            <div className="flex justify-end gap-4 items-center">
              <h1>+251-983-373-67</h1>
              <button className="border-[1px] border-white p-2">CARRIER</button>
              <h1>FR</h1>
            </div>

            <div className="flex justify-between items-center xl:gap-10">
              <h1 className="lg:text-5xl md:mr-4">
                HE
                <h2 className=" text-[10px]">
                  A GRAND FFRCOMPANY
                  <p className="  h-[14px]  bg-red-700 transform -skew-x-12 text-red-700 mt-1">
                    red
                  </p>
                </h2>
              </h1>
              <div className="flex text-[11px] lg:text-[14px] gap-2 md:gap-6 ">
                <Link className=" relative ">
                  <div className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                    SERVICE
                  </div>

                  <div className=" hidden hover:block absolute top-10 w-60 bg-black">
                    <ul className="flex justify-between p-4 gap-6 text-[12px]">
                      <div className="flex flex-col gap-4">
                        <Link className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                          item-1
                        </Link>

                        <Link className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                          item-2 item
                        </Link>
                        <Link className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                          item-2
                        </Link>
                        <Link className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                          item-2
                        </Link>
                      </div>
                      <div className="flex flex-col gap-4">
                        <Link className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                          item-3 sssss
                        </Link>
                        <Link className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                          item-4ssss
                        </Link>
                        <Link className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                          item-2
                        </Link>
                      </div>
                    </ul>
                  </div>
                </Link>
                <Link className=" relative ">
                  <div className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                    SECTOR
                  </div>

                  <div className=" z-10 hidden hover:block absolute top-10 w-60 bg-black">
                    <ul className="flex justify-between p-4 gap-6 text-[12px]">
                      <div className="flex flex-col gap-4">
                        <Link className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                          item-1
                        </Link>

                        <Link className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                          item-2 item
                        </Link>
                        <Link className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                          item-2
                        </Link>
                        <Link className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                          item-2
                        </Link>
                      </div>
                      <div className="flex flex-col gap-4">
                        <Link className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                          item-3 sssss
                        </Link>
                        <Link className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                          item-4ssss
                        </Link>
                        <Link className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                          item-2
                        </Link>
                      </div>
                    </ul>
                  </div>
                </Link>
                <Link className=" relative ">
                  <div className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                    RESOURCES
                  </div>

                  <div className=" hidden hover:block absolute top-10 w-60 bg-black">
                    <ul className="flex justify-between p-4 gap-6 text-[12px]">
                      <div className="flex flex-col gap-4">
                        <Link className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                          item-1
                        </Link>

                        <Link className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                          item-2 item
                        </Link>
                        <Link className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                          item-2
                        </Link>
                        <Link className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                          item-2
                        </Link>
                      </div>
                      <div className="flex flex-col gap-4">
                        <Link className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                          item-3 sssss
                        </Link>
                        <Link className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                          item-4ssss
                        </Link>
                        <Link className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                          item-2
                        </Link>
                      </div>
                    </ul>
                  </div>
                </Link>
                <Link className=" relative ">
                  <div className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                    CLIENTS&PARTNERS
                  </div>

                  <div className=" hidden hover:block absolute top-10 w-60 bg-black">
                    <ul className="flex justify-between p-4 gap-6 text-[12px]">
                      <div className="flex flex-col gap-4">
                        <Link className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                          item-1
                        </Link>

                        <Link className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                          item-2 item
                        </Link>
                        <Link className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                          item-2
                        </Link>
                        <Link className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                          item-2
                        </Link>
                      </div>
                      <div className="flex flex-col gap-4">
                        <Link className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                          item-3 sssss
                        </Link>
                        <Link className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                          item-4ssss
                        </Link>
                        <Link className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                          item-2
                        </Link>
                      </div>
                    </ul>
                  </div>
                </Link>
                <Link className=" relative ">
                  <div className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                    CLIENT AND PARTNER
                  </div>

                  <div className=" hidden hover:block absolute top-10 w-60 bg-black">
                    <ul className="flex justify-between p-4 gap-6 text-[12px]">
                      <div className="flex flex-col gap-4">
                        <Link className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                          item-1
                        </Link>

                        <Link className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                          item-2 item
                        </Link>
                        <Link className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                          item-2
                        </Link>
                        <Link className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                          item-2
                        </Link>
                      </div>
                      <div className="flex flex-col gap-4">
                        <Link className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                          item-3 sssss
                        </Link>
                        <Link className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                          item-4ssss
                        </Link>
                        <Link className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                          item-2
                        </Link>
                      </div>
                    </ul>
                  </div>
                </Link>
                <Link className=" relative ">
                  <div className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                    COMPANY
                  </div>

                  <div className=" hidden hover:block absolute top-10 w-60 bg-black">
                    <ul className="flex justify-between p-4 gap-6 text-[12px]">
                      <div className="flex flex-col gap-4">
                        <Link className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                          item-1
                        </Link>

                        <Link className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                          item-2 item
                        </Link>
                        <Link className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                          item-2
                        </Link>
                        <Link className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                          item-2
                        </Link>
                      </div>
                      <div className="flex flex-col gap-4">
                        <Link className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                          item-3 sssss
                        </Link>
                        <Link className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                          item-4ssss
                        </Link>
                        <Link className="hover:underline decoration-red-500 decoration-2 underline-offset-[12px]">
                          item-2
                        </Link>
                      </div>
                    </ul>
                  </div>
                </Link>
              </div>
              <button className="border-2 border-red-700 text-[11px] xl:text-[15px] p-1 xl:px-4 xl:py-2 bg-red-700 ml-4  ">
                <Link>TALK TO AN EXPERT</Link>
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
        <div className="flex flex-col  h-screen   justify-between">
          <div className="flex flex-col gap-6 mt-16">
            <Link>
              <div className="flex justify-between items-center pb-2 border-b-2 border-transparent border-red-500">
                <h1>Services</h1>
                <button>
                  <FaChevronRight />
                </button>
              </div>
            </Link>

            <Link>
              <div className="flex justify-between items-center pb-2 border-b-2 border-transparent border-red-500">
                <h1>Sector</h1>
                <button>
                  <FaChevronRight />
                </button>
              </div>
            </Link>
            <Link>
              <div className="flex justify-between items-center pb-2 border-b-2 border-transparent border-red-500">
                <h1>Services</h1>
                <button>
                  <FaChevronRight />
                </button>
              </div>
            </Link>
            <Link>
              <div className="flex justify-between items-center pb-2 border-b-2 border-transparent border-red-500">
                <h1>Services</h1>
                <button>
                  <FaChevronRight />
                </button>
              </div>
            </Link>
            <Link>
              <div className="flex justify-between items-center pb-2 border-b-2 border-red-400">
                <h1>Services</h1>
                <button>
                  <FaChevronRight />
                </button>
              </div>
            </Link>
            <Link>
              <div className="flex justify-between items-center pb-2 border-b-2 border-transparent border-red-500">
                <h1>Services</h1>
                <button>
                  <FaChevronRight />
                </button>
              </div>
            </Link>
            <div className="flex justify-between">
              <h1>FR</h1>
              <button>
                <Link>
                  <FaChevronRight />
                </Link>
              </button>
            </div>
          </div>
          <div className="flex text-[12px] justify-between items-center  text-[#ffff] mb-24 ">
            <button className="border-[1px] px-4 py-2 bg-black border-white ">
              <Link>CAREERS</Link>
            </button>

            <button className="border-[1px] px-4 py-2  bg-red-700 border-red-700">
              <Link>TALK TO AN EXPERT</Link>
            </button>
          </div>
        </div>
      </article>
    </header>
  );
}
