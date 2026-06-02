import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function ConfirmedBooking() {
  const location = useLocation();
  const booking = location.state?.booking;

  return (
    <main aria-label="Booking Confirmation">
      <div className="confirmation-page">
        <div className="confirmation-card" role="region" aria-label="Reservation confirmed">
          <div className="confirmation-icon" aria-hidden="true">&#10003;</div>
          <h1>Reservation Confirmed!</h1>
          <p>Thank you for choosing Little Lemon. Your table has been reserved.</p>
          {booking && (
            <div className="booking-details" aria-label="Your booking details">
              <h2>Booking Details</h2>
              <dl>
                <dt>Name</dt>
                <dd>{booking.name}</dd>
                <dt>Email</dt>
                <dd>{booking.email}</dd>
                <dt>Date</dt>
                <dd>{booking.date}</dd>
                <dt>Time</dt>
                <dd>{booking.time}</dd>
                <dt>Number of Guests</dt>
                <dd>{booking.guests}</dd>
                <dt>Occasion</dt>
                <dd>{booking.occasion}</dd>
              </dl>
            </div>
          )}
          <Link to="/" className="btn-primary" aria-label="Return to homepage">
            Return to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

export default ConfirmedBooking;
