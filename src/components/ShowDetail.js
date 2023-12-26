import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BookingForm from './BookingForm';
import Modal from './Modal'; // Import the Modal component
import '../styles/Modal.css'; // Import the CSS for the modal


const ShowDetail = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false); 
  useEffect(() => {
    const fetchShowDetails = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setShow(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchShowDetails();
  }, [id]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!show) return <div>No show found</div>;

// State to control modal visibility

  const handleBookTicket = () => {
    setShowModal(true); // Show the modal
  };

  const handleCloseModal = () => {
    setShowModal(false); // Hide the modal
  };
  return (
    <div>
      <h1>{show.name}</h1>
      <p><strong>Summary:</strong> <span dangerouslySetInnerHTML={{ __html: show.summary }} /></p>
      <p><strong>Language:</strong> {show.language}</p>
      <p><strong>Genres:</strong> {show.genres.join(', ')}</p>
      <p><strong>Status:</strong> {show.status}</p>
      <p><strong>Rating:</strong> {show.rating?.average || 'N/A'}</p>
      <button onClick={handleBookTicket}>Book Ticket</button>
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <BookingForm show={show} />
        </Modal>
      )}
    </div>
  );
};

export default ShowDetail;
