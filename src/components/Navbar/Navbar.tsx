import { useState, useEffect } from "react";
import { IconBottom } from "../button/IconBottom";
import { DartMode } from "../button/DartMode.tsx";
import { useTheme } from "../context/DarkContext.tsx";
import { listaNav } from "../../data/data.ts";

const Navbar = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isActiveScroll, setIsActiveScroll] = useState<boolean>(false);
  const { mode } = useTheme();
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    setIsActive(false);
    const targetElement = document.getElementById(targetId);
    const isMovil = window.innerWidth <= 768;
    const blockValue = isMovil ? "start" : "center";
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: blockValue,
      });
    }
  };
  const handleScroll = () => {
    window.scrollY > 5 ? setIsActiveScroll(true) : setIsActiveScroll(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <IconBottom
        isActive={isActive}
        setIsActive={setIsActive}
      />
      <nav
        className={` flex md:justify-around font-[600] py-3 justify-start  md:space-y-0 space-y-24 items-center md:w-full w-[16vh] md:h-auto h-screen  ${
          mode ? "bg-[#393E46]" : "bg-[#CBF1F5]"
        } fixed md:flex-row flex-col -translate-x-full md:translate-x-0 md:z-10 z-40 ${
          !isActive
            ? "-translate-x-full transition-all duration-500 ease-in-out"
            : "translate-x-0 transition-all duration-500 ease-in-out "
        } ${
          isActiveScroll
            ? "md:fixed md:animate-fade-down anim"
            : "md:sticky fixed md:animate-flip-up"
        }    `}>
        <a
          href='#home'
          className={`w-auto h-auto text-xl md:hover:animate-fade font-extrabold  font-serif after:h-1 after:w-1 ${
            mode ? "after:bg-[#00ADB5] " : "after:bg-[#71C9CE] "
          } after:absolute  after:z-10 after:transition-all after:duration-300 md:after:left-0 hover:after:w-full  after:bottom-0 after:right-full  hover:after:left-0 md:text-2xl  md:w-auto  md:h-auto    translate-x-0 md:mt-0 mt-10  `}>
          <span
            className={`text-[#00ADB5] ${
              mode ? "text-[#00ADB5] " : "text-[#71C9CE] "
            }`}>
            F
          </span>
          abio
        </a>
        <ul className='flex md:flex-row flex-col md:items-center gap-4 list-none md:mr-10  '>
          {listaNav.map(({ id, link, title }) => (
            <li
              className=' flex items-center'
              key={id}>
              <a
                className={` inline-block px-2 z-10  py-[3px] overflow-hidden  transition-all duration-300  relative after:absolute after:w-full after:h-[3.5px] after:transition-all after:duration-300 md:after:right-full after:right-full after:bottom-0 ${
                  mode
                    ? "after:bg-[#00ADB5] focus:text-[#00ADB5]"
                    : "after:bg-[#71C9CE] focus:text-[#71C9CE]"
                }  hover:after:right-0  focus:after:right-0`}
                href={`#${link}`}
                onClick={(e) => handleClick(e, link)}>
                {title}
              </a>
            </li>
          ))}
        </ul>{" "}
        <DartMode />
      </nav>
    </>
  );
};

export default Navbar;
