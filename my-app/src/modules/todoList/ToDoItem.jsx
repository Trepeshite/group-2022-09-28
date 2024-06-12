import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
const ToDoItem = ({ text = "", handleStatus, status = false, deleteItem }) => {
  const itemStyle =
    status === true
      ? { textDecoration: "line-through" }
      : { textDecoration: "none" };

  return (
    <li style={itemStyle} onClick={handleStatus}>
      {text}
      <Button
        danger
        icon={<DeleteOutlined />}
        style={{ marginLeft: "20px" }}
        onClick={deleteItem}
      ></Button>
    </li>
  );
};

export default ToDoItem;
