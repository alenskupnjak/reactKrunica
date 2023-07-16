import { observer } from 'mobx-react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Avatar from '@mui/material/Avatar';
import { makeStyles } from '@mui/styles';

import { storeKrunica } from '../store/KrunicaStore';
import papinskiGrb from '../slike/Papacy.jpg';
import zgBiskupija from '../slike/zgBiskupija.jpg';

const useStyles = makeStyles((theme) => ({
  zaglavlje: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1rem',
    color: '#3C6478',
    marginBottom: '0',
  },
  opisZrna: {
    position: 'absolute',
    bottom: '100px',
    left: '0',
    display: 'flex',
    width: '100%',
    fontSize: '1.5rem',
    marginTop: '1.2rem',
    color: '#3C6478',
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
    backgroundColor: 'red',
    color: '#555',
    border: '1px solid #ece7e7',
    width: '30%',
    margin: 'auto',
    opisZrna: {
      width: '60%',
      marginLeft: '20%',
      boxShadow: '0 1.5rem 1rem rgba(0, 0, 0, 0.15)',
    },
    zaglavlje: {
      fontSize: '2rem',
    },
  },
}));

function Navigacija() {
  const classes = useStyles();
  const { zrno, nazad, naprijed } = storeKrunica;

  return (
    <div className={classes.opisZrna}>
      {zrno === 0 && (
        <ArrowRightAltIcon
          onClick={() => {
            naprijed();
          }}
          className={'strelica-lijevo'}
        />
      )}
      {
        <div align="left" className={classes.nivo}>
          <Avatar
            src={zgBiskupija}
            onClick={() => {
              nazad();
            }}
            className="pulsiranjeLijevo"
          />
        </div>
      }
      <div className={classes.nivo}>
        {zrno !== 61 && (
          <div>
            <Avatar
              src={papinskiGrb}
              style={{ borderRadius: 20, color: 'transparent' }}
              onClick={() => {
                naprijed();
              }}
              className={'pulsiranjeDesno'}
            />
          </div>
        )}
        {(zrno === -1 || zrno === 0) && (
          <ArrowRightAltIcon
            onClick={() => {
              naprijed();
            }}
            className={'strelica-desno'}
          />
        )}
      </div>
    </div>
  );
}

export default observer(Navigacija);
