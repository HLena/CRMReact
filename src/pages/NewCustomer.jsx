import { Form as FormRRD, redirect, useActionData } from "react-router-dom";
import Form from "../components/Form";
import { isEmail } from "../helper/validations";
import Error from "../components/Error";
import { postCustomer } from "../data/customers";

export const action = async ({request}) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData); 
  const email = formData.get('email');

  const errors = [];
  if(Object.values(data).includes('')){
    errors.push('Todos los campos son abligatorios')
  } else if(!isEmail(email)){
    errors.push('El email no es válido  ')
  }

  if(errors.keys().length) {
    return errors;
  }
  await postCustomer(data);
  return redirect('/')
}

const NewCustomer = () => {

  const errors = useActionData();

  return (
    <div>
      <h1 className="text-4xl text-blue-700"> Nuevo Cliente </h1>
      <p>Debes crear un nuevo cliente</p>
      <div className="shadow p-4 mt-4 mx-auto w-8/12 bg-white rounded-md">
        {
          errors?.length &&
          errors.map((err, id) => 
            <Error key={id}>{err}</Error>
          )
        }
        <FormRRD
          method='post'
          noValidate
        >
          <Form/>
          <input 
            className="bg-sky-500 text-white uppercase font-bold py-1 px-2 w-full rounded-sm"
            type="submit" 
            value={'Crear Cliente'}/>
        </FormRRD>
      </div>
    </div>
  )
}

export default NewCustomer