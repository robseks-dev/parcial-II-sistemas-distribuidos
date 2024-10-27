import { useContext } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";
import { Settings2, Trash2 } from "lucide-react";
import axios from "axios";

const Table = () => {
  const { inventories, setInventories } = useContext(Context);

  const handleDelete = async (code) => {
    await axios.delete(`http://localhost:1234/api/inventories/${code}`);
    setInventories(inventories.filter((inventory) => inventory.code !== code));
  };

  return (
    <section className="grid grid-cols-7 grid-rows-7 h-screen font-poppins">
      <button className="col-start-6 size-max bg-primary text-white m-auto py-2 px-5 rounded-md">
        <Link to="add">
          Agregar
        </Link>
      </button>
      <div className="h-max col-start-2 col-span-5 row-start-2 row-end-6 border border-gray-300 rounded-lg select-none">
        <table className="w-full h-max table-fixed rounded-lg overflow-hidden cursor-default">
          <thead>
            <tr className="text-sm">
              <th className="font-normal text-gray-500 p-3">Codigo</th>
              <th className="font-normal text-gray-500 p-3">Correo</th>
              <th className="font-normal text-gray-500 p-3">ID Producto</th>
              <th className="font-normal text-gray-500">Cantidad</th>
              <th className="font-normal text-gray-500">Ubicacion</th>
              <th className="font-normal text-gray-500">Fecha ingreso</th>
              <th className="font-normal text-gray-500">Fecha salida</th>
              <th className="font-normal text-gray-500">Estado</th>
              <th className="font-normal text-gray-500">ID Proveedor</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {inventories.map((inventory, idx) => (
              <tr
                key={idx}
                className="text-center text-sm border-t border-gray-300 hover:bg-gray-50"
              >
                <td className="p-5">{inventory?.code}</td>
                <td className="break-words whitespace-normal">
                  {inventory?.email}
                </td>
                <td>{inventory?.id_product}</td>
                <td>{inventory?.amount}</td>
                <td>{inventory?.location}</td>
                <td>{inventory?.date_entry}</td>
                <td>{inventory?.date_exit}</td>
                <td>
                  <span className="bg-green-500 text-white py-1 px-2 rounded-md">
                    {inventory?.status}
                  </span>
                </td>
                <td>{inventory?.id_provider}</td>
                <td className="flex items-center justify-center gap-x-5 h-full rounded-lg">
                  <Link to={`edit/${inventory?.code}`}>
                    <Settings2 className="size-5 cursor-pointer" />
                  </Link>
                  <Trash2
                    onClick={() => handleDelete(inventory?.code)}
                    className="size-5 cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table;
