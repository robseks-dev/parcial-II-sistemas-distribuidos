import { useState, useContext } from "react";
import { Context } from "../context/Context";
import axios from "axios";

const AddInventory = () => {
  const [data, setData] = useState({
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
  const [error, setError] = useState(null);
  const { inventories, setInventories } = useContext(Context);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const clearData = () => {
    setData({
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
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:1234/api/inventories", data)
      .then((response) => {
        setInventories([...inventories, response]);
        setError(null);
        clearData();
      })
      .catch((error) => {
        setError(error.response.data.error);
      });
  };

  return (
    <section className="grid grid-cols-7 grid-rows-7 h-screen font-poppins">
      <h2 className="col-start-4 row-start-2 font-medium text-3xl text-primary m-auto">
        Agregar
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
                placeholder="Ingresar Codigo"
                name="code"
                value={data.code}
                onChange={handleChange}
                className="border-2 border-gray-300 rounded-md p-2 outline-none focus:border-primary"
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
                value={data.password}
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
                value={data.email}
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
                value={data.id_product}
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
                value={data.amount}
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
                value={data.location}
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
                value={data.date_entry}
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
                value={data.date_exit}
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
                value={data.status}
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
                value={data.id_provider}
                onChange={handleChange}
                className="border-2 border-gray-300 rounded-md p-2 outline-none focus:border-primary"
              />
            </div>
          </div>
          {error && (
            <p className="self-center font-medium text-red-500">* {error}</p>
          )}
          <button className="self-center w-max bg-primary text-white py-2 px-5 rounded-md">
            Agregar
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddInventory;
