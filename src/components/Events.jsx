
import { useMemo, useState } from 'react';
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  Search,
  Users,
  X,
} from 'lucide-react';
import styles from './Events.module.css';

const events = [
  {
    id: 1,
    title: 'Glory Encounter',
    category: 'Special Services',
    date: '2026-11-15',
    time: '9:00 AM',
    endTime: '12:00 PM',
    location: 'Main Church Auditorium',
    description:
      'Join us for a powerful time of worship, prayer, and the teaching of God’s Word as we gather to encounter His presence.',
    featured: true,
    registration: true,
    imageTheme: 'purple',
  },
  {
    id: 2,
    title: 'Night of Prayer',
    category: 'Prayer',
    date: '2026-11-20',
    time: '9:00 PM',
    endTime: '12:00 AM',
    location: 'Main Church Auditorium',
    description:
      'Set aside the distractions of everyday life and join the church family for a dedicated evening of prayer and intercession.',
    featured: false,
    registration: false,
    imageTheme: 'midnight',
  },
  {
    id: 3,
    title: 'Youth Alive Gathering',
    category: 'Youth',
    date: '2026-11-28',
    time: '10:00 AM',
    endTime: '1:00 PM',
    location: 'Church Fellowship Hall',
    description:
      'A gathering for the next generation to grow in faith, build godly friendships, and discover their purpose in Christ.',
    featured: false,
    registration: true,
    imageTheme: 'gold',
  },
  {
    id: 4,
    title: 'Kingdom Leaders Forum',
    category: 'Leadership',
    date: '2026-12-05',
    time: '10:00 AM',
    endTime: '2:00 PM',
    location: 'Main Church Auditorium',
    description:
      'An opportunity for ministry workers and emerging leaders to learn, connect, and strengthen their service in God’s kingdom.',
    featured: false,
    registration: true,
    imageTheme: 'plum',
  },
  {
    id: 5,
    title: 'Christmas Praise Celebration',
    category: 'Worship',
    date: '2026-12-20',
    time: '9:00 AM',
    endTime: '12:30 PM',
    location: 'Main Church Auditorium',
    description:
      'Celebrate the hope of Christ through uplifting worship, thanksgiving, fellowship, and the message of His love.',
    featured: false,
    registration: false,
    imageTheme: 'purple',
  },
  {
    id: 6,
    title: 'End-of-Year Thanksgiving',
    category: 'Special Services',
    date: '2026-12-31',
    time: '8:00 PM',
    endTime: '12:30 AM',
    location: 'Main Church Auditorium',
    description:
      'Come together as a church family to give thanks for God’s faithfulness and pray into the new year.',
    featured: false,
    registration: false,
    imageTheme: 'midnight',
  },
];

const categories = [
  'All Events',
  'Special Services',
  'Prayer',
  'Youth',
  'Leadership',
  'Worship',
];

function getDateParts(date) {
  const parsedDate = new Date(`${date}T12:00:00`);

  return {
    day: parsedDate.toLocaleDateString('en-US', { day: '2-digit' }),
    month: parsedDate
      .toLocaleDateString('en-US', { month: 'short' })
      .toUpperCase(),
    fullDate: parsedDate.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }),
  };
}

function EventArtwork({ event, featured = false }) {
  const dateParts = getDateParts(event.date);

  return (
    <div
      className={`${styles.eventArtwork} ${styles[event.imageTheme]} ${
        featured ? styles.featuredArtwork : ''
      }`}
    >
      <div className={styles.artworkOrb} />
      <div className={styles.artworkCross} aria-hidden="true">
        ✝
      </div>

      <div className={styles.artworkBrand}>
        GLORY CARRIER MINISTRIES
        <span>THE EMBASSY OF GLORY</span>
      </div>

      <div className={styles.artworkDate}>
        <span>{dateParts.month}</span>
        <strong>{dateParts.day}</strong>
      </div>

      <span className={styles.artworkBottom}>
        {event.category.toUpperCase()}
      </span>
    </div>
  );
}

export default function Events() {
  const [activeCategory, setActiveCategory] = useState('All Events');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [registrationEvent, setRegistrationEvent] = useState(null);
  const [registration, setRegistration] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const upcomingEvents = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return events
      .filter((event) => {
        const matchesCategory =
          activeCategory === 'All Events' ||
          event.category === activeCategory;

        const matchesSearch =
          !query ||
          [
            event.title,
            event.category,
            event.location,
            event.description,
          ].some((value) => value.toLowerCase().includes(query));

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => a.date.localeCompare(b.date));
  }, [activeCategory, searchTerm]);

  const featuredEvent = events.find((event) => event.featured);

  function openRegistration(event) {
    setRegistrationEvent(event);
    setRegistration({ name: '', email: '', phone: '' });
    setRegistrationSuccess(false);
    setSelectedEvent(null);
  }

  function closeModals() {
    setSelectedEvent(null);
    setRegistrationEvent(null);
    setRegistrationSuccess(false);
  }

  function handleRegistrationSubmit(event) {
    event.preventDefault();

    // Frontend demonstration only. Connect to a backend to save registrations.
    setRegistrationSuccess(true);
  }

  return (
    <section id="events" className={styles.eventsSection}>
      <div className={styles.container}>
        <header className={styles.sectionHeader}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            GATHER • CONNECT • GROW
          </span>

          <h2>
            Moments That <span>Bring Us Together</span>
          </h2>

          <p>
            Be part of what God is doing in our church community. Discover
            upcoming services, prayer gatherings, and opportunities to grow
            together in faith.
          </p>
        </header>

        {featuredEvent && (
          <article className={styles.featuredEvent}>
            <EventArtwork event={featuredEvent} featured />

            <div className={styles.featuredContent}>
              <span className={styles.featuredBadge}>
                <span />
                FEATURED EVENT
              </span>

              <h3>{featuredEvent.title}</h3>
              <p>{featuredEvent.description}</p>

              <div className={styles.eventDetails}>
                <span>
                  <CalendarDays size={17} />
                  {getDateParts(featuredEvent.date).fullDate}
                </span>
                <span>
                  <Clock3 size={17} />
                  {featuredEvent.time} – {featuredEvent.endTime}
                </span>
                <span>
                  <MapPin size={17} />
                  {featuredEvent.location}
                </span>
              </div>

              <div className={styles.featuredActions}>
                <button
                  type="button"
                  className={styles.primaryButton}
                  onClick={() => setSelectedEvent(featuredEvent)}
                >
                  Event details <ArrowRight size={17} />
                </button>

                {featuredEvent.registration && (
                  <button
                    type="button"
                    className={styles.secondaryButton}
                    onClick={() => openRegistration(featuredEvent)}
                  >
                    Register now
                  </button>
                )}
              </div>
            </div>
          </article>
        )}

        <div className={styles.eventsToolbar}>
          <div className={styles.toolbarTitle}>
            <span className={styles.smallEyebrow}>SAVE THE DATE</span>
            <h3>Upcoming Events</h3>
            <p>{upcomingEvents.length} events to explore</p>
          </div>

          <label className={styles.searchBox}>
            <Search size={18} />
            <input
              type="search"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              aria-label="Search events"
            />
          </label>
        </div>

        <div className={styles.filterList} aria-label="Filter events">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={`${styles.filterButton} ${
                activeCategory === category ? styles.filterActive : ''
              }`}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        {upcomingEvents.length > 0 ? (
          <div className={styles.eventsGrid}>
            {upcomingEvents.map((event) => {
              const dateParts = getDateParts(event.date);

              return (
                <article className={styles.eventCard} key={event.id}>
                  <div className={styles.cardArtworkWrap}>
                    <EventArtwork event={event} />
                    <div className={styles.dateBadge}>
                      <span>{dateParts.month}</span>
                      <strong>{dateParts.day}</strong>
                    </div>
                  </div>

                  <div className={styles.cardContent}>
                    <span className={styles.categoryTag}>
                      {event.category}
                    </span>

                    <h4>{event.title}</h4>

                    <div className={styles.cardMeta}>
                      <span>
                        <CalendarDays size={15} />
                        {dateParts.fullDate}
                      </span>
                      <span>
                        <Clock3 size={15} />
                        {event.time}
                      </span>
                      <span>
                        <MapPin size={15} />
                        {event.location}
                      </span>
                    </div>

                    <p className={styles.eventDescription}>
                      {event.description}
                    </p>

                    <div className={styles.cardActions}>
                      <button
                        type="button"
                        className={styles.detailsButton}
                        onClick={() => setSelectedEvent(event)}
                      >
                        View details <ArrowRight size={16} />
                      </button>

                      {event.registration && (
                        <button
                          type="button"
                          className={styles.registerLink}
                          onClick={() => openRegistration(event)}
                        >
                          Register
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <CalendarDays size={32} />
            <h4>No events found</h4>
            <p>
              Try a different search term or choose another event category.
            </p>
            <button
              type="button"
              className={styles.secondaryButton}
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('All Events');
              }}
            >
              Clear filters
            </button>
          </div>
        )}

        <div className={styles.eventsFooter}>
          <div className={styles.footerIcon}>
            <Users size={23} />
          </div>
          <div className={styles.footerText}>
            <h3>There’s a place for you here.</h3>
            <p>
              Come worship, connect with our church family, and grow with us.
            </p>
          </div>
          <a href="#visit" className={styles.visitButton}>
            Plan your visit <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {selectedEvent && (
        <div
          className={styles.modalOverlay}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedEvent(null);
            }
          }}
        >
          <div
            className={styles.eventModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="event-modal-title"
          >
            <div className={styles.modalArtwork}>
              <EventArtwork event={selectedEvent} featured />
              <button
                type="button"
                className={styles.closeButton}
                onClick={() => setSelectedEvent(null)}
                aria-label="Close event details"
              >
                <X size={21} />
              </button>
            </div>

            <div className={styles.modalContent}>
              <span className={styles.categoryTag}>
                {selectedEvent.category}
              </span>
              <h3 id="event-modal-title">{selectedEvent.title}</h3>
              <p>{selectedEvent.description}</p>

              <div className={styles.modalDetails}>
                <span>
                  <CalendarDays size={18} />
                  {getDateParts(selectedEvent.date).fullDate}
                </span>
                <span>
                  <Clock3 size={18} />
                  {selectedEvent.time} – {selectedEvent.endTime}
                </span>
                <span>
                  <MapPin size={18} />
                  {selectedEvent.location}
                </span>
              </div>

              {selectedEvent.registration ? (
                <button
                  type="button"
                  className={styles.primaryButton}
                  onClick={() => openRegistration(selectedEvent)}
                >
                  Register for this event <ArrowRight size={17} />
                </button>
              ) : (
                <p className={styles.walkInNote}>
                  Everyone is welcome. Join us at the venue.
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {registrationEvent && (
        <div
          className={styles.modalOverlay}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setRegistrationEvent(null);
            }
          }}
        >
          <div
            className={styles.registrationModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="registration-title"
          >
            <div className={styles.registrationHeader}>
              <div>
                <span className={styles.smallEyebrow}>YOU ARE INVITED</span>
                <h3 id="registration-title">
                  {registrationSuccess ? 'Registration received' : 'Event registration'}
                </h3>
                <p>{registrationEvent.title}</p>
              </div>

              <button
                type="button"
                className={styles.closeButtonLight}
                onClick={() => setRegistrationEvent(null)}
                aria-label="Close registration"
              >
                <X size={21} />
              </button>
            </div>

            {registrationSuccess ? (
              <div className={styles.successState}>
                <CheckCircle2 size={52} />
                <h4>Thank you, {registration.name}!</h4>
                <p>
                  Your details have been accepted in this demo. No information
                  has been sent to the church yet.
                </p>
                <button
                  type="button"
                  className={styles.primaryButton}
                  onClick={() => setRegistrationEvent(null)}
                >
                  Done
                </button>
              </div>
            ) : (
              <form
                className={styles.registrationForm}
                onSubmit={handleRegistrationSubmit}
              >
                <label>
                  Full name
                  <input
                    type="text"
                    autoComplete="name"
                    value={registration.name}
                    onChange={(event) =>
                      setRegistration({
                        ...registration,
                        name: event.target.value,
                      })
                    }
                    placeholder="Enter your full name"
                    required
                  />
                </label>

                <label>
                  Email address
                  <input
                    type="email"
                    autoComplete="email"
                    value={registration.email}
                    onChange={(event) =>
                      setRegistration({
                        ...registration,
                        email: event.target.value,
                      })
                    }
                    placeholder="you@example.com"
                    required
                  />
                </label>

                <label>
                  Phone number <span>(optional)</span>
                  <input
                    type="tel"
                    autoComplete="tel"
                    value={registration.phone}
                    onChange={(event) =>
                      setRegistration({
                        ...registration,
                        phone: event.target.value,
                      })
                    }
                    placeholder="Enter your phone number"
                  />
                </label>

                <div className={styles.registrationEventInfo}>
                  <CalendarDays size={17} />
                  <span>
                    {getDateParts(registrationEvent.date).fullDate}
                    <small>{registrationEvent.time}</small>
                  </span>
                </div>

                <button type="submit" className={styles.primaryButton}>
                  Complete registration <ArrowRight size={17} />
                </button>

                <p className={styles.formDisclaimer}>
                  This is a frontend demonstration. Connect a backend or
                  registration service to securely receive submissions.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
