import { observer } from 'mobx-react';
// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@mui/styles';

// import { isEmpty } from 'lodash';

import { storeKrunica } from '../store/KrunicaStore';

const useStyles = makeStyles((theme) => ({
  menu: {
    zIndex: '3',
    justifyContent: 'space-between',
    backgroundColor: '#FFE100',
  },
}));

export default observer(function Menu() {
  const {
    promjeniJezik,
    zrno,
    trenutniJezik,
    getlistaJezika,
    getnazivdanTjedan,
    promjeniDanUTjednu,
    aktivniDan,
  } = storeKrunica;
  const classes = useStyles();

  // console.log('listaJezika=', listaJezika, isEmpty(listaJezika));
  // console.log(trenutniJezik);
  // console.log(getnazivdanTjedan);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className={classes.menu}>
          {/* <IconButton
            // className={classes.menu}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            // onChange={() => promjeniJezik()}
          >
            <MenuIcon />
          </IconButton> */}
          {zrno}

          <TextField
            fullWidth
            id="outlined-select-currency"
            select
            label="Select"
            value={trenutniJezik}
            // onChange={(e) => handleChange(e)}
            onChange={(e) => promjeniJezik(e)}
            // helperText={jezik}
            // className={classes.menu}
          >
            {getlistaJezika.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            fullWidth
            width="50px"
            id="outlined-select-currency"
            select
            label="Select"
            value={aktivniDan}
            // onChange={(e) => handleChange(e)}
            onChange={(e) => {
              promjeniDanUTjednu(e);
            }}
            // helperText="Dan u tjednu"
            // className={classes.menu}
          >
            {getnazivdanTjedan.map((dan) => (
              <MenuItem key={dan.value} value={dan.value}>
                {dan.label}
              </MenuItem>
            ))}
          </TextField>

          {/* <Typography variant="h6" component="div">
            {zrno}
          </Typography> */}
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
});
