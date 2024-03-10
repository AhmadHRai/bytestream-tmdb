import React from 'react';
import { Grid } from '@mui/material';

import { Movie } from '../index';

function MovieList({ movies }) {
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
      {movies.results.map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
}

export default MovieList;
