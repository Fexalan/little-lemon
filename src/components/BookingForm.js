import React, { useState } from 'react';

function BookingForm({ availableTimes, dispatch, onSubmit }) {
  const today = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    date: today,
    time: availableTimes && availableTimes.length > 0 ? availableTimes[0] : '',
    guests: 1,
    occasion: 'Birthday',
    name: '',
    email: '',
  });

  const [errors, setErrors] = useState({});

  const validate = (data) => {
    const newErrors = {};
    if (!data.date) newErrors.date = 'Please select a date.';
    if (!data.time) newErrors.time = 'Please select a time.';
    if (!data.guests || data.guests < 1 || data.guests > 10)
      newErrors.guests = 'Number of guests must be between 1 and 10.';
    if (!data.name || data.name.trim().length < 2)
      newErrors.name = 'Please enter your full name (at least 2 characters).';
    if (!data.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email))
      newErrors.email = 'Please enter a valid email address.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    const updatedData = { ...formData, [id]: value };
    setFormData(updatedData);

    // Update available times when date changes
    if (id === 'date' && dispatch) {
      dispatch({ type: 'UPDATE_TIMES', payload: value });
    }

    // Live validation
    if (errors[id]) {
      const newErrors = { ...errors };
      delete newErrors[id];
      setErrors(newErrors);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Submit to API
    if (window.submitAPI) {
      const success = window.submitAPI(formData);
      if (success && onSubmit) {
        onSubmit(formData);
      }
    } else if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <section aria-label="Table Reservation Form">
      <h2>Reserve a Table</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'grid', maxWidth: '400px', gap: '20px' }}
        noValidate
      >
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            aria-required="true"
            aria-describedby={errors.name ? 'name-error' : undefined}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <span id="name-error" className="error" role="alert" aria-live="polite">
              {errors.name}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            aria-required="true"
            aria-describedby={errors.email ? 'email-error' : undefined}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <span id="email-error" className="error" role="alert" aria-live="polite">
              {errors.email}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="date">Choose date</label>
          <input
            type="date"
            id="date"
            value={formData.date}
            min={today}
            onChange={handleChange}
            aria-required="true"
            aria-describedby={errors.date ? 'date-error' : undefined}
            aria-invalid={!!errors.date}
          />
          {errors.date && (
            <span id="date-error" className="error" role="alert" aria-live="polite">
              {errors.date}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="time">Choose time</label>
          <select
            id="time"
            value={formData.time}
            onChange={handleChange}
            aria-required="true"
            aria-describedby={errors.time ? 'time-error' : undefined}
            aria-invalid={!!errors.time}
          >
            {availableTimes && availableTimes.length > 0 ? (
              availableTimes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))
            ) : (
              <option value="">No times available</option>
            )}
          </select>
          {errors.time && (
            <span id="time-error" className="error" role="alert" aria-live="polite">
              {errors.time}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            id="guests"
            value={formData.guests}
            min="1"
            max="10"
            onChange={handleChange}
            aria-required="true"
            aria-describedby={errors.guests ? 'guests-error' : 'guests-hint'}
            aria-invalid={!!errors.guests}
          />
          <span id="guests-hint" className="hint">Between 1 and 10 guests</span>
          {errors.guests && (
            <span id="guests-error" className="error" role="alert" aria-live="polite">
              {errors.guests}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={formData.occasion}
            onChange={handleChange}
          >
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="None">None</option>
          </select>
        </div>

        <button
          type="submit"
          className="btn-primary"
          aria-label="Submit table reservation"
        >
          Make Your Reservation
        </button>
      </form>
    </section>
  );
}

export default BookingForm;
