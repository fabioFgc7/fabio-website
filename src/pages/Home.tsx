import { useEffect, useState } from "react";
import RedesSociales from "../components/redes_sociales/RedesSociales";
import { MiCv } from "../components/cv/MiCv";
import { useTheme } from "../components/context/DarkContext";
const Home = () => {
  const [textoAnimados, setTextoAnimados] = useState<string>("");

  const texto: string = "Hola, soy Fabio Guillen";
  useEffect(() => {
    let contador: number = 0;
    const tipearTexto = setInterval(() => {
      if (contador < texto.length) {
        setTextoAnimados(texto.slice(0, contador + 1));
        contador++;
      } else {
        clearInterval(tipearTexto);
      }
    }, 100);

    return () => clearInterval(tipearTexto);
  }, [texto]);
  const { mode } = useTheme();
  return (
    <section
      id='home'
      className={`text-[#eeeeee] w-full md:h-screen flex bg-cover bg-center justify-center items-center ${
        mode
          ? ' bg-[url("/background/rsz_david-schultz-6liqs_kku3c-unsplash.jpg")] md:bg-[url("/background/rsz_digital-1742687_1920.jpg")]'
          : 'bg-[url("/background/rsz_1pexels-pixabay-265631.jpg")]  md:bg-[url("/background/rsz_christopher-gower-vjmgquks8q8-unsplash.jpg")]'
      }`}>
      <article
        className={` flex lg:justify-around md:flex-row flex-col justify-center gap-5 items-center md:items-start   lg:w-3/4  w-auto h-auto rounded-2xl p-10 ${
          mode
            ? "bg-[#000] w-full bg-opacity-60"
            : " bg-[#A6E3E9] bg-opacity-50 text-black  w-full"
        }  md:bg-opacity-60 animate-jump-in  animate-delay-200 `}>
        <div className='space-y-2 order-2 md:order-none snap-always snap-center animate-fade-right'>
          <h1 className='md:text-3xl text-xl font-semibold font-serif mt-2 md:w-96 w-full text-center '>
            {textoAnimados}
          </h1>

          <p className='text-center animate-rotate-x animate-fill-backwards font-semibold'>
            Desarrolador Front-end
          </p>
          <RedesSociales />
          <MiCv />
        </div>
        <div className=''>
          <img
            className='w-40 h-48 md:h-60 md:w-72 rounded-md  object-cover animate-fade-left  '
            src='./perfil/mi_perfil.png'
            alt='Perfil'
          />
        </div>
      </article>
    </section>
  );
};

export default Home;
