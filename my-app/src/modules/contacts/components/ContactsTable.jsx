import React from "react";
import { Table, Space, Button } from "antd";

const Contacts = ({ dataSource, deleteContact }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_, record) => <span>{record.name.split(" ")[0]}</span>,
    },
    {
      title: "Surname",
      dataIndex: "surname",
      key: "surname",
      render: (_, record) => <span>{record.name.split(" ")[1]}</span>,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      render: (_, record) => <span>{record.phone.split(" ")[0]}</span>,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <Space
          size="middle"
          onClick={() => {
            deleteContact(record.id);
          }}
        >
          <Button danger>Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <Table
      // title={() => "Contacts"}
      pagination={{ position: ["bottomCenter"]}}
      
      bordered
      dataSource={dataSource}
      columns={columns}
    />
  );
};

export default Contacts;
