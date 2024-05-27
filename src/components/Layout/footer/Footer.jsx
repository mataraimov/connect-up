import React from 'react';
import { Link } from 'react-router-dom';

const MainFooter = () => {
  return (
    <div
      className="mainfooter"
      style={{ backgroundColor: '#333333', marginTop: '45px', padding: '30px 0' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <img
              src="https://media.licdn.com/dms/image/C4E03AQHibu7GEjIwLQ/profile-displayphoto-shrink_200_200/0/1663907068590?e=2147483647&v=beta&t=0HMXlE4a6cXVutTCpoBV8-spLVuwp31ErW8wJzGEfkw"
              alt="Logo"
              style={{ height: '100%', maxHeight: '58px', filter: 'grayscale(100%)' }}
            />
          </div>
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-4">
                <p style={{ fontSize: '18px', color: '#fff', marginBottom: '20px' }}>Образование</p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li>
                    <a href="#">Образование</a>
                  </li>
                  <li>
                    <a href="#">Лицензии и аккредитации</a>
                  </li>
                  <li>
                    <a href="#">Факультеты и кафедры</a>
                  </li>
                  <li>
                    <a href="#">Система онлайн-курсов</a>
                  </li>
                  <li>
                    <a href="#">Библиотека</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <p style={{ fontSize: '18px', color: '#fff', marginBottom: '20px' }}>
                  Исследования
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li>
                    <a href="#">Исследования</a>
                  </li>
                  <li>
                    <a href="#">Институты</a>
                  </li>
                  <li>
                    <a href="#">Исследовательские центры</a>
                  </li>
                  <li>
                    <a href="#">Лаборатории</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <p style={{ fontSize: '18px', color: '#fff', marginBottom: '20px' }}>Поступление</p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li>
                    <a href="#">Поступление</a>
                  </li>
                  <li>
                    <a href="#">Студенты граждан КР</a>
                  </li>
                  <li>
                    <a href="#">Иностранные студенты</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <p style={{ fontSize: '18px', color: '#fff', marginBottom: '20px' }}>
                  Университетская жизнь
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li>
                    <a href="#">Университетская жизнь</a>
                  </li>
                  <li>
                    <a href="#">Общественные организации</a>
                  </li>
                  <li>
                    <a href="#">Достижения студентов</a>
                  </li>
                  <li>
                    <a href="#">Жильё и питание</a>
                  </li>
                  <li>
                    <a href="#">Спортивные клубы, спартакиады и соревнования</a>
                  </li>
                  <li>
                    <a href="#">Клубы</a>
                  </li>
                  <li>
                    <a href="#">Здоровье и медицина</a>
                  </li>
                  <li>
                    <a href="#">3D тур</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <p style={{ fontSize: '18px', color: '#fff', marginBottom: '20px' }}>О нас</p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li>
                    <a href="#">О нас</a>
                  </li>
                  <li>
                    <a href="#">Об университете</a>
                  </li>
                  <li>
                    <a href="#">Уставы и документы</a>
                  </li>
                  <li>
                    <a href="#">Руководство</a>
                  </li>
                  <li>
                    <a href="#">Структура</a>
                  </li>
                  <li>
                    <a href="#">Вакансии</a>
                  </li>
                  <li>
                    <Link to="/admin-events">Админ</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <p style={{ fontSize: '18px', color: '#fff', marginBottom: '20px' }}>
                  Департаменты
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li>
                    <a href="#">Департаменты</a>
                  </li>
                  <li>
                    <a href="#">Департамент образования и управление качеством</a>
                  </li>
                  <li>
                    <a href="#">Институт повышении квалификации и инновации</a>
                  </li>
                  <li>
                    <a href="#">Офис международных отношений</a>
                  </li>
                  <li>
                    <a href="#">Офис по работе с выпускниками</a>
                  </li>
                  <li>
                    <a href="#">Студенческий отдел</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
