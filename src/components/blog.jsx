import { FaChevronRight } from "react-icons/fa";
export default function Blog() {
  const blog = [
    {
      blog: "HOW BEST ENSURED SEAMLESS EVENT SECURITY AT A RECORD BRAEAKING WNBA EVENT",
    },
    { blog: "5 GREATEST RISKS TO THE SECURITY OF YOUR EVENT" },
    {
      blog: "EVENT SECURITY:WHY TRUST THE PROFESSIONALS",
    },
  ];
  return (
    <section className="my-16 flex flex-col gap-16 mx-5 md:mx-10 xl:mx-[200px]">
      <h1 className="flex flex-col gap-10 text-3xl lg:text-4xl xl:text-5xl">
        BLOG
      </h1>
      <div className=" flex flex-col gap-10 lg:flex-row">
        <div className="flex flex-col gap-4">
          <img src="/img4.jpg" />
          <p className="text-[13px] mt-6">FEATURED ARTICLE</p>
          <h1 className="text-xl font-bold md:text-3xl">
            What Sets Best Crowed Management Apart in the Event Security
            Industry
          </h1>
          <span className="flex gap-2  items-center text-[16px] mt-4 ">
            <h1>READ MORE</h1>
            <span className="bg-red-700 rounded-full p-2 text-white">
              <FaChevronRight />
            </span>
          </span>
        </div>

        <div className="flex flex-col gap-10 text-sm ">
          {blog.map((section, index) => (
            <div className="flex flex-col gap-3 border-b-[1px] border-black pb-10">
              <div key={index} className="leading-relaxed md:text-lg">
                {section.blog}
              </div>
              <span className="flex gap-2  items-center text-[16px]">
                <h1>READ MORE</h1>
                <span className="bg-red-700 rounded-full p-2 text-white">
                  <FaChevronRight />
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
      <button className="bg-red-700 border-1 border-red-700  text-white mx-auto px-4 py-4 lg:mr-[685px] ;">
        SEE ALL BLOG ARTICLES
      </button>
    </section>
  );
}
