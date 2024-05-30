import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, Descriptions, Button } from 'antd';

const DonorDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { donorData } = location.state;

  return (
    <div style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
      <Card title="Donor Details" bordered={false} style={{ width: '80%' }}>
        <Descriptions bordered column={1}>
          <Descriptions.Item label="First Name">{donorData.firstName}</Descriptions.Item>
          <Descriptions.Item label="Last Name">{donorData.lastName}</Descriptions.Item>
          <Descriptions.Item label="Email">{donorData.email}</Descriptions.Item>
          <Descriptions.Item label="Phone Number">{donorData.phoneNumber}</Descriptions.Item>
          <Descriptions.Item label="Country">{donorData.country}</Descriptions.Item>
          <Descriptions.Item label="Class Year">{donorData.classYear}</Descriptions.Item>
          <Descriptions.Item label="Program">{donorData.program}</Descriptions.Item>
          <Descriptions.Item label="Donation Amount">${donorData.total_donation}</Descriptions.Item>
          <Descriptions.Item label="Donation Date">{donorData.donation_date}</Descriptions.Item>
          <Descriptions.Item label="Comments">{donorData.comments}</Descriptions.Item>
          <Descriptions.Item label="Agreed to Terms">
            {donorData.agreedToTerms ? 'Yes' : 'No'}
          </Descriptions.Item>
          <Descriptions.Item label="Donation Category">
            {donorData.donationCategory}
          </Descriptions.Item>
        </Descriptions>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <Button type="primary" onClick={() => navigate(-1)}>
            Back
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default DonorDetails;
