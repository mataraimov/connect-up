import { message } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Events.scss';
// const events = [
//   {
//     id: 1,
//     title: 'Unrestricted Fund',
//     description:
//       'The AUCA Annual Unrestricted Fund contributes to the daily running of the university.',
//     link: '/event-detail/1',
//     image: 'https://loremflickr.com/640/480/education',
//   },
//   {
//     id: 2,
//     title: 'Scholarships',
//     description:
//       'Sponsoring a scholarship can help one or many AUCA students ease their financial burden.',
//     link: '/event-detail/2',
//     image: 'https://loremflickr.com/640/480/university',
//   },
//   {
//     id: 3,
//     title: 'New Generation Academy (NGA)',
//     description:
//       'The NGA has been a crucial stepping stone for the success of 583 university students from the regions over the past 5 years.',
//     link: '/event-detail/3',
//     image: 'https://loremflickr.com/640/480/learning',
//   },
//   {
//     id: 4,
//     title: 'Fatima Khailil Scholarship Fundraising Drive',
//     description:
//       'The American University of Central Asia is pleased to announce the start of the fundraising drive for a new scholarship fund in memory of Fatima Khalil to commemorate her rich but all too brief life.',
//     link: '/event-detail/4',
//     image: 'https://loremflickr.com/640/480/scholarship',
//   },
//   {
//     id: 5,
//     title: 'Student Initiative Development Program (SIDP)',
//     description:
//       'Out of 15 projects, 10 projects were implemented in the education sector, 2 projects focused on promoting art, and 3 projects focused on teaching business skills.',
//     link: '/event-detail/5',
//     image: 'https://loremflickr.com/640/480/education',
//   },
//   {
//     id: 6,
//     title: 'Library and Technology Development',
//     description:
//       'The AUCA Library supports faculty and researchers by providing access to a variety of information sources and formats.',
//     link: '/event-detail/6',
//     image: 'https://loremflickr.com/640/480/books',
//   },
//   {
//     id: 7,
//     title: 'Student Travel Grants',
//     description:
//       'Student Travel Grants support either AUCA students or faculty to pursue their academic interests outside of the Kyrgyz Republic.',
//     link: '/event-detail/7',
//     image: 'https://loremflickr.com/640/480/students',
//   },
//   {
//     id: 8,
//     title: 'Staff Development',
//     description:
//       'AUCA is ever striving to be more efficient with its staff, while still maintaining the same level of service that students, faculty, and friends have come to expect.',
//     link: '/event-detail/8',
//     image: 'https://loremflickr.com/640/480/education',
//   },
//   {
//     id: 9,
//     title: 'Faculty Development',
//     description:
//       "AUCA's faculty is young and talented, and on their hard work AUCA will build a world-class research hub in Central Asia.",
//     link: '/event-detail/9',
//     image: 'https://loremflickr.com/640/480/education',
//   },
// ];

const EventCard = ({ event }) => {
  return (
    <div className="col-sm-6 col-md-4">
      <div className="thumbnail animated-card">
        <img src={event.ImageLink} alt={event.Title} className="img-responsive" />
        <div className="caption">
          <h3 className={'truncated-text-1'}>{event.Title}</h3>
          <p className={'truncated-text'}>{event.Description}</p>
          <p>
            <Link to={`/event-detail/${event.id}`} className="btn btn-primary" role="button">
              Read more
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  const [events, setevents] = useState([]);
  const API_URL = 'https://633acce9e02b9b64c617beec.mockapi.io/events';

  const fetchEvents = async () => {
    try {
      const response = await axios.get(API_URL);
      setevents(response.data);
    } catch (error) {
      console.log(error);
      message.error('Failed to fetch events');
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center animated-header">Donate to an Event</h1>
      <div className="row">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;