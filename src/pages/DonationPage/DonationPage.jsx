import React, { useState, useEffect } from 'react';
import './mainPage.module.scss';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Button, Modal, Result } from 'antd';

const DonationPage = () => {
  const location = useLocation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [checkoutUrl, setCheckoutUrl] = useState('');

  const donationTitle = location.state?.donationTitle || '';
  const [formData, setFormData] = useState({
    gift_amount: '',
    email: '',
    email2: '',
    first_name: '',
    last_name: '',
    country: '',
    phone_number: '',
    class_year: '',
    program: '',
    donation_title: donationTitle,
    comments: '',
    agreedToTerms: false,
  });
  const [donationOptions, setDonationOptions] = useState([
    { id: 1, value: donationTitle, label: donationTitle }, // Предположим, что donationTitle соответствует id 1
    { id: 2, value: 'Educational', label: 'Educational' },
    { id: 3, value: 'Projects', label: 'Projects' },
    { id: 4, value: 'Scholarships', label: 'Scholarships' },
    { id: 5, value: 'Technology', label: 'Technology' },
  ]);
  const handleOk = () => {
    setIsModalVisible(false);
    window.location.href = checkoutUrl;
  };
  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      donation_title: donationTitle,
    }));
  }, [donationTitle]);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const finalValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: finalValue,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const selectedOption = donationOptions.find(
      (option) => option.value === formData.donation_title,
    );
    const payload = { ...formData, donation_title: [selectedOption.id] };
    console.log(payload);
    try {
      const response = await axios.post(
        'https://connectappproject.pythonanywhere.com/donate/',
        payload,
      );
      console.log(response);
      setCheckoutUrl(response.data.checkout_url);
      setIsModalVisible(true);

      setFormData({
        gift_amount: '',
        email: '',
        email2: '',
        first_name: '',
        last_name: '',
        country: '',
        phone_number: '',
        class_year: '',
        program: '',
        donation_title: donationTitle,
        comments: '',
        agreedToTerms: false,
      });
    } catch (error) {
      console.error('There was an error submitting the form!', error);
    }
  };

  return (
    <div className="container py-5">
      <h1 className="display-4 mb-4 animated-header">Make a Gift (Alumni)</h1>
      <p>
        Dear Alumni, we highly appreciate your support to your Alma mater! Any gift large or small
        makes a difference for the University. Raised funds are directed to endow scholarships of
        extraordinary students at the American University of Central Asia.
      </p>
      <p>
        Note: US taxpayers, your contribution is tax-deductible to the extent allowed by law. Please
        contact IAU Foundation for more information.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-8 mb-3">
            <h3 className="h5">1. Enter Gift Amount</h3>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Kyrgyz Som (KGS)</span>
              </div>
              <input
                type="number"
                className="form-control"
                name="gift_amount"
                value={formData.gift_amount}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="alert alert-info" role="alert">
              <p>**PAYMENT SUMMARY**</p>
              <p>
                You will be charged <strong>{formData.gift_amount} KGS</strong>. This is a one-time
                gift.
              </p>
              <div className="alert alert-warning" role="alert">
                **Important Note:** According to the requirements of the legislation of the Kyrgyz
                Republic, the amount of your contribution can only be withdrawn in the national
                currency - Kyrgyz Som (KGS).
              </div>
            </div>
          </div>

          <div className="col-md-8 mb-3">
            <h3 className="h5">2. Enter Your Contact Information</h3>
            <div className="form-row">
              <div className="col-md-6 form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="email2">Confirm Email *</label>
                <input
                  type="email"
                  className="form-control"
                  id="email2"
                  name="email2"
                  value={formData.email2}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-6 form-group">
                <label htmlFor="first_name">First Name *</label>
                <input
                  type="text"
                  className="form-control"
                  id="first_name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="last_name">Last Name *</label>
                <input
                  type="text"
                  className="form-control"
                  id="last_name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-6 form-group">
                <label htmlFor="country">Country *</label>
                <input
                  type="text"
                  className="form-control"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="phone_number">Phone Number *</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone_number"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-6 form-group">
                <label htmlFor="class_year">Class Year</label>
                <input
                  type="text"
                  className="form-control"
                  id="class_year"
                  name="class_year"
                  value={formData.class_year}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="program">Program</label>
                <input
                  type="text"
                  className="form-control"
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="col-md-8 mb-3">
            <h3 className="h5">3. Choose Donation Type</h3>
            <div className="form-group">
              <label htmlFor="donation_title">Donation Title*</label>
              <select
                className="form-control"
                id="donation_title"
                name="donation_title"
                value={formData.donation_title}
                onChange={handleInputChange}
                required
              >
                {donationOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="col-md-8 mb-3">
            <h3 className="h5">4. Add Your Comments</h3>
            <div className="form-group">
              <label htmlFor="comments">Comments</label>
              <textarea
                className="form-control"
                id="comments"
                name="comments"
                rows="3"
                value={formData.comments}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="col-md-8 mb-3">
            <h3 className="h5">5. Terms and Conditions</h3>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="agreedToTerms"
                name="agreedToTerms"
                checked={formData.agreedToTerms}
                onChange={handleInputChange}
                required
              />
              <label className="form-check-label" htmlFor="agreedToTerms">
                I agree to the terms and conditions.
              </label>
            </div>
          </div>

          <div className="col-md-8 mb-3">
            <button type="submit" className="btn btn-primary btn-block">
              Submit Donation
            </button>
          </div>
        </div>
        <div className="col-md-8 mb-3">
          <p>
            If you have questions, please contact the Development office, by phone at
            +996-312-915000 ext. 104 or email development@IAU.kg.
          </p>
        </div>
      </form>
      <Modal
        title="Payment Success"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button key="ok" type="primary" onClick={handleOk}>
            Go to Checkout
          </Button>,
        ]}
      >
        <Result
          status="success"
          title="Your donation was successful!"
          subTitle="Thank you for your generosity. You will be redirected to the payment page."
        />
      </Modal>
    </div>
  );
};

export default DonationPage;
