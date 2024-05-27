import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Layout, Menu, Form, Input, Button, Table, Modal, DatePicker, message } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import './adminEvent.scss';

const { Header, Content } = Layout;

const API_URL = 'https://633acce9e02b9b64c617beec.mockapi.io/events';

const AdminPanel = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [authModalVisible, setAuthModalVisible] = useState(true);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(API_URL);
      setEvents(response.data);
    } catch (error) {
      message.error('Failed to fetch events');
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleLogin = (values) => {
    if (values.username === 'admin' && values.password === 'admin123') {
      setLoggedIn(true);
      setAuthModalVisible(false);
    } else {
      message.error('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setAuthModalVisible(true);
  };

  const handleAddEvent = () => {
    setEditingEvent(null);
    setModalVisible(true);
  };

  const handleEditEvent = (event) => {
    // setEditingEvent(event);
    setModalVisible(true);
  };

  const handleDeleteEvent = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchEvents();
      message.success('Event deleted successfully');
    } catch (error) {
      message.error('Failed to delete event');
    }
  };

  const handleModalSubmit = async (values) => {
    try {
      if (editingEvent) {
        await axios.put(`${API_URL}/${editingEvent.id}`, values);
        message.success('Event updated successfully');
      } else {
        await axios.post(API_URL, values);
        message.success('Event added successfully');
      }
      fetchEvents();
      setModalVisible(false);
    } catch (error) {
      console.log(error);
      message.error('Failed to save event');
    }
  };

  const columns = [
    { title: 'Title', dataIndex: 'Title', key: 'title' },
    { title: 'Description', dataIndex: 'Description', key: 'description' },
    { title: 'Date', dataIndex: 'Date', key: 'date' },
    { title: 'VideoLink', dataIndex: 'VideoLink', key: 'video' },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <span>
          <Button icon={<EditOutlined />} onClick={() => handleEditEvent(record)} />
          <Button icon={<DeleteOutlined />} onClick={() => handleDeleteEvent(record.id)} />
        </span>
      ),
    },
  ];

  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" selectable={false}>
          {loggedIn ? (
            <Menu.Item key="logout" onClick={handleLogout}>
              Logout
            </Menu.Item>
          ) : (
            <Menu.Item key="login">
              <Link to="/login">Admin Login</Link>
            </Menu.Item>
          )}
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: '20px' }}>
        <div>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={handleAddEvent}
            style={{ marginBottom: '20px' }}
          >
            Add Event
          </Button>
          <Table dataSource={events} columns={columns} rowKey="id" />
          <EventModal
            visible={modalVisible}
            onCancel={() => setModalVisible(false)}
            onSubmit={handleModalSubmit}
            event={editingEvent}
          />
        </div>
      </Content>
      <AuthModal visible={authModalVisible} onSubmit={handleLogin} />
    </Layout>
  );
};

const LoginForm = ({ onLogin }) => {
  const onFinish = (values) => {
    onLogin(values);
  };

  return (
    <Form
      name="login_form"
      onFinish={onFinish}
      style={{ maxWidth: '300px', margin: 'auto', marginTop: '20px' }}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

const AdminDashboard = ({
  events,
  onAddEvent,
  onEditEvent,
  onDeleteEvent,
  modalVisible,
  setModalVisible,
  onModalSubmit,
  editingEvent,
}) => {
  return (
    <div>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={onAddEvent}
        style={{ marginBottom: '20px' }}
      >
        Add Event
      </Button>
      <Table dataSource={events} columns={columns} rowKey="id" />
      <EventModal
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        onSubmit={onModalSubmit}
        event={editingEvent}
      />
    </div>
  );
};

const EventModal = ({ visible, onCancel, onSubmit, event }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (event) {
      form.setFieldsValue(event);
    } else {
      form.resetFields();
    }
  }, [event, form]);

  const onFinish = (values) => {
    onSubmit(values);
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
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="Date"
          label="Date"
          rules={[{ required: true, message: 'Please input the date!' }]}
        >
          <DatePicker style={{ width: '100%' }} />
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

const AuthModal = ({ visible, onSubmit }) => {
  const onFinish = (values) => {
    onSubmit(values);
  };

  return (
    <Modal
      title="Admin Login"
      visible={visible}
      footer={null}
      closable={false}
      maskClosable={false}
    >
      <Form name="auth_form" onFinish={onFinish} style={{ maxWidth: '300px', margin: 'auto' }}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AdminPanel;
