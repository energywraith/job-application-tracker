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

  const sendQuery = (
    path,
    { body, method } = { body: undefined, method: "GET" }
  ) =>
    new Promise(async (resolve, reject) => {
      try {
        const rawResponse = await fetch(`${baseUrl}/${path}`, {
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
