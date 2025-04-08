import React, { useState } from 'react';

function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setEmailError('Please enter a valid email address');
      setFormSubmitted(false);
      return;
    }

    setEmailError('');
    setFormSubmitted(true);

    // Clear all fields after submit
    setFirstName('');
    setLastName('');
    setEmail('');
    setGender('');
    setMessage('');
  };

  return (
    <div className="main">
      <form className="box" onSubmit={handleSubmit}>
        <p>Connect with me!</p>

        <div className="all">
          <div className="input1">
            <label>First Name*</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="input2">
            <label>Last Name*</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div className="input3">
          <label>Email Address*</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
        </div>

        <div className="all">
          <div className="input4">
            <label htmlFor="gender">Select Gender:</label>
            <select
              id="gender"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">--Choose--</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Prefer not to say</option>
            </select>
          </div>
        </div>

        <div className="input6">
          <label>Message*</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <div className="check">
          <input type="checkbox" />
          <label>Here! you'll be called by them</label>
        </div>

        <div className="button">
          <button type="submit">Submit</button>
        </div>

        {formSubmitted && (
          <p style={{ color: 'green', marginTop: '10px' }}>
            ✅ Your information has been sent!
          </p>
        )}
      </form>
    </div>
  );
}

export default Contact;
