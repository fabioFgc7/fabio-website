import { useTheme } from "../components/context/DarkContext";

const About = () => {
  const { mode } = useTheme();

  return (
    <section
      id='about'
      className='w-full md:space-y-10 space-y-5 overflow-hidden'>
      <h2
        className={`w-full text-center text-2xl font-bold ${
          mode ? "text-[#00ADB5]" : "text-[#222831] "
        } `}
        data-aos='title-animation'>
        Sobre mí
      </h2>
      <article className='w-full flex lg:justify-center md:flex-row flex-col justify-center gap-5 items-center md:items-start '>
        <div
          className=''
          data-aos='fade-up'
          data-aos-anchor-placement='bottom-bottom'>
          <img
            className='w-40 h-48 md:h-60 md:w-72 object-cover rounded-md'
            src='./perfil/mi_perfil.png'
            alt='Fotoa'
          />
        </div>
        <div
          className='w-full md:max-w-md space-y-3 text-center md:text-justify p-3'
          data-aos='fade-up'
          data-aos-anchor-placement='center-bottom'>
          <p>
            Desarrollador frontend comprometido con la excelencia en diseño y
            rendimiento. Disfruto convirtiendo conceptos en interfaces de
            usuario excepcionales y creativas. Siempre estoy dispuesto a asumir
            con entusiasmo nuevos desafíos en el emocionante mundo del
            desarrollo web.
          </p>
          <p>
            Siempre estoy dispuesto a aprender nuevas tecnologías y mejorar mis
            habilidades.
          </p>
        </div>
      </article>
    </section>
  );
};

export default About;
