import { FormikErrors } from "formik";
import { FormValue } from "../types.ts";

interface Props {
  values: FormValue;
  errors: FormikErrors<FormValue> ;
}
export const formErrors = ({values,errors}:Props) => {
  console.log(errors);
  
  if (!values.name) {
    
    errors.name = "Por favor escribe tu nombre.";
  } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
    errors.name = "Tu nombre no debe tener caracteres especiales.";
  }
  if (!values.lastname) {
    errors.lastname = "Por favor escribe tu apellido.";
  } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.lastname)) {
    errors.lastname =
      "Tu apellido no debe tener caracteres especiales.";
  }
  if (!values.email) {
    errors.email = "Requerido.";
  } else if (
    !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
      values.email
    )
  ) {
    errors.email = "Correo no válido.";
  }

  return errors;
  
}
