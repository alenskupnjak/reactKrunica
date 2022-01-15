import { observer } from 'mobx-react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { alpha, styled } from '@mui/material/styles';

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
    color: 'transparent',
    // fontSize: '1.5rem',
    zIndex: '6',
    justifyContent: 'space-between',
    backgroundColor: '#FFE100',
    [theme.breakpoints.up('sm')]: {
      backgroundColor: 'transparent',
      color: '#555',
      border: '1px solid #ece7e7',
    },
  },
}));

const CssTextField = styled(TextField)({
  color: 'red',
  '& label.Mui-focused': {
    color: 'gold',
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
      borderColor: 'gold',
      // background: 'linear-gradient(45deg, red 30%, orange 90%)',
    },
  },
});

export default observer(function Menu() {
  const {
    promjeniJezik,
    trenutniJezik,
    getlistaJezika,
    getnazivdanTjedan,
    promjeniDanUTjednu,
    aktivniDan,
    zrno,
  } = storeKrunica;
  const classes = useStyles();

  // console.log('listaJezika=', listaJezika, isEmpty(listaJezika));
  // console.log(trenutniJezik);
  // console.log(getnazivdanTjedan);

  return (
    <Box sx={{ flexGrow: 1, color: 'transparent' }}>
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

          <CssTextField
            fullWidth
            // id="outlined-select-currency"
            select
            // label="Select"
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
          </CssTextField>

          <CssTextField
            fullWidth
            // error
            width="50px"
            // id="outlined-select-currency"
            select
            // label="Select"
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
          </CssTextField>

          {/* <Typography variant="h6" component="div">
            {zrno}
          </Typography> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
});
