//Navegacion
export interface Links {
  id: number;
  title: string;
  link: string;
}

//Formulario
export interface FormValue {
  name: string;
  email: string;
  lastname: string;
  subject: string;
  message: string;
}

//Habilidades
export interface HabilidadTecnicos {
  id: string;
  title: string;
  color: string;
  aosAnimated:string;
  shadow: string;
  icon: string;
}
export interface Herramientas{
  id:string;
  title:string;
  color:string;
  aosAnimated:string;
  shadow:string;
  icon: string;
}

//Projectos
export interface Projects {
  projects: Project[];
}

export interface Project {
  id:                         string;
  title:                      string;
  description:                string;
  image:                      string;
  animatedAos:                string;
  tecnologiasUtilizadas:     TecnologiasUtilizadas;
  caracteristicasDestacadas: string[];
  procesoDesarrollo:         ProcesoDesarrollo;
  leccionesAprendidas:       string;
  resultadosYLogros:         string;
  fechaFinalizacion:         string;
  enlance:                   Enlance;
}

export interface Enlance {
  linkPage:   string;
  linkGitHub: string;
}

export interface ProcesoDesarrollo {
  planificacion:  string;
  diseno:         string;
  implementacion: string;
  pruebas:        string;
}

export interface TecnologiasUtilizadas {
  lenguajes:                string[];
  herramientasYBibliotecas: string[];
  otrasTecnologias:         string[];
}

