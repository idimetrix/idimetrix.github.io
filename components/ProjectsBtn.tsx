import { HiArrowRight } from "react-icons/hi2";
import Image from "next/image";
import Link from "next/link";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href="/projects"
        className="relative w-[185px] h-[185px] z-10 flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src="/rounded-text.png"
          alt="rounded text"
          width={141}
          height={148}
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px] pointer-events-none select-none"
        />
        <HiArrowRight
          className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300"
          aria-hidden
        />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
