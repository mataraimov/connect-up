import React from 'react';
import { Row, Col, Typography, Statistic, Card, Divider } from 'antd';
import { motion } from 'framer-motion';
import {
  GlobalOutlined,
  TeamOutlined,
  SmileOutlined,
  BookOutlined,
  SolutionOutlined,
  TrophyOutlined,
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const statistics = [
  { title: 'International Partners', value: 100, icon: <GlobalOutlined /> },
  { title: 'Countries Represented', value: 60, icon: <TeamOutlined /> },
  { title: 'Foreign Students', value: 500, icon: <SmileOutlined /> },
  { title: 'Dual Degree Programs', value: 7, icon: <BookOutlined /> },
  { title: 'Students', value: 3000, icon: <SolutionOutlined /> },
  { title: 'Alumni', value: 4500, icon: <TrophyOutlined /> },
];

const AboutUs = () => {
  return (
    <div className="container" style={{ padding: '50px 0' }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Title level={1} style={{ textAlign: 'center' }}>
          About Us
        </Title>
      </motion.div>

      <Row gutter={[32, 32]} justify="center" style={{ marginBottom: '50px' }}>
        <Col span={8} style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            <Title level={2}>Our Values</Title>
            <Paragraph>
              Our ideas are the fundamental principles on which our university community is built.
              We believe in innovation that leads to new horizons of knowledge and development. Our
              goal is to inspire and support students in their pursuit of higher goals.
            </Paragraph>
            <img
              src="https://i.ibb.co/DffzwdD/2024-06-10-13-19-02.png"
              alt="Our Values"
              style={{ maxWidth: '100%', borderRadius: '8px', height: 'auto' }}
            />
          </motion.div>
        </Col>

        <Col span={8} style={{ textAlign: 'center', marginBottom: '50px' }}>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.6 }}
          >
            <Title level={2}>Our Mission</Title>
            <Paragraph>
              Our university's mission is to provide quality education that fosters the development
              of leaders ready to tackle the complex challenges of the modern world. We strive to
              create an educational environment that promotes critical thinking, creativity, and
              social responsibility.
            </Paragraph>
            <img
              src="https://st2.depositphotos.com/41604320/42052/v/450/depositphotos_420526196-stock-illustration-business-mission-illustration-man-looking.jpg"
              alt="Our Mission"
              style={{ maxWidth: '100%', borderRadius: '8px', height: 'auto' }}
            />
          </motion.div>
        </Col>

        <Col span={8} style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.9 }}
          >
            <Title level={2}>Our Vision</Title>
            <Paragraph>
              Our vision is to create an intellectual and cultural center recognized both nationally
              and internationally. We see ourselves as a key player in higher education, inspiring
              and supporting the intellectual development of society.
            </Paragraph>
            <img
              src="https://st2.depositphotos.com/41604320/42052/v/450/depositphotos_420526126-stock-illustration-business-vision-illustration-businessman-standing.jpg"
              alt="Our Vision"
              style={{ maxWidth: '100%', borderRadius: '8px', height: 'auto' }}
            />
          </motion.div>
        </Col>
      </Row>

      <Divider style={{ margin: '50px 0' }} />

      <Row gutter={[32, 32]} justify="center">
        <Col span={24}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Title level={2} style={{ textAlign: 'center' }}>
              Our Achievements
            </Title>
          </motion.div>
        </Col>

        {statistics.map((stat, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: index * 0.3 }}
            >
              <Card>
                <Statistic title={stat.title} value={stat.value} prefix={stat.icon} />
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      <Divider style={{ margin: '50px 0' }} />

      <Row gutter={[32, 32]} justify="center" style={{ textAlign: 'center' }}>
        <Col span={24}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            <Title level={2}>Join Us</Title>
            <Paragraph>
              Be a part of our vibrant alumni network and contribute to the continuous growth and
              success of our university. Whether you're a recent graduate or a seasoned
              professional, there's a place for you in our community.
            </Paragraph>
          </motion.div>
        </Col>

        <Col span={24}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
          >
            <Title level={2}>Get Involved</Title>
            <Paragraph>
              Participate in alumni events, mentor current students, or contribute to our
              development programs. Your involvement can make a significant impact on the future of
              our university and its students.
            </Paragraph>
          </motion.div>
        </Col>

        <Col span={24}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.9 }}
          >
            <Title level={2}>Support Us</Title>
            <Paragraph>
              Your donations help us provide scholarships, improve facilities, and support
              innovative projects. Together, we can ensure a brighter future for our university and
              its community.
            </Paragraph>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
