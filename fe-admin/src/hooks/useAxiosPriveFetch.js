import { useEffect, useState } from "react";
import axios from "../api/axios";

const useAxiosPriveFetch = (dataUrl, accessToken) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const fetchData = async (url, accessToken) => {
      setIsLoading(true);
      try {
        const response = await axios.get(url, {
          signal: controller.signal,
          headers: [
            { "Content-Type": "application/json" },
            { Authorization: `Bearer ${accessToken}` },
          ],
        });

        if (isMounted) {
          setData(response.data);
          setFetchError(null);
        }

        // cancel the request
      } catch (error) {
        if (isMounted) {
          setFetchError(error.message);
          setData([]);
        }
      } finally {
        isMounted && setTimeout(() => setIsLoading(false), 2000);
      }
    };

    fetchData(dataUrl, accessToken);
    const cleanUp = () => {
      isMounted = false;
      controller.abort();
    };

    return cleanUp;
  }, [dataUrl, accessToken]);

  return [data, fetchError, isLoading];
};

export default useAxiosPriveFetch;
