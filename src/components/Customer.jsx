
const Customer = ({
    name,
    phone, 
    email, 
    emprise
}) => {

  return (
    <tr className="border-b">
        <td className="p-2">
            <p className="text-lg text-gray-800">{name}</p>
            <p className="text-xs">{emprise}</p>
        </td>
        <td className="p-2">
            <p className="text-xs">
                <strong className="uppercase">telf</strong>: {phone}
            </p>
            <p className="text-xs">
                <strong className="uppercase">email</strong>: {email}
            </p>
        </td>
        <td className="flex gap-1 p-2 justify-center ">
            <button className="uppercase text-xs font-bold text-sky-600">editar</button>
            <button className="uppercase text-xs font-bold text-red-600">eliminar</button>

        </td>
    </tr>
  )
}

export default Customer