import React from "react";
import { FloatButton } from "antd";
import { UserAddOutlined } from "@ant-design/icons";

const AddContactBtn = ({ handleClick }) => {
  return <FloatButton icon={<UserAddOutlined style={{ fontSize: '20px' }}/>} tooltip={"Add new contact"} onClick={handleClick} style={{ right: 100, bottom:100,}} />;
};

export default AddContactBtn;
