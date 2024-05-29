import { message } from 'antd';
import axios from 'axios';
import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './Events.scss';
import { Layout, Typography, Row, Col, Card } from 'antd';
import { motion } from 'framer-motion';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const EventCard = ({ event }) => {
  return (
    <Col xs={24} sm={12} md={8} className="animated-card">
      <div className="thumbnail animated-card">
        <img src={event.ImageLink} alt={event.Title} className="img-responsive" />
        <div className="caption">
          <h3 className={'truncated-text-1'}>{event.Title}</h3>
          <p className={'truncated-text'}>{event.Description}</p>
          <p>
            <Link to={`/event-detail/${event.id}`} className="btn btn-primary" role="button">
              Read more
            </Link>
          </p>
        </div>
      </div>
    </Col>
  );
};

const Events = () => {
  const [events, setEvents] = useState([]);
  const API_URL = 'https://633acce9e02b9b64c617beec.mockapi.io/events';

  const fetchEvents = async () => {
    try {
      const response = await axios.get(API_URL);
      setEvents(response.data);
    } catch (error) {
      console.log(error);
      message.error('Failed to fetch events');
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const memoizedEvents = useMemo(() => events, [events]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ padding: '50px' }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Title level={1} className="text-center animated-header">
            Donate to an Event
          </Title>
          <Paragraph className="text-center intro-text">
            Discover various opportunities to support the Alumni Center. Your contributions can make
            a significant impact on the lives of students and the university community. Below are
            different initiatives and events that you can donate to, each with a unique purpose and
            goal.
          </Paragraph>
        </motion.div>
        <Row gutter={[32, 32]} className="events-grid">
          {memoizedEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </Row>
      </Content>
    </Layout>
  );
};

export default Events;
