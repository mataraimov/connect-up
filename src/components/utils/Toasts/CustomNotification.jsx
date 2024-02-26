import React, { useEffect, useState } from 'react';
import './CustomNotification.css';

const CustomNotification = ({ message, type }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const notificationClass = `custom-notification ${type} ${visible ? 'show' : ''}`;

  return (
    <div className={notificationClass}>
      <p>{message}</p>
    </div>
  );
};

export default CustomNotification;
