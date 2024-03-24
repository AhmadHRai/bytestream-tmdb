import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import { Actors, MovieInformation, Movies, NavBar, Profile } from './index';
import Footer from './Footer/Footer';

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
          width: '100%',
        }}
      >
        <div style={{ height: '70px' }} />
        <Routes>
          <Route exact path="/movie/:id" element={<MovieInformation />} />
          <Route exact path="/actors/:id" element={<Actors />} />
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/approved" element={<Movies />} />
          <Route exact path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
