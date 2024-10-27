import { useEffect, useState, useContext } from "react";
import { Context } from "../context/Context";
import { useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import axios from "axios";

const EditInventory = () => {
  const { code } = useParams();
  const { data, error } = useApi(`/${code}`);
  const [result, setResult] = useState(null);
  const { setInventories } = useContext(Context);

  const [editData, setEditData] = useState({
    code: "",
    password: "",
    email: "",
    id_product: "",
    amount: "",
    location: "",
    date_entry: "",
    date_exit: "",
    status: "",
    id_provider: "",
  });

  useEffect(() => {
    if (data) {
      setEditData(data);
    }
  }, [data]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.patch(
      "http://localhost:1234/api/inventories/",
      editData
    );
    setResult(response.data[0]);

    setInventories(prevItems =>
      prevItems.map(item =>
        item.code === editData.code ? { ...item, ...editData } : item
      )
    );

    setTimeout(() => {
      setResult(null);
    }, 5000);
  };

  return (
    <section className="grid grid-cols-7 grid-rows-7 h-screen font-poppins">
      <h2 className="col-start-4 row-start-2 font-medium text-3xl text-primary m-auto">
        Editar
      </h2>
      <div className="col-start-3 col-span-3 row-start-3 row-end-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-7">
          <div className="flex justify-center gap-x-5">
            <div className="flex flex-col gap-y-2 w-1/3 text-sm">
              <label htmlFor="code" className="text-gray-500">
                Codigo*
              </label>
              <input
                type="text"
                name="code"
                placeholder="Ingresar Codigo"
                value={editData?.code}
                disabled
                className="border-2 border-gray-300 rounded-md p-2 outline-none opacity-40"
              />
            </div>
            <div className="flex flex-col gap-y-2 w-1/3 text-sm">
              <label htmlFor="code" className="text-gray-500">
                Contraseña*
              </label>
              <input
                type="password"
                name="password"
                placeholder="Ingresar Contraseña"
                value={editData?.password}
                onChange={handleChange}
                className="border-2 border-gray-300 rounded-md p-2 outline-none focus:border-primary"
              />
            </div>
          </div>
          <div className="flex justify-center gap-x-5">
            <div className="flex flex-col gap-y-2 w-1/3 text-sm">
              <label htmlFor="code" className="text-gray-500">
                Email*
              </label>
              <input
                type="email"
                name="email"
                placeholder="Ingresar Correo"
                value={editData?.email}
                onChange={handleChange}
                className="border-2 border-gray-300 rounded-md p-2 outline-none focus:border-primary"
              />
            </div>
            <div className="flex flex-col gap-y-2 w-1/3 text-sm">
              <label htmlFor="code" className="text-gray-500">
                ID Producto*
              </label>
              <input
                type="number"
                name="id_product"
                placeholder="Ingresar ID"
                value={editData?.id_product}
                onChange={handleChange}
                className="border-2 border-gray-300 rounded-md p-2 outline-none focus:border-primary"
              />
            </div>
          </div>
          <div className="flex justify-center gap-x-5">
            <div className="flex flex-col gap-y-2 w-1/3 text-sm">
              <label htmlFor="code" className="text-gray-500">
                Cantidad*
              </label>
              <input
                type="number"
                name="amount"
                placeholder="Ingresar Cantidad"
                value={editData?.amount}
                onChange={handleChange}
                className="border-2 border-gray-300 rounded-md p-2 outline-none focus:border-primary"
              />
            </div>
            <div className="flex flex-col gap-y-2 w-1/3 text-sm">
              <label htmlFor="code" className="text-gray-500">
                Ubicacion*
              </label>
              <input
                type="text"
                name="location"
                placeholder="Ingresar Ubicacion"
                value={editData?.location}
                onChange={handleChange}
                className="border-2 border-gray-300 rounded-md p-2 outline-none focus:border-primary"
              />
            </div>
          </div>
          <div className="flex justify-center gap-x-5">
            <div className="flex flex-col gap-y-2 w-1/3 text-sm">
              <label htmlFor="code" className="text-gray-500">
                Fecha entrada*
              </label>
              <input
                type="date"
                name="date_entry"
                value={editData?.date_entry}
                onChange={handleChange}
                className="border-2 border-gray-300 rounded-md p-2 outline-none focus:border-primary"
              />
            </div>
            <div className="flex flex-col gap-y-2 w-1/3 text-sm">
              <label htmlFor="code" className="text-gray-500">
                Fecha salida*
              </label>
              <input
                type="date"
                name="date_exit"
                value={editData?.date_exit}
                onChange={handleChange}
                className="border-2 border-gray-300 rounded-md p-2 outline-none focus:border-primary"
              />
            </div>
          </div>
          <div className="flex justify-center gap-x-5">
            <div className="flex flex-col gap-y-2 w-1/3 text-sm">
              <label htmlFor="code" className="text-gray-500">
                Estado*
              </label>
              <input
                type="text"
                name="status"
                placeholder="Ingresar Estado"
                value={editData?.status}
                onChange={handleChange}
                className="border-2 border-gray-300 rounded-md p-2 outline-none focus:border-primary"
              />
            </div>
            <div className="flex flex-col gap-y-2 w-1/3 text-sm">
              <label htmlFor="code" className="text-gray-500">
                ID Proveedor*
              </label>
              <input
                type="number"
                name="id_provider"
                placeholder="Ingresar ID"
                value={editData?.id_provider}
                onChange={handleChange}
                className="border-2 border-gray-300 rounded-md p-2 outline-none focus:border-primary"
              />
            </div>
          </div>
          <button className="self-center w-max bg-primary text-white py-2 px-5 rounded-md">
            Editar
          </button>
        </form>
      </div>
      <div
        className={`${
          result ? "opacity-100" : "opacity-0"
        } absolute text-sm bottom-0 right-0 m-7 py-2 px-6 rounded-md shadow duration-300 ease-linear`}
      >
        <p>Inventario actualizado.</p>
        <p className="text-gray-500">{new Date().toDateString()}</p>
      </div>
    </section>
  );
};

export default EditInventory;
