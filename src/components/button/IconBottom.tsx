import { CloseIcon, NarbarsIcon } from "../mi_icons/Icons";
interface Props {
  isActive: boolean;
  setIsActive: (value: boolean) => void;
}
export const IconBottom = ({ isActive, setIsActive }: Props) => {
  return (
    <button
      onClick={() => setIsActive(!isActive)}
      className={`md:hidden top-2 fixed transition-all duration-300 ease-in text-lg ${
        isActive ? "right-2" : "left-2"
      }  z-30`}>
      {isActive ? <CloseIcon /> : <NarbarsIcon />}
    </button>
  );
};
