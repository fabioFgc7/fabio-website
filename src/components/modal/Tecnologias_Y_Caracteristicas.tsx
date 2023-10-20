import { Project } from "../../types";
import { useTheme } from "../context/DarkContext";
interface Props {
  caracteristicasDestacadas: Project["caracteristicasDestacadas"];
  tecnologiasUtilizadas: Project["tecnologiasUtilizadas"];
  fechaFinalizacion: Project["fechaFinalizacion"];
}
export const Tecnologias_Y_Caracteristicas = ({
  caracteristicasDestacadas,
  tecnologiasUtilizadas,
}: Props) => {
  const { mode } = useTheme();
  return (
    <div className={`w-full flex gap-2 flex-wrap`}>
      <div
        className={` border-[2px] p-2  md:w-auto max-w-5xl rounded-md  space-y-2 ${
          mode ? "border-[#00ADB5]" : "border-[#71C9CE]"
        }`}>
        <p className='md:text-lg text-base'>Tecnologías Utilizadas:</p>
        <div className='flex gap-2  '>
          {tecnologiasUtilizadas.lenguajes.map((icon) => (
            <img
              key={icon}
              className='w-6 '
              src={icon}
              alt='Lenguajes'
            />
          ))}
        </div>
      </div>
      <div
        className={` border-[2px] p-2 rounded-md md:w-auto max-w-5xl  ${
          mode ? "border-[#00ADB5]" : "border-[#71C9CE]"
        }`}>
        <p className='md:text-lg text-base'>Herramientas y Bibliotecas:</p>
        <div className='flex gap-2'>
          {" "}
          {tecnologiasUtilizadas.herramientasYBibliotecas.map((icon) => (
            <img
              key={icon}
              className='w-6 '
              src={icon}
              alt='Lenguajes'
            />
          ))}
        </div>
      </div>

      <div
        className={`  border-[2px] p-2 rounded-md md:w-auto max-w-5xl  ${
          mode ? "border-[#00ADB5]" : "border-[#71C9CE]"
        }`}>
        <p className='md:text-lg text-base'>Otras Tecnologías:</p>
        <ul className='flex gap-2'>
          {" "}
          {tecnologiasUtilizadas.otrasTecnologias.map((el) => (
            <li className='text-sm list-inside list-disc '>{el}</li>
          ))}
        </ul>
      </div>

      <div
        className={` gap-2  border-[2px]  p-2 rounded-md md:w-auto max-w-5xl  ${
          mode ? "border-[#00ADB5]" : "border-[#71C9CE]"
        }`}>
        <p className='md:text-lg text-base md:max-w-lg '>Caracteriticas:</p>
        <ul className='flex gap-2 flex-col'>
          {caracteristicasDestacadas.map((el) => (
            <li
              className='text-sm list-inside list-disc '
              key={el}>
              {el}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
