import SucessStoriesBgWhite from "../components/SucessStoriesbg-White";
export default function Resources() {
  return (
    <main className="mt-[133px]">
      <section>
        <article className="grid lg:grid-cols-[1.3fr,1fr]">
          <div
            className=" bg-red-700 flex flex-col gap-14 pt-10 justify-center pl-4 pb-20 md:pl-10 lg:pb-32 xl:pb-20 xl:pl-40  
          xl:pr-4 text-white ">
            <h1 className="text-3xl md:text-5xl xl:text-6xl">RESOURCES</h1>
          </div>
          <img src="/img2.jpg" className=" hidden lg:block h-[230px]" />
        </article>
      </section>
      <section>
        <SucessStoriesBgWhite />
      </section>
    </main>
  );
}
