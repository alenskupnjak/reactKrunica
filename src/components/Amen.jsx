import React from 'react';
import { storeKrunica } from '../store/KrunicaStore';
import { makeStyles } from '@mui/styles';
import { observer } from 'mobx-react';

const useStyles = makeStyles((theme) => ({
  amen: {
    margin: '0',
    fontSize: '1.2rem',
    textAlign: 'center',
    padding: '0',
    [theme.breakpoints.up('sm')]: {
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
