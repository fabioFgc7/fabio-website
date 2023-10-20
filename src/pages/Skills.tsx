import { useTheme } from "../components/context/DarkContext.tsx";
import { herramientas, skillTecnico } from "../data/data.ts";

const Skills = () => {
  const { mode } = useTheme();

  return (
    <section
      id='skill'
      className='w-full h-auto md:space-y-10 space-y-5 lg:h-[60vh] flex flex-col items-center justify-center overflow-hidden'>
      <h2
        className={`w-full text-center text-2xl font-bold ${
          mode ? "text-[#00ADB5]" : "text-[#222831] "
        } `}
        data-aos='title-animation'>
        Mi Habilidades
      </h2>
      <article className=' flex justify-center md:flex-row flex-col items-center gap-2'>
        <div className='md:max-w-md   p-3 '>
          <p
            className='text-center text-[16.5px] font-semibold mb-2'
            data-aos='fade-up-right'>
            Habilidades Técnicos
          </p>
          <ul
            className='flex gap-5 items-center justify-center
      flex-wrap'>
            {skillTecnico.map((item) => (
              <li
                className={` rounded-md  w-[100px] p-2 space-y-2 flex flex-col items-center hover:animate-wiggle-more animate-delay-300 shadow-md ${item.shadow} hover:scale-110 hover:translate-x-5`}
                key={item.id}
                data-aos={item.aosAnimated}>
                <img
                  src={item.icon}
                  alt={item.title}
                  className={`md:w-10 w-6 `}
                  style={{ color: item.color }}
                />
                <span className='md:text-base text-sm md:font-normal font-semibold'>
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className='md:max-w-md  p-3'>
          <p
            className='text-center text-[16.5px] font-semibold mb-2'
            data-aos='fade-up-left'>
            Herramientas
          </p>

          <ul
            className='flex gap-5 items-center justify-center
      flex-wrap'>
            {herramientas.map((item) => (
              <li
                className={` rounded-md  w-[100px] p-2 space-y-2 flex flex-col items-center hover:animate-wiggle-more animate-delay-300 shadow-md ${item.shadow} hover:scale-110 hover:translate-x-5`}
                key={item.id}
                data-aos={item.aosAnimated}>
                <img
                  src={item.icon}
                  alt={item.title}
                  className='md:w-10 w-7'
                  style={{ color: item.color }}
                />
                <span className='md:text-base text-sm md:font-normal font-semibold'>
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Skills;
