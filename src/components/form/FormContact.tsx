import { Form, Field, ErrorMessage } from "formik";
import { useTheme } from "../context/DarkContext";
interface Props {
  errors: {
    name?: string;
    lastname?: string;
    email?: string;
  };
  handleOnSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  form: React.RefObject<HTMLFormElement>;
}
const FormContact = ({ handleOnSubmit, form }: Props) => {
  const { mode } = useTheme();
  return (
    <Form
      onSubmit={handleOnSubmit}
      ref={form}
      className='md:max-w-3xl w-full space-y-5  overflow-hidden px-2'>
      <div className='flex md:flex-row flex-col md:space-x-5 space-y-5 md:space-y-0  text-lg w-full md:py-2'>
        <label
          className='block w-full'
          data-aos='fade-right'
          htmlFor='nombre'>
          <Field
            className={`w-full rounded-md p-2 outline-none border-none ${
              mode
                ? "bg-[#393E46] focus:outline-[#00ADB5]"
                : "bg-[#CBF1F5] focus:outline-[#A6E3E9] placeholder:text-[#222831] "
            }    `}
            type='text'
            name='name'
            placeholder='Nombre'
            autoComplete='off'
          />
          <ErrorMessage
            name='name'
            component='label'
            className='text-red-600 text-xs'
          />
        </label>

        <label
          className='block w-full'
          data-aos='fade-left'>
          <Field
            className={`w-full rounded-md p-2 outline-none border-none ${
              mode
                ? "bg-[#393E46] focus:outline-[#00ADB5]"
                : "bg-[#CBF1F5] focus:outline-[#A6E3E9] placeholder:text-[#222831]"
            }    `}
            type='text'
            name='lastname'
            placeholder='Apellido'
            autoComplete='off'
          />
          <ErrorMessage
            name='lastname'
            component='label'
            className='text-red-600 text-xs'
          />
        </label>
      </div>
      <label
        className='block'
        data-aos='fade-right'>
        <Field
          className={`w-full rounded-md p-2 outline-none border-none ${
            mode
              ? "bg-[#393E46] focus:outline-[#00ADB5]"
              : "bg-[#CBF1F5] focus:outline-[#A6E3E9] placeholder:text-[#222831]"
          }    `}
          type='email'
          name='email'
          placeholder='Correo'
          autoComplete='off'
          required
        />
        <ErrorMessage
          name='email'
          component='label'
          className='text-red-600 text-xs'
        />
      </label>

      <label
        className='block'
        data-aos='fade-left'>
        <Field
          className={`w-full rounded-md p-2 outline-none border-none ${
            mode
              ? "bg-[#393E46] focus:outline-[#00ADB5]"
              : "bg-[#CBF1F5] focus:outline-[#A6E3E9] placeholder:text-[#222831]"
          }    `}
          type='text'
          name='subject'
          placeholder='Asunto'
          autoComplete='off'
        />
      </label>
      <label
        className='block'
        data-aos='fade-up'>
        <textarea
          rows={5}
          name='message'
          className={`w-full rounded-md p-2 outline-none border-none max-h-48 ${
            mode
              ? "bg-[#393E46] focus:outline-[#00ADB5]"
              : "bg-[#CBF1F5] focus:outline-[#A6E3E9] placeholder:text-[#222831]"
          }    `}
          placeholder='Mensaje'></textarea>
      </label>

      <button
        className={`px-8 py-1 rounded-md overflow-hidden border-2  ${
          mode ? "border-[#393E46]" : " border-[#A6E3E9]"
        }  relative ease-in transition-all duration-300 after:absolute after:content-[""] after:w-full after:h-full after:left-0 after:-top-full  after:transition-all after:duration-300 after:-z-10 before:-z-10 before:absolute after:box-border before:box-border before:content-[""] before:w-full before:h-full before:-top-full before:left-0  ${
          mode
            ? "after:bg-[#393E46] before:bg-[#393E46]"
            : "after:bg-[#CBF1F5] before:bg-[#CBF1F5]"
        }  before:transition-all before:duration-300 before:opacity-50 after:delay-200 hover: hover:before:top-0 hover:after:top-0`}
        type='submit'
        data-aos=''>
        Enviar
      </button>
    </Form>
  );
};

export default FormContact;
