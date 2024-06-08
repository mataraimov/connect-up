import React, { useState, useEffect } from 'react';
import { Layout, Card, Row, Col, Typography, Form, Input, Button, Modal, message } from 'antd';
import axios from 'axios';
import './styles.css';

const { Header, Content, Sider } = Layout;
const { Title, Paragraph } = Typography;

const ConsulCard = ({ consul, onClick }) => (
  <Card style={{ marginBottom: 20 }} onClick={() => onClick(consul)}>
    <Card.Meta
      avatar={<img src={consul.imageLink} alt={consul.name} className="avatar" />}
      title={`${consul.name} ${consul.surname}`}
      description={
        <>
          <p>
            <strong>Position:</strong> {consul.position}
          </p>
          <p>
            <strong>Year of Graduation:</strong> {consul.yearOfGraduation}
          </p>
          <p>
            <strong>Department:</strong> {consul.department}
          </p>
          <p>
            <strong>Place of Work:</strong> {consul.employer}
          </p>
        </>
      }
    />
  </Card>
);

const Council = () => {
  const [visible, setVisible] = useState(false);
  const [selectedConsul, setSelectedConsul] = useState(null);
  const [consuls, setConsuls] = useState([]);

  const [form] = Form.useForm();

  useEffect(() => {
    fetchConsuls();
  }, []);

  const fetchConsuls = async () => {
    try {
      const response = await axios.get(
        'https://66642b7b932baf9032aa3a05.mockapi.io/councils?approved=true',
      );
      setConsuls(response.data);
    } catch (error) {
      console.error('Error fetching consuls:', error);
    }
  };

  const showModal = (consul) => {
    setSelectedConsul(consul);
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleSubmit = async (values) => {
    try {
      await axios.post('https://66642b7b932baf9032aa3a05.mockapi.io/councils', values);
      form.resetFields();
      fetchConsuls();
      message.success('Submitted successfully');
    } catch (error) {
      console.error('Error submitting form:', error);
      message.error('Submission failed');
    }
  };

  return (
    <Layout>
      <Header style={{ background: '#fff', paddingBottom: 250 }}>
        <Title level={2} style={{ textAlign: 'center', margin: '20px 0' }}>
          ALUMNI COUNCIL
        </Title>
        <Paragraph style={{ textAlign: 'center', maxWidth: 800, margin: '0px auto' }}>
          AIU Alumni Council is a group of enthusiastic alumni working together on the development
          of comprehensive programs and benefits for AIU students and alums. The purpose of the
          Alumni Council is to foster a spirit of connectivity and loyalty among AIU alumni and
          friends, helping them remain active in the global AIU network.
        </Paragraph>
        <Paragraph style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
          With a new president and an energetic, fresh approach, the Alumni Council renews its
          mission to empower the AIU community in Bishkek, in the Kyrgyz Republic, and around the
          world.
        </Paragraph>
        <Paragraph style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto 20px' }}>
          During the next year, the Alumni Council will meet and hear ideas from any alumnus who
          wishes to share ways the Alumni Association can work better for AIU Alumni.
        </Paragraph>
      </Header>
      <Layout>
        <Sider width={300} style={{ backgroundColor: 'white' }}>
          <div style={{ padding: 24 }}>
            <Title level={4}>Contact Details</Title>
            <Form layout="vertical" form={form} onFinish={handleSubmit}>
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input placeholder="Enter your name" />
              </Form.Item>
              <Form.Item
                label="Surname"
                name="surname"
                rules={[{ required: true, message: 'Please enter your surname' }]}
              >
                <Input placeholder="Enter your surname" />
              </Form.Item>
              <Form.Item
                label="Year of Graduation"
                name="yearOfGraduation"
                rules={[{ required: true, message: 'Please enter your year of graduation' }]}
              >
                <Input placeholder="Enter your year of graduation" />
              </Form.Item>
              <Form.Item
                label="Contact Email Address"
                name="email"
                rules={[{ required: true, message: 'Please enter your email', type: 'email' }]}
              >
                <Input placeholder="Enter your email" />
              </Form.Item>
              <Form.Item
                label="Country of Residence"
                name="country"
                rules={[{ required: true, message: 'Please enter your country of residence' }]}
              >
                <Input placeholder="Enter your country of residence" />
              </Form.Item>
              <Form.Item
                label="City of Residence"
                name="city"
                rules={[{ required: true, message: 'Please enter your city of residence' }]}
              >
                <Input placeholder="Enter your city of residence" />
              </Form.Item>
              <Form.Item
                label="Contact Phone Number"
                name="phone"
                rules={[{ required: true, message: 'Please enter your phone number' }]}
              >
                <Input placeholder="Enter your phone number" />
              </Form.Item>
              <Form.Item
                label="Current Employer"
                name="employer"
                rules={[{ required: true, message: 'Please enter your current employer' }]}
              >
                <Input placeholder="Enter your current employer" />
              </Form.Item>
              <Form.Item
                label="Position"
                name="position"
                rules={[{ required: true, message: 'Please enter your position' }]}
              >
                <Input placeholder="Enter your position" />
              </Form.Item>
              <Form.Item
                label="Department"
                name="department"
                rules={[{ required: true, message: 'Please enter your department' }]}
              >
                <Input placeholder="Enter your department" />
              </Form.Item>
              <Form.Item
                label="Image Link"
                name="imageLink"
                rules={[{ required: true, message: 'Please enter an image link' }]}
              >
                <Input placeholder="Enter image link" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Row gutter={16}>
              {consuls.map((consul, index) => (
                <Col span={8} key={index}>
                  <ConsulCard consul={consul} onClick={showModal} />
                </Col>
              ))}
            </Row>
          </Content>
        </Layout>
      </Layout>
      <Modal title="Consul Details" visible={visible} onOk={handleOk} onCancel={handleCancel}>
        {selectedConsul && (
          <div>
            <p>
              <strong>Name:</strong> {selectedConsul.name} {selectedConsul.surname}
            </p>
            <p>
              <strong>Position:</strong> {selectedConsul.position}
            </p>
            <p>
              <strong>Year of Graduation:</strong> {selectedConsul.yearOfGraduation}
            </p>
            <p>
              <strong>Department:</strong> {selectedConsul.department}
            </p>
            <p>
              <strong>Place of Work:</strong> {selectedConsul.employer}
            </p>
            <p>
              <strong>Email:</strong> {selectedConsul.email}
            </p>
            <p>
              <strong>Country:</strong> {selectedConsul.country}
            </p>
            <p>
              <strong>City:</strong> {selectedConsul.city}
            </p>
            <p>
              <strong>Phone:</strong> {selectedConsul.phone}
            </p>
            <p>
              <strong>Image:</strong>{' '}
              <img
                src={selectedConsul.imageLink}
                alt={`${selectedConsul.name}'s image`}
                style={{ width: '100%' }}
              />
            </p>
          </div>
        )}
      </Modal>
    </Layout>
  );
};

export default Council;
