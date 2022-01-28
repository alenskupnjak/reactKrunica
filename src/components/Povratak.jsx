import { observer } from 'mobx-react';
import { makeStyles } from '@mui/styles';
import { storeKrunica } from '../store/KrunicaStore';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const useStyles = makeStyles((theme) => ({
  povratak: {
    position: 'absolute',
    top: '520px',
    left: '10px',
    display: 'flex',
    width: '100%',
    fontFamily: 'Cardo',
    fontSize: '1.5rem',
    marginTop: '1rem',
  },
  nivo: {
    position: 'relative',
    zIndex: '5',
    margin: '0',
  },

  [theme.breakpoints.up('sm')]: {
    color: '#555',
    border: '1px solid #ece7e7',
    width: '30%',
    margin: 'auto',
  },
}));

function Povratak() {
  const classes = useStyles();
  const { zrno, povratakNaPocetak } = storeKrunica;

  return (
    <div>
      <div className={classes.povratak}>
        {zrno !== -1 && (
          <div
            className={classes.nivo}
            onClick={() => {
              povratakNaPocetak();
            }}
          >
            <RestartAltIcon />
          </div>
        )}
      </div>
    </div>
  );
}

export default observer(Povratak);
