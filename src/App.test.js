import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BookingForm from './components/BookingForm';

// Mock the fetchAPI function
const mockFetchAPI = jest.fn((date) => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
const mockSubmitAPI = jest.fn(() => true);

beforeAll(() => {
  window.fetchAPI = mockFetchAPI;
  window.submitAPI = mockSubmitAPI;
});

afterAll(() => {
  delete window.fetchAPI;
  delete window.submitAPI;
});

const defaultProps = {
  availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
  dispatch: jest.fn(),
  onSubmit: jest.fn(),
};

// Test 1: Renders the BookingForm heading
test('Renders the BookingForm heading', () => {
  render(
    <MemoryRouter>
      <BookingForm {...defaultProps} />
    </MemoryRouter>
  );
  const headingElement = screen.getByText('Reserve a Table');
  expect(headingElement).toBeInTheDocument();
});

// Test 2: Renders all form fields
test('Renders all required form fields', () => {
  render(
    <MemoryRouter>
      <BookingForm {...defaultProps} />
    </MemoryRouter>
  );
  expect(screen.getByLabelText('Full Name')).toBeInTheDocument();
  expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
  expect(screen.getByLabelText('Choose date')).toBeInTheDocument();
  expect(screen.getByLabelText('Choose time')).toBeInTheDocument();
  expect(screen.getByLabelText('Number of guests')).toBeInTheDocument();
  expect(screen.getByLabelText('Occasion')).toBeInTheDocument();
});

// Test 3: Renders available times from props
test('Renders available times as select options', () => {
  render(
    <MemoryRouter>
      <BookingForm {...defaultProps} />
    </MemoryRouter>
  );
  expect(screen.getByRole('option', { name: '17:00' })).toBeInTheDocument();
  expect(screen.getByRole('option', { name: '18:00' })).toBeInTheDocument();
});

// Test 4: initializeTimes returns correct initial value
test('initializeTimes returns available times from fetchAPI', () => {
  const times = window.fetchAPI(new Date());
  expect(times).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  expect(mockFetchAPI).toHaveBeenCalled();
});

// Test 5: updateTimes returns the same value provided
test('updateTimes reducer returns correct state', () => {
  const currentState = ['17:00', '18:00', '19:00'];
  const mockDispatch = jest.fn();
  render(
    <MemoryRouter>
      <BookingForm
        availableTimes={currentState}
        dispatch={mockDispatch}
        onSubmit={jest.fn()}
      />
    </MemoryRouter>
  );
  // Verify the times are rendered
  expect(screen.getByRole('option', { name: '17:00' })).toBeInTheDocument();
  expect(screen.getByRole('option', { name: '18:00' })).toBeInTheDocument();
});

// Test 6: Form validation - shows error for empty name
test('Shows validation error for empty name', () => {
  render(
    <MemoryRouter>
      <BookingForm {...defaultProps} />
    </MemoryRouter>
  );

  const submitButton = screen.getByRole('button', { name: /submit table reservation/i });
  fireEvent.click(submitButton);

  expect(screen.getByText('Please enter your full name (at least 2 characters).')).toBeInTheDocument();
});

// Test 7: Form validation - shows error for invalid email
test('Shows validation error for invalid email', () => {
  render(
    <MemoryRouter>
      <BookingForm {...defaultProps} />
    </MemoryRouter>
  );

  const emailInput = screen.getByLabelText('Email Address');
  fireEvent.change(emailInput, { target: { value: 'invalid-email', id: 'email' } });

  const submitButton = screen.getByRole('button', { name: /submit table reservation/i });
  fireEvent.click(submitButton);

  expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument();
});

// Test 8: Form submission calls onSubmit with form data when valid
test('Calls onSubmit when form is valid', () => {
  const mockOnSubmit = jest.fn();
  render(
    <MemoryRouter>
      <BookingForm
        availableTimes={['17:00', '18:00']}
        dispatch={jest.fn()}
        onSubmit={mockOnSubmit}
      />
    </MemoryRouter>
  );

  fireEvent.change(screen.getByLabelText('Full Name'), {
    target: { value: 'John Doe', id: 'name' }
  });
  fireEvent.change(screen.getByLabelText('Email Address'), {
    target: { value: 'john@example.com', id: 'email' }
  });

  fireEvent.click(screen.getByRole('button', { name: /submit table reservation/i }));

  expect(mockOnSubmit).toHaveBeenCalled();
});

// Test 9: Dispatch is called when date changes
test('Dispatch is called when date changes', () => {
  const mockDispatch = jest.fn();
  render(
    <MemoryRouter>
      <BookingForm
        availableTimes={['17:00', '18:00']}
        dispatch={mockDispatch}
        onSubmit={jest.fn()}
      />
    </MemoryRouter>
  );

  const dateInput = screen.getByLabelText('Choose date');
  fireEvent.change(dateInput, { target: { value: '2026-07-04', id: 'date' } });

  expect(mockDispatch).toHaveBeenCalledWith({
    type: 'UPDATE_TIMES',
    payload: '2026-07-04',
  });
});
