import { Fragment } from 'react';
import { storeKrunica } from '../store/KrunicaStore';
import { makeStyles } from '@mui/styles';
import Amen from './Amen';

const useStyles = makeStyles((theme) => ({
  opisMolitve: {
    fontFamily: 'Cardo',
    // backgroundColor: '#f7f7f7',
    justifyContent: 'space-between',
    marginTop: '0.5rem',
    margin: ' auto',
    fontSize: '1.3rem',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      color: '#093145',
      fontSize: '2rem',
    },
  },
}));

function KrajKrunice() {
  const classes = useStyles();
  const { aktivnaZemlja } = storeKrunica;

  return (
    <Fragment>
      <div className={classes.opisMolitve}>
        <div className="slomiLiniju">{aktivnaZemlja.zdravoKraljice}</div>
        <div>{aktivnaZemlja.uImeOcaSina}</div>
        <div>
          <Amen />
        </div>
      </div>
    </Fragment>
  );
}

export default KrajKrunice;
