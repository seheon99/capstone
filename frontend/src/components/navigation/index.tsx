import React from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';

interface NavigationProps {
  links: {
    key: string;
    to: string;
    label: string;
  }[];
}

export default function Navigation({ links }: NavigationProps) {
  return (
    <div className={styles.navigation}>
      <Link to='/'>
        {/* Scratch Online Judge */}
        <img className={styles.logo} src='/logo512-white.png' alt='SOJ logo' />
      </Link>
      {links.map((link) => (
        <Link key={link.key} to={link.to}>
          {link.label}
        </Link>
      ))}
      <div style={{ flex: '1 0 0' }}></div>
      <Link to='#'>
        <img
          className={styles.profile}
          src='https://static.solved.ac/uploads/profile/64x64/seyu-picture-1673335931018.png'
          alt='seyu'
        />
      </Link>
    </div>
  );
}
