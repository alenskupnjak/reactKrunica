import { observer } from 'mobx-react';
import { makeStyles } from '@mui/styles';
import { storeKrunica } from '../store/KrunicaStore';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const useStyles = makeStyles((theme) => ({
  povratak: {
    position: 'absolute',
    backgroundColor: '#FFE100',
    top: '9%',
    right: '20px',
    display: 'flex',
    width: '100%',
    fontSize: '4rem',
    zIndex: '5',
    borderRadius: '50%',
  },
  [theme.breakpoints.up('sm')]: {
    border: '1px solid #ece7e7',
    width: '30%',
    margin: 'auto',
    povratak: {
      right: '20%',
      top: '85%',
    },
  },
}));

function Povratak() {
  const classes = useStyles();
  const { zrno, povratakNaPocetak } = storeKrunica;

  return (
    <div>
      {zrno === 61 ? (
        <div
          onClick={() => {
            povratakNaPocetak();
          }}
        >
          <RestartAltIcon className={classes.povratak} />
        </div>
      ) : null}
    </div>
  );
}

export default observer(Povratak);
