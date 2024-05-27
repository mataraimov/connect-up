import React, { useState, useEffect } from 'react';
import { Layout, Row, Col, Card, Typography, Image } from 'antd';
// import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import './Contact.css'; // Create a CSS file for custom styles

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Contact = () => {
  // const [coords, setCoords] = useState([42.8746, 74.6122]); // Default to Bishkek coordinates

  // useEffect(() => {
  //   const address = '1/8 ул. Анкара, Бишкек';
  //   getCoordinatesByAddress(address).then((coords) => {
  //     if (coords) {
  //       setCoords([coords.latitude, coords.longitude]);
  //     }
  //   });
  // }, []);

  // function getCoordinatesByAddress(address) {
  //   const YANDEX_API_KEY = 'bf926d03-993e-4625-916e-6280dcbc2248';
  //   const YANDEX_GEOCODER_API = `https://geocode-maps.yandex.ru/1.x/?apikey=${YANDEX_API_KEY}&format=json&geocode=`;

  //   return fetch(YANDEX_GEOCODER_API + encodeURIComponent(address))
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const position = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
  //         .split(' ')
  //         .map(Number)
  //         .reverse();
  //       return {
  //         latitude: position[0],
  //         longitude: position[1],
  //       };
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ padding: '50px' }}>
        <div className="alumni-header">
          <img
            src="https://i.ibb.co/LpsD0pj/unnamed.jpg"
            alt="Alumni Center"
            className="alumni-image"
          />
          <div className="alumni-info">
            <Title level={2}>ALUMNI CENTER</Title>
            <Paragraph>Ala-Too International University A-Block, 101 room</Paragraph>
            <Paragraph>
              Ala-Too International University, Ankara Street 1/8, Tunguch, 720048, Bishkek, Kyrgyz
              Republic
            </Paragraph>
            <Paragraph>
              Tel: +996 (558) 241188 <br />
              Fax: +996 (312) 630409 <br />
              E-mail: alumni@alatoo.edu.kg
            </Paragraph>
            <Paragraph>Buses: 7, 29, 102, 105, 128, 137, 147, 154, 166, 258, 262</Paragraph>
          </div>
        </div>

        <Row gutter={16} className="contact-cards">
          <Col span={8}>
            <Card title="Main Office" bordered={false} className="contact-card">
              <p>
                <EnvironmentOutlined /> Address: 123 Main St, City, Country
              </p>
              <p>
                <MailOutlined /> Email: info@alumnicenter.com
              </p>
              <p>
                <PhoneOutlined /> Phone: +123 456 7890
              </p>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Branch Office" bordered={false} className="contact-card">
              <p>
                <EnvironmentOutlined /> Address: 456 Side St, City, Country
              </p>
              <p>
                <MailOutlined /> Email: branch@alumnicenter.com
              </p>
              <p>
                <PhoneOutlined /> Phone: +123 456 7891
              </p>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Support" bordered={false} className="contact-card">
              <p>
                <MailOutlined /> Email: support@alumnicenter.com
              </p>
              <p>
                <PhoneOutlined /> Phone: +123 456 7892
              </p>
            </Card>
          </Col>
        </Row>

        <div className="map-container">
          <Image src="https://i.ibb.co/Fh5XGd8/2024-05-27-21-27-35.png" />
        </div>
      </Content>
    </Layout>
  );
};

export default Contact;
