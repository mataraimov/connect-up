import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Layout, Typography, Spin, Button, Card, Row, Col } from 'antd';
import { motion } from 'framer-motion';
import './EventDetail.css'; // Ensure this CSS file exists for custom styles
import { refreshAccessToken } from '../../components/utils/refreshAccessToken';
import { API_URL } from '../../components/utils/config';
import moment from 'moment';

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
        const response = await axios.get(`${API_URL}/events/detail/${id}`);
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
          <Title level={2}>{event.event_name}</Title>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img
            src={event['event_image_link']}
            alt={event.event_image_link}
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
          <Paragraph>{event.event_description}</Paragraph>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Card>
                <Paragraph>
                  <strong>Date:</strong>{' '}
                  {`${moment(event.event_date).format('MMMM Do YYYY, h:mm a')}`}
                </Paragraph>
              </Card>
            </Col>
            <Col span={12}>
              <Card>
                <Paragraph>
                  <strong>Video:</strong>{' '}
                  <a href={event['event_vidio_link']} target="_blank" rel="noopener noreferrer">
                    {event['event_vidio_link']}
                  </a>
                </Paragraph>
              </Card>
            </Col>
          </Row>
          <Button
            type="primary"
            size="large"
            style={{ marginTop: '20px', width: '100%' }}
            onClick={() => navigate('/donate', { state: { donationTitle: event.event_name } })}
          >
            Donate Now
          </Button>
        </motion.div>
      </Content>
    </Layout>
  );
};

export default EventDetail;
