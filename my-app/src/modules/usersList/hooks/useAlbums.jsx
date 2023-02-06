import useApi from "./useApi";

const useAlbums = () => {
  const { data, loading } = useApi("/albums");

  return { albums: data, loading };
};

export default useAlbums;
