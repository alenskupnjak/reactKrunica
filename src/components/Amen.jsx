import { Fragment } from 'react';
import { storeKrunica } from '../store/KrunicaStore';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  amen: {
    fontFamily: 'Cardo',
    margin: ' auto',
    fontSize: '1.3rem',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      backgroundColor: '#e9e9e9',
      color: 'blue',
      border: '1px solid #ece7e7',
      width: '50%',
      margin: 'auto',
      fontSize: '2rem',
    },
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
