import React from 'react';

const BookingForm = ({ show }) => {
  return (
    <form>
      <h2>Book Ticket</h2>
      <p><strong>Movie:</strong> {show.name}</p>
      <p><strong>Summary:</strong> <span dangerouslySetInnerHTML={{ __html: show.summary }} /></p>
      <p><strong>Rating:</strong> {show.rating?.average || 'N/A'}</p>
      
      {/* Additional form fields for user details */}
      <label>
        Your Name:
        <input type="text" name="name" />
      </label>
      <label>
        Your Email:
        <input type="email" name="email" />
      </label>
      {/* ... other form fields ... */}
      
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookingForm;
