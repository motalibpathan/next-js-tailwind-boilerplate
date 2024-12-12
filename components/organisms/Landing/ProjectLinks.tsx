import { SolarArrowRightLinear } from "@/components/assets/SvgIcons";
import SubheaderText from "@/components/molecules/AnimatedText/SubheaderText";
import { SITE_SETTINGS } from "@/lib/data";

const ProjectLinks = () => {
  return (
    <div className="flex flex-col md:gap-8 gap-4 xl:w-[470px] lg:w-[350px] md:w-max w-full">
      <SubheaderText
        lines={["Selected projects case study"]}
        className="uppercase text-[clamp(0.75rem,1vw,1.5rem)]"
        animationDelay={SITE_SETTINGS.loadingDelaySec + 0.5}
      />
      <div className="flex flex-col">
        {SITE_SETTINGS.selectedProjects.map((project, index) => (
          <a
            key={index + project.title}
            href={project.link}
            className="xl:py-6 py-4 border-b border-[#D5D8DE] flex justify-between group items-center hover-border-animation gap-4"
          >
            <SubheaderText
              lines={[project.title]}
              className="text-[clamp(1rem,1.5vw,1.5rem)] text-[500]"
              animationDelay={SITE_SETTINGS.loadingDelaySec + 0.5 + index * 0.1}
            />

            <span className="overflow-hidden">
              <SolarArrowRightLinear className="lg:-translate-x-6 group-hover:translate-x-0 duration-500" />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectLinks;
