import React from 'react';
import axios from 'axios';
import { Form, Input, Button, message } from 'antd';
import { useAuth } from '../../utils/context';
import { API_URL } from '../../utils/config';
import { useNavigate } from 'react-router-dom';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './Login.css';

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
      message.error('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-title">Welcome Back</h2>
        <Form onFinish={handleLogin} className="form">
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Email" className="input-field" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Password"
              className="input-field"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-button">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
