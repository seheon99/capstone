import React, { useEffect, useState } from 'react';

import styles from './problem-board.module.scss';
import ProblemSet from '../../components/problem-set';
import { PageTitle, Pagination } from '../../components/table';

const Problems: ProblemListItem[] = [
  {
    id: 1,
    title: 'A+B',
    accepted: 312314,
    attempts: 10,
  },
  {
    id: 2,
    title: 'A-B',
    accepted: 1123441,
    attempts: 5,
  },
];

export default function ProblemBoard() {
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log(`${page} page is loaded`);
  }, [page]);

  return (
    <div className={styles.wrapper}>
      <PageTitle mainTitle='전체 문제' subTitle='모든 문제가 표시됩니다' />
      <ProblemSet problemList={Problems} />
      <Pagination current={page} min={1} max={5} setPage={setPage} />
    </div>
  );
}
