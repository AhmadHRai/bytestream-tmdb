import React from 'react';
import { Grid } from '@mui/material';

import { Movie } from '../index';

function MovieList({ movies, numberOfMovies }) {
  return (
    <Grid
      container
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: { xs: 'center', sm: 'space-between' },
        overflow: 'auto',
      }}
    >
      {movies.results.slice(0, numberOfMovies).map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
}

export default MovieList;
