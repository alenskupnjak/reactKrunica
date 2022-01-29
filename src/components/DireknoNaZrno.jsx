import { observer } from 'mobx-react';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@mui/styles';
import { storeKrunica } from '../store/KrunicaStore';

const useStyles = makeStyles((theme) => ({
  menu: {
    color: 'transparent',
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

  return (
    <div>
      <Toolbar className={classes.menu}>
        <TextField
          fullWidth
          select
          label="Select"
          value={trenutniJezik}
          onChange={(e) => promjeniJezik(e)}
          helperText={'Language'}
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
        </TextField>
      </Toolbar>
    </div>
  );
});
