import { observer } from 'mobx-react';
import { makeStyles } from '@mui/styles';
import { storeKrunica } from '../store/KrunicaStore';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const useStyles = makeStyles((theme) => ({
  povratak: {
    display: 'flex',
    position: 'absolute',
    backgroundColor: '#FFE100',
    bottom: '20%',
    right: '20px',
    width: '100%',
    fontSize: '4rem',
    zIndex: '5',
    borderRadius: '50%',
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
