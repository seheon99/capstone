import React from 'react';

import styles from './index.module.scss';
import { numberWithCommas } from '../../utilities';

interface ProblemListProps {
  problemList: ProblemList;
}

export default function ProblemSet({ problemList }: ProblemListProps) {
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th style={{ width: '15%' }}>문제 번호</th>
            <th style={{ width: '55%' }}>문제 제목</th>
            <th style={{ width: '15%' }}>푼 사람 수</th>
            <th style={{ width: '15%' }}>평균 시도 횟수</th>
          </tr>
        </thead>
        <tbody>
          {problemList.map((problem) => (
            <tr key={problem.id}>
              <td>{problem.id}</td>
              <td>{problem.title}</td>
              <td className={styles.alignRight}>
                {numberWithCommas(problem.accepted)}
              </td>
              <td className={styles.alignRight}>
                {problem.attempts.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
