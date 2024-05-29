import React, { useEffect, useState } from 'react';
import { Layout, Menu, Card, Row, Col, Typography, Form, Input, Button } from 'antd';

import './styles.css'; // Create and link this file for additional styles
import { fetchRandomImage } from '../../services/unsplashService';

const { Header, Content, Sider } = Layout;
const { Title, Paragraph } = Typography;

const consuls = [
  {
    name: 'Usenjan Turdiev',
    position: 'Alumni Council member: President',
    year: '2007',
    department: 'Business Administration',
    work: 'City Center LLC CFO',
    ImageLink: 'https://i.pinimg.com/564x/0e/ce/43/0ece433585728dfa604ec7809e5c2a05.jpg',
  },
  {
    name: 'Aidai Toktomambetova',
    position: 'Alumni Council member: Executive',
    year: '2020',
    department: 'Business Administration',
    work: 'Umai Group LLC, Globus store chain, Narodny, Dostor SPAR',
    ImageLink: 'https://i.pinimg.com/564x/0e/ce/43/0ece433585728dfa604ec7809e5c2a05.jpg',
  },
  {
    name: 'Alina Murzaeva',
    position: 'Alumni Council member: Fundraising',
    year: '2007',
    department: 'International and Comparative Politics',
    work: 'Consultant on strategic communication and advocacy',
    ImageLink: 'https://i.pinimg.com/564x/0e/ce/43/0ece433585728dfa604ec7809e5c2a05.jpg',
  },
  {
    name: 'Maria Tsvetkova',
    position: 'Alumni Council member: Alumni Relations',
    year: '2011',
    department: 'Business Administration',
    work: 'Software Developer',
    ImageLink: 'https://i.pinimg.com/564x/0e/ce/43/0ece433585728dfa604ec7809e5c2a05.jpg',
  },
  {
    name: 'Ilkham Imarakhunov',
    position: 'Alumni Council member: Treasurer',
    year: '2010',
    department: 'American Studies',
    work: 'Program Manager, Search for Common Ground',
    ImageLink: 'https://i.pinimg.com/564x/0e/ce/43/0ece433585728dfa604ec7809e5c2a05.jpg',
  },
];

const ConsulCard = ({ consul }) => (
  <Card style={{ marginBottom: 20 }}>
    <Card.Meta
      avatar={<img src={consul.ImageLink} alt={consul.name} className="avatar" />}
      title={consul.name}
      description={
        <>
          <p>
            <strong>Position:</strong> {consul.position}
          </p>
          <p>
            <strong>Year of graduation:</strong> {consul.year}
          </p>
          <p>
            <strong>Department:</strong> {consul.department}
          </p>
          <p>
            <strong>Place of work:</strong> {consul.work}
          </p>
        </>
      }
    />
  </Card>
);

const Council = () => {
  return (
    <Layout>
      <Header style={{ background: '#fff', padding: 0 }}>
        <Title level={2} style={{ textAlign: 'center', margin: '20px 0' }}>
          ALUMNI COUNCIL
        </Title>
        <Paragraph style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
          AUCA Alumni Council is a group of enthusiastic alumni working together on the development
          of comprehensive programs and benefits for AUCA students and alums. The purpose of the
          Alumni Council is to foster a spirit of connectivity and loyalty among AUCA alumni and
          friends, helping them remain active in the global AUCA network.
        </Paragraph>
        <Paragraph style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
          With a new president and an energetic, fresh approach, the Alumni Council renews its
          mission to empower the AUCA community in Bishkek, in the Kyrgyz Republic, and around the
          world.
        </Paragraph>
        <Paragraph style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto 20px' }}>
          During the next year, the Alumni Council will meet and hear ideas from any alumnus who
          wishes to share ways the Alumni Association can work better for AUCA Alumni.
        </Paragraph>
      </Header>
      <Layout>
        <Sider width={300} style={{ backgroundColor: 'white' }}>
          <div style={{ padding: 24 }}>
            <Title level={4}>Contact Details</Title>
            <Form layout="vertical">
              <Form.Item label="Name">
                <Input placeholder="Enter your name" />
              </Form.Item>
              <Form.Item label="Email">
                <Input placeholder="Enter your email" />
              </Form.Item>
              <Form.Item label="Message">
                <Input.TextArea rows={4} placeholder="Enter your message" />
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
                  <ConsulCard consul={consul} />
                </Col>
              ))}
            </Row>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Council;
