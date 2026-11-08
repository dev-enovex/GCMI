import React, { useState } from 'react';
import { ArrowRight, ChevronDown, Heart, Menu, X } from 'lucide-react';
import styles from './Header.module.css';
import logo from '../../assets/church-logo.png';

const links=[{label:'Home',href:'#home'},{label:'About',href:'#about'},{label:'Ministries',href:'#ministries'},{label:'Messages',href:'#messages'},{label:'Events',href:'#events'},{label:'Contact',href:'#contact'}];
export default function Header({onPrayer,onGive}){
 const [open,setOpen]=useState(false);
 const close=()=>setOpen(false);
 return <header className={styles.header}><div className={`container ${styles.inner}`}><a className={styles.brand} href="#home" onClick={close}><img src={logo} alt="Glory Carrier Ministries International logo"/><span><b>GLORY CARRIER</b><small>MINISTRIES INTERNATIONAL</small><em>THE EMBASSY OF GLORY</em></span></a><nav className={`${styles.nav} ${open?styles.navOpen:''}`} aria-label="Main navigation">{links.map(l=><a key={l.href} href={l.href} onClick={close}>{l.label}</a>)}<button className={styles.mobilePrayer} onClick={()=>{close();onPrayer()}}>Prayer request <ArrowRight size={15}/></button></nav><div className={styles.actions}><button className={styles.prayerBtn} onClick={onPrayer}>Prayer request</button><button className={styles.giveBtn} onClick={onGive}><Heart size={15} fill="currentColor"/> Give</button></div><button className={styles.menuBtn} aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div></header>
}