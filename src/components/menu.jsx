import { observer } from 'mobx-react';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@mui/styles';

import { isEmpty } from 'lodash';

import { storeKrunica } from '../store/KrunicaStore';

const useStyles = makeStyles((theme) => ({
  menu: {
    zIndex: '5',
  },
}));

export default observer(function Menu() {
  const {
    promjeniJezik,
    listaJezika,
    zrno,
    trenutniJezik,
    getlistaSvihJezika,
  } = storeKrunica;
  const classes = useStyles();

  if (isEmpty(listaJezika)) {
    console.log('ucini nesto');
    // getlistaSvihJezika();
  }

  console.log('listaJezika=', listaJezika, isEmpty(listaJezika));
  console.log(trenutniJezik);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menu}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onChange={() => promjeniJezik()}
          >
            <MenuIcon />
          </IconButton>

          {!isEmpty(listaJezika) && (
            <TextField
              width="50px"
              id="outlined-select-currency"
              select
              label="Select"
              value={trenutniJezik}
              // onChange={(e) => handleChange(e)}
              onChange={(e) => promjeniJezik(e)}
              helperText="Zemlja"
              className={classes.menu}
            >
              {listaJezika.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          )}

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {zrno}
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
});
