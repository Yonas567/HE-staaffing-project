import ServiceForm from "../components/ServiceForm";
import LookingToWork from "../components/Lookingtowork";
import SlidingLogos from "../components/SlidingLogos";
export default function TalkToAnExpert() {
  return (
    <main className="mt-[133px]">
      <section className="flex flex-col   ">
        <div>
          <div className="mx-4 text-center flex flex-col gap-10 my-10">
            <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl">
              COMPLETE THE FORM TO CONTACT US ABOUT OUR SERVICE{" "}
            </h1>
            <p className="md:text-xl lg:text-2xl ">
              This is the first step to ensuring a safe & successful experience
              for your guests.
            </p>
          </div>
          <div className="flex justify-center ">
            <SlidingLogos />
          </div>
        </div>
        <div className="lg:ml-44">
          <ServiceForm />
        </div>
      </section>
      <div>
        <LookingToWork />
      </div>
    </main>
  );
}
