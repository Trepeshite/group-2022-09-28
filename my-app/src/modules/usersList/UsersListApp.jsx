import React, { useEffect, useState } from "react";
import { Space, Spin } from "antd";
import CollapseList from "./components/CollapseList";
import ModalWithCarousel from "./components/ModalWithCarousel";
import useAlbums from "./hooks/useAlbums";
import useUsers from "./hooks/useUsers";
import usePhotos from "./hooks/usePhotos";

const UsersListApp = () => {
  const { albums, loading: isAlbumsLoading } = useAlbums();
  const { users, loading: isUsersLoading } = useUsers();
  const {photos, loading: isPhotosLoading} = usePhotos();
  const [isModalOpen, setIsModalOpen] = useState(null);
  const [albumId, setAlbumId] = useState(null);
  const [albumPhotos, setAlbumPhotos] = useState([]);

  useEffect(() => {
    const albumPhotos = photos.filter((photo) => {
      const { albumId: id } = photo;
      return albumId === id;
    });

    setAlbumPhotos(albumPhotos);
  }, [albumId, photos]);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  if(isAlbumsLoading && isUsersLoading && isPhotosLoading) {
    return (
      <Space>
         <Spin tip="Loading" size="large">
          <div className="content" />
        </Spin>
      </Space>
    )
  } 

  return (
    <div className="user-list-app">
      <CollapseList
        users={users}
        albums={albums}
        toggleModal={toggleModal}
        setAlbumId={setAlbumId}
      />
      <ModalWithCarousel
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        albumPhotos={albumPhotos}
      />
    </div>
  );
};

export default UsersListApp;
