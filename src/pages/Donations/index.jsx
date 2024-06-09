import { useState, useEffect } from 'react';
import { Table } from 'antd';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import IncomeTraffic from './incomeTraffic';
import { API_URL } from '../../components/utils/config';

const Donations = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/donate/last-donations`);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const showDetails = (record) => {
    navigate(`/donor/${record.id}`, { state: { donorData: record } });
  };

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'full_name',
      key: 'firstName',
      render: (fullName) => fullName.split(' ')[0], // Assuming firstName is the first part of full_name
    },
    {
      title: 'Last Name',
      dataIndex: 'full_name',
      key: 'lastName',
      render: (fullName) => fullName.split(' ')[1], // Assuming lastName is the second part of full_name
    },
    {
      title: 'Donation',
      dataIndex: 'gift_amount',
      key: 'total_donation',
    },
    {
      title: 'Donation Date',
      dataIndex: 'donation_date',
      key: 'donation_date',
      render: (date) => <span>{moment(date).format('DD/MM/YYYY')}</span>,
    },
    {
      render: (text, record) => (
        <span>
          <a style={{ color: '#1890ff' }} onClick={() => showDetails(record)}>
            Details
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

export default Donations;
