
import { useMemo, useState } from 'react';
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  Play,
  Search,
  Share2,
  X,
} from 'lucide-react';
import styles from './Messages.module.css';

const messages = [
  {
    id: 1,
    title: 'Carrying the Glory of God',
    speaker: 'Church Leadership',
    date: '2026-10-25',
    category: 'The Glory of God',
    duration: '42 min',
    description:
      'Discover what it means to live as a carrier of God’s presence and reveal His glory in everyday life.',
    videoId: '',
    featured: true,
  },
  {
    id: 2,
    title: 'Walking in the Power of His Presence',
    speaker: 'Church Leadership',
    date: '2026-10-18',
    category: 'Faith & Growth',
    duration: '38 min',
    description:
      'Learn how a life of prayer, faith, and obedience helps you grow in your walk with God.',
    videoId: '',
  },
  {
    id: 3,
    title: 'The Secret Place of Prayer',
    speaker: 'Church Leadership',
    date: '2026-10-11',
    category: 'Prayer',
    duration: '35 min',
    description:
      'Build a deeper prayer life and cultivate a consistent relationship with the Father.',
    videoId: '',
  },
  {
    id: 4,
    title: 'Living by the Word',
    speaker: 'Church Leadership',
    date: '2026-10-04',
    category: 'Faith & Growth',
    duration: '44 min',
    description:
      'Explore how the Word of God shapes your decisions, strengthens your faith, and guides your life.',
    videoId: '',
  },
  {
    id: 5,
    title: 'Called to Make a Difference',
    speaker: 'Church Leadership',
    date: '2026-09-27',
    category: 'Purpose & Calling',
    duration: '40 min',
    description:
      'Discover how to use your gifts and calling to serve others and impact your community.',
    videoId: '',
  },
  {
    id: 6,
    title: 'Grace for the Journey',
    speaker: 'Church Leadership',
    date: '2026-09-20',
    category: 'Faith & Growth',
    duration: '32 min',
    description:
      'Be encouraged to trust God through every season and depend on His sustaining grace.',
    videoId: '',
  },
];

const categories = [
  'All Messages',
  'The Glory of God',
  'Faith & Growth',
  'Prayer',
  'Purpose & Calling',
];

function formatDate(date) {
  return new Date(`${date}T12:00:00`).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function Messages() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Messages');
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [shareStatus, setShareStatus] = useState('');

  const featuredMessage = messages.find((message) => message.featured);

  const filteredMessages = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return messages.filter((message) => {
      const matchesCategory =
        activeCategory === 'All Messages' ||
        message.category === activeCategory;

      const matchesSearch =
        !query ||
        [
          message.title,
          message.speaker,
          message.category,
          message.description,
        ].some((value) => value.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  const libraryMessages = filteredMessages.filter(
    (message) => !message.featured
  );

  async function shareMessage(message) {
    const shareUrl = message.videoId
      ? `https://www.youtube.com/watch?v=${message.videoId}`
      : window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title: message.title,
          text: `Watch "${message.title}" from Glory Carrier Ministries International.`,
          url: shareUrl,
        });
        setShareStatus('Shared successfully.');
      } else {
        await navigator.clipboard.writeText(shareUrl);
        setShareStatus('Link copied to clipboard.');
      }
    } catch (error) {
      if (error.name !== 'AbortError') {
        setShareStatus('Unable to share this message right now.');
      }
    }

    window.setTimeout(() => setShareStatus(''), 3000);
  }

  function openMessage(message) {
    setShareStatus('');
    setSelectedMessage(message);
  }

  return (
    <section id="messages" className={styles.messagesSection}>
      <div className={styles.container}>
        <div className={styles.sectionIntro}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            WORD • WORSHIP • TRANSFORMATION
          </span>

          <h2>
            Messages That <span>Transform Lives</span>
          </h2>

          <p>
            Grow in faith, discover the Word, and be strengthened by
            teachings that point you to Jesus Christ.
          </p>
        </div>

        {featuredMessage && (
          <article className={styles.featuredCard}>
            <div className={styles.featuredVisual}>
              <div className={styles.visualGlow} />
              <span className={styles.featuredLabel}>
                FEATURED MESSAGE
              </span>

              <div className={styles.crossMark} aria-hidden="true">
                ✝
              </div>

              <button
                type="button"
                className={styles.featuredPlay}
                onClick={() => openMessage(featuredMessage)}
                aria-label={`Watch ${featuredMessage.title}`}
              >
                <Play size={23} fill="currentColor" />
              </button>

              <span className={styles.visualCaption}>
                THE EMBASSY OF GLORY
              </span>
            </div>

            <div className={styles.featuredContent}>
              <span className={styles.messageCategory}>
                {featuredMessage.category}
              </span>

              <h3>{featuredMessage.title}</h3>

              <p>{featuredMessage.description}</p>

              <div className={styles.messageMeta}>
                <span>
                  <CalendarDays size={15} />
                  {formatDate(featuredMessage.date)}
                </span>
                <span>
                  <Clock3 size={15} />
                  {featuredMessage.duration}
                </span>
              </div>

              <div className={styles.featuredActions}>
                <button
                  type="button"
                  className={styles.primaryButton}
                  onClick={() => openMessage(featuredMessage)}
                >
                  <Play size={16} fill="currentColor" />
                  Watch message
                </button>

                <button
                  type="button"
                  className={styles.shareButton}
                  onClick={() => shareMessage(featuredMessage)}
                  aria-label="Share featured message"
                >
                  <Share2 size={17} />
                  Share
                </button>
              </div>
            </div>
          </article>
        )}

        <div className={styles.libraryHeader}>
          <div>
            <span className={styles.smallEyebrow}>GROW IN THE WORD</span>
            <h3>Explore Our Messages</h3>
          </div>

          <label className={styles.searchBox}>
            <Search size={18} />
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search messages..."
              aria-label="Search messages"
            />
          </label>
        </div>

        <div className={styles.categoryList} aria-label="Filter messages">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={`${styles.categoryButton} ${
                activeCategory === category ? styles.categoryActive : ''
              }`}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        {libraryMessages.length > 0 ? (
          <div className={styles.messageGrid}>
            {libraryMessages.map((message, index) => (
              <article className={styles.messageCard} key={message.id}>
                <div className={`${styles.cardVisual} ${styles[`visual${index % 3}`]}`}>
                  <span className={styles.cardCategory}>
                    {message.category}
                  </span>

                  <span className={styles.cardCross} aria-hidden="true">
                    ✝
                  </span>

                  <button
                    type="button"
                    className={styles.cardPlay}
                    onClick={() => openMessage(message)}
                    aria-label={`Watch ${message.title}`}
                  >
                    <Play size={18} fill="currentColor" />
                  </button>

                  <span className={styles.duration}>
                    {message.duration}
                  </span>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.cardDate}>
                    <CalendarDays size={14} />
                    {formatDate(message.date)}
                  </div>

                  <h4>{message.title}</h4>
                  <p>{message.description}</p>

                  <div className={styles.cardFooter}>
                    <span className={styles.speakerName}>
                      {message.speaker}
                    </span>

                    <button
                      type="button"
                      className={styles.cardWatch}
                      onClick={() => openMessage(message)}
                    >
                      Watch <ArrowRight size={15} />
                    </button>
                  </div>

                  <button
                    type="button"
                    className={styles.cardShare}
                    onClick={() => shareMessage(message)}
                  >
                    <Share2 size={14} />
                    Share message
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <Search size={30} />
            <h4>No messages found</h4>
            <p>Try another search term or choose a different category.</p>
            <button
              type="button"
              className={styles.resetButton}
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('All Messages');
              }}
            >
              Clear filters
            </button>
          </div>
        )}

        {shareStatus && (
          <div className={styles.toast} role="status">
            <Check size={16} />
            {shareStatus}
          </div>
        )}

        <div className={styles.messagesCta}>
          <div>
            <span className={styles.smallEyebrow}>STAY CONNECTED</span>
            <h3>Let the Word dwell richly in you.</h3>
            <p>
              Join us in worship and fellowship as we grow together in Christ.
            </p>
          </div>

          <a href="#visit" className={styles.ctaButton}>
            Plan your visit <ArrowRight size={17} />
          </a>
        </div>
      </div>

      {selectedMessage && (
        <div
          className={styles.modalOverlay}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedMessage(null);
            }
          }}
        >
          <div
            className={styles.videoModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="message-modal-title"
          >
            <div className={styles.modalHeader}>
              <div>
                <span className={styles.smallEyebrow}>THE EMBASSY OF GLORY</span>
                <h3 id="message-modal-title">{selectedMessage.title}</h3>
              </div>

              <button
                type="button"
                className={styles.closeButton}
                onClick={() => setSelectedMessage(null)}
                aria-label="Close message"
              >
                <X size={22} />
              </button>
            </div>

            {selectedMessage.videoId ? (
              <div className={styles.videoFrame}>
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${selectedMessage.videoId}?autoplay=1`}
                  title={selectedMessage.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className={styles.videoPlaceholder}>
                <div className={styles.placeholderIcon}>
                  <Play size={28} fill="currentColor" />
                </div>
                <h4>Message video coming soon</h4>
                <p>
                  Add this sermon’s YouTube video ID to the messages data to
                  enable playback here.
                </p>
                <button
                  type="button"
                  className={styles.primaryButton}
                  onClick={() => setSelectedMessage(null)}
                >
                  Close
                </button>
              </div>
            )}

            <div className={styles.modalDescription}>
              <div className={styles.messageMeta}>
                <span>
                  <CalendarDays size={15} />
                  {formatDate(selectedMessage.date)}
                </span>
                <span>
                  <Clock3 size={15} />
                  {selectedMessage.duration}
                </span>
              </div>
              <p>{selectedMessage.description}</p>

              <button
                type="button"
                className={styles.shareButton}
                onClick={() => shareMessage(selectedMessage)}
              >
                <Share2 size={16} />
                Share this message
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
