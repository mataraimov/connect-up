import React from 'react';
import { Layout, Row, Col, Typography, Card } from 'antd';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import './AlumniFund.css'; // Create a CSS file for custom styles

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const AlumniFund = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ padding: '50px' }}>
        <Title level={1} className="alumni-fund-title">
          ALUMNI FUND
        </Title>
        <Paragraph className="alumni-fund-subtitle">
          Alumni Fundraising Drive 2024-2025 - Support Ala-Too students!
        </Paragraph>

        <Paragraph>
          The Ala-Too Alumni Association now includes over 4,400 members dedicated to transforming
          Central Asia through democratic principles. Since 1993, over 93% of Ala-Too students have
          benefited from financial aid and support from various donors. With the first generation of
          leaders stepping forward, it’s time to nurture the next wave of pioneers. Participate in
          this special Alumni Giving Drive and support Ala-Too!
        </Paragraph>

        <Paragraph>
          We are excited to launch the Ala-Too Alumni Giving Drive 2024-2025 #WeAreAlaToo
          #SupportAlaToo. Your contributions, big or small, significantly impact our University.
          Last year, we saw our most successful drive with 300 donations totaling over $10,000. This
          enabled us to provide five $2,000 scholarships to outstanding students.
        </Paragraph>

        <Paragraph>
          With a vigorous new Development Office led by the dynamic Dr. Bermet Tursunkulova, we aim
          to surpass previous achievements. Our goal is to secure at least 500 donations amounting
          to $30,000, and with your help, we can exceed these targets! Since the campaign’s launch
          in August 2023, we’ve raised $15,035 with tremendous support from our alumni and friends.
          Contributions continue to pour in amounts of 300, 500, and 1000 KGS.
        </Paragraph>

        <Paragraph>
          Soon, you’ll be able to see how different departments, classes, and countries are
          participating in this fundraising campaign.
        </Paragraph>

        <Title level={3}>Ways to donate:</Title>
        <Row gutter={16} className="donation-methods">
          <Col span={8}>
            <Card bordered={false}>
              <img src="/assets/visa-logo.jpeg" alt="Visa" className="payment-logo" />
              <p>Visa</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card bordered={false}>
              <img src="/assets/paypal-logo.png" alt="Paypal" className="payment-logo" />
              <p>Paypal</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card bordered={false}>
              <img src="/assets/patreon-logo.png" alt="Patreon" className="payment-logo" />
              <p>Patreon</p>
            </Card>
          </Col>
        </Row>

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

        <Paragraph>
          For more questions and inquiries, please do not hesitate to contact us:
        </Paragraph>
        <Row>
          <Col span={12}>
            <Card bordered={false} className="contact-card">
              <MailOutlined /> Email: alumni@alatoo.edu.kg
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={false} className="contact-card">
              <PhoneOutlined /> Phone: +996 (558) 241188
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default AlumniFund;
