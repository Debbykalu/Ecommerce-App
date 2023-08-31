import React from 'react';
import { Badge } from '@mui/material';
import { AppBar, Toolbar, IconButton, InputBase, Typography, Box } from '@mui/material';
import { Search as SearchIcon, ShoppingCart as ShoppingCartIcon, AccountCircle as AccountCircleIcon } from '@mui/icons-material';


import { styled } from '@mui/system';

const LogoSection = styled(Box)({
  flexBasis: '20%',
});

const SearchSection = styled(Box)({
  flexBasis: '50%',
  position: 'relative',
  borderRadius: '20px', // Rounded borders
  border: '1px solid gray', // Border around the search bar
});

const NavigationSection = styled(Box)({
  flexBasis: '30%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
});

const StyledInputBase = styled(InputBase)({
  color: 'inherit',
  width: '100%',
  padding: '6px 0 6px 40px',
});

const Navbar = ({ onSearch }) => {
    
 return (
    <AppBar position="static" style={{ backgroundColor: 'white', color: 'black' }}>
      <Toolbar>
        {/* Header Logo */}
        <LogoSection>
          <Typography variant="h6" component="div">
            MyLogo
          </Typography>
        </LogoSection>
        {/* Search Bar */}
        <SearchSection>
          <SearchIcon style={{ position: 'absolute', left: 10, top: 12, color: 'gray' }} />
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          onChange={(e) => onSearch(e.target.value)}
        />
        </SearchSection>
        {/* Navigation */}
        <NavigationSection>
          {/* Shopper Sign-In */}
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
          {/* Shopper Items */}
          <IconButton color="inherit">
            <Typography>Items</Typography>
          </IconButton>
          {/* Shopping Basket Icon */}
          <IconButton color="inherit">
            <Badge  color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </NavigationSection>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
