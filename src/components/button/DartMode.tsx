import { useTheme } from "../context/DarkContext";
import { MoonIcon, SunIcon } from "../mi_icons/Icons";

export const DartMode = () => {
  const { mode, cambiarModoOscuro } = useTheme();
  return (
    <button
      className={`md:absolute flex items-center md:top-4 md:right-4 md:bottom-auto left-auto right-auto bottom-32 text-white font-bold rounded-full p-1 z-30 `}
      type='button'
      onClick={cambiarModoOscuro}>
      {mode ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};
