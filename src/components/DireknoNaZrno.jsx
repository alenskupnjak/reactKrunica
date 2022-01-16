import { observer } from 'mobx-react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@mui/styles';

import { storeKrunica } from '../store/KrunicaStore';

const useStyles = makeStyles((theme) => ({
  menu: {
    color: 'transparent',
    // fontSize: '1.5rem',
    zIndex: '6',
    justifyContent: 'space-between',
    backgroundColor: '#FFE100',
    // backgroundColor: 'linear-gradient(45deg, blue 30%, orange 50%)',
    [theme.breakpoints.up('sm')]: {
      backgroundColor: 'transparent',
      color: '#555',
      border: '1px solid #ece7e7',
    },
  },
  pomaknidno: {
    position: 'absolute',
    left: '0',
    bottom: '0',
    width: '100%',
    color: 'transparent',
    // fontSize: '1.5rem',
    zIndex: '6',
    justifyContent: 'space-between',
    backgroundColor: 'linear-gradient(45deg, red 30%, orange 90%)',
    // [theme.breakpoints.up('sm')]: {
    //   backgroundColor: 'transparent',
    //   color: '#555',
    //   border: '1px solid #ece7e7',
    // },
  },
}));

const CssTextField = styled(TextField)({
  color: 'blue',
  '& label.Mui-focused': {
    color: 'blue',
  },
  '& label.Mui-selected': {
    color: 'blue',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'blue',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'gold',
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'red',
      // background: 'linear-gradient(45deg, red 30%, orange 90%)',
    },
  },
});

export default observer(function DireknoNaZrno() {
  const {
    promjeniJezik,
    trenutniJezik,
    getlistaJezika,
    listaZrnaRadno,
    idiNaZrno,
    zrno,
  } = storeKrunica;
  const classes = useStyles();

  console.log(listaZrnaRadno);

  return (
    <Box
      sx={{ flexGrow: 1, color: 'transparent' }}
      className={classes.pomaknidno}
    >
      <AppBar position="static">
        <Toolbar className={classes.menu}>
          <CssTextField
            fullWidth
            select
            label="Select"
            value={trenutniJezik}
            onChange={(e) => promjeniJezik(e)}
            helperText={'Language'}
            // className={classes.menu}
          >
            {getlistaJezika.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </CssTextField>

          <CssTextField
            fullWidth
            width="50px"
            select
            label={zrno}
            value={zrno}
            onChange={(e) => {
              idiNaZrno(e);
            }}
            helperText="Bead"
          >
            {listaZrnaRadno.map((dan) => (
              <MenuItem key={dan.value} value={dan.value}>
                {dan.label}
              </MenuItem>
            ))}
          </CssTextField>
        </Toolbar>
      </AppBar>
    </Box>
  );
});
