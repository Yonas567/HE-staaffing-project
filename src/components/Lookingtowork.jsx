import { FaChevronRight } from "react-icons/fa";
export default function LookingToWork() {
  return (
    <section className="flex flex-col items-center gap-8 py-24">
      <h1 className="text-3xl text-center ">
        LOOKING TO WORK FOR BEST
        <h2 className="text-center">WE'RE HIRING ?!</h2>
      </h1>
      <p className="text-lg text-center">
        We're looking for staff to join our world-class team of event security
        and guest service professionals.
      </p>
      <span className="flex items-center gap-2 mt-4">
        <h1 className="text-xl">visit our carrier page</h1>
        <button className=" bg-red-700 border-red-700 border-2 rounded-full p-1">
          <FaChevronRight />
        </button>
      </span>
    </section>
  );
}
