import { useLoaderData } from "react-router-dom"
import Customer from "../components/Customer";

export const loader = () => {

    const customers = [
    {
        id: 1,
        name: 'Juan',
        phone: 102013313,
        email: "juan@juan.com",
        emprise: 'Codigo Con Juan'
    },
    {
        id: 2,
        name: 'Karen',
        phone: 138198313,
        email: "karen@juan.com",
        emprise: 'Codigo Con Juan'
    },
    {
        id: 3,
        name: 'Josue',
        phone: 31983913,
        email: "josue@juan.com",
        emprise: 'Codigo Con Juan'
    },
    {
        id: 4,
        name: 'Miguel',
        phone: 319381983,
        email: "miguel@juan.com",
        emprise: 'Codigo Con Juan'
    },
    {
        id: 5,
        name: 'Pedro',
        phone: 1398198938,
        email: "pedro@juan.com",
        emprise: 'Codigo Con Juan'
    },
  ];
  return customers;
}
const Index = () => {

  const customers= useLoaderData();
  console.log(customers);

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
                    <Customer {...customer} />
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