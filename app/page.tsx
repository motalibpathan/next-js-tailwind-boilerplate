import AnimatedText from "@/components/molecules/AnimatedText/AnimatedText";
import LoaderAnimation from "@/components/molecules/LoadingScreen/LoaderAnimation";
import NameAnimation from "@/components/molecules/NameAnimation/NameAnimation";
import { SITE_SETTINGS } from "@/lib/data";

export default function Home() {
  return (
    <div>
      <main>
        <LoaderAnimation />
        <NameAnimation />
        <div className="h-[100vh] ">
          <h1>
            <AnimatedText
              lines={[
                SITE_SETTINGS.firstTitleText,
                SITE_SETTINGS.secondTitleText,
              ]}
              delay={SITE_SETTINGS.loadingDelaySec}
              className="text-[13rem] leading-[11rem] font-[500] text-gray-800"
            />
          </h1>
          <div className="text-[3rem] font-[500] text-gray-800">
            Designing purposeful products with meticulous detail, shaping the
            future of after-school virtual spaces at Ender.
          </div>
        </div>
      </main>
    </div>
  );
}
