import axios from "axios";
import { useEffect, useState } from "react";
const useFetch = (method = 'get', url, dependence = []) => {
  console.log('check dependence ::::: ', dependence)
  const [data, setData] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const [isError, setIsError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(url);
        console.log("response ", data)
        setData(data.metadata)
        setIsloading(false)
      } catch (error) {
        setIsError(error);
      }
    };
    getData();

  }
    , dependence)
  return { data, isLoading, isError };
};

export default useFetch;
