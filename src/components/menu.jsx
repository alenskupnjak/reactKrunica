import { observer } from 'mobx-react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@mui/styles';
import { storeKrunica } from '../store/KrunicaStore';

const useStyles = makeStyles((theme) => ({
  menu: {
    // height: '40px',
    color: 'transparent',
    width: '100%',
    margin: '0',
    paddingLeft: '0',
    zIndex: '6',
    justifyContent: 'space-around',
    backgroundColor: '#FFE100',
    paddingRight: '0',
    padding: '0',
    overflowX: 'hidden',
    [theme.breakpoints.up('sm')]: {
      backgroundColor: '#e9e9e9',
      color: '#555',
      border: '1px solid #ece7e7',
      width: '40%',
      margin: 'auto',
    },
  },
}));

export default observer(function Menu() {
  const {
    promjeniJezik,
    trenutniJezik,
    getlistaJezika,
    getnazivdanTjedan,
    promjeniDanUTjednu,
    aktivniDan,
    aktivnaZemlja: { naslovna02 },
  } = storeKrunica;
  const classes = useStyles();

  // Tab vrijednost
  document.title = naslovna02;

  return (
    <div className={classes.menu}>
      <Toolbar variant="dense">
        <TextField
          fullWidth
          size="small"
          // margin="dense"
          // margin="normal"
          select
          inputProps={{ MenuProps: { disableScrollLock: true } }}
          // id="jezik"
          id="margin-none"
          value={trenutniJezik}
          onChange={(e) => promjeniJezik(e)}
        >
          {getlistaJezika.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          fullWidth
          select
          size="small"
          // margin="dense"
          inputProps={{ MenuProps: { disableScrollLock: true } }}
          // id="danTjedany"
          id="margin-none"
          value={aktivniDan}
          onChange={(e) => {
            promjeniDanUTjednu(e);
          }}
        >
          {getnazivdanTjedan.map((dan) => (
            <MenuItem key={dan.value} value={dan.value}>
              {dan.label}
            </MenuItem>
          ))}
        </TextField>
      </Toolbar>
    </div>
  );
});
