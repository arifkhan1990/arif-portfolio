"use client";
import React, { useState } from "react";
import { Link } from "react-scroll/modules";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const NAV_ITEMS = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Experiences",
    page: "experiences",
  },
  {
    label: "Projects",
    page: "projects",
  },
  {
    label: "CP History",
    page: "cp_history",
  },
  {
    label: "Contact",
    page: "contact",
  },
];

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="w-full mx-auto px-4 bg-white shadow fixed top-0 z-50 sm:px-20 dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3">
            <Link to="home">
              <div className="md:py-5 md:block">
                <h2 className="text-2xl font-bold uppercase tracking-widest italic">
                  Arif Khan
                </h2>
                <h2 className="hidden text-2xl font-bold hover:display">
                  01000001 01110010 01101001 01100110 00100000 01001011 01101000
                  01100001 01101110{" "}
                </h2>
              </div>
            </Link>

            <div className="md:hidden">
              <button onClick={() => setNavbar(!navbar)}>
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="md:flex md:space-x-6 space-y-8 items-center justify-center md:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <div key={idx} className="cursor-pointer font-semibold">
                    <Link
                      activeClass="active"
                      to={item.page}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.label}
                    </Link>
                  </div>
                );
              })}

              <div>
                <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 rounded-md">
                  <a
                    href="/Arif_khan.pdf"
                    alt="alt text"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </a>
                </button>
              </div>
              <div>
                {currentTheme === "dark" ? (
                  <button
                    className="bg-slate-100 p-2 rounded-xl sm:ml-4"
                    onClick={() => setTheme("light")}
                  >
                    <RiSunLine size={25} color="black" />
                  </button>
                ) : (
                  <button
                    className="bg-slate-100 p-2 rounded-xl sm:ml-4"
                    onClick={() => setTheme("dark")}
                  >
                    <RiMoonFill size={25} color="black" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
