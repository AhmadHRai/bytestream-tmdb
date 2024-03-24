// Footer.jsx
import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import LaunchIcon from '@mui/icons-material/Launch'; // Import the Launch icon

function Footer() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        width: '100%',
        position: 'fixed',
        bottom: 0,
      }}
    >
      <Typography variant="body2">Created By Ahmad Alrai 2024</Typography>
      <Link
        href="https://github.com/AhmadHRai"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          marginLeft: '0.5rem',
          color: theme.palette.text.primary,
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2">GitHub</Typography>
          <LaunchIcon fontSize="small" sx={{ marginLeft: '0.25rem' }} />
        </Box>
      </Link>
    </Box>
  );
}

export default Footer;
