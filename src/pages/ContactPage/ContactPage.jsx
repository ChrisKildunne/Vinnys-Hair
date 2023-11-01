import { useState } from 'react';
import * as bookingsAPI from '../../utilities/bookings-api';
import './ContactPage.css';

export default function ContactPage() {
  const [booking, setBooking] = useState({
    name: '',
    email: '',
    description: ''
  });

  const [submit, setSubmit] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const isValidForm = () => {
    if (!booking.name || !booking.email || !booking.description) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidForm()) {
      setErrorMsg('Please fill out all fields');
      return;
    }
    const result = await bookingsAPI.createBooking(booking);
    setBooking({
      name: '',
      email: '',
      description: ''
    });
    setSubmit(true);
  };

  return (
    <div className="container mt-5">
      {!submit && <p className='success-msg custom'>Please enter your name, email and inquiry.</p>}
      {submit && <p className='success-msg custom'>Your booking was received. Vinny will reach out to you as soon as possible to discuss the details!</p>}
      {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label custom">Name:</label>
          <input
            type="text"
            value={booking.name}
            onChange={(e) => setBooking({ ...booking, name: e.target.value })}
            className="form-control"
            disabled={submit}
          />
        </div>
        <div className="mb-3">
          <label className="form-label custom">Email:</label>
          <input
            type="email"
            value={booking.email}
            onChange={(e) => setBooking({ ...booking, email: e.target.value })}
            className="form-control"
            disabled={submit}
          />
        </div>
        <div className="mb-3">
          <label className="form-label custom">Inquiry:</label>
          <textarea
            rows="8"
            value={booking.description}
            onChange={(e) => setBooking({ ...booking, description: e.target.value })}
            className="form-control"
            disabled={submit}
          />
        </div>
        <div className='container mt-5'>
          <button type="submit" className="btn custom-btn">Submit Booking</button>
        </div>
      </form>
    </div>
  );
}


