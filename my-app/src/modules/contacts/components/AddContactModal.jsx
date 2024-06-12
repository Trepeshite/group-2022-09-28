import React, { useRef } from "react";
import { Form, Modal, Input } from "antd";

const AddContactModal = ({ isModalOpen, toggleModal, addContact, newContactId }) => {
  const [form] = Form.useForm();
  const fullnameInput = useRef(null);
  const phoneInput = useRef(null);

  const handleOk = () => {
   const name = fullnameInput.current.input.value.trim();
   const phone = phoneInput.current.input.value.trim();

    if (name && phone) {
      const newContact = {
        id: newContactId,
        key: newContactId,
        name,
        phone,
      };

      addContact(newContact);
      toggleModal();
      form.resetFields();
    }
  };

  const handleCancel = () => {
    toggleModal();
    form.resetFields();
  };

  return (
    <Modal
      title="Add new contact"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form
        form={form}
        layout="vertical"
        name="add-contact-form"
        initialValues={{
          modifier: "public",
        }}
      >
        <Form.Item

          name="fullname"
          label="Please enter your name and surname"
          rules={[
            {
              required: true,
              message: "This is a required field.",
            },
            {
              required: /^[a-zA-Z]+ [a-zA-Z]+$/,
              message: "Invalid name given.",
            },
          ]}
        >
          <Input ref={fullnameInput} allowClear/>
        </Form.Item>
        <Form.Item
          name="phone"
          label="Please enter your phone number"
          rules={[
            {
              required: true,
              message: "This is a required field.",
            },
            {
              pattern: /^[0-9-()]+$/,
              message: "Use only these characters: 1-9 and -() ",
            },
          ]}
        >
          <Input ref={phoneInput} allowClear />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddContactModal;
