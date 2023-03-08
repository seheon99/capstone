import React from 'react';

import styles from './title.module.scss';

interface PageTitleProps {
  mainTitle: string;
  subTitle?: string;
}

export default function PageTitle({ mainTitle, subTitle }: PageTitleProps) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{mainTitle}</h1>
      {subTitle && <h2 className={styles.subtitle}>{subTitle}</h2>}
    </div>
  );
}
