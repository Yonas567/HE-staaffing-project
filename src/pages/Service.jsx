import ServiceCards from "../components/ServiceCards";
import ServiceOverview2 from "../components/ServiceOverview2";
import SlidingLogos from "../components/SlidingLogos";
import OurAchievements from "../components/OurAchievements";
import ServiceOverview from "../components/ServicesOverview";
import SucessStories from "../components/SuccessStories";
import LookingToWork from "../components/Lookingtowork";
import Faq from "../components/FAQ";
import ServiceForm from "../components/ServiceForm";
import HalfColorImage from "../components/halfColorImage.jsx.jsx";
export default function Service() {
  return (
    <main className="mt-[133px]">
      <section>
        <HalfColorImage />
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
