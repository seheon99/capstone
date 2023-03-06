import React from 'react';

import styles from './Navigation.module.scss';

interface NavigationProps {
  links: {
    to: string;
    label: string;
  }[];
}

function Navigation({ links }: NavigationProps) {
  return (
    <div className={styles.navigation}>
      <ul>
        {links.map((link) => (
          <li key={link.to}>
            <a href={link.to}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navigation;
