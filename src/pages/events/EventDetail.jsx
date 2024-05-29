import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Layout, Typography, Spin, Button, Card, Row, Col } from 'antd';
import { motion } from 'framer-motion';
import './EventDetail.css'; // Ensure this CSS file exists for custom styles

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
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Title level={2}>{event.Title}</Title>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img
            src={event['ImageLink']}
            alt={event.Title}
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
          <Paragraph>{event.Description}</Paragraph>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Card>
                <Paragraph>
                  <strong>Date:</strong> {event.Date}
                </Paragraph>
              </Card>
            </Col>
            <Col span={12}>
              <Card>
                <Paragraph>
                  <strong>Video:</strong>{' '}
                  <a href={event['VideoLink']} target="_blank" rel="noopener noreferrer">
                    {event['VideoLink']}
                  </a>
                </Paragraph>
              </Card>
            </Col>
          </Row>
          <Button
            type="primary"
            size="large"
            style={{ marginTop: '20px', width: '100%' }}
            onClick={() => navigate('/donate')}
          >
            Donate Now
          </Button>
        </motion.div>
      </Content>
    </Layout>
  );
};

export default EventDetail;
