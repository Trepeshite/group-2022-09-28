import React from "react";
import { Collapse, List } from "antd";

const { Panel } = Collapse;

const CollapseList = ({ users, albums, toggleModal, setAlbumId }) => {
  const handleClick = (albumId) => {
    setAlbumId(albumId);
    toggleModal();
  };

  return (
    <div>
      <Collapse accordion>
        {users.length > 0 &&
          users.map((user) => {
            const { name, id } = user;

            const data =
              albums.length > 0 &&
              albums
                .filter((album) => album.userId === id)
                .map((album) => {
                  return album.title;
                });

            return (
              <Panel key={id} header={name} style={{ width: 600 }}>
                <List
                  size="small"
                  dataSource={data}
                  renderItem={(item) => (
                    <List.Item
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        handleClick(id);
                      }}
                    >
                      {item}
                    </List.Item>
                  )}
                />
              </Panel>
            );
          })}
      </Collapse>
    </div>
  );
};

export default CollapseList;
