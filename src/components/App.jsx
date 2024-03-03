import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import { Actors, MovieInformation, Movies, NavBar, Profile } from './index';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
      }}
    >
      <CssBaseline />
      <NavBar />
      <main
        style={{
          flexGrow: '1',
          padding: '2rem',
        }}
      >
        <div style={{ height: '70px' }} />
        <Routes>
          <Route exact path="/movie/:id" element={<MovieInformation />} />
          <Route exact path="/actors/:id" element={<Actors />} />
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
