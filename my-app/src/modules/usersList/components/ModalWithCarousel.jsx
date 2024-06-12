import React from "react";
import { Modal, Image, Carousel } from "antd";
import {LeftOutlined, RightOutlined} from "@ant-design/icons"

const ModalWithCarousel = ({ isModalOpen, toggleModal, albumPhotos }) => {
  const handleOk = () => {
    toggleModal();
  };

  const handleCancel = () => {
    toggleModal();
  };

  return (
    <Modal
      width="500px"
      title="Album Photos"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Carousel autoplay effect="scrollx"  arrows prevArrow={<LeftOutlined />} nextArrow={<RightOutlined />}>
        {albumPhotos.length > 0 &&
          albumPhotos.map((photo) => {
            return (
              <div key={photo.id}>
                <Image src={photo.url} />
              </div>
            );
          })}
      </Carousel>
    </Modal>
  );
};

export default ModalWithCarousel;
