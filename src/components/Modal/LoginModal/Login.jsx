import React from 'react';
import axios from 'axios';
import { Form, Input, Button, message } from 'antd';
import { useAuth } from '../../utils/context';
import { API_URL } from '../../utils/config';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const { setAuthData } = useAuth();
  const navigate = useNavigate();
  const handleLogin = async (values) => {
    try {
      const response = await axios.post(`${API_URL}/users/login/`, values);
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
      setAuthData({ isAuth: true });
      message.success('Login successful');
      navigate('/admin-events');
    } catch (error) {
      console.error('Error:', error);
      message.error('Invalid username or password');
    }
  };

  return (
    <Form onFinish={handleLogin}>
      <Form.Item name="email" rules={[{ required: true, message: 'Please input your username!' }]}>
        <Input placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
