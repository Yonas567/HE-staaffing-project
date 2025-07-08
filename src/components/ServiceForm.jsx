import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function ServiceForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    serviceType: "",
    location: "",
    detail: "",
    gender: "",
    dateOfBirth: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const missingFields = Object.entries(formData).filter(
      ([, value]) => !value
    );
    if (missingFields.length > 0) {
      alert(
        `Please fill in the following fields: ${missingFields
          .map(([key]) => key)
          .join(", ")}`
      );
      return;
    }
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
      title: "Gender:",
      type: "select",
      name: "gender",
      options: ["Male", "Female"],
    },
    {
      title: "Date of Birth:",
      type: "date",
      name: "dateOfBirth",
      placeholder: "Select your date of birth",
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
      type: "textarea",
      name: "detail",
      placeholder: "Enter additional details",
    },
  ];

  const address = [
    {
      path: "/service",
      bg: "img5.jpg",
    },
    {
      path: "/talktoanexpert",
      bg: null,
    },
  ];

  const { pathname } = useLocation();
  const normalizedPathname = decodeURIComponent(pathname);

  const matchedPath = address.find((data) => data.path === normalizedPathname);

  if (!matchedPath) return null;

  const { bg } = matchedPath;
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundImage: `url('${bg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex flex-col items-center justify-center gap-8 lg:items-start mt-20 mb-3">
      <div className="bg-red-700 mx-4 md:mx-10 my-20 py-2 lg:mr-96 xl:mr-[800px]">
        <div className="bg-red-700 grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
          <h1 className="col-span-full text-xl py-10 px-5 md:text-3xl md:mx-5">
            Complete the form to contact us about our services
          </h1>
          {attributes.map((section, index) => (
            <div key={index} className="flex flex-col px-2 md:px-10">
              <p>{section.title}</p>
              {section.type === "select" ? (
                <select
                  name={section.name}
                  value={formData[section.name]}
                  onChange={handleChange}
                  className="border-2 border-white px-4 py-2 text-black">
                  <option value="" disabled>
                    Select your {section.title.toLowerCase()}
                  </option>
                  {section.options.map((option, idx) => (
                    <option key={idx} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : section.type === "textarea" ? (
                <textarea
                  name={section.name}
                  value={formData[section.name]}
                  onChange={handleChange}
                  placeholder={section.placeholder}
                  className="border-2 border-white px-4 py-2 text-black h-20"
                />
              ) : (
                <input
                  type={section.type}
                  id={section.name}
                  name={section.name}
                  value={formData[section.name]}
                  onChange={handleChange}
                  placeholder={section.placeholder}
                  className="border-2 border-white px-4 py-2 text-black"
                />
              )}
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
              <p>Agree to term {index + 1}</p>
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="border-1 border-white px-2 py-4 bg-white text-red-700 ml-2 my-2 md:ml-10">
          Submit
        </button>
      </div>
    </form>
  );
}
