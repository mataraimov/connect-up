import React, { useState } from 'react';
import './mainPage.module.scss';
import axios from 'axios';
import { Select } from 'antd';

const donation_title = [
  { event_title: "zxccxb" },
  { event_title: "Fundraising Gala for the New Science Lab" },

]
const DonationPage = () => {
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
    donation_title: null,
    comments: '',
    agreedToTerms: false,
    donationCategory: '',
  });
  console.log(formData, 'formData');

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    let finalValue = type === 'checkbox' ? checked : value;

    // If the name is 'donation_title' and value is an object, use the id
    if (name === 'donation_title' && typeof value === 'object' && value !== null) {
        finalValue = value.id;
    }

    setFormData({
      ...formData,
      [name]: finalValue,
    });
};

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement form submission logic here
    console.log('Form submitted!', formData);
    const response = axios.post('https://connectappproject.pythonanywhere.com/donate/', formData);
    console.log(response);
    // Clear form fields after submission
    // setFormData({
    //   giftAmount: '',
    //   email: '',
    //   confirmEmail: '',
    //   firstName: '',
    //   lastName: '',
    //   country: '',
    //   phoneNumber: '',
    //   classYear: '',
    //   program: '',
    //   comments: '',
    //   agreedToTerms: false,
    //   donationCategory: '',
    // });
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
            <h3 className="h5">2. Select Donation Category</h3>
            <div className="form-group">
              <label htmlFor="donationCategory">Category *</label>
              <select
                className="form-control"
                id="donationCategory"
                name="donationCategory"
                value={formData.donationCategory}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Category</option>
                <option value="Educational">Educational</option>
                <option value="Projects">Projects</option>
                <option value="Scholarships">Scholarships</option>
                <option value="Technology">Technology</option>
              </select>
            </div>
          </div>

          <div className="col-md-8 mb-3">
            <h3 className="h5">3. Enter Your Contact Information</h3>
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
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
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
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phoneNumber"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleInputChange}
                  placeholder="+996-..."
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-6 form-group">
                <label htmlFor="classYear">Class Year of graduation from IAU (if applicable)</label>
                <input
                  type="number"
                  className="form-control"
                  id="classYear"
                  name="class_year"
                  value={formData.class_year}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="program">Program of study at IAU (if applicable)</label>
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
        </div>

        <div className="form-group">
          <h3 className="h5">4. Please give your Donation title</h3>
          <label htmlFor="donation_title">
            Donation title*
          </label>
          {/* <input
            className="form-control"
            id="donation_title"
            name="donation_title"
            rows="5"
            value={formData.donation_title.forEach(element => {
              element.event_title
            })}
            onChange={handleInputChange}
          /> */}
          <Select
            // mode="tags"
            style={{ width: '100%' }}
            placeholder="Tags Mode"
            // onChange={handleChange}
            options={donation_title.map((item) => ({ value: item.event_title, label: item.event_title }))}
            onChange={(value) => setFormData({ ...formData, donation_title: [{ event_title: value }] })}
            />
              </div>
        <div className="form-group">
          <h3 className="h5">5. Please give your comments</h3>
          <label htmlFor="comments">
            What inspired you to give today's gift to the Alumni Fund?
          </label>
          <textarea
            className="form-control"
            id="comments"
            name="comments"
            rows="5"
            value={formData.comments}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="agreedToTerms"
            name="agreedToTerms"
            checked={formData.agreedToTerms}
            onChange={handleInputChange}
            required
          />
          <label className="form-check-label" htmlFor="agreedToTerms">
            I have read and agree with the <a href="#">Public Offer</a>
          </label>
        </div>

        <button type="submit" className="btn btn-primary btn-lg">
          Make Gift
        </button>

        <div className="mt-3">
          <p>
            If you have questions, please contact the Development office, by phone at
            +996-312-915000 ext. 104 or email development@IAU.kg.
          </p>
        </div>
      </form>
    </div>
  );
};

export default DonationPage;
