import ServiceCards from "../components/ServiceCards";
import ServiceOverview2 from "../components/ServiceOverview2";
import SlidingLogos from "../components/SlidingLogos";
import OurAchievements from "../components/OurAchievements";
import ServiceOverview from "../components/ServicesOverview";
import SucessStories from "../components/SuccessStories";
import LookingToWork from "../components/Lookingtowork";
import Faq from "../components/FAQ";
import ServiceForm from "../components/ServiceForm";
export default function Service() {
  return (
    <main className="mt-[133px]">
      <section>
        <article className="grid lg:grid-cols-[1.3fr,1fr]">
          <div className=" bg-red-700 flex flex-col gap-14 pt-20 pl-4 pb-44 md:pl-10 lg:pb-32 xl:pb-44 xl:pl-40  xl:pr-4 text-white ">
            <h1 className="text-3xl md:text-5xl xl:text-6xl">
              EVENT MANAGEMENT SERVICES
            </h1>
            <h3 className="text-lg md:text-xl">
              WITH A COMPREHENSIVE LIST OF WORLD-CLASS EVENT MANAGEMENT
              SERVICES, WE OFFER THE BEST IN EVENT SECURITY,EVENT STAFFING AND
              CONSULTING.
            </h3>
          </div>
          <img src="/img2.jpg" className=" hidden lg:block" />
        </article>
      </section>
      <section>
        <SlidingLogos />
      </section>
      <section>
        <ServiceCards />
      </section>
      <section>
        <ServiceOverview2 />
      </section>
      <section>
        <OurAchievements />
      </section>
      <section>
        <ServiceOverview />
      </section>
      <section>
        <SucessStories />
      </section>
      <section>
        <Faq />
      </section>
      <section>
        <ServiceForm />
      </section>
      <section>
        <LookingToWork />
      </section>
    </main>
  );
}
