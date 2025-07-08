import { useState } from "react";
import Image from "/img5.jpg";
import logo from "/he-logo.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

// List of job positions
const jobList = [
  { id: 1, logo: logo, title: "Security" },
  { id: 2, logo: logo, title: "Management" },
  { id: 3, logo: logo, title: "Operations" },
];

export default function Carriers() {
  // State to manage confirmation message display
  const [confirmationMessage, setConfirmationMessage] = useState("");

  // State to manage form input values
  const [formData, setFormData] = useState({
    firstName: "",
    telegram: "",
    age: "",
    gender: "",
    phoneNumber: "",
  });

  // Handle changes in form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (event, id) => {
    event.preventDefault(); // Prevent page refresh

    // Set confirmation message upon successful submission
    setConfirmationMessage(
      `You submitted successfully! Please wait until we reply in Telegram.`
    );

    // Close modal and reset form after a delay
    setTimeout(() => {
      const modal = document.getElementById(`modal_${id}`);
      if (modal) modal.close();
      setConfirmationMessage(""); // Clear message
      setFormData({
        firstName: "",
        telegram: "",
        age: "",
        gender: "",
        phoneNumber: "",
      }); // Reset form fields
    }, 6000); // 6-second delay
  };

  return (
    <main className="my-[133px] mx-2 md:mx-6 lg:mx-6">
      {/* Header section with background image */}
      <section
        className="bg-cover pt-44 md:pt-28 px-8 pb-44 h-[300px] md:px-10 opacity-80 flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${Image})` }}>
        <div className="text-white bg-black bg-opacity-50 p-4 rounded-lg">
          <h1 className="text-3xl font-extrabold mb-4">TEAM UP WITH HE</h1>
          <p className="text-lg font-bold">
            BE PART OF A TEAM THAT KEEPS THE ENERGY GOING WHILE KEEPING EVERYONE
            SAFE.
          </p>
        </div>
      </section>

      {/* Introduction section */}
      <section className="my-6 flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl text-center">A CARRIER WORTH EARNING.</h1>
          <h1 className="text-6xl text-center leading-snug">WE ARE BEST.</h1>
        </div>
        <div className="flex flex-col gap-6">
          <p className="leading-normal">
            BEST provides a full array of security and crowd management services
            for a wide variety of clients throughout North America, including
            professional sporting, such as the NBA, MLB, MLS, entertainment
            events, municipal and governmental agencies, conferences,
            conventions, collegiate events and other large affairs.
          </p>
        </div>
      </section>

      {/* Job application section */}
      <section className="flex flex-col gap-8 mt-8">
        {jobList.map((job) => (
          <div
            key={job.id}
            className="border-2 rounded-xl flex justify-between pr-2 py-4">
            <div className="flex items-center">
              <img src={job.logo} alt={job.title} className="w-20" />
              <p>{job.title}</p>
            </div>
            <div>
              {/* Button to open modal */}
              <button
                className="btn"
                onClick={() =>
                  document.getElementById(`modal_${job.id}`).showModal()
                }>
                <Link className="flex gap-2 items-center text-black hover:text-red-700">
                  <p>Apply now</p>
                  <FaArrowRightLong />
                </Link>
              </button>
              {/* Modal for job application form */}
              <dialog id={`modal_${job.id}`} className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                  {/* Show confirmation message or form */}
                  {confirmationMessage ? (
                    <>
                      <h3 className="font-bold text-lg">
                        {confirmationMessage}
                      </h3>
                    </>
                  ) : (
                    <>
                      <h3 className="font-bold text-lg">
                        Apply for {job.title}
                      </h3>
                      <form
                        onSubmit={(e) => handleSubmit(e, job.id)}
                        className="flex flex-col gap-4 mt-4">
                        {/* Input for first name */}
                        <div>
                          <label className="block text-sm font-bold">
                            First Name:
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="input input-bordered w-full"
                            required
                          />
                        </div>
                        {/* Input for Telegram ID */}
                        <div>
                          <label className="block text-sm font-bold">
                            Telegram ID:
                          </label>
                          <input
                            type="text"
                            name="telegram"
                            value={formData.telegram}
                            onChange={handleInputChange}
                            className="input input-bordered w-full"
                            required
                          />
                        </div>
                        {/* Input for age */}
                        <div>
                          <label className="block text-sm font-bold">
                            Age:
                          </label>
                          <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleInputChange}
                            className="input input-bordered w-full"
                            required
                          />
                        </div>
                        {/* Input for gender */}
                        <div>
                          <label className="block text-sm font-bold">
                            Gender:
                          </label>
                          <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                            className="input input-bordered w-full"
                            required>
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>
                        {/* Input for phone number */}
                        <div>
                          <label className="block text-sm font-bold">
                            Phone Number:
                          </label>
                          <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            className="input input-bordered w-full"
                            required
                          />
                        </div>
                        {/* Submit button */}
                        <button
                          type="submit"
                          className="btn bg-slate-900 hover:text-black mt-4">
                          Submit
                        </button>
                      </form>
                    </>
                  )}
                  <div className="modal-action">
                    {/* Button to close modal */}
                    <button
                      className="btn bg-slate-900 hover:text-black"
                      onClick={() =>
                        document.getElementById(`modal_${job.id}`).close()
                      }>
                      Close
                    </button>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
