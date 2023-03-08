import styles from './index.module.scss';
import Navigation from '../../components/navigation';

const LINKS = [
  { key: 'problemset', label: '문제집', to: '/problems' },
  { key: 'submissions', label: '제출현황', to: '/submissions' },
  { key: 'search', label: '검색', to: '/search' },
];

export default function header() {
  return (
    <div className={styles.header}>
      <div className={styles.navigation}>
        <Navigation links={LINKS} />
      </div>
    </div>
  );
}
