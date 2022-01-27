import { Fragment } from 'react';
import { Typography } from '@mui/material';
import { storeKrunica } from '../store/KrunicaStore';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  amen: {
    fontFamily: 'Cardo',
    margin: ' auto',
    fontSize: '1.3rem',
    textAlign: 'center',
  },
}));

function Amen() {
  const classes = useStyles();
  const { aktivnaZemlja } = storeKrunica;
  return (
    <Fragment>
      <div className={classes.amen}>{aktivnaZemlja.amen}</div>
    </Fragment>
  );
}

export default Amen;
