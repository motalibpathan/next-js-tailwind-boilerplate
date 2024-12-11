import { SITE_SETTINGS } from "@/lib/data";
import { Fragment } from "react";

const MarqueeBar = () => {
  const marqueeText = [
    ...SITE_SETTINGS.marqueeText,
    ...SITE_SETTINGS.marqueeText,
  ]; // Duplicate the array

  return (
    <div className="overflow-hidden whitespace-nowrap bg-[#dfff9c]">
      <ul className="inline-flex items-center gap-8 animate-marquee md:p-7 p-6">
        {marqueeText.map((text, index) => (
          <Fragment key={index}>
            <li className="size-2 bg-black rounded-full" />
            <li className="md:text-2xl text-lg font-[500] leading-[18px]">
              {text}
            </li>
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

export default MarqueeBar;
