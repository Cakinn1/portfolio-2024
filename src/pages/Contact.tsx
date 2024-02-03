import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import AOS from "aos";
export default function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_sz89zkj",
        "template_6a5t7z5",
        event.currentTarget,
        "xSrf96z8wZJVPEI1y"
      );

      setTimeout(() => {
        setLoading(false);
      }, 1000);

      setTimeout(() => {
        setSuccess(true);
      }, 1000);

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (e) {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#f8f8f8] h-[80vh] relative mx-auto p-5 flex justify-center items-center  "
    >
      {/* <img src="/assets/cover2.png" className="absolute h-[600px]  w- objec-cover" alt="" /> */}
      <div className="p-5  max-w-[1200px] w-full ">
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex justify-center items-center uppercase text-[#4b5563] md:tracking-[15px] tracking-[10px]  text-[30px] "
        >
          Get In Touch!
        </h1>

        <form
          className=" md:w-[400px] py-[40px] mx-auto  space-y-4"
          onSubmit={sendEmail}
        >
          <div data-aos="fade-right" data-aos-duration="300">
            <h1 className="font-bold">Name</h1>
            <input
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-md cursor-none focus:bg-opacity-75 duration-300 bg-gray-200 focus:outline-none px-4 py-2"
            />
          </div>
          <div data-aos="fade-right" data-aos-duration="600">
            <h1 className="font-bold">Email</h1>
            <input
              name="email"
              required
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full cursor-none rounded-md focus:bg-opacity-75 duration-300 bg-gray-200 focus:outline-none  px-4 py-2"
            />
          </div>
          <div data-aos="fade-right" data-aos-duration="900">
            <h1 className="font-bold">Message</h1>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full cursor-none h-[140px] focus:bg-opacity-75 duration-300 resize-none rounded-md bg-gray-200 focus:outline-none px-4 py-2"
            />
          </div>
          {loading ? (
            <button
              className="border  w-full cursor-none bg-gray-200  animate-pulse duration-300 text-white h-[50px] p-3 rounded-2xl"
              type="submit"
            ></button>
          ) : success ? (
            <button
              className="border cursor-none  w-full border-green-500 p-3 rounded-2xl"
              type="submit"
            >
              Thank you!
            </button>
          ) : (
            <button
              data-aos="fade-right"
              data-aos-duration="1200"
              className=" bg-gray-200 hover:scale-110 duration-300 active:scale-90  cursor-none w-full  p-3 rounded-2xl"
              type="submit"
            >
              Send Message
            </button>
          )}
        </form>
      </div>
    </section>
  );
}
