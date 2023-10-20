import { useEffect, useState } from "react";

import { ArrowUpIcon } from "../mi_icons/Icons";

export const InicioButton = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const handleScroll = () => {
    window.scrollY > 200 ? setIsActive(true) : setIsActive(false);
  };
  const handleToScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={handleToScroll}
      className={` fixed bottom-2 right-4 inline-block rounded-full group   ${
        isActive ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300 ease-in-out`}>
      <ArrowUpIcon />
    </button>
  );
};
