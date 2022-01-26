import { observer } from 'mobx-react';
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
    width: '100%',
    zIndex: '6',
    justifyContent: 'space-around',
    backgroundColor: '#FFE100',
    paddingRight: '0',
    padding: '0',
    [theme.breakpoints.up('sm')]: {
      backgroundColor: '#e9e9e9',
      color: '#555',
      border: '1px solid #ece7e7',
      width: '50%',
      margin: 'auto',
    },
  },
}));

const CssTextField = styled(TextField)({
  // width: '10px',
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
    aktivnaZemlja: { naslovna02 },
  } = storeKrunica;
  const classes = useStyles();

  // Tab vrijednost
  document.title = naslovna02;

  return (
    <Box
      sx={{
        color: 'transparent',
        padding: '0',
      }}
    >
      <Toolbar className={classes.menu}>
        <CssTextField
          fullWidth
          select
          inputProps={{ MenuProps: { disableScrollLock: true } }}
          id="jezik"
          value={trenutniJezik}
          onChange={(e) => promjeniJezik(e)}
        >
          {getlistaJezika.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </CssTextField>

        <CssTextField
          fullWidth
          select
          inputProps={{ MenuProps: { disableScrollLock: true } }}
          id="danTjedany"
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
        </CssTextField>
      </Toolbar>
    </Box>
  );
});
