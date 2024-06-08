import React, { useEffect } from 'react';
import { Modal, Form, Input, DatePicker, Button, Select } from 'antd';
import dayjs from 'dayjs';

const { Option } = Select;

const EventModal = ({ visible, onCancel, onSubmit, event }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (event) {
      const parsedDate = dayjs(event.event_date);
      if (parsedDate.isValid()) {
        form.setFieldsValue({
          ...event,
          event_date: parsedDate,
        });
      } else {
        console.error('Invalid date format:', event.event_date);
      }
    } else {
      form.resetFields();
    }
  }, [event, form]);

  const onFinish = (values) => {
    onSubmit({
      ...values,
      event_date: values.event_date ? values.event_date.toISOString() : null,
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
          name="event_name"
          label="Title"
          rules={[{ required: true, message: 'Please input the title!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="event_description"
          label="Description"
          rules={[{ required: true, message: 'Please input the description!' }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item
          name="event_date"
          label="Date"
          rules={[{ required: true, message: 'Please input the date!' }]}
        >
          <DatePicker format="YYYY-MM-DD HH:mm:ss" style={{ width: '100%' }} showTime />
        </Form.Item>
        <Form.Item
          name="event_status"
          label="Status"
          rules={[{ required: true, message: 'Please select the status!' }]}
        >
          <Select>
            <Option value="Начало">Начало</Option>
            <Option value="Прогресс">Прогресс</Option>
            <Option value="Завершено">Завершено</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="event_image_link"
          label="ImageLink"
          rules={[{ required: true, message: 'Please input the imagelink!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="event_vidio_link" label="VideoLink">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EventModal;
