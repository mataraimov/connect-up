import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Layout, Typography, Spin, Button } from 'antd';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(
          `https://633acce9e02b9b64c617beec.mockapi.io/events/${id}`,
        );
        setEvent(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching event data:', error);
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) {
    return (
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content style={{ padding: 24, margin: 0, minHeight: 280 }}>
          <Spin size="large" />
        </Content>
      </Layout>
    );
  }

  if (!event) {
    return (
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content style={{ padding: 24, margin: 0, minHeight: 280 }}>
          <Title level={2}>Event not found</Title>
        </Content>
      </Layout>
    );
  }

  return (
    <Layout style={{ padding: '0 24px 24px' }}>
      <Content style={{ padding: 24, margin: 0, minHeight: 280 }}>
        <Title level={2}>{event.Title}</Title>
        <img
          src={event['ImageLink']}
          alt={event.Title}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <Paragraph>{event.Description}</Paragraph>
        <Paragraph>
          <strong>Date:</strong> {event.Date}
        </Paragraph>
        <Paragraph>
          <strong>Video:</strong>{' '}
          <a href={event['VideoLink']} target="_blank" rel="noopener noreferrer">
            {event['VideoLink']}
          </a>
        </Paragraph>
        <Button
          type="primary"
          size="large"
          style={{ marginTop: '20px', width: '100%' }}
          onClick={() => navigate('/donate')}
        >
          Donate Now
        </Button>
      </Content>
    </Layout>
  );
};

export default EventDetail;
