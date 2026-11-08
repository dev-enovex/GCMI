import Ministries from './components/Ministries.jsx';
import Messages from './components/Messages.jsx';
import Events from './components/Events.jsx';
import React, { useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Check,
  Clock3,
  Cross,
  Heart,
  HeartHandshake,
  Mail,
  MapPin,
  MessageCircle,
  Music2,
  Play,
  Quote,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
  X
} from 'lucide-react';

import styles from './App.module.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Modal from './components/Modal.jsx';
import About from './components/About.jsx';

const ministries = [
  {
    icon: <BookOpen size={23} />,
    title: 'Word & Discipleship',
    text: 'Grow deeper in Scripture and build a faith that stands strong in every season.'
  },
  {
    icon: <Music2 size={23} />,
    title: 'Worship & Prayer',
    text: 'Gather in heartfelt worship and experience the transforming presence of God.'
  },
  {
    icon: <HeartHandshake size={23} />,
    title: 'Outreach & Compassion',
    text: 'Carry the love of Jesus beyond our walls through practical service and generosity.'
  },
  {
    icon: <Users size={23} />,
    title: 'Next Generation',
    text: 'Equip children, teens and young adults to discover their God-given purpose.'
  }
];

const events = [
  {
    day: 'SUN',
    date: '08',
    month: 'NOV',
    title: 'Sunday Celebration Service',
    time: '9:00 AM – 12:00 PM',
    place: 'Main Auditorium',
    tag: 'Worship'
  },
  {
    day: 'WED',
    date: '11',
    month: 'NOV',
    title: 'Midweek Encounter',
    time: '5:30 PM – 7:00 PM',
    place: 'Main Auditorium',
    tag: 'Prayer'
  },
  {
    day: 'SAT',
    date: '14',
    month: 'NOV',
    title: 'Glory Carriers Outreach',
    time: '10:00 AM – 1:00 PM',
    place: 'Community Outreach',
    tag: 'Outreach'
  }
];

const sermons = [
  {
    category: 'FAITH & PURPOSE',
    title: 'Living From the Place of His Presence',
    speaker: 'Pastoral Team',
    length: '38 min',
    image:
      'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=900&q=85'
  },
  {
    category: 'THE WORD',
    title: 'A Life Anchored in the Word',
    speaker: 'Pastoral Team',
    length: '42 min',
    image:
      'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=900&q=85'
  },
  {
    category: 'SPIRITUAL GROWTH',
    title: 'Called to Carry His Glory',
    speaker: 'Pastoral Team',
    length: '35 min',
    image:
      'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=900&q=85'
  }
];

export default function App() {
  const [modal, setModal] = useState(null);
  const [toast, setToast] = useState('');
  const [playing, setPlaying] = useState(null);
  const [givingAmount, setGivingAmount] = useState('5000');
  const [givingType, setGivingType] = useState('Offering');
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [newsletter, setNewsletter] = useState('');

  // Smoothly navigate to a section and account for the sticky header.
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // Keep the URL hash in sync with the selected section.
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  const notify = (message) => {
    setToast(message);
    window.setTimeout(() => setToast(''), 3500);
  };

  const submitContact = (e) => {
    e.preventDefault();

    notify(
      'Thank you for reaching out. Your message is ready for our ministry team.'
    );

    setForm({
      name: '',
      email: '',
      message: ''
    });
  };

  const submitNewsletter = (e) => {
    e.preventDefault();

    if (!newsletter.trim()) return;

    notify('Thank you for joining our community updates!');
    setNewsletter('');
  };

  const openEvent = (event) => setModal({ type: 'event', event });

  return (
    <div className={styles.app}>
      <Header
        onPrayer={() => setModal({ type: 'prayer' })}
        onGive={() => scrollToSection('give')}
      />

      <main>
        {/* HERO SECTION */}
        <section className={styles.hero} id="home">
          <div className={styles.heroBackdrop}></div>

          <div className={`container ${styles.heroInner}`}>
            <div className={styles.heroContent}>
              <span className={styles.heroKicker}>
                <span></span>
                GLORY CARRIERS. KINGDOM BUILDERS.
              </span>

              <h1>
                A place to encounter God.{' '}
                <em>A people who carry His glory.</em>
              </h1>

              <p>
                Welcome to Glory Carrier Ministries International — a family
                of faith, a house of prayer, and a home for purpose. There is
                a place for you here.
              </p>

              <div className={styles.heroActions}>
                <a className="btn btn-primary" href="#visit">
                  Plan your visit <ArrowRight size={17} />
                </a>

                <button
                  className={styles.watchBtn}
                  onClick={() => setModal({ type: 'welcome' })}
                >
                  <span>
                    <Play size={16} fill="currentColor" />
                  </span>
                  Discover our church
                </button>
              </div>

              <div className={styles.heroNote}>
                <div className={styles.avatarStack}>
                  <span>G</span>
                  <span>C</span>
                  <span>M</span>
                </div>

                <div>
                  <strong>A family growing in grace</strong>
                  <small>Worship · Word · Community</small>
                </div>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.heroPhoto}></div>
              <div className={styles.photoOverlay}></div>

              <div className={styles.heroQuote}>
                <span className={styles.quoteMark}>“</span>
                <p>
                  His presence is our dwelling place. His glory is our calling.
                </p>
                <span className={styles.quoteLine}></span>
                <small>THE EMBASSY OF GLORY</small>
              </div>

              <div className={styles.heroBadge}>
                <span>
                  <Sparkles size={20} />
                </span>

                <div>
                  <b>A place for you</b>
                  <small>Come as you are</small>
                </div>
              </div>
            </div>

            <a className={styles.scrollHint} href="#welcome">
              <span>
                <ArrowDown size={15} />
              </span>
              SCROLL TO EXPLORE
            </a>
          </div>
        </section>

        {/* WELCOME SECTION */}
        <section className={styles.welcome} id="welcome">
          <div className={`container ${styles.welcomeGrid}`}>
            <div className={styles.welcomeVisual}>
              <div className={styles.welcomeImage}></div>
              <div className={styles.imageAccent}></div>

              <div className={styles.welcomeStamp}>
                <Cross size={22} />
                <span>FAITH</span>
                <span>FAMILY</span>
                <span>PURPOSE</span>
              </div>
            </div>

            <div className={styles.welcomeText}>
              <span className="eyebrow">WELCOME HOME</span>

              <h2 className="section-title">
                More than a church.
                <br />
                <em>A family in His presence.</em>
              </h2>

              <p className="section-copy">
                At Glory Carrier Ministries International, we believe every
                person is created for a life of meaning, faith, and impact.
                We are committed to sharing the love of Christ, teaching the
                truth of His Word, and helping people discover the glory God
                has placed within them.
              </p>

              <p className={styles.scripture}>
                “For the earth will be filled with the knowledge of the glory
                of the Lord...” <b>— Habakkuk 2:14</b>
              </p>

              <button
                type="button"
                className="btn btn-outline"
                onClick={() => scrollToSection('about')}
              >
                Our story <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION: reliable navigation target */}
        <About />

        {/* VISION, MISSION AND VALUES */}
        <section className={styles.values} id="values">
          <div className="container">
            <div className={styles.valuesHead}>
              <div>
                <span className="eyebrow">WHO WE ARE</span>

                <h2 className="section-title">
                  Rooted in the Word.
                  <br />
                  Alive in His presence.
                </h2>
              </div>

              <p className="section-copy">
                Our heart is to raise a people who know God intimately,
                reflect His character, and carry His glory into every sphere
                of life.
              </p>
            </div>

            <div className={styles.valueGrid}>
              <article>
                <span className={styles.valueNumber}>01</span>

                <div className="icon-circle">
                  <BookOpen size={22} />
                </div>

                <h3>Our Vision</h3>

                <p>
                  To reveal Jesus and raise glory carriers who transform
                  lives, communities, and nations.
                </p>
              </article>

              <article>
                <span className={styles.valueNumber}>02</span>

                <div className="icon-circle">
                  <Heart size={22} />
                </div>

                <h3>Our Mission</h3>

                <p>
                  To make disciples through the Word, worship, prayer, and
                  practical expressions of God's love.
                </p>
              </article>

              <article>
                <span className={styles.valueNumber}>03</span>

                <div className="icon-circle">
                  <ShieldCheck size={22} />
                </div>

                <h3>Our Values</h3>

                <p>
                  Christ-centered living, spiritual excellence, authentic
                  community, integrity, and compassion.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* MINISTRIES COMPONENT */}
        <Ministries />

        {/* SCRIPTURE BANNER */}
        <section className={styles.scriptureBanner}>
          <div className={styles.bannerBg}></div>

          <div className={`container ${styles.bannerInner}`}>
            <Quote size={34} />

            <p>
              “Arise, shine; for your light has come! And the glory of the Lord
              is risen upon you.”
            </p>

            <span>ISAIAH 60:1</span>

            <a href="#messages" className={styles.bannerLink}>
              Be encouraged <ArrowRight size={16} />
            </a>
          </div>
        </section>

        {/* EVENTS COMPONENT */}
        <Events />

        {/* MESSAGES COMPONENT */}
        <Messages />

        {/* PLAN YOUR VISIT */}
        <section className={styles.visitSection} id="visit">
          <div className="container">
            <div className={styles.visitCard}>
              <div className={styles.visitImage}></div>

              <div className={styles.visitContent}>
                <span className="eyebrow">YOUR FIRST VISIT</span>

                <h2 className="section-title">
                  We can't wait
                  <br />
                  to meet you.
                </h2>

                <p className="section-copy">
                  Whether you're exploring faith or looking for a church to
                  call home, you are welcome here. Come expectant; leave
                  encouraged.
                </p>

                <div className={styles.visitDetails}>
                  <div>
                    <span className="icon-circle">
                      <CalendarDays size={20} />
                    </span>

                    <p>
                      <b>Sunday Celebration</b>
                      <small>Confirm service time with us</small>
                    </p>
                  </div>

                  <div>
                    <span className="icon-circle">
                      <MapPin size={20} />
                    </span>

                    <p>
                      <b>Find our location</b>
                      <small>Reach out for directions</small>
                    </p>
                  </div>
                </div>

                <button
                  className="btn btn-primary"
                  onClick={() => setModal({ type: 'visit' })}
                >
                  I'm planning to visit <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* GIVING SECTION */}
        <section className={styles.giveSection} id="give">
          <div className="container">
            <div className={styles.giveGrid}>
              <div>
                <span className="eyebrow">
                  GENEROSITY MAKES A DIFFERENCE
                </span>

                <h2 className="section-title">
                  Let love become
                  <br />
                  <em>something we do.</em>
                </h2>

                <p className="section-copy">
                  Your generosity helps us share the Gospel, care for people,
                  and serve our community. Thank you for being part of the
                  impact.
                </p>

                <div className={styles.givePromises}>
                  <span>
                    <Check size={16} /> Give with a willing heart
                  </span>

                  <span>
                    <Check size={16} /> Support ministry and outreach
                  </span>
                </div>
              </div>

              <div className={styles.giveBox}>
                <div className={styles.giveBoxTop}>
                  <span className={styles.giveIcon}>
                    <Heart size={20} />
                  </span>

                  <div>
                    <b>Make a difference</b>
                    <small>Choose a giving category and amount</small>
                  </div>
                </div>

                <label className={styles.fieldLabel}>
                  Giving category
                </label>

                <div className={styles.giveTypes}>
                  {['Tithe', 'Offering', 'Missions'].map((type) => (
                    <button
                      type="button"
                      key={type}
                      className={
                        givingType === type
                          ? styles.giveTypeActive
                          : styles.giveType
                      }
                      onClick={() => setGivingType(type)}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                <label className={styles.fieldLabel} htmlFor="amount">
                  Amount (₦)
                </label>

                <div className={styles.amountWrap}>
                  <span>₦</span>

                  <input
                    id="amount"
                    type="number"
                    min="100"
                    value={givingAmount}
                    onChange={(e) => setGivingAmount(e.target.value)}
                  />
                </div>

                <div className={styles.amountQuick}>
                  {['1000', '5000', '10000', '20000'].map((a) => (
                    <button
                      type="button"
                      key={a}
                      className={
                        givingAmount === a ? styles.amountSelected : ''
                      }
                      onClick={() => setGivingAmount(a)}
                    >
                      {Number(a).toLocaleString('en-NG')}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                  onClick={() =>
                    setModal({
                      type: 'giving',
                      amount: givingAmount,
                      category: givingType
                    })
                  }
                >
                  Continue to give <ArrowRight size={16} />
                </button>

                <small className={styles.giveNote}>
                  Secure online giving setup can be connected by the church
                  administrator.
                </small>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className={styles.contactSection} id="contact">
          <div className="container">
            <div className={styles.contactGrid}>
              <div>
                <span className="eyebrow">WE'RE HERE FOR YOU</span>

                <h2 className="section-title">Let's connect.</h2>

                <p className="section-copy">
                  Have a question, need prayer, or want to learn more about
                  the ministry? We'd love to hear from you.
                </p>

                <div className={styles.contactItem}>
                  <span className="icon-circle">
                    <Mail size={20} />
                  </span>

                  <div>
                    <b>Send us a message</b>
                    <small>Use the form and our team can follow up.</small>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <span className="icon-circle">
                    <MessageCircle size={20} />
                  </span>

                  <div>
                    <b>Need prayer?</b>
                    <small>You're not meant to carry it alone.</small>

                    <button
                      type="button"
                      onClick={() => setModal({ type: 'prayer' })}
                      className={styles.inlineLink}
                    >
                      Share a prayer request <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>

              <form
                className={styles.contactForm}
                onSubmit={submitContact}
              >
                <h3>Send a message</h3>
                <p>Every message matters to us.</p>

                <div className={styles.formRow}>
                  <label>
                    Your name

                    <input
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Full name"
                    />
                  </label>

                  <label>
                    Email address

                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="you@example.com"
                    />
                  </label>
                </div>

                <label>
                  How can we help?

                  <textarea
                    required
                    rows="4"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Write your message here..."
                  />
                </label>

                <button type="submit" className="btn btn-primary">
                  Send message <Send size={16} />
                </button>

                <small className={styles.formNote}>
                  Demo form: connect an email or backend service to receive
                  submissions.
                </small>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer
        onPrayer={() => setModal({ type: 'prayer' })}
        onNewsletter={submitNewsletter}
        newsletter={newsletter}
        setNewsletter={setNewsletter}
      />

      {/* MODAL */}
      {modal && (
        <Modal
          modal={modal}
          onClose={() => setModal(null)}
          notify={notify}
        />
      )}

      {/* TOAST NOTIFICATION */}
      {toast && (
        <div className={styles.toast}>
          <Check size={18} />
          {toast}

          <button
            type="button"
            onClick={() => setToast('')}
            aria-label="Dismiss"
          >
            <X size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
