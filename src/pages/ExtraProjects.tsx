import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Aos from "aos";
import Project from "../components/Project";
import { extraProjectData } from "../contants/contants";

export default function ExtraProjects() {
  const [error, setError] = useState<boolean>(true);
  useEffect(() => {
    window.scrollTo({ top: 0 });
    Aos.init();
    setTimeout(() => {
      setError(false);
    }, 10000);
  }, [error]);

  return (
    <section className="bg-[#f8f8f8] scroll-smooth min-h-screen">
      <div className="max-w-[1400px] mx-auto py-10">
        <TopHeader />
        {error && (
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="px-10 py-6 text-center md:text-left text-red-500 font-bold"
          >
            Netflix clone will come up with a security error, Don't be alarmed
            this only occurs due to naming conventions on github and vercel.
          </h1>
        )}
        <div className="py-[40px] flex flex-wrap">
          {extraProjectData.map((data, i) => (
            <Project
              Application={data.Application}
              github={data.github}
              image={data.image}
              info={data.info}
              vercel={data.vercel}
              key={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TopHeader() {
  return (
    <div
      className="px-10 flex justify-center items-center flex-col md:justify-normal md:items-start"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="300"
    >
      <Link to="/" className="flex  group items-center gap-x-2">
        <FaArrowLeft className="group-hover:-translate-x-2 duration-100" />
        <h1 className="flex  justify-center items-center text-lg  ">
          Anthony Cakin
        </h1>
      </Link>
      <h1 className="text-5xl font-semibold text-[#4b5563]">All Projects</h1>
    </div>
  );
}
