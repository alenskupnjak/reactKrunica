import { Fragment } from 'react';
import { storeKrunica } from '../store/KrunicaStore';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  opisMolitve: {
    fontFamily: 'Cardo',
    backgroundColor: '#f7f7f7',
    justifyContent: 'space-between',
    marginTop: '0.5rem',
    margin: ' auto',
    fontSize: '1.2rem',
    textAlign: 'center',
    lineHeight: '1.2',
  },
}));

function ZdravoMarijaKraj() {
  const classes = useStyles();
  const { aktivnaZemlja } = storeKrunica;
  return (
    <Fragment>
      <div className={classes.opisMolitve}>
        {aktivnaZemlja.zdravoMarijaKraj}
      </div>
    </Fragment>
  );
}

export default ZdravoMarijaKraj;
