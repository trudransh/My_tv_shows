import React, { useState } from 'react';
import "../styles/BookingForm.css";

const BookingForm = ({ show, onClose }) => {
  const [name, setName] = useState(sessionStorage.getItem('user_name') || '');
  const [email, setEmail] = useState(sessionStorage.getItem('user_email') || '');
  const [tickets, setTickets] = useState(1);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    sessionStorage.setItem('user_name', name);
    sessionStorage.setItem('user_email', email);
    sessionStorage.setItem('user_tickets', tickets);
    setSubmissionStatus('success');
  };

  

  return (
    <div className="booking-form-container">
      {submissionStatus === 'success' ? (
        <div className="confirmation-container">
          <button onClick={onClose} className="close-button">&times;</button>
          <p>Thank you! Your booking for {show.name} has been submitted successfully.</p>
        </div>
      ) : (
        <form className="booking-form" onSubmit={handleSubmit}>
          <h2>Book Ticket</h2>
          <p><strong>Movie:</strong> {show.name}</p>
          <p><strong>Summary:</strong> <span dangerouslySetInnerHTML={{ __html: show.summary }} /></p>
          <p><strong>Rating:</strong> {show.rating?.average || 'N/A'}</p>

          <label>
            Your Name:
            <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
          </label>
          <label>
            Your Email:
            <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
          </label>
          <label>
            Number of Tickets:
            <input type="number" name="tickets" value={tickets} onChange={e => setTickets(e.target.value)} min="1" />
          </label>

          <button type="submit" className="book-ticket-btn">Submit</button>
        </form>
      )}
    </div>
  );
};

export default BookingForm;
