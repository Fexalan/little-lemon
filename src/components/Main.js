import React, { useReducer } from 'react';
import BookingForm from './BookingForm';

// Reducer function to update available times based on selected date
const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // Call fetchAPI with the selected date to get available times
      if (window.fetchAPI) {
        return window.fetchAPI(new Date(action.payload));
      }
      return state;
    default:
      return state;
  }
};

// Initialize times using fetchAPI for today's date
const initializeTimes = () => {
  if (window.fetchAPI) {
    return window.fetchAPI(new Date());
  }
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <main>
      <section className="hero" aria-label="Little Lemon Restaurant">
        <div className="hero-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <a href="/booking" className="btn-primary" aria-label="Reserve a table at Little Lemon">
            Reserve a Table
          </a>
        </div>
      </section>

      <section className="specials" aria-labelledby="specials-heading">
        <div className="specials-header">
          <h2 id="specials-heading">This week&apos;s specials!</h2>
          <a href="/menu" className="btn-primary" aria-label="View online menu">
            Online Menu
          </a>
        </div>
        <div className="specials-grid">
          <article className="special-card">
            <div className="special-image" role="img" aria-label="Greek Salad dish"></div>
            <div className="special-info">
              <div className="special-title">
                <h3>Greek Salad</h3>
                <span aria-label="Price: $12.99">$12.99</span>
              </div>
              <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
              <a href="/menu" aria-label="Order Greek Salad delivery">Order a delivery</a>
            </div>
          </article>
          <article className="special-card">
            <div className="special-image bruschetta" role="img" aria-label="Bruschetta dish"></div>
            <div className="special-info">
              <div className="special-title">
                <h3>Bruschetta</h3>
                <span aria-label="Price: $5.99">$5.99</span>
              </div>
              <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
              <a href="/menu" aria-label="Order Bruschetta delivery">Order a delivery</a>
            </div>
          </article>
          <article className="special-card">
            <div className="special-image lemon-dessert" role="img" aria-label="Lemon Dessert dish"></div>
            <div className="special-info">
              <div className="special-title">
                <h3>Lemon Dessert</h3>
                <span aria-label="Price: $5.00">$5.00</span>
              </div>
              <p>This comes straight from grandma&apos;s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
              <a href="/menu" aria-label="Order Lemon Dessert delivery">Order a delivery</a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Main;
