import { useTheme } from "../context/DarkContext";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const { mode } = useTheme();
  return (
    <footer
      className={`text-center text-base bg-dark p-4 mt-5  ${
        mode ? "bg-[#393E46]" : "bg-[#CBF1F5]"
      }  `}>
      © Todos los derechos Fabio Guillen {year}
    </footer>
  );
};

export default Footer;
