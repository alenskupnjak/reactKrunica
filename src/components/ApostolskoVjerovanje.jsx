import { Fragment } from 'react';
import { makeStyles } from '@mui/styles';

import { storeKrunica } from '../store/KrunicaStore';
import Amen from './Amen';

const useStyles = makeStyles((theme) => ({
  opisMolitve: {
    fontFamily: 'Cardo',
    backgroundColor: '#f7f7f7',
    justifyContent: 'space-between',
    marginTop: '0.5rem',
    textAlign: 'center',
    fontSize: '1.2rem',
  },
}));

function ApostolskoVjerovanje() {
  const classes = useStyles();
  const {
    aktivnaZemlja: {
      uImeOcaSina,
      isuse,
      apostolskoUvod,
      apostolskoVjerovanje,
      apostolskoVjerovanjeText,
    },
  } = storeKrunica;
  return (
    <Fragment>
      <div className={classes.opisMolitve}>
        <div>
          <strong>{uImeOcaSina}</strong>
        </div>
        <div>
          <strong>{isuse}</strong>
          {apostolskoUvod}
        </div>
        <div>
          <strong>{apostolskoVjerovanje}</strong>
        </div>
        {apostolskoVjerovanjeText}
        <div>
          <Amen />
        </div>
      </div>
    </Fragment>
  );
}

export default ApostolskoVjerovanje;
