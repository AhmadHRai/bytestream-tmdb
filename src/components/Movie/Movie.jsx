import React from 'react';
import { Typography, Grid, Grow, Tooltip, Rating, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Movie({ movie, i }) {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      xl={2}
      sx={{
        padding: '10px',
      }}
    >
      <Grow in key={i} timeout={(i + 1) * 250}>
        <Box
          component={Link}
          to={`/movie/${movie.id}`}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Center items horizontally
            justifyContent: 'center', // Center items vertically
            textDecoration: 'none',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
        >
          <Box
            component="img"
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : 'https://placebear.com/200/300' // just a place holder
            }
            alt={movie.title}
            sx={{
              borderRadius: '20px',
              height: '300px',
              marginBottom: '10px',
              transition: 'transform 0.3s ease-in-out', // Added this line for smooth transition
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          />
          <Typography
            sx={{
              color: 'text.primary',
              textOverflow: 'ellipsis',
              width: '230px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              marginTop: '10px',
              marginBottom: 0,
              textAlign: 'center',
            }}
            variant="h5"
          >
            {movie.title}
          </Typography>
          <Tooltip disableTouchListener title={`${movie.vote_average} / 10`}>
            <div>
              <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
            </div>
          </Tooltip>
        </Box>
      </Grow>
    </Grid>
  );
}

export default Movie;
