import useApi from "./useApi";

const usePhotos = () => {
  const { data, loading } = useApi("/photos");

  return { photos: data, loading };
};

export default usePhotos;
