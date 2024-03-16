import React from 'react';
import { Typography, Button, useTheme } from '@mui/material';

function Pagination({ currentPage, setPage, totalPages }) {
  const theme = useTheme();

  const handlePrev = () => {
    if (currentPage !== 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage !== totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  if (totalPages === 0) return null;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Button onClick={handlePrev} variant="contained" style={{ margin: '30px 2px' }} color="primary" type="button">
        Prev
      </Button>
      <Typography variant="h4" sx={{ margin: '0 20px !important', color: theme.palette.text.primary }}>
        {currentPage}
      </Typography>
      <Button onClick={handleNext} variant="contained" style={{ margin: '30px 2px' }} color="primary" type="button">
        Next
      </Button>
    </div>
  );
}

export default Pagination;
