import useToken from "hooks/useToken";

const baseUrl = "https://job-app-tracker-gateway.onrender.com";

const useQuery = () => {
  const { hasToken, token } = useToken();

  const parseJSON = (response) => {
    return new Promise((resolve) =>
      response.json().then((json) =>
        resolve({
          status: response.status,
          ok: response.ok,
          json,
        })
      )
    );
  };

  const sendQuery = (path, { body = {}, method = "GET" }) =>
    new Promise((resolve, reject) => {
      fetch(`${baseUrl}/${path}`, {
        method,
        headers: {
          Authorization: hasToken() && `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then(parseJSON)
        .then((response) => {
          if (response.ok) {
            return resolve(response.json);
          }

          return reject(response.json);
        })
        .catch((error) => {
          reject(error);
        });
    });

  return { sendQuery };
};

export default useQuery;
