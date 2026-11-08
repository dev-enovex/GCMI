import React from 'react';
import { ArrowRight, BookOpen, Cross, HeartHandshake, Sparkles } from 'lucide-react';
import styles from './About.module.css';
import pastorPhoto from '../../assets/pastor.jpeg';
const pillars = [
 {icon:<BookOpen size={20}/>,title:'The Word',text:'We build our lives on Scripture and grow in the knowledge of Jesus.'},
 {icon:<Sparkles size={20}/>,title:'His Presence',text:'Prayer and worship are at the heart of our life together as we make room for God to work.'},
 {icon:<HeartHandshake size={20}/>,title:'A Life of Impact',text:'We carry the love of Christ into our homes, workplaces, communities, and beyond.'}
];
export default function About(){return <section className={styles.about} id="about" aria-labelledby="about-title"><div className={`container ${styles.layout}`}>
<div className={styles.photoColumn}><div className={styles.photoFrame}><img src={pastorPhoto} alt="Pastor ministering during a church gathering"/></div><div className={styles.goldAccent}/><div className={styles.photoCaption}><span className={styles.captionIcon}><Cross size={19}/></span><span><strong>The Embassy of Glory</strong><small>A house of His presence</small></span></div><span className={styles.verticalLabel}>GLORY CARRIER MINISTRIES INTERNATIONAL</span></div>
<div className={styles.content}><span className="eyebrow">GET TO KNOW US</span><h2 className="section-title" id="about-title">A people called to<br/><em>carry His glory.</em></h2>
<p className={styles.lead}>Glory Carrier Ministries International, also known as <strong>The Embassy of Glory</strong>, is a Christ-centered ministry committed to helping people encounter God, grow in His Word, and live out the purpose He has placed within them.</p>
<p className={styles.body}>We believe church is more than a place we attend; it is a family in which faith is nurtured, people are equipped, and the love of Jesus is made visible. Through worship, prayer, discipleship, and compassionate service, our desire is to see lives transformed by the presence and truth of God.</p>
<div className={styles.motto}><span className={styles.mottoMark}>“</span><div><p>We encounter His presence, grow in His truth, and carry His glory into the world.</p><small>OUR HEART AS A MINISTRY</small></div></div>
<div className={styles.pillars}>{pillars.map(p=><article className={styles.pillar} key={p.title}><span className={styles.pillarIcon}>{p.icon}</span><div><h3>{p.title}</h3><p>{p.text}</p></div></article>)}</div>
<a className="btn btn-primary" href="#visit">Come and worship with us <ArrowRight size={16}/></a></div></div></section>}
