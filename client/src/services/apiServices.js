import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:1234/api/inventories",
});

const get = async (url, config = {}) => {
  const response = await api.get(url, config);
  return response.data;
};

const post = async (url, data, config = {}) => {
  const response = await api.post(url, data, config);
  return response.data;
};

const patch = async (url, data, config = {}) => {
  const response = await api.patch(url, data, config);
  return response.data;
};

const remove = async (url, config = {}) => {
  const response = await api.delete(url, config);
  return response.data;
};

export default { get, post, patch, remove };
