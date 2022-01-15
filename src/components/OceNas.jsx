import { observer } from 'mobx-react';
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
    fontSize: '1.5rem',
  },
}));

function OceNas() {
  const classes = useStyles();
  const {
    aktivnaZemlja: { oceNas, oceNasText },
  } = storeKrunica;

  return (
    <Fragment>
      <div className={classes.opisMolitve}>
        <strong>{oceNas}</strong>
        {oceNasText}
        <div>
          <Amen />
        </div>
      </div>
    </Fragment>
  );
}

export default observer(OceNas);
