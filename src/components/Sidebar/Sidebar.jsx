import React, { useEffect } from 'react';
import {
  Box,
  List,
  Divider,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  ListItemButton,
  CircularProgress,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];
const demoCategories = [
  { label: 'Comedy', value: 'comedy' },
  { label: 'Action', value: 'action' },
  { label: 'Horror', value: 'horror' },
  { label: 'Animation', value: 'animation' },
];

function Sidebar({ setMobileOpen }) {
  const theme = useTheme();

  return (
    <>
      <Link to="/" style={{ display: 'flex', justifyContent: 'center', padding: '10% 0' }}>
        <img
          style={{ width: '240px', padding: '0 10%' }}
          src={theme.palette.mode === 'light' ? '/lightLogo.png' : '/darkLogo.png'}
          alt="Bytestream Logo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} style={{ color: theme.palette.text.primary, textDecoration: 'none' }} to="/">
            <ListItemButton onClick={() => {}}>
              {/* <ListItemIcon>
                <img
                  src="/lightLogo.png"
                  style={{ filter: theme.palette.mode === 'dark' ? 'dark' : 'invert(1)' }}
                  height={30}
                />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItemButton>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {demoCategories.map(({ label, value }) => (
          <Link key={value} style={{ color: theme.palette.text.primary, textDecoration: 'none' }} to="/">
            <ListItemButton onClick={() => {}}>
              {/* <ListItemIcon>
                <img
                  src="/lightLogo.png"
                  style={{ filter: theme.palette.mode === 'dark' ? 'dark' : 'invert(1)' }}
                  height={30}
                />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItemButton>
          </Link>
        ))}
      </List>
    </>
  );
}

export default Sidebar;
