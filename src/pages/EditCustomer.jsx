import { useLoaderData,  Form as FormRRD, redirect, useActionData, useNavigate } from "react-router-dom";
import { getCustomerById, updateCustomer } from "../data/customers";
import Form from "../components/Form";
import { isEmail } from "../helper/validations";

export const loader = async ({params}) => {
    const response = await getCustomerById(params.customerId);
    if(Object.values(response).length === 0){
        throw new Response('', {
            status: 404,
            statusText: 'No hay resultado'
        })
    }
    return response
}

export const action = async ({request, params}) => {
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
    await updateCustomer(params.customerId , data);
    return redirect('/')
}

const EditCustomer = () => {
    const navigate = useNavigate()

    const customer = useLoaderData();
    const errors = useActionData();

    return (
        <div>
            <h1 className="text-4xl text-blue-700"> Editar Cliente </h1>
            <p>Puede modificar los datos de tu cliente</p>
            <div className="shadow p-4 mt-4 mx-auto w-8/12 bg-white rounded-md">
            {/* {
                errors?.length &&
                errors.map((err, id) => 
                <Error key={id}>{err}</Error>
                )
            } */}
            <FormRRD
                method='post'
                noValidate
            >
                <Form customer = {customer}/>
                <input 
                className="bg-sky-500 text-white uppercase font-bold py-1 px-2 w-full rounded-sm"
                type="submit" 
                value={'Guardar cambios'}/>
            </FormRRD>
            </div>
        </div>
    )
}

export default EditCustomer