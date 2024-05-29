import React from 'react';
import { Layout, Row, Col, Typography, Card, Divider, Button } from 'antd';
import {
  MailOutlined,
  PhoneOutlined,
  SmileOutlined,
  HeartOutlined,
  DollarOutlined,
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import './AlumniFund.css'; // Ensure this CSS file exists for custom styles

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const donationMethods = [
  {
    name: 'Visa',
    img: 'data:image/png;base64,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',
  },
  {
    name: 'Paypal',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png',
  },
  {
    name: 'Patreon',
    img: 'https://crystalpng.com/wp-content/uploads/2023/10/New-Patreon-Logo.png',
  },
];

const AlumniFund = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ padding: '50px' }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Title level={1} className="alumni-fund-title">
            ALUMNI FUND
          </Title>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Paragraph className="alumni-fund-subtitle">
            Alumni Fundraising Drive 2024-2025 - Support Ala-Too students!
          </Paragraph>

          <Paragraph>
            The Ala-Too Alumni Association now includes over 4,400 members dedicated to transforming
            Central Asia through democratic principles. Since 1993, over 93% of Ala-Too students
            have benefited from financial aid and support from various donors. With the first
            generation of leaders stepping forward, it’s time to nurture the next wave of pioneers.
            Participate in this special Alumni Giving Drive and support Ala-Too!
          </Paragraph>

          <Paragraph>
            We are excited to launch the Ala-Too Alumni Giving Drive 2024-2025 #WeAreAlaToo
            #SupportAlaToo. Your contributions, big or small, significantly impact our University.
            Last year, we saw our most successful drive with 300 donations totaling over $10,000.
            This enabled us to provide five $2,000 scholarships to outstanding students.
          </Paragraph>

          <Paragraph>
            With a vigorous new Development Office led by the dynamic Dr. Bermet Tursunkulova, we
            aim to surpass previous achievements. Our goal is to secure at least 500 donations
            amounting to $30,000, and with your help, we can exceed these targets! Since the
            campaign’s launch in August 2023, we’ve raised $15,035 with tremendous support from our
            alumni and friends. Contributions continue to pour in amounts of 300, 500, and 1000 KGS.
          </Paragraph>

          <Paragraph>
            Soon, you’ll be able to see how different departments, classes, and countries are
            participating in this fundraising campaign.
          </Paragraph>
        </motion.div>

        <Divider style={{ margin: '50px 0' }} />

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
          <Title level={3}>Ways to donate:</Title>
        </motion.div>

        <Row gutter={16} className="donation-methods">
          {donationMethods.map((method, index) => (
            <Col span={8} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: index * 0.3 }}
              >
                <Card bordered={false} className="donation-card">
                  <img src={method.img} alt={method.name} className="payment-logo" />
                  <p>{method.name}</p>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        <Divider style={{ margin: '50px 0' }} />

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
          <Title level={3}>Non-Financial Support:</Title>
          <Paragraph>
            ➢ Share your expertise with students and recent graduates by offering a guest lecture or
            workshop at Ala-Too;
            <br />
            ➢ Join the Ala-Too Alumni Council, a team of 7-9 passionate alumni working together to
            create comprehensive programs and benefits for students and alumni;
            <br />➢ Become an Alumni Ambassador. Reconnect Ala-Too alumni in your area or class,
            fostering a beneficial and lasting relationship within your local or professional
            community.
          </Paragraph>
        </motion.div>

        <Divider style={{ margin: '50px 0' }} />

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
          <Title level={3}>Contact Us:</Title>
        </motion.div>

        <Row gutter={16} className="contact-info">
          <Col span={12}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
            >
              <Card bordered={false} className="contact-card">
                <MailOutlined /> Email: alumni@alatoo.edu.kg
              </Card>
            </motion.div>
          </Col>
          <Col span={12}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
            >
              <Card bordered={false} className="contact-card">
                <PhoneOutlined /> Phone: +996 (558) 241188
              </Card>
            </motion.div>
          </Col>
        </Row>

        <Divider style={{ margin: '50px 0' }} />

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
          <Title level={3}>Why Support Us?</Title>
          <Paragraph>
            Supporting the Ala-Too Alumni Fund is not just about giving money; it's about investing
            in the future of our community. Your contributions help us to:
          </Paragraph>
          <Row gutter={[32, 32]} justify="center">
            <Col xs={24} sm={12} md={8}>
              <Card bordered={false} className="support-card">
                <SmileOutlined style={{ fontSize: '32px', color: '#1890ff' }} />
                <Paragraph>Provide scholarships to deserving students.</Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card bordered={false} className="support-card">
                <HeartOutlined style={{ fontSize: '32px', color: '#ff4d4f' }} />
                <Paragraph>Enhance university facilities and resources.</Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card bordered={false} className="support-card">
                <DollarOutlined style={{ fontSize: '32px', color: '#52c41a' }} />
                <Paragraph>Support innovative research and projects.</Paragraph>
              </Card>
            </Col>
          </Row>
        </motion.div>
      </Content>
    </Layout>
  );
};

export default AlumniFund;
