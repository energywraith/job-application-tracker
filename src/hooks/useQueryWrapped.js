import { useEffect, useState } from "react";
import useErrorsHandling from "hooks/useErrorsHandling";
import useQuery from "hooks/useQuery";

const useQueryWrapped = ({
  path,
  defaultParams,
  fetchOnInit,
  successCallback,
  errorCallback,
}) => {
  const { handleResponseError } = useErrorsHandling();
  const { sendQuery } = useQuery();

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const runQuery = async (params) => {
    setIsLoading(true);

    try {
      const response = await sendQuery(path, {
        ...defaultParams,
        ...params,
      });

      setData(response);

      if (!successCallback) return;

      successCallback(response);
    } catch (error) {
      if (errorCallback) {
        errorCallback(error);
        return;
      }

      handleResponseError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!fetchOnInit) return;
    runQuery();
  }, []);

  return { data, isLoading, runQuery };
};

export default useQueryWrapped;
