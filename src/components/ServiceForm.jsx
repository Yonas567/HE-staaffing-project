import { useState } from "react";

export default function ServiceForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    serviceType: "",
    location: "",
    detail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };
  const [checkboxes, setCheckboxes] = useState([false, false, false]);
  const handleCheckboxChange = (index) => {
    setCheckboxes((prev) =>
      prev.map((checked, i) => (i === index ? !checked : checked))
    );
  };

  const attributes = [
    {
      title: "First Name:",
      type: "text",
      name: "firstName",
      placeholder: "Enter your first name",
    },
    {
      title: "Middle Name:",
      type: "text",
      name: "middleName",
      placeholder: "Enter your middle name",
    },
    {
      title: "Last Name:",
      type: "text",
      name: "lastName",
      placeholder: "Enter your last name",
    },
    {
      title: "Email:",
      type: "email",
      name: "email",
      placeholder: "Enter your email",
    },
    {
      title: "Phone Number:",
      type: "number",
      name: "phoneNumber",
      placeholder: "Enter your phone number",
    },
    {
      title: "Service Type:",
      type: "text",
      name: "serviceType",
      placeholder: "Enter the service type",
    },
    {
      title: "Location:",
      type: "text",
      name: "location",
      placeholder: "Enter the location",
    },
    {
      title: "Details:",
      type: "text",
      name: "detail",
      placeholder: "Enter additional details",
    },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundImage: `url('/img5.jpg')`, // Replace with the actual image path
      }}
      className=" flex flex-col items-center justify-center gap-8 lg:items-start mt-20 mb-3">
      <div className="bg-red-700 mx-4 md:mx-10 my-20 py-2 lg:mr-96 xl:mr-[800px]">
        <div className=" bg-red-700  flex flex-col gap-4 text-white  ">
          <h1 className="text-xl py-10 px-5 md:text-3xl md:mx-5">
            Complete the form to contact us about our services
          </h1>
          {attributes.map((section, index) => (
            <div key={index} className="flex flex-col px-2 md:px-10">
              <p>{section.title}</p>
              <input
                type={section.type}
                id={section.name}
                name={section.name}
                value={formData[section.name]} // Dynamically access the correct value
                onChange={handleChange} // Correctly bind the handleChange function
                placeholder={section.placeholder}
                className={`border-2 border-white px-4 py-2 text-black ${
                  index === attributes.length - 1 ? " pb-16 " : "py-10"
                }`}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 text-white ml-2 my-4">
          {checkboxes.map((isChecked, index) => (
            <div key={index} className="flex gap-2 md:px-10">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => handleCheckboxChange(index)}
              />
              <p>Agree to terms and conditions {index + 1}</p>
            </div>
          ))}
        </div>
        <button
          type="submit"
          className=" border-1 border-white px-2 py-4 bg-white text-red-700 ml-2 my-2 md:ml-10">
          Submit
        </button>
      </div>
    </form>
  );
}
