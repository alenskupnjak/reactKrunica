import avatarslika from '../slike/Papacy.jpg';
import { makeStyles } from '@mui/styles';
import Avatar from '@mui/material/Avatar';
import { Fragment } from 'react';
import '../Pulsiranje.css';

import { storeKrunica } from '../store/KrunicaStore';

const useStyles = makeStyles(() => ({
  pokus: {
    fontFamily: 'Cardo',
    backgroundColor: '#f7f7f7',
    justifyContent: 'space-between',
    marginTop: '0.5rem',
    textAlign: 'center',
    zIndex: 0,
  },
}));

function Pokus() {
  const classes = useStyles();
  const { zrno, naprijed } = storeKrunica;

  return (
    <Fragment>
      <div className={classes.pokus}>
        <div className="elem"></div>
        <h2>{zrno}</h2>
        <Avatar
          onClick={() => {
            console.log('xxxx');

            naprijed();
          }}
          src={avatarslika}
        />
      </div>
    </Fragment>
  );
}

export default Pokus;
