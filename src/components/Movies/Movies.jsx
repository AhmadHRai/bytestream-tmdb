import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, useMediaQuery, Typography, Button } from '@mui/material';
import { useSelector } from 'react-redux';

import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useGetMoviesQuery } from '../../services/TMDB';
import { MovieList, Pagination } from '../index';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';

function Movies() {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName, searchQuery } = useSelector((state) => state.currentGenreOrCategory);
  const { data, error, isFetching } = useGetMoviesQuery({
    genreIdOrCategoryName,
    page,
    searchQuery,
  });

  const lg = useMediaQuery((theme) => theme.breakpoints.only('lg'));
  const numberOfMovies = lg ? 16 : 18;

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress
          size="4rem"
          sx={{
            marginTop: '30px',
          }}
        />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" mt="20px">
        <Typography variant="h4">
          No movies that match that name.
          <br />
          Please searh for something else.
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center">
        <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)} color="primary">
          Go Back
        </Button>
      </Box>
    );
  }

  return (
    <div>
      <MovieList movies={data} numberOfMovies={numberOfMovies} />
      <Pagination currentPage={page} setPage={setPage} totalPages={data.total_pages} />{' '}
    </div>
  );
}

export default Movies;
