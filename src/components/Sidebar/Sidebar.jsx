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
import { useDispatch, useSelector } from 'react-redux';

import { useGetGenresQuery } from '../../services/TMDB';
import genreIcons from '../../assets/genres';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
  { label: 'Now Playing', value: 'now_playing' },
];

function Sidebar({ setMobileOpen }) {
  const theme = useTheme();
  const { data, isFetching } = useGetGenresQuery();

  const dispatch = useDispatch();
  const selectedGenreOrCategory = useSelector((state) => state.currentGenreOrCategory.genreIdOrCategoryName);
  // const { genreIdOrCategoryName } = useSelector((state) => state.currentGenreOrCategory);

  const handleSelect = (value) => {
    dispatch(selectGenreOrCategory(value));
  };

  return (
    <>
      <Link to="/" style={{ display: 'flex', justifyContent: 'center', padding: '10% 0' }}>
        <img
          style={{ width: '240px', padding: '0 10%', overflow: 'hidden' }}
          src={theme.palette.mode === 'light' ? '/lightLogo.png' : '/darkLogo.png'}
          alt="Bytestream Logo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} style={{ color: theme.palette.text.primary, textDecoration: 'none' }} to="/">
            <ListItemButton selected={selectedGenreOrCategory === value} onClick={() => handleSelect(value)}>
              <ListItemIcon>
                <img
                  src={genreIcons[label.toLowerCase()]}
                  style={{ filter: theme.palette.mode === 'light' ? 'dark' : 'invert(1)' }}
                  height={30}
                />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {isFetching ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : (
          data.genres.map(({ name, id }) => (
            <Link key={name} style={{ color: theme.palette.text.primary, textDecoration: 'none' }} to="/">
              <ListItemButton selected={selectedGenreOrCategory === id} onClick={() => handleSelect(id)}>
                <ListItemIcon>
                  <img
                    src={genreIcons[name.toLowerCase()]}
                    style={{ filter: theme.palette.mode === 'light' ? 'dark' : 'invert(1)' }}
                    height={30}
                  />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItemButton>
            </Link>
          ))
        )}
      </List>
    </>
  );
}

export default Sidebar;
