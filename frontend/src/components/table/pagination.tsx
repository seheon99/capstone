import React from 'react';

import styles from './pagination.module.scss';
import { range } from '../../utilities';

interface PaginationProps {
  current: number;
  min: number;
  max: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Pagination({
  current,
  min,
  max,
  setPage,
}: PaginationProps) {
  return (
    <div className={styles.wrapper}>
      {range(min, max + 1).map((page) => (
        <button
          key={page}
          className={current === page ? styles.active : styles.nonactive}
          onClick={() => setPage(page)}>
          {page}
        </button>
      ))}
    </div>
  );
}
