import useErrorsHandling from "hooks/useErrorsHandling";
import useToken from "hooks/useToken";

const baseUrl = process.env.REACT_APP_API_URL;

const useQuery = () => {
  const { token, hasToken } = useToken();
  const { handleUnauthenticated } = useErrorsHandling();

  const parseJSON = (response) => {
    const parseResponse =
      response.status === 204 ? response.text() : response.json();

    return new Promise(async (resolve) => {
      const json = await parseResponse;

      resolve({
        status: response.status,
        ok: response.ok,
        json,
      });
    });
  };

  const addSearchParams = (url, params) => {
    if (!params) return url;

    const urlWithParams = new URL(url);
    urlWithParams.search = new URLSearchParams(params).toString();

    return urlWithParams;
  };

  const sendQuery = (
    path,
    { body, method, searchParams } = {
      body: undefined,
      method: "GET",
      searchParams: undefined,
    }
  ) =>
    new Promise(async (resolve, reject) => {
      try {
        const url = addSearchParams(`${baseUrl}/${path}`, searchParams);

        const rawResponse = await fetch(url, {
          method,
          headers: {
            Authorization: hasToken() && `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });

        const response = await parseJSON(rawResponse);

        if (
          response.json?.errorType === "JsonWebTokenError" ||
          response.json?.errorType === "TokenExpiredError"
        ) {
          handleUnauthenticated();
          return;
        }

        if (response.ok) {
          return resolve(response.json);
        }

        return reject(response.json);
      } catch (error) {
        reject(error);
      }
    });

  return { sendQuery };
};

export default useQuery;
