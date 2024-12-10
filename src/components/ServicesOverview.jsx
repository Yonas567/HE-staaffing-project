import { FaChevronRight } from "react-icons/fa";
export default function ServiceOverview() {
  return (
    <section className="py-20 flex flex-col gap-8">
      <h1 className="text-[26px] text-center md:text-4xl">
        TYPES OF VENUS AND EVENTS WE SERVICE
      </h1>
      <p className="text-center leading-normal sm:mx-6 md:mx-10 lg:mx-10 xl:text-xl xl:mx-[200px]">
        Whether it’s large-scale venues or small community gatherings, state
        fairs and festivals, or trade shows and corporate conventions, our
        special event expertise spans every type of venue.
      </p>
      <article className="mt-10 flex flex-col  items-center gap-10">
        <div className="flex flex-col lg:flex-row gap-10 mx-2 xl:gap-40">
          <div className="flex flex-col items-center ">
            <div className="flex items-center ">
              <h1>SPORTING EVENTS</h1>
              <span className=" border-2 p-[7px] border-red-700 rounded-full bg-red-700 text-white ml-3">
                <FaChevronRight />
              </span>
            </div>
            <p className="bg-red-700 border-2 -skew-x-12 border-red-700 text-[5px] w-24 mt-6 ">
              ..
            </p>
          </div>
          <div className="flex flex-col items-center ">
            <div className="flex items-center">
              <h1>CONSERTS AND FESTIVALS</h1>
              <span className=" border-2 p-[7px] border-red-700 rounded-full bg-red-700 text-white ml-3">
                <FaChevronRight />
              </span>
            </div>
            <p className="bg-red-700 border-2 -skew-x-12 border-red-700 text-[5px] w-24 mt-6 ml-3">
              ..
            </p>
          </div>
          <div className="flex flex-col items-center ">
            <div className="flex items-center">
              <h1>CONSUMER TRADESHOWES</h1>
              <span className=" border-2 p-[7px] border-red-700 rounded-full bg-red-700 text-white ml-3">
                <FaChevronRight />
              </span>
            </div>
            <p className="bg-red-700 border-2 -skew-x-12 border-red-700 text-[5px] w-24 mt-6 ">
              ..
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10 mx-2 lg:flex-row xl:gap-40">
          <div className="flex flex-col items-center ">
            <div className="flex items-center">
              <h1 className="text-center">CONVENTION AND CORPORATE</h1>
              <span className=" border-2 p-[7px] border-red-700 rounded-full bg-red-700 text-white ml-3">
                <FaChevronRight />
              </span>
            </div>
            <p className="bg-red-700 border-2 -skew-x-12 border-red-700 text-[5px] w-24 mt-6 ">
              ..
            </p>
          </div>
          <div className="flex flex-col items-center ">
            <div className="flex items-center">
              <h1>PRIVATE EVENTS</h1>
              <span className=" border-2 p-[7px] border-red-700 rounded-full bg-red-700 text-white ml-3">
                <FaChevronRight />
              </span>
            </div>
            <p className="bg-red-700 border-2 -skew-x-12 border-red-700 text-[5px] w-24 mt-6 ">
              ..
            </p>
          </div>
          <div className="flex flex-col items-center ">
            <div className="flex items-center">
              <h1>COMUNITY EVENTS</h1>
              <span className=" border-2 p-[7px] border-red-700 rounded-full bg-red-700 text-white ml-3">
                <FaChevronRight />
              </span>
            </div>
            <p className="bg-red-700 border-2 -skew-x-12 border-red-700 text-[5px] w-24 mt-6">
              ..
            </p>
          </div>
        </div>
      </article>
      <article className="flex flex-col lg:flex-row items-center justify-center gap-10 ">
        <div className="hidden lg:block">
          <div className="carousel w-[400px] lg:h-[350px] xl:h-[400px] xl:w-[600px] mt-10">
            <div id="item1" className="carousel-item w-full">
              <img src="/img2.jpg" className="w-full" />
            </div>
            <div id="item2" className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                className="w-full"
              />
            </div>
            <div id="item3" className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                className="w-full"
              />
            </div>
            <div id="item4" className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                className="w-full"
              />
            </div>
          </div>
          <div className="flex w-[400px] xl:w-[600px] justify-center gap-2 py-2">
            <a href="#item1" className="btn btn-xs">
              1
            </a>
            <a href="#item2" className="btn btn-xs">
              2
            </a>
            <a href="#item3" className="btn btn-xs">
              3
            </a>
            <a href="#item4" className="btn btn-xs">
              4
            </a>
          </div>
        </div>
        <div className="carousel w-full  md:w-[700px] lg:w-[400px] lg:h-[350px] xl:h-[400px] xl:w-[600px]">
          <div id="slide1" className="carousel-item relative w-full">
            <img src="/image.jpg" className="w-full" />
            <div className="absolute  left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle bg-transparent ">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle bg-transparent">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src="/img2.jpg" className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle bg-transparent">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle bg-transparent">
                ❯
              </a>
            </div>
          </div>

          <div id="slide3" className="carousel-item relative w-full">
            <img src="/img4.jpg" className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle bg-transparent">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle bg-transparent">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src="/img5.jpg" className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle bg-transparent">
                ❮
              </a>
              <a
                href="#slide1"
                className="btn btn-circle bg-transparent text-red-700">
                ❯
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
