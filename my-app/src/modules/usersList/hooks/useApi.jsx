import React, {useEffect} from "react";

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

const useApi = (path) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_BASE_URL}${path}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setData([]);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [path]);

  return { data, loading, error };
};

export default useApi;
