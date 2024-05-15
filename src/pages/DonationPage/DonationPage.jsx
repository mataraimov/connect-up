import React, { useState } from 'react';

const DonationPage = () => {
  const [giftAmount, setGiftAmount] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [country, setCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [classYear, setClassYear] = useState('');
  const [program, setProgram] = useState('');
  const [comments, setComments] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'giftAmount':
        setGiftAmount(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'confirmEmail':
        setConfirmEmail(value);
        break;
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'country':
        setCountry(value);
        break;
      case 'phoneNumber':
        setPhoneNumber(value);
        break;
      case 'classYear':
        setClassYear(value);
        break;
      case 'program':
        setProgram(value);
        break;
      case 'comments':
        setComments(value);
        break;
      case 'agreedToTerms':
        setAgreedToTerms(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Implement form submission logic here
    // e.g., send data to server for processing
    console.log('Form submitted!');

    // Clear form fields after submission
    setGiftAmount('');
    setEmail('');
    setConfirmEmail('');
    setFirstName('');
    setLastName('');
    setCountry('');
    setPhoneNumber('');
    setClassYear('');
    setProgram('');
    setComments('');
    setAgreedToTerms(false);
  };

  return (
    <div className="container py-5">
      <h1 className="display-4 mb-4">Make a Gift (Alumni)</h1>
      <p>
        Dear Alumni, we highly appreciate your support to your Alma mater! Any gift large or small
        makes a difference for the University. Raised funds are directed to endow scholarships of
        extraordinary students at the American University of Central Asia.
      </p>
      <p>
        Note: US taxpayers, your contribution is tax-deductible to the extent allowed by law. Please
        contact AUCA Foundation for more information.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <h3 className="h5">1. Enter Gift Amount</h3>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Kyrgyz Som (KGS)</span>
              </div>
              <input
                type="number"
                className="form-control"
                name="giftAmount"
                value={giftAmount}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="currency"
                  id="usdRadio"
                  disabled
                />
                <label className="form-check-label" htmlFor="usdRadio">
                  USD
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="currency"
                  id="euroRadio"
                  disabled
                />
                <label className="form-check-label" htmlFor="euroRadio">
                  EURO
                </label>
              </div>
            </div>
            <div className="alert alert-info" role="alert">
              <p>**PAYMENT SUMMARY**</p>
              <p>
                You will be charged <strong>{giftAmount} KGS</strong>. This is a one-time gift.
              </p>
              <div className="alert alert-warning" role="alert">
                **Important Note:** According to the requirements of the legislation of the Kyrgyz
                Republic, the amount of your contribution can only be withdrawn in the national
                currency - Kyrgyz Som (KGS).
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <h3 className="h5">2. Enter Your Contact Information</h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label for="emailInput">Email *</label>
                    <input
                      type="email"
                      className="form-control"
                      id="emailInput"
                      name="email"
                      value={email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label for="confirmEmailInput">Confirm Email *</label>
                    <input
                      type="email"
                      className="form-control"
                      id="confirmEmailInput"
                      name="confirmEmail"
                      value={confirmEmail}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label for="firstNameInput">First Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstNameInput"
                      name="firstName"
                      value={firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label for="lastNameInput">Last Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastNameInput"
                      name="lastName"
                      value={lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label for="countryInput">Country *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="countryInput"
                      name="country"
                      value={country}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label for="phoneNumberInput">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phoneNumberInput"
                      name="phoneNumber"
                      value={phoneNumber}
                      onChange={handleInputChange}
                      placeholder="+996-..."
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label for="classYearInput">
                      Class Year of graduation from AUCA (if applicable)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="classYearInput"
                      name="classYear"
                      value={classYear}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label for="programInput">Program of study at AUCA (if applicable)</label>
                    <input
                      type="text"
                      className="form-control"
                      id="programInput"
                      name="program"
                      value={program}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mb-3">
            <h3 className="h5">3. Please give your comments</h3>
            <div className="form-group">
              <label for="commentsInput">
                What inspired you to give today's gift to the Alumni Fund?
              </label>
              <textarea
                className="form-control"
                id="commentsInput"
                name="comments"
                rows="5"
                value={comments}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="termsCheckbox"
            name="agreedToTerms"
            value={agreedToTerms}
            onChange={handleInputChange}
            required
          />
          <label className="form-check-label" htmlFor="termsCheckbox">
            I have read and agree with the <a href="#">Public Offer</a>
          </label>
        </div>

        <button type="submit" className="btn btn-primary btn-lg">
          Make Gift
        </button>

        <div className="mt-3">
          <p>
            If you have questions, please contact the Development office, by phone at
            +996-312-915000 ext. 104 or email development@auca.kg.
          </p>
        </div>
      </form>
    </div>
  );
};
export default DonationPage;
