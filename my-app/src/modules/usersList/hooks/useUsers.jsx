import useApi from "./useApi";

const useUsers = () => {
  const { data, loading } = useApi("/users");

  return { users: data, loading };
};

export default useUsers;
