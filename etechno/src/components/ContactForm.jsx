import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted:", formData);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    }
  };

  return (
    <div className="flex justify-center w-full px-4">
    <div className="w-full max-w-3xl bg-neutral-900 border border-neutral-800 rounded-md p-6 shadow-lg mt-10">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mb-6 ">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        
        <div>
          
          <input
            placeholder="Enter your name..."
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 bg-neutral-800 text-white border border-neutral-700 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-300"/>
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

       
        <div>
         
          <input
            placeholder="Enter your email here........"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 bg-neutral-800 text-white border border-neutral-700 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-300"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        
        <div>
          
          <input
            placeholder="Enter your P]phone number"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 bg-neutral-800 text-white border border-neutral-700 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-300"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

       
        <div>
          
          <textarea
            placeholder="your message.."
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 bg-neutral-800 text-white border border-neutral-700 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-300"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>

       
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-500 to-orange-800 text-white font-medium py-2 rounded-md transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
    </div>
  );
};

export default ContactForm;
