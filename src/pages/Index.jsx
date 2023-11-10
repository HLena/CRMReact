import { useLoaderData } from "react-router-dom"
import Customer from "../components/Customer";
import { getCustomers } from "../data/customers";

export const loader = () => {
  const data = getCustomers()
  return data;
}
const Index = () => {

  const customers= useLoaderData();

  return (
    <div>
      <h1 className="text-4xl text-blue-700"> Clientes </h1>
      {
        customers.length 
          ? (<table className="w-full bg-white shadow mt-5 table-auto">
              <thead className="bg-sky-500 text-white">
                  <tr>
                    <th>Cliente</th>
                    <th>Contacto</th>
                    <th>Acciones</th>
                  </tr>
              </thead>
              <tbody>
                {
                  customers.map(customer => (
                    <Customer key={customer.id} {...customer} />
                  ))
                }



              </tbody>
            </table>)
          : (<p>no hay clientes</p>)
      }
    </div>
  )
}

export default Index