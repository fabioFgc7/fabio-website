import { Project } from "../../types";
import { useTheme } from "../context/DarkContext";
interface Props {
  procesoDesarrollo: Project["procesoDesarrollo"];
}
export const Procesos = ({ procesoDesarrollo }: Props) => {
  const { mode } = useTheme();
  return (
    <div
      className={`  h-auto gap-2 max-w-5xl border-[2px] p-2 rounded-md ${
        mode ? "border-[#00ADB5]" : "border-[#71C9CE]"
      }`}>
      <p className='text-lg'>Procesos de desarrolo:</p>
      {
        <ul className='space-y-2 md:text-start '>
          <li className='text-sm list-inside list-disc leading-normal'>
            <span className='text-base mr-1'> Planificación:</span>
            {procesoDesarrollo.planificacion}
          </li>
          <li className='text-sm list-inside list-disc leading-normal'>
            <span className='text-base mr-1'>Diseño:</span>
            {procesoDesarrollo.diseno}
          </li>
          <li className='text-sm list-inside list-disc leading-normal'>
            <span className='text-base mr-1'>Implementación: </span>
            {procesoDesarrollo.implementacion}
          </li>
          <li className='text-sm list-inside list-disc leading-normal'>
            <span className='text-base mr-1'>Pruebas: </span>
            {procesoDesarrollo.pruebas}
          </li>
        </ul>
      }
    </div>
  );
};
