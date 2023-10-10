import { useState, useEffect } from 'react';
import * as bookingsAPI from '../../utilities/bookings-api';
import './ContactPage.css'

export default function ContactPage() {
    const [booking, setBooking] = useState({
        name: '',
        phone: '',
        date: '',
        description: ''
    });
    const [submit, setSubmit] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null)

    const isValidForm = () => {
        if(!booking.name || !booking.phone || !booking.date || !booking.description){
            return false;
        }
        return true;
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isValidForm()){
            setErrorMsg('Please fill out all fields')
            return
        }
        console.log('data', booking);
        const result = await bookingsAPI.createBooking(booking);
        setBooking({
            name: '',
            phone: '',
            date: '',
            description: '',
        });
        setSubmit(true);
    };

    return (
        <div className="container mt-5">
            <h1>Bookings</h1>
            {!submit && <p  className='success-msg'>Please enter your name, desired date of appointment, phone number and a short description of what you'd like.</p>}
            {submit && <p  className='success-msg'>Your booking was receieved. You will recieve a confirmation text shortly and Vinny will reach out to you as soon as possible to discuss the details!</p>}
            {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input 
                        type="text" 
                        value={booking.name}
                        onChange={(e) => {
                            setBooking({ ...booking, name: e.target.value });
                            setErrorMsg(null);
                        }}
                        className="form-control"
                        disabled={submit}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone:</label>
                    <input 
                        type="number" 
                        value={booking.phone}
                        onChange={(e) => {
                            setBooking({ ...booking, phone: e.target.value });
                            setErrorMsg(null);
                        }}                        
                        className="form-control"
                        disabled={submit}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Date:</label>
                    <input 
                        type="datetime-local"
                        value={booking.date}
                        onChange={(e) => {
                            setBooking({ ...booking, date: e.target.value });
                            setErrorMsg(null);
                        }}                       
                         className="form-control"
                         disabled={submit}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description:</label>
                    <textarea 
                        value={booking.description}
                        onChange={(e) => {
                            setBooking({ ...booking, description: e.target.value });
                            setErrorMsg(null);
                        }}                       
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
