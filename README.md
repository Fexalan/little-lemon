# Little Lemon Restaurant - Table Booking Web App

A React-based web application for the Little Lemon restaurant that allows customers to reserve a table online. This is the capstone project for the Meta Front-End Developer Professional Certificate.

## Features

- **Home Page**: Hero section with restaurant information and weekly specials
- **Table Booking Form**: Complete reservation form with:
  - Full name and email fields
  - Date picker with available time slots (fetched dynamically via API)
  - Number of guests (1-10)
  - Occasion selection (Birthday, Anniversary, None)
  - Submit reservation button
- **Form Validation**: Client-side validation with meaningful error messages for all fields
- **API Integration**: Connected to Little Lemon's booking API for real-time availability
- **Booking Confirmation**: Dedicated confirmation page after successful reservation
- **Accessibility**: ARIA labels, roles, live regions for screen reader support
- **Responsive Design**: Mobile-first design that works on all screen sizes
- **Unit Tests**: Comprehensive test suite using React Testing Library

## Tech Stack

- **React 18** - UI library
- **React Router v6** - Client-side routing
- **React Testing Library** - Unit testing
- **Jest** - Test runner
- **CSS3** - Styling with CSS custom properties (variables)

## Project Structure

```
little-lemon/
├── public/
│   └── index.html          # HTML template with API script tag
├── src/
│   ├── components/
│   │   ├── Nav.js           # Navigation bar
│   │   ├── Header.js        # Hero section
│   │   ├── Main.js          # Homepage main content with specials
│   │   ├── BookingPage.js   # Booking page with state management
│   │   ├── BookingForm.js   # Table reservation form (controlled component)
│   │   ├── ConfirmedBooking.js  # Booking confirmation page
│   │   └── Footer.js        # Footer with navigation and contact info
│   ├── App.js               # Root component with routing
│   ├── App.css              # Main styles (Little Lemon design system)
│   ├── App.test.js          # Unit tests for components
│   ├── index.js             # React entry point
│   ├── index.css            # Global styles
│   └── reportWebVitals.js   # Performance monitoring
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Fexalan/little-lemon.git
cd little-lemon
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Running Tests

```bash
npm test
```

This runs the test suite in interactive watch mode.

### Building for Production

```bash
npm run build
```

## API Integration

The app integrates with the Little Lemon booking API (loaded via script tag in `public/index.html`):

- **`fetchAPI(date)`** - Returns an array of available reservation times for the given date
- **`submitAPI(formData)`** - Submits booking data and returns `true` on success

The `BookingPage` component uses `useReducer` to manage available times, dispatching updates whenever the user selects a new date.

## Accessibility

This application follows WCAG 2.1 guidelines:

- All interactive elements have descriptive `aria-label` attributes
- Form inputs use `aria-required`, `aria-invalid`, and `aria-describedby`
- Error messages use `role="alert"` and `aria-live="polite"`
- Navigation uses `aria-label` for landmark identification
- Color contrast meets AA standards
- Keyboard navigation is fully supported with visible focus indicators

## Design

The app follows the Little Lemon brand guidelines:
- **Primary Green**: #495E57
- **Primary Yellow**: #F4CE14
- **Secondary Salmon**: #EE9972
- Font: Karla (body), Markazi Text (headings)

## Testing

Unit tests cover:
- Component rendering (BookingForm heading, form fields)
- Available times display from props
- `initializeTimes` function behavior
- `updateTimes` reducer function
- Form validation (required fields, email format)
- Form submission with valid/invalid data
- API dispatch on date change

## License

This project was created as part of the Meta Front-End Developer Professional Certificate on Coursera.
