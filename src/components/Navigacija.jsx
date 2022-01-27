import { observer } from 'mobx-react';
import { makeStyles } from '@mui/styles';
import { storeKrunica } from '../store/KrunicaStore';
import Typography from '@mui/material/Typography';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Avatar from '@mui/material/Avatar';
import avatarslika from '../slike/Papacy.jpg';
import zgBiskupija from '../slike/zgBiskupija.jpg';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const useStyles = makeStyles((theme) => ({
  zaglavlje: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1rem',
  },
  opisZrna: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    fontFamily: 'Cardo',
    fontSize: '1.5rem',
    marginTop: '1rem',
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    margin: 'auto',
    marginLeft: '0',
    textAlign: 'center',
    borderRadius: '0.2rem',
    boxShadow: '0 1.5rem 1rem rgba(0, 0, 0, 0.15)',
    // transition: transform ,'1s'
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
    },
  },
}));

function Navigacija() {
  const classes = useStyles();
  const {
    aktivnaZemlja,
    zrno,
    nazad,
    naprijed,
    prijevodOtajstvatext,
    povratakNaPocetak,
  } = storeKrunica;

  return (
    <div className={classes.opisZrna}>
      {zrno !== -1 && (
        <Typography align="left" body="span" className={classes.nivo}>
          <Avatar
            src={zgBiskupija}
            onClick={() => {
              nazad();
            }}
            className="pulsiranjeLijevo"
          />
        </Typography>
      )}

      {zrno !== -1 &&
        zrno !== 0 &&
        zrno !== 16 &&
        zrno !== 27 &&
        zrno !== 38 &&
        zrno !== 49 &&
        zrno !== 60 &&
        zrno !== 61 && (
          <div className={classes.zaglavlje}>
            <span>{prijevodOtajstvatext}</span>
            <span> † </span>
            <span
              className={classes.nivo}
              onClick={() => {
                povratakNaPocetak();
              }}
            >
              <RestartAltIcon />
            </span>
          </div>
        )}

      <div className={classes.nivo}>
        <Typography align="right">
          <Avatar
            src={avatarslika}
            onClick={() => {
              naprijed();
            }}
            className={
              zrno === -1 ? 'pulsiranjeDesnoNaslovna' : 'pulsiranjeDesno'
            }
          />
        </Typography>

        {zrno === -1 && (
          <div align="right" className={classes.nivo}>
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
