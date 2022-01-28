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
    // backgroundColor: 'orange',
  },
  opisZrna: {
    position: 'absolute',
    top: '570px',
    left: '0',
    display: 'flex',
    width: '100%',
    fontFamily: 'Cardo',
    fontSize: '1.5rem',
    marginTop: '1rem',
    color: 'red',
    // backgroundColor: 'transparent',
    justifyContent: 'space-between',
    margin: 'auto',
    // marginLeft: '10px',
    textAlign: 'center',
    borderRadius: '0.2rem',
    // boxShadow: '0 1.5rem 1rem rgba(0, 0, 0, 0.15)',
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
  const { zrno, nazad, naprijed, prijevodOtajstvatext } = storeKrunica;

  return (
    <div>
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
          <div>
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
          </div>

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
    </div>
  );
}

export default observer(Navigacija);
