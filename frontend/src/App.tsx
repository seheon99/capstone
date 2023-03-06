import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navigation from './Navigation';

const LINKS = [
  { label: 'Apple', to: 'https://apple.com' },
  { label: 'Google', to: 'https://google.com' },
];

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation links={LINKS} />
        <Routes>
          <Route path='/problems' element={<p>This is problems page</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
