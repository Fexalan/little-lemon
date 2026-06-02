import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      if (window.fetchAPI) {
        return window.fetchAPI(new Date(action.payload));
      }
      return state;
    default:
      return state;
  }
};

const initializeTimes = () => {
  if (window.fetchAPI) {
    return window.fetchAPI(new Date());
  }
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    // Submit to API
    if (window.submitAPI) {
      window.submitAPI(formData);
    }
    navigate('/confirmed', { state: { booking: formData } });
  };

  return (
    <main aria-label="Booking Page">
      <div className="booking-page">
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          onSubmit={handleSubmit}
        />
      </div>
    </main>
  );
}

export default BookingPage;
