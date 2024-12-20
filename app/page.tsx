import MainLayout from "@/components/layout/MainLayout";
import AnimatedText from "@/components/molecules/AnimatedText/AnimatedText";
import SubheaderText from "@/components/molecules/AnimatedText/SubheaderText";
import LoaderAnimation from "@/components/molecules/LoadingScreen/LoaderAnimation";
import Navbar from "@/components/organisms/Landing/Header";
import MarqueeBar from "@/components/organisms/Landing/MarqueeBar";
import ProjectLinks from "@/components/organisms/Landing/ProjectLinks";
import { SITE_SETTINGS } from "@/lib/data";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <LoaderAnimation />
        <MainLayout>
          <div className="h-[100vh] flex md:items-center md:justify-between md:flex-row flex-col lg:gap-[4rem] gap-[3.5em] justify-center">
            <div className="flex flex-col h-max gap-6">
              <h1>
                <AnimatedText
                  lines={[
                    SITE_SETTINGS.firstTitleText,
                    SITE_SETTINGS.secondTitleText,
                  ]}
                  delay={SITE_SETTINGS.loadingDelaySec}
                  className="text-[clamp(4rem,10vw,16rem)] leading-[1] font-[500] text-black"
                />
              </h1>
              <SubheaderText
                lines={[
                  SITE_SETTINGS.subHeaderTextLine1,
                  SITE_SETTINGS.subHeaderTextLine2,
                ]}
                className="text-[clamp(1rem,2vw,4rem)] md:leading-[1.3] leading-[1]"
                animationDelay={SITE_SETTINGS.loadingDelaySec + 0.5}
              />
            </div>
            <ProjectLinks />
            <div className="absolute w-full bottom-0 left-0">
              <MarqueeBar />
            </div>
          </div>
        </MainLayout>
      </main>
    </div>
  );
}
