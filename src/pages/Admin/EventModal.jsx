import React, { useEffect } from 'react';
import { Modal, Form, Input, DatePicker, Button } from 'antd';
import moment from 'moment';

const EventModal = ({ visible, onCancel, onSubmit, event }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (event) {
      form.setFieldsValue({
        ...event,
        Date: moment(event.Date),
      });
    } else {
      form.resetFields();
    }
  }, [event, form]);

  const onFinish = (values) => {
    onSubmit({
      ...values,
      Date: values.Date.format('YYYY-MM-DD'),
    });
  };

  return (
    <Modal
      title={event ? 'Edit Event' : 'Add Event'}
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={() => form.submit()}>
          Submit
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="Title"
          label="Title"
          rules={[{ required: true, message: 'Please input the title!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Description"
          label="Description"
          rules={[{ required: true, message: 'Please input the description!' }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item
          name="Date"
          label="Date"
          rules={[{ required: true, message: 'Please input the date!' }]}
        >
          <DatePicker style={{ width: '100%' }} showTime />
        </Form.Item>
        <Form.Item
          name="ImageLink"
          label="ImageLink"
          rules={[{ required: true, message: 'Please input the imagelink!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="VideoLink" label="VideoLink">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EventModal;
