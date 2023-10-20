import { Formik, FormikErrors } from "formik";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import FormContact from "../components/form/FormContact";
import { FormValue } from "../types.ts";
import { useTheme } from "../components/context/DarkContext.tsx";

const Contact = () => {
  const valorInicial: FormValue = {
    name: "",
    email: "",
    lastname: "",
    subject: "",
    message: "",
  };
  const form = useRef<HTMLFormElement | null>(null);
  const [send, setSend] = useState<boolean>(false);

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      try {
        const result = await emailjs.sendForm(
          "service_s64uvlv",
          "template_1tpu6bq",
          form.current,
          "hv0EKKp14CDzYO1qw"
        );

        setSend(true);
        setTimeout(() => {
          setSend(false);
        }, 3000);
        console.log(result.text);
      } catch (error) {
        console.error(error);
      }
      form.current.reset();
    }
  };
  const { mode } = useTheme();

  return (
    <section
      id='contact'
      className='w-full  md:space-y-10 space-y-5 relative '>
      <h2
        className={`w-full text-center text-2xl font-bold ${
          mode ? "text-[#00ADB5]" : "text-[#222831] "
        } `}
        data-aos='title-animation'>
        Contáctame
      </h2>

      <div className='w-full flex justify-center items-center flex-col'>
        <Formik
          initialValues={valorInicial}
          validate={(values: FormValue) => {
            const errors: FormikErrors<FormValue> = {};
            if (errors) {
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
          }}
          onSubmit={(values, { resetForm }) => {
            resetForm();
            console.log(values);
          }}>
          {({ errors }) => (
            <FormContact
              errors={errors}
              handleOnSubmit={handleOnSubmit}
              form={form}
            />
          )}
        </Formik>
        {send && (
          <p className='text-center text-green-500 text-lg font-bold absolute top-auto bottom-auto'>
            Enviado!
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
