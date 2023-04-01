import { useEffect, useState } from "react";
import { fetchConToken } from "../api/fetch";
export const useGetDta = (endpoint, payload = {}, method = "GET") => {
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState([]);
  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async (point = endpoint, pay = payload, met = method) => {
    const resp = await fetchConToken(point, pay, met);
    if (resp.ok) {
      const { data } = resp;
      setData(data);
      setLoading(false);
    }
  };

  return { loading, data, getInfo };
};
