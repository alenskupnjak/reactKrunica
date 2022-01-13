import { observer } from 'mobx-react';
import { makeStyles } from '@mui/styles';
import { Fragment } from 'react';
import { storeKrunica } from '../store/KrunicaStore';
import Typography from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Avatar from '@mui/material/Avatar';
import avatarslika from '../slike/Papacy.jpg';
import zgBiskupija from '../slike/zgBiskupija.jpg';

const useStyles = makeStyles((theme) => ({
  opisZrna: {
    fontFamily: 'Cardo',
    display: 'flex',
    fontSize: '2rem',
    marginTop: '1rem',
    backgroundColor: '#f7f7f7',
    justifyContent: 'space-between',
    backgroundSize: '1.5rem',
    padding: '0.5rem',
    marginBottom: '2rem',
    textAlign: 'center',
    borderRadius: '0.2rem',
    boxShadow: '0 1.5rem 1rem rgba(0, 0, 0, 0.15)',
    // transition: transform ,'1s'
  },
  nivo: {
    zIndex: '5',
  },
}));

function Navigacija() {
  const classes = useStyles();
  const { aktivnaZemlja, zrno, nazad, naprijed } = storeKrunica;

  console.log('zrno', zrno);

  return (
    <Fragment>
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
        <Typography variant="body2">
          {' '}
          {aktivnaZemlja[`naslov${zrno}`]}
        </Typography>
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
      </div>
    </Fragment>
  );
}

export default observer(Navigacija);
