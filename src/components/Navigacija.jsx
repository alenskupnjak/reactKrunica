import { observer } from 'mobx-react';
import { makeStyles } from '@mui/styles';
import { storeKrunica } from '../store/KrunicaStore';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Avatar from '@mui/material/Avatar';
import avatarslika from '../slike/Papacy.jpg';
import zgBiskupija from '../slike/zgBiskupija.jpg';

const useStyles = makeStyles((theme) => ({
  zaglavlje: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1rem',
    color: 'blue',
    marginBottom: '0',
  },
  opisZrna: {
    position: 'absolute',
    top: '570px',
    left: '0',
    display: 'flex',
    width: '100%',
    fontFamily: 'Cardo',
    fontSize: '1.5rem',
    marginTop: '1.5rem',
    color: 'red',
    justifyContent: 'space-between',
    textAlign: 'center',
    margin: 'auto',
    borderRadius: '0.2rem',
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
    opisZrna: {
      width: '60%',
      marginLeft: '20%',
      // fontSize: '2rem',
      boxShadow: '0 1.5rem 1rem rgba(0, 0, 0, 0.15)',
    },
    zaglavlje: {
      fontSize: '2rem',
      color: 'red',
    },
  },
}));

function Navigacija() {
  const classes = useStyles();
  const { zrno, nazad, naprijed, prijevodOtajstvatext } = storeKrunica;

  return (
    <div className={classes.opisZrna}>
      {zrno !== -1 && (
        <div align="left" className={classes.nivo}>
          <Avatar
            src={zgBiskupija}
            onClick={() => {
              nazad();
            }}
            className="pulsiranjeLijevo"
          />
        </div>
      )}

      {zrno !== -1 && (
        <div className={classes.zaglavlje}>
          <span>{prijevodOtajstvatext} †</span>
        </div>
      )}

      <div className={classes.nivo}>
        {zrno !== -1 && (
          <Avatar
            src={avatarslika}
            style={{ borderRadius: 20, color: 'transparent' }}
            onClick={() => {
              naprijed();
            }}
            className={
              zrno === -1 ? 'pulsiranjeDesnoNaslovna' : 'pulsiranjeDesno'
            }
          />
        )}
        <div></div>

        {zrno === -1 && (
          <div className={classes.nivo}>
            <ArrowRightAltIcon
              onClick={() => {
                naprijed();
              }}
              className={'polagano-prikazivanje'}
              color="action"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default observer(Navigacija);
