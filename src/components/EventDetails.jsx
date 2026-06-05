/**
 * EVENT DETAILS COMPONENT
 * 
 * This component displays all the information about a single event:
 * - The day of the week (e.g., "Monday")
 * - The time range (e.g., "6:00pm – 8:00pm")
 * - The description (if it exists)
 * - A location button (if the event has a location)
 * - An "Add to Calendar" button
 * 
 * PROPS:
 * - event: An object containing all the event information
 *   - event.start: The start date/time (dayjs object)
 *   - event.end: The end date/time (dayjs object)
 *   - event.description: Optional description text
 *   - event.location: Optional location string
 *   - event.htmlLink: Link to add the event to Google Calendar
 */

import Button from './Button';

const EventDetails = ({ event }) => {
  /**
   * This component shows all the details about an event.
   * 
   * We use conditional rendering (the && operator) to only show
   * things if they exist. For example:
   * - {event.description && <p>...</p>} only shows the description if it exists
   * - {event.location && <Button>...</Button>} only shows the location button if there's a location
   */

  // Create a Google Maps link from the location
  // encodeURIComponent makes sure special characters in the address are handled correctly
  const mapsUrl = event.location 
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location)}`
    : '';

  // Get just the first part of the location (before the comma) for the button text
  // For example: "Austin, TX" becomes "Austin"
  const locationName = event.location ? event.location.split(',')[0] : '';

  return (
    <div className="event-details">
      {/* Day of the week (e.g., "Monday", "Tuesday") */}
      <h2 className="event-name">
        {event.start.format('dddd')}
      </h2>

      {/* Time range (e.g., "6:00pm – 8:00pm") */}
      <p className="event-time">
        {event.start.format('h:mma')} – {event.end.format('h:mma')}
      </p>

      {/* Description - only show if it exists */}
      {event.description && (
        <p className="event-desc">
          <div dangerouslySetInnerHTML={{ __html: event.description }} />
        </p>
      )}

      {/* Location button - only show if the event has a location */}
      {event.location && (
        <Button
          text={locationName}
          href={mapsUrl}
          className="location-button"
        />
      )}

      {/* "Add to Calendar" button - always show this */}
      <Button
        text="Add to Calendar"
        href={event.htmlLink}
        className="calendar-button"
      />
    </div>
  );
};

// Export the component so other files can import and use it
export default EventDetails;
