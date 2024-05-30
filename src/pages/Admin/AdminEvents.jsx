import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Layout, Button, Table, message, Modal } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';

import './adminEvent.scss';
import EventModal from './EventModal';
import { useAuth } from '../../components/utils/context';

const { Header, Content } = Layout;

const API_URL = 'https://633acce9e02b9b64c617beec.mockapi.io/events';

const AdminPanel = () => {
  const { authData, setAuthData } = useAuth();
  const { isAuth } = authData;
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [expandedContent, setExpandedContent] = useState('');
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const navigate = useNavigate();

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

  const handleLogout = async () => {
    localStorage.clear();
    setAuthData({ isAuth: false });
    navigate('/auth');
  };

  const showLogoutModal = () => {
    setLogoutModalVisible(true);
  };

  const handleAddEvent = () => {
    setEditingEvent(null);
    setModalVisible(true);
  };

  const handleEditEvent = (event) => {
    setEditingEvent(event);
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

  const showExpandedContent = (content) => {
    setExpandedContent(content);
  };

  const handleCloseExpandedContent = () => {
    setExpandedContent('');
  };

  const columns = [
    { title: 'Title', dataIndex: 'Title', key: 'title' },
    {
      title: 'Description',
      dataIndex: 'Description',
      key: 'description',
      render: (text) => (
        <div
          style={{
            maxWidth: '600px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            cursor: 'pointer',
            color: '#1890ff',
          }}
          onClick={() => showExpandedContent(text)}
        >
          {text}
        </div>
      ),
    },
    {
      title: 'Date',
      dataIndex: 'Date',
      key: 'date',
      render: (date) => moment(date).format('MMMM Do YYYY, h:mm a'),
      width: 200,
    },
    {
      title: 'VideoLink',
      dataIndex: 'VideoLink',
      key: 'video',
      render: (text) => (
        <div
          style={{
            maxWidth: '300px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            cursor: 'pointer',
            color: '#1890ff',
          }}
          onClick={() => showExpandedContent(text)}
        >
          {text}
        </div>
      ),
    },
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
      <Header style={{ display: 'flex', justifyContent: 'flex-end', padding: '0 20px' }}>
        {isAuth && (
          <Button key="logout" onClick={showLogoutModal}>
            Logout
          </Button>
        )}
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
          <Modal visible={!!expandedContent} onCancel={handleCloseExpandedContent} footer={null}>
            <p>{expandedContent}</p>
          </Modal>
          <Modal
            visible={logoutModalVisible}
            onCancel={() => setLogoutModalVisible(false)}
            onOk={handleLogout}
            title="Confirm Logout"
            okText="Yes, Logout"
            cancelText="Cancel"
          >
            <p>Are you sure you want to logout?</p>
          </Modal>
        </div>
      </Content>
    </Layout>
  );
};

export default AdminPanel;
