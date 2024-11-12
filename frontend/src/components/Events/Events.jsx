import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../AuthContext'; // Import the useAuth hook
import './Events.css';

const Events = () => {
  const { userId } = useAuth(); // Access userId from context
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch all events when the component mounts
    axios.get('http://localhost:8800/events')
      .then((response) => {
        const updatedEvents = response.data.map(event => ({
          ...event,
          registered: event.registeredUsers.includes(userId)
        }));
        setEvents(updatedEvents);
      })
      .catch((error) => console.error("Error fetching events:", error));
  }, [userId]);

  const registerForEvent = (eventId, registered) => {
    if (registered) {
      alert("You are already registered for this event.");
      return;
    }

    // Make sure you're passing the correct userId during registration
    axios.post('http://localhost:8800/events/register', { userId, eventId })
      .then(() => {
        setEvents(prevEvents =>
          prevEvents.map(event =>
            event._id === eventId
              ? { ...event, registered: true }
              : event
          )
        );
        alert("Registered successfully");
      })
      .catch((error) => console.error("Error registering for event:", error));
  };

  return (
    <div className="events-container">
      <h2 className="events-header">Upcoming Events</h2>
      <ul className="events-list">
        {events.map(event => (
          <li key={event._id} className="event-item">
            <h3 className="event-name">{event.name}</h3>
            <p className="event-description">{event.description}</p>
            <p className="event-date">Date: {new Date(event.date).toLocaleDateString()}</p>
            <p className="event-location">Location: {event.location}</p>
            <button
              onClick={() => registerForEvent(event._id, event.registered)}
              disabled={event.registered}
              className="register-button"
            >
              {event.registered ? 'Already Registered' : 'Register'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
