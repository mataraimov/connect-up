import React from 'react';
import OurValues from './OurValues';

const HomePage = () => {
  return (
    <div className="container" style={{ marginTop: '30px' }}>
      <div className="row">
        <div className="col-md-7">
          <OurValues />
          <div style={{ marginTop: '0px' }}>
            <h2 className="h1landline">
              <span>News</span>
            </h2>
            <div style={{ marginTop: '22px' }}>
              <a href="#" className="articlelink">
                <div
                  style={{
                    backgroundImage:
                      'url("http://alumni.alatoo.edu.kg/image?img=thumb_image_WhatsApp%20Image%202023-04-10%20at%2014.58.26%20(4)_5611230799075630768.jpeg")',
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                    width: '120px',
                    height: '90px',
                    float: 'left',
                  }}
                >
                  &nbsp;
                </div>
                <div style={{ marginLeft: '135px' }}>
                  <p
                    style={{
                      fontWeight: 'bold',
                      lineHeight: '120%',
                      margin: '0',
                      fontSize: '16px',
                    }}
                  >
                    Встреча с выпускниками IT направления МУА 2023
                  </p>
                  <p style={{ color: 'gray', lineHeight: '120%', margin: '0' }}>April 10, 2023</p>
                  <p style={{ lineHeight: '120%', marginTop: '5px' }}>
                    Прошла встреча с выпускниками IT направления МУА 2023. Обсуждались перспективы
                    развития сферы IT в регионе.
                  </p>
                </div>
              </a>
            </div>
            <div style={{ marginTop: '22px' }}>
              <a href="#" className="articlelink">
                <div
                  style={{
                    backgroundImage:
                      'url("http://alumni.alatoo.edu.kg/image?img=thumb_image_WhatsApp%20Image%202023-04-10%20at%2014.58.26%20(4)_5611230799075630768.jpeg")',
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                    width: '120px',
                    height: '90px',
                    float: 'left',
                  }}
                >
                  &nbsp;
                </div>
                <div style={{ marginLeft: '135px' }}>
                  <p
                    style={{
                      fontWeight: 'bold',
                      lineHeight: '120%',
                      margin: '0',
                      fontSize: '16px',
                    }}
                  >
                    Встреча с выпускниками IT направления МУА 2023
                  </p>
                  <p style={{ color: 'gray', lineHeight: '120%', margin: '0' }}>April 10, 2023</p>
                  <p style={{ lineHeight: '120%', marginTop: '5px' }}>
                    Прошла встреча с выпускниками IT направления МУА 2023. Обсуждались перспективы
                    развития сферы IT в регионе.
                  </p>
                </div>
              </a>
            </div>
            <div style={{ marginTop: '22px' }}>
              <a href="#" className="articlelink">
                <div
                  style={{
                    backgroundImage:
                      'url("http://alumni.alatoo.edu.kg/image?img=thumb_image_WhatsApp%20Image%202023-04-10%20at%2014.58.26%20(4)_5611230799075630768.jpeg")',
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                    width: '120px',
                    height: '90px',
                    float: 'left',
                  }}
                >
                  &nbsp;
                </div>
                <div style={{ marginLeft: '135px' }}>
                  <p
                    style={{
                      fontWeight: 'bold',
                      lineHeight: '120%',
                      margin: '0',
                      fontSize: '16px',
                    }}
                  >
                    Встреча с выпускниками IT направления МУА 2023
                  </p>
                  <p style={{ color: 'gray', lineHeight: '120%', margin: '0' }}>April 10, 2023</p>
                  <p style={{ lineHeight: '120%', marginTop: '5px' }}>
                    Прошла встреча с выпускниками IT направления МУА 2023. Обсуждались перспективы
                    развития сферы IT в регионе.
                  </p>
                </div>
              </a>
            </div>
            <div style={{ margin: '10px 0 30px 0' }}>
              <a href="/alumni_news/" className="btnmore">
                <i className="fa fa-chevron-circle-right"></i> More news
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-5" style={{ paddingLeft: '35px' }}>
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <a href="#">
              <img
                src="https://www.etzchayim.org.au/wp-content/uploads/2020/03/SUPPORT-US.png"
                alt="Support Us Banner"
                style={{ maxWidth: '100%' }}
              />
            </a>
          </div>

          <div style={{ marginTop: '15px' }}>
            <div style={{ textAlign: 'center' }}>
              <a
                className="btn btn-primary"
                style={{ backgroundColor: '#b71c1c', borderColor: '#b71c1c' }}
                href="/givingalumni/"
              >
                Donate to Alumni Fund
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
