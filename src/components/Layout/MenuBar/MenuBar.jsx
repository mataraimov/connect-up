import React, { useState, useEffect } from 'react';

const MenuBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Проверяем ширину окна и закрываем меню, если она достаточно узкая
      if (window.innerWidth <= 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    // Добавляем слушатель изменения размера окна
    window.addEventListener('resize', handleResize);

    // Очищаем слушатель при размонтировании компонента
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]); // Зависимость эффекта от состояния menuOpen

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div id="fixedactionsbox">
      <div className="navbar navbar-inverse menunav dark" role="navigation" id="fixedactions">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle menumobile" onClick={toggleMenu}>
              <span className="sr-only">Toggle navigation</span>
              Menu <span style={{ fontSize: '150%' }}>☰</span>
            </button>
          </div>
          <div className={`navbar-collapse collapse ${menuOpen ? 'in' : ''}`} id="checkmenuwidth">
            <div id="checkmenublock">
              <a href="index.html" className="menu checkmenulink menuselected">
                <span className="glyphicon glyphicon-home" style={{ lineHeight: '50%' }}></span>
              </a>
              <a href="/association/" className="menu checkmenulink checkmenusepar">
                MEMBERSHIP
              </a>
              <a href="/benefits/" className="menu checkmenulink checkmenusepar">
                BENEFITS
              </a>
              <a href="/engage/" className="menu checkmenulink checkmenusepar">
                GET INVOLVED
              </a>
              <a href="/ambassadors/" className="menu checkmenulink checkmenusepar">
                WORLDWIDE
              </a>
              <a href="/alcouncil/" className="menu checkmenulink checkmenusepar">
                COUNCIL
              </a>
              <a href="/alumni_fund/" className="menu checkmenulink checkmenusepar">
                Alumni Fund
              </a>
              <a href="/alumni_scholarship/" className="menu checkmenulink checkmenusepar">
                Scholarship
              </a>
              <a href="/alumni_contacts/" className="menu checkmenulink checkmenusepar">
                Contact us
              </a>
            </div>
            <div
              className="dropdown checkmenusepar"
              id="checkmenuaddlink"
              style={{ float: 'left', display: 'none' }}
            >
              <button
                className="btn btn-default dropdown-toggle menu"
                style={{
                  background: '0',
                  border: '0',
                  padding: '10px 10px 6px 10px',
                  width: '34px',
                }}
                type="button"
                id="dropdownMenu1"
                data-toggle="dropdown"
                aria-expanded="true"
              >
                <span className="glyphicon glyphicon-chevron-down"></span>
              </button>
              <div
                className="dropdown-menu bluebg"
                id="dropdownmenu"
                role="menu"
                aria-labelledby="dropdownMenu1"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
