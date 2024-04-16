import React, { useState, useEffect } from 'react';
import Header from '../../components/Layout/header/Header';
import axios from 'axios';
import { API_URL } from '../../components/utils/config';
import { refreshAccessToken } from '../../components/utils/refreshAccessToken';
import './event.scss';

const EventsPage = () => {
  const [event, setEvent] = useState({
    event_name: '',
    event_description: '',
    event_date: '',
    event_place: '',
  });
  const [eventId, setEventId] = useState(null);
  const [loadedEvent, setLoadedEvent] = useState(null);

  useEffect(() => {
    // Функция для загрузки первого события и установки его в состояние event
    const fetchFirstEvent = async () => {
      try {
        await refreshAccessToken();
        const response = await axios.get(`${API_URL}/events/detail/1/`); // Запрос на первое событие
        const firstEvent = response.data;
        setEvent({
          event_name: firstEvent.event_name,
          event_description: firstEvent.event_description,
          event_date: firstEvent.event_date,
          event_place: firstEvent.event_place,
        });
        setEventId(firstEvent.id);
        setLoadedEvent(firstEvent);
      } catch (error) {
        console.error('Error fetching first event:', error);
      }
    };

    fetchFirstEvent(); // Вызов функции при монтировании компонента
  }, []); // Пустой массив зависимостей, чтобы useEffect вызывался только один раз при монтировании

  const handleCreateEvent = async () => {
    // Функция для создания события
    try {
      await refreshAccessToken();
      const response = await axios.post(
        `${API_URL}/events/create/`,
        {
          ...event,
          event_status: true,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        },
      );
      console.log('Event created:', response.data);
      setEventId(response.data.id);
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  const handleGetEventDetail = async () => {
    // Функция для получения деталей события
    try {
      await refreshAccessToken();
      const response = await axios.get(`${API_URL}/events/detail/${eventId}/`);
      console.log('Event detail:', response.data);
      setLoadedEvent(response.data);
    } catch (error) {
      console.error('Error getting event detail:', error);
    }
  };

  const handleUpdateEvent = async () => {
    // Функция для обновления события
    try {
      await refreshAccessToken();
      const response = await axios.patch(
        `${API_URL}/events/detail/${eventId}/`,
        {
          ...event,
          event_owner: loadedEvent.event_owner,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        },
      );
      console.log('Event updated:', response.data);
      // Обновляем данные загруженного события
      handleGetEventDetail();
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  const handleInputChange = (e) => {
    // Обработчик изменения значения в инпуте
    const { name, value } = e.target;
    setEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  return (
    <>
      <Header />
      <main>
        <div className="events-container">
          <div className="events-form">
            <h2>Create Event</h2>
            <input
              type="text"
              name="event_name"
              placeholder="Event Name"
              value={event.event_name}
              onChange={handleInputChange}
            />
            <textarea
              name="event_description"
              placeholder="Event Description"
              value={event.event_description}
              onChange={handleInputChange}
            />
            <input
              type="date"
              name="event_date"
              placeholder="Event Date"
              value={event.event_date}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="event_place"
              placeholder="Event Place"
              value={event.event_place}
              onChange={handleInputChange}
            />
            <button onClick={handleCreateEvent}>Create Event</button>
          </div>
          <div className="events-detail">
            <h2>Event Detail</h2>
            {loadedEvent && (
              <>
                <h2>Event Name: {loadedEvent.event_name}</h2>
                <h2>Event Description: {loadedEvent.event_description}</h2>
                <h2>Event Date: {loadedEvent.event_date}</h2>
                <h2>Event Place: {loadedEvent.event_place}</h2>
              </>
            )}
            {eventId && (
              <>
                <button onClick={handleGetEventDetail}>Load Event Detail</button>
                <h3>Update Event</h3>
                <button onClick={handleUpdateEvent}>Update Event</button>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default EventsPage;
