"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["ABOUT", "PEOPLE", "RESEARCH", "BLOG", "CONTACT"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-[#293351] text-white p-4">
      {/* Top-level row: Logo (left) + Hamburger (right) */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-name.svg"
            alt="HAIR Lab Logo"
            width={235}
            height={60}
          />
        </Link>

        {/* Right-aligned Hamburger + Dropdown */}
        <div className="relative">
          {/* Button toggles the 'isOpen' state */}
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="xmark"
                  initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <XMarkIcon className="w-10 h-10" />
                </motion.div>
              ) : (
                <motion.div
                  key="bars"
                  initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Bars3Icon className="w-10 h-10" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Dropdown with a scale/fade animation (no fixed width) */}
          <div
            className={`
              absolute right-0 mt-2 bg-[#293351]
              overflow-hidden transform transition-transform duration-300 origin-top
              ${isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}
            `}
          >
            {/* Right-aligned items so text is directly under the icon */}
            <div className="flex flex-col items-end text-right p-4 space-y-2 transition-opacity duration-300 delay-75">
              <AnimatePresence>
                {isOpen &&
                  navItems.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15, delay: 0.05 * index }}
                    >
                      <Link
                        href={`/${item.toLowerCase()}`}
                        className="text-white hover:text-gray-300 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item}
                      </Link>
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;