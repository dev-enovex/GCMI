
import React, { useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  Heart,
  HeartHandshake,
  Music2,
  Users,
  Cross,
  HandHeart,
  X,
  Sparkles
} from 'lucide-react';

import styles from './Ministries.module.css';

const ministries = [
  {
    id: 1,
    icon: BookOpen,
    number: '01',
    category: 'SPIRITUAL GROWTH',
    title: 'Word & Discipleship',
    description:
      'Build a strong foundation in Scripture and grow into a mature, confident follower of Jesus.',
    details:
      'We help believers understand the Word of God, develop consistent spiritual habits, and apply biblical truth to everyday life.',
    activities: [
      'Bible study and teaching',
      'Discipleship classes',
      'Spiritual growth sessions'
    ]
  },
  {
    id: 2,
    icon: Music2,
    number: '02',
    category: 'WORSHIP & PRAYER',
    title: 'Worship & Prayer',
    description:
      'Create an atmosphere of heartfelt worship, persistent prayer, and deeper fellowship with God.',
    details:
      'Our worship and prayer ministry serves the church through music, intercession, and gatherings that encourage people to seek God.',
    activities: [
      'Praise and worship',
      'Corporate prayer meetings',
      'Worship team development'
    ]
  },
  {
    id: 3,
    icon: HeartHandshake,
    number: '03',
    category: 'LOVE IN ACTION',
    title: 'Outreach & Compassion',
    description:
      'Share the love of Christ through practical service, generosity, and care for our communities.',
    details:
      'We believe the Gospel should be expressed in both word and action. This ministry coordinates outreach and opportunities to serve people in need.',
    activities: [
      'Community outreach',
      'Care and support initiatives',
      'Evangelism and missions'
    ]
  },
  {
    id: 4,
    icon: Users,
    number: '04',
    category: 'THE NEXT GENERATION',
    title: 'Next Generation',
    description:
      'Help children, teenagers, and young adults discover their identity, faith, gifts, and purpose.',
    details:
      'We encourage the next generation to build a personal relationship with Jesus, grow in wisdom, and become positive influences in their world.',
    activities: [
      'Youth fellowship',
      'Children and teen activities',
      'Leadership and mentoring'
    ]
  },
  {
    id: 5,
    icon: HandHeart,
    number: '05',
    category: 'CARE & CONNECTION',
    title: 'Care & Community',
    description:
      'Build meaningful relationships and create a church family where people feel welcomed and supported.',
    details:
      'This ministry helps members connect, support one another, welcome newcomers, and strengthen the bonds of Christian fellowship.',
    activities: [
      'New-member welcome',
      'Fellowship gatherings',
      'Member care and encouragement'
    ]
  },
  {
    id: 6,
    icon: Cross,
    number: '06',
    category: 'SERVICE & EXCELLENCE',
    title: 'Kingdom Service',
    description:
      'Use your gifts, skills, and talents to serve God and contribute to the life of the church.',
    details:
      'There are many ways to serve behind the scenes and in public ministry. We encourage people to discover their strengths and serve with humility and excellence.',
    activities: [
      'Volunteer opportunities',
      'Church service teams',
      'Skills and gifts development'
    ]
  }
];

export default function Ministries() {
  const [selectedMinistry, setSelectedMinistry] = useState(null);

  const closeDetails = () => setSelectedMinistry(null);

  return (
    <section className={styles.section} id="ministries">
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>
            <Sparkles size={15} />
            SERVE · GROW · MAKE AN IMPACT
          </span>

          <h2>
            Find your place.
            <br />
            <em>Live your purpose.</em>
          </h2>

          <p>
            God has given everyone gifts to share. Discover a ministry where
            you can grow in faith, build lasting relationships, and make a
            difference for His Kingdom.
          </p>
        </div>

        <div className={styles.ministryGrid}>
          {ministries.map((ministry) => {
            const Icon = ministry.icon;

            return (
              <article
                className={styles.card}
                key={ministry.id}
              >
                <div className={styles.cardTop}>
                  <span className={styles.iconWrap}>
                    <Icon size={25} strokeWidth={1.7} />
                  </span>

                  <span className={styles.number}>
                    {ministry.number}
                  </span>
                </div>

                <span className={styles.category}>
                  {ministry.category}
                </span>

                <h3>{ministry.title}</h3>

                <p className={styles.description}>
                  {ministry.description}
                </p>

                <button
                  type="button"
                  className={styles.exploreButton}
                  onClick={() => setSelectedMinistry(ministry)}
                  aria-label={`Learn more about ${ministry.title}`}
                >
                  Explore ministry
                  <ArrowRight size={17} />
                </button>
              </article>
            );
          })}
        </div>

        <div className={styles.joinBanner}>
          <div className={styles.joinIcon}>
            <Heart size={23} />
          </div>

          <div className={styles.joinText}>
            <h3>There is a place for you here.</h3>
            <p>
              Ready to get involved? Take the next step and discover how you
              can serve with us.
            </p>
          </div>

          <a className={styles.joinButton} href="#contact">
            Get connected
            <ArrowRight size={17} />
          </a>
        </div>
      </div>

      {selectedMinistry && (
        <div
          className={styles.modalBackdrop}
          onClick={closeDetails}
        >
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="ministry-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeButton}
              onClick={closeDetails}
              aria-label="Close ministry details"
            >
              <X size={21} />
            </button>

            <span className={styles.modalEyebrow}>
              {selectedMinistry.category}
            </span>

            <h2 id="ministry-modal-title">
              {selectedMinistry.title}
            </h2>

            <p className={styles.modalDescription}>
              {selectedMinistry.details}
            </p>

            <h3>What we do</h3>

            <ul className={styles.activityList}>
              {selectedMinistry.activities.map((activity) => (
                <li key={activity}>
                  <span className={styles.checkMark}>✓</span>
                  {activity}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className={styles.modalButton}
              onClick={closeDetails}
            >
              Get involved
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
