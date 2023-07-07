import React from 'react';
import { storeKrunica } from '../store/KrunicaStore';
import { makeStyles } from '@mui/styles';
import { observer } from 'mobx-react';

const useStyles = makeStyles((theme) => ({
  amen: {
    margin: ' auto',
    fontSize: '1.3rem',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      fontSize: '2rem',
      color: '#093145',
    },
  },
}));

function Amen() {
  const classes = useStyles();
  const { aktivnaZemlja } = storeKrunica;

  return (
    <React.Fragment>
      <div className={classes.amen}>{aktivnaZemlja.amen}</div>
    </React.Fragment>
  );
}

export default observer(Amen);
