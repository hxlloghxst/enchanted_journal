/**
 * APP COMPONENT
 * 
 * This is the MAIN component of our application.
 * It's like the "brain" that coordinates everything.
 * 
 * This component:
 * 1. Fetches events from Google Calendar when the page loads
 * 2. Stores the events in "state" (React's way of remembering data)
 * 3. Displays the Header, EventList, and Footer components
 */

// Import React hooks - these are special functions React gives us
// useState: Lets us store data that can change (like our events list)
// useEffect: Lets us do things when the component first loads (like fetching data)
import FallingParticles from './FallingParticles';
import { useEffect, useState } from 'react';

// Import our utility function to fetch events from Google Calendar
import { fetchGoogleCalendarEvents } from './utils/fetchGoogleEvents';

// Import our constants (API keys, calendar ID, etc.)
import { CALENDAR_ID, API_KEY } from './constants';

// Import CSS for styling
import './App.css';

// Import our custom components
import Header from './components/Header';
import EventList from './components/EventList';
import Footer from './components/Footer';

/**
 * THE APP FUNCTION
 * 
 * This is a React component. Think of it like a function that returns HTML.
 * When React sees this component, it will render (display) whatever we return.
 */
const App = () => {
  /**
   * STATE - React's way of storing data that can change
   * 
   * useState is a "hook" (a special React function).
   * It returns two things:
   * 1. events - the current value of our events (starts as an empty array [])
   * 2. setEvents - a function to update the events
   * 
   * When we call setEvents(newEvents), React will automatically re-render
   * the component with the new data. This is React's "magic"!
   */
  const [events, setEvents] = useState([]);

  /**
   * useEffect - React's way of doing things when the component loads
   * 
   * The empty array [] at the end means "only run this once when the component first loads"
   * (not every time the component re-renders)
   * 
   * This is where we fetch the events from Google Calendar.
   */
  useEffect(() => {
    /**
     * Fetch events from Google Calendar
     * 
     * fetchGoogleCalendarEvents is an "async" function, which means it takes time to complete.
     * We use .then() to wait for it to finish, then update our events state.
     * 
     * If something goes wrong, .catch() will handle the error.
     */
    fetchGoogleCalendarEvents(CALENDAR_ID, API_KEY)
      .then(setEvents) // When events are fetched, update the state
      .catch(err => {
        // If there's an error, log it to the console so we can see what went wrong
        console.error('Error fetching events:', err);
      });
  }, []); // Empty array = only run once when component first loads

  /**
   * RETURN - What the component displays
   * 
   * This is JSX (JavaScript XML) - it looks like HTML but it's actually JavaScript.
   * React converts this into real HTML that the browser can display.
   * 
   * We're using our custom components:
   * - <Header /> - Shows the logo and social links
   * - <EventList events={events} /> - Shows all the events (we pass the events as a "prop")
   * - <Footer /> - Shows the decorative bow
   */
  return (
    <div className="app">
      {/* Dynamic particle engine that spawns the star and heart shower */}
      <FallingParticles />

      {/* Header component - displays logo and social media links */}
      <Header />
      <tagline> A cozy, creative community</tagline>

      {/* EventList component - displays all events
          We pass the events array as a "prop" so EventList can display them */}
      <EventList events={events} />

      {/* Footer component - displays decorative bow image */}
      <Footer />
       <cta>
        enchanted.journal.club@gmail.com
      </cta>
    </div>
  );
};

// Export the component so other files can import and use it
// main.jsx imports this and renders it to the page
export default App;
