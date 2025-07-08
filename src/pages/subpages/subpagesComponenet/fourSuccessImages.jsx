import React from "react";

export default function FourSuccessImages() {
  const datas = [
    {
      bgImage: "/img2.jpg",
      text: "hey there how are you is there everything ok is there something new in this week",
    },
    {
      bgImage: "/img4.jpg",
      text: "hey there how are you is there everything ok is there something new in this week",
    },
    {
      bgImage: "/img5.jpg",
      text: "hey there how are you is there everything ok is there something new in this week",
    },
    {
      bgImage: "/img1.jpg",
      text: "hey there how are you is there everything ok is there something new in this week",
    },
  ];

  return (
    <section className="grid grid-cols-[1fr] md:grid-cols-[1fr,1fr] lg:grid-cols-[1fr,1fr,1fr,1fr] gap-10 xl:gap-6 py-20 px-2 xl:mx-48 lg:gap-4 justify-center">
      {datas.map((data, index) => (
        <div
          key={index}
          className=" bg-cover pt-44 md:pt-28 px-8 pb-10 md:px-10 xl:px-4 xl:w-[250px] xl:h-[350px]"
          style={{ backgroundImage: `url(${data.bgImage})` }}>
          <h2 className="text-black text-center font-bold bg-white opacity-65 p-8 ">
            {data.text}
          </h2>
        </div>
      ))}
    </section>
  );
}
