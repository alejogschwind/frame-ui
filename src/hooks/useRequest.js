import { useState, useEffect } from "react";
import axios from "axios";

const requestData = async (url, setData, setError, setLoading) => {
  try {
    const res = await axios.get(url);
    setData(res.data);
  } catch (error) {
    setError(error);
  }
  setLoading(false);
};

const useRequest = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    requestData(url, setData, setError, setLoading);
  }, [url]);

  const reRequest = () => {
    requestData(url, setData, setError, setLoading);
  };

  return { data, error, loading, reRequest };
};

export default useRequest;