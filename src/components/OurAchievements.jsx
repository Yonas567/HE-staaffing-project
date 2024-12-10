export default function OurAchievements() {
  return (
    <section className=" flex flex-col  gap-16 text-white bg-black py-20  ">
      <h1 className="text-center text-[28px] md:text-4xl    xl:text-[44px]">
        WHY CHOOSE BEST CROWD MANAGEMENT
      </h1>
      <article className="flex flex-col lg:flex-row gap-24 xl:gap-28 items-center justify-center">
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-3">
            <span className="text-[22px] md:text-3xl ">14+</span>
            <p className=" text-[6px] text-red-700 bg-red-700  border-[1px] border-red-700 -skew-x-12 px-12 ">
              .
            </p>
          </div>
          <p className="w-32 text-center leading-normal md:text-2xl md:w-60 lg:text-lg lg:w-36">
            years experience in the industry
          </p>
        </div>
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-3 ">
            <span className="text-[22px] md:text-3xl ">2,000+</span>
            <p className=" text-[6px] text-red-700 bg-red-700  border-[1px] border-red-700 -skew-x-12 px-12 ">
              .
            </p>
          </div>
          <p className="w-32 text-center leading-normal md:text-2xl md:w-60 lg:text-lg lg:w-36">
            concerts serviced per year
          </p>
        </div>
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-3">
            <span className="text-[22px] md:text-3xl ">750+</span>
            <p className=" text-[6px] text-red-700 bg-red-700  border-[1px] border-red-700 -skew-x-12 px-12 ">
              .
            </p>
          </div>
          <p className="w-32 text-center leading-normal md:text-2xl md:w-60 lg:text-lg ">
            corporate events & tradeshows serviced
          </p>
        </div>
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-3">
            <span className="text-[22px] md:text-3xl">100+</span>
            <p className=" text-[6px] text-red-700 bg-red-700  border-[1px] border-red-700 -skew-x-12 px-12 ">
              .
            </p>
          </div>
          <p className="w-32 text-center leading-normal md:text-2xl md:w-60 lg:text-lg lg:w-36">
            stadiums & arenas serviced
          </p>
        </div>
      </article>
    </section>
  );
}
