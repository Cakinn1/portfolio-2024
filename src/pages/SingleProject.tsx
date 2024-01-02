import { Link, useParams } from "react-router-dom";
import { projectData } from "../constants/contants";
import { ProjectProps } from "../constants/types";
import { LuClipboardCopy } from "react-icons/lu";
import { FaArrowLeft } from "react-icons/fa6";
import { useEffect } from "react";
import Aos from "aos";

export default function SingleProject() {
  const { id } = useParams();

  const singleProjectData = projectData.filter(
    (item) => item.id === parseInt(id!)
  );
  const object = singleProjectData[0];

  useEffect(() => {
    window.scroll({ top: 0 });
    Aos.init();
  }, []);

  return (
    <div className="text-black min-h-[110vh] md:min-h-screen   bg-white ">
      <div className="max-w-[1100px]   bg-white px-6 mx-auto py-20">
        <div className="flex text-3xl  justify-between mb-10 items-center">
          <div
            className="flex gap-x-4 items-center"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <Link
              to="/"
              className="hover:scale-110 active:scale-90 cursor-pointer duration-300 bg-[#f5f5f5] p-2 rounded-lg"
            >
              <FaArrowLeft />
            </Link>
            <h1 className="font-bold">{object.info?.title}</h1>
          </div>
          {/* <div className="hover:scale-110 active:scale-90 cursor-pointer duration-300 bg-[#f5f5f5] p-2 rounded-lg">
            <LuClipboardCopy />
          </div> */}
        </div>
        <div>
          <video
            data-aos="flip-left"
            data-aos-duration="1000"
            className="rounded-2xl w-full"
            src={object.video}
            controls
            autoPlay={true}
          ></video>
        </div>
        <div className="flex space-y-8 md:space-y-0 h-[350px] lg:h-[280px] flex-col md:flex-row mt-10 gap-x-8">
          <Skills object={object} />
          <Description object={object} />
        </div>
      </div>
    </div>
  );
}

interface MainSectionProps {
  object: ProjectProps;
}

function Skills(props: MainSectionProps) {
  const { object } = props;
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="bg-[#f5f5f5]  space-y-3 rounded-2xl md:w-[50%]  p-8"
    >
      <h1 className="font-semibold text-2xl">Skills & Deliverables</h1>
      <div className=" flex flex-wrap  gap-x-2 ">
        {object.skillsAndDeliverables!.map((skill) => {
          return (
            <h1 className="border  mb-2 text-sm cursor-pointer hover:scale-110 active:scale-90 duration-300 bg-opacity-10 bg-black  w-fit h-fit rounded-full px-4 py-2">
              {skill}
            </h1>
          );
        })}
      </div>
    </div>
  );
}

function Description(props: MainSectionProps) {
  const { object } = props;
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="flex gap-x-8  rounded-2xl md:w-[50%]"
    >
      <div className="bg-[#f5f5f5]  relative rounded-2xl p-8 w-full space-y-3">
        <h1 className="font-semibold text-2xl">Description</h1>
        <p>{object.info?.mainPara}</p>
        <div className="flex">
          <a
            className="w-[50%] flex justify-center items-center border rounded-lg py-2"
            target="_blank"
            href={object.github}
          >
            <button>Code Source</button>
          </a>
          <a
            className="w-[50%] ml-4 flex justify-center items-center border rounded-lg py-2"
            target="_blank"
            href={object.vercel}
          >
            <button>Live Website</button>
          </a>
        </div>
      </div>
    </div>
  );
}
