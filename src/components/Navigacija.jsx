import { observer } from 'mobx-react';
import { makeStyles } from '@mui/styles';
import { storeKrunica } from '../store/KrunicaStore';
import Typography from '@mui/material/Typography';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Avatar from '@mui/material/Avatar';
import avatarslika from '../slike/Papacy.jpg';
import zgBiskupija from '../slike/zgBiskupija.jpg';

const useStyles = makeStyles((theme) => ({
  opisZrna: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    fontFamily: 'Cardo',
    fontSize: '1.2rem',
    marginTop: '1rem',
    backgroundColor: '#e9e9e9',
    justifyContent: 'space-between',
    backgroundSize: '1.5rem',
    // padding: '0.5rem',
    // marginBottom: '2rem',
    textAlign: 'center',
    borderRadius: '0.2rem',
    boxShadow: '0 1.5rem 1rem rgba(0, 0, 0, 0.15)',
    // transition: transform ,'1s'
  },
  nivo: {
    zIndex: '5',
    margin: '0',
  },
  opiszrna: {
    fontSize: '1.2rem',
  },
}));

function Navigacija() {
  const classes = useStyles();
  const { aktivnaZemlja, zrno, nazad, naprijed } = storeKrunica;

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
      <Typography className={classes.opiszrna}>
        {aktivnaZemlja[`naslov${zrno}`]}
      </Typography>
      <div className={classes.nivo}>
        <Typography align="right" body="span" className={classes.nivo}>
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
          <Typography align="right" className={classes.nivo}>
            <ArrowRightAltIcon
              onClick={() => {
                naprijed();
              }}
              className={'polagano-prikazivanje'}
              color="action"
            />
          </Typography>
        )}
      </div>
    </div>
  );
}

export default observer(Navigacija);
