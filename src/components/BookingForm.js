import React from 'react';
import "../styles/BookingForm.css";
const BookingForm = ({ show }) => {
  return (
    <div className="booking-form-container">
      <form className="booking-form">
        <h2>Book Ticket</h2>
        <p><strong>Movie:</strong> {show.name}</p>
        <p><strong>Summary:</strong> <span dangerouslySetInnerHTML={{ __html: show.summary }} /></p>
        <p><strong>Rating:</strong> {show.rating?.average || 'N/A'}</p>
        
        <label>
          Your Name:
          <input type="text" name="name" />
        </label>
        <label>
          Your Email:
          <input type="email" name="email" />
        </label>
        <label>
          Number of Tickets:
          <input type="number" name="tickets" min="1" />
        </label>
        
        <button type="submit" className="book-ticket-btn">Submit</button>
      </form>
    </div>
  );
};

export default BookingForm;
