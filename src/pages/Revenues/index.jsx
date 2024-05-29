import { useState, useEffect } from 'react';
import { Table } from 'antd';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

import IncomeTraffic from './incomeTraffic';
import { mockDonations } from './mockData';

const Revenues = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      // Simulate an API call
      setTimeout(() => {
        setData(mockDonations);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
      setLoading(false);
    }
  };

  const showDetails = (record) => {
    navigate(`/donor/${record.id}`, { state: { donorData: record } });
  };

  const columns = [
    {
      title: 'Имя',
      dataIndex: 'firstName',
      key: 'name',
    },
    {
      title: 'Фамилия',
      dataIndex: 'lastName',
      key: 'surname',
    },
    {
      title: 'Пожертвование',
      dataIndex: 'total_donation',
      key: 'total_donation',
    },
    {
      title: 'Дата пожертвования',
      dataIndex: 'donation_date',
      key: 'donation_date',
      render: (date) => <span>{moment(date).format('DD/MM/YYYY')}</span>,
    },
    {
      render: (text, record) => (
        <span>
          <a style={{ color: '#1890ff' }} onClick={() => showDetails(record)}>
            Детали
          </a>
        </span>
      ),
    },
  ];

  const styles = {
    tableContainer: {
      marginTop: '60px',
    },
  };

  return (
    <>
      <IncomeTraffic />
      <Table
        columns={columns}
        dataSource={data}
        loading={loading}
        rowKey={(record) => record.id}
        style={styles.tableContainer}
      />
    </>
  );
};

export default Revenues;
