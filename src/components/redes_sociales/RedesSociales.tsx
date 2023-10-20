import { useTheme } from "../context/DarkContext";
import { GitHubIcon, InstagramIcon, LinkedinIcon } from "../mi_icons/Icons";

const RedesSociales = () => {
  const { mode } = useTheme();
  return (
    <ul className={`flex gap-5 justify-center items-center ${mode ? "" : ""}`}>
      <li className=''>
        <a
          href='https://github.com/fabioFgc7'
          target='_blank'
          rel='noopener noreferrer'
          className=''>
          <GitHubIcon />
        </a>
      </li>
      <li className=''>
        <a
          href='https://www.linkedin.com/in/fabiofgc7/'
          target='_blank'
          rel='noopener noreferrer'
          className=''>
          <LinkedinIcon />
        </a>
      </li>
      <li className=''>
        <a
          href='https://www.instagram.com/fabio_guillen7/'
          target='_blank'
          rel='noopener noreferrer'
          className=''>
          <InstagramIcon />
        </a>
      </li>
    </ul>
  );
};

export default RedesSociales;
