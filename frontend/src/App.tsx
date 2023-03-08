import React from 'react';
import { Route, Routes } from 'react-router-dom';

import styles from './App.module.scss';
import Header from './containers/header';
import { ProblemBoard } from './containers/problem-board';

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.body}>
        <Routes>
          <Route path='/' element={<div>Home</div>} />
          <Route path='/problems' element={ProblemBoard()} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
