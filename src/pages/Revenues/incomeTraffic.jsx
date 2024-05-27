import { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import moment from 'moment';
import { mockMonthlyDonations } from './mockData';

const IncomeTraffic = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Simulate an API call
      setTimeout(() => {
        const incomeData = Object.entries(mockMonthlyDonations).map(([month, income]) => ({
          month,
          income,
        }));
        setData(incomeData);
      }, 1000);
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  };

  const uniqueMonths = [...new Set(data.map((item) => moment(item.month).format('MMMM YYYY')))];

  const formattedData = uniqueMonths.map((month) => {
    const incomeForMonth = data.find((item) => moment(item.month).format('MMMM YYYY') === month);
    return {
      name: month,
      donation: incomeForMonth ? incomeForMonth.income : 0,
    };
  });

  return (
    <ResponsiveContainer width="100%" height={450}>
      <LineChart
        width={500}
        height={200}
        data={formattedData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line connectNulls type="monotone" dataKey="donation" stroke="#8884d8" fill="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default IncomeTraffic;
