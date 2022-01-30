import { Fragment } from 'react';
import { storeKrunica } from '../store/KrunicaStore';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  opisMolitve: {
    // backgroundColor: '#f7f7f7',
    justifyContent: 'space-between',
    marginTop: '0.5rem',
    margin: ' auto',
    fontSize: '1.4rem',
    textAlign: 'center',
    lineHeight: '1.2',
    [theme.breakpoints.up('sm')]: {
      color: '#093145',
      fontSize: '2rem',
    },
  },
  opisMolitveDeset: {
    justifyContent: 'space-between',
    marginTop: '0.5rem',
    margin: ' auto',
    fontSize: '1.2rem',
    textAlign: 'center',
    lineHeight: '1.2',
    [theme.breakpoints.up('sm')]: {
      color: '#093145',
      fontSize: '2rem',
    },
  },
}));

function ZdravoMarijaKraj() {
  const classes = useStyles();
  const { aktivnaZemlja, zrno } = storeKrunica;
  const class10 =
    zrno === 16 || zrno === 27 || zrno === 38 || zrno === 49 || zrno === 60
      ? classes.opisMolitveDeset
      : classes.opisMolitve;
  return (
    <Fragment>
      <div className={class10}>{aktivnaZemlja.zdravoMarijaKraj}</div>
    </Fragment>
  );
}

export default ZdravoMarijaKraj;
