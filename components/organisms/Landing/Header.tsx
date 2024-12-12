"use client";

import MainLayout from "@/components/layout/MainLayout";
import { SITE_SETTINGS } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const navItems = ["About", "Works", "Contact"];

  return (
    <MainLayout>
      <header className="2xl:px-16 xl:px-10 px-4 absolute top-5 left-0 w-full">
        <div className="w-full flex items-center justify-between md:border-none border border-gray-200 rounded-full px-2.5 py-2">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: SITE_SETTINGS.loadingDelaySec + 1 + 0.1,
              duration: 0.3,
            }}
          >
            <div className="flex items-center space-x-2 ">
              <Image
                src="/images/profile.png"
                alt="Logo"
                width={34}
                height={34}
                className="md:w-[34] md:h-[34] w-[30px] h-[30px] rounded-full object-cover"
              />
              <span className="lg:text-3xl md:text-xl md:block hidden font-semibold relative">
                Rafez<span className="text-xl absolute top-0">&reg;</span>
              </span>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <nav className="flex items-center md:gap-2 gap-5">
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: SITE_SETTINGS.loadingDelaySec + 1 + 0.1 * index,
                  duration: 0.3,
                }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`hover:bg-black hover:text-white md:px-[20px] px-0 md:py-[10px] py-2 rounded-full text-black font-medium md:text-[20px] text-sm duration-500`}
                >
                  {item}
                </a>
              </motion.div>
            ))}
          </nav>
        </div>
      </header>
    </MainLayout>
  );
};

export default Navbar;
