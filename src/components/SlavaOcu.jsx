import { observer } from 'mobx-react';
import { makeStyles } from '@mui/styles';
import { Fragment } from 'react';
import { storeKrunica } from '../store/KrunicaStore';
import Amen from './Amen';

const useStyles = makeStyles((theme) => ({
  opisMolitve: {
    fontFamily: 'Cardo',
    backgroundColor: '#f7f7f7',
    justifyContent: 'space-between',
    marginTop: '0.5rem',
    textAlign: 'center',
  },
}));

function SlavaOcu() {
  const classes = useStyles();
  const { aktivnaZemlja } = storeKrunica;

  return (
    <Fragment>
      <div className={classes.opisMolitve}>
        {aktivnaZemlja.slavaOcu}
        <div>
          <Amen />
        </div>
      </div>
    </Fragment>
  );
}

export default observer(SlavaOcu);
