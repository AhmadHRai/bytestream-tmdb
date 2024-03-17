import React from 'react';
import { Grid } from '@mui/material';

import { Movie } from '../index';

function MovieList({ movies, numberOfMovies, excludeFirst }) {
  const startFrom = excludeFirst ? 1 : 0;
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
      {movies.results.slice(startFrom, numberOfMovies).map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
}

export default MovieList;
