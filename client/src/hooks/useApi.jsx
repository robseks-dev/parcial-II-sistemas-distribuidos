import { useState, useEffect } from "react";
import apiServices from "../services/apiServices";

const useApi = (url, method = "get", request = null, auto = true) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      let response;

      if (method === "get") response = await apiServices.get(url);
      if (method === "post") response = await apiServices.post(url, request);
      if (method === "patch") response = await apiServices.patch(url, request);
      if (method === "delete") response = await apiServices.remove(url);

      setData(response);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    if (auto) {
      fetchData();
    }
  }, [url, method, request, auto]);

  return { data, error, fetchData };
}

export default useApi;