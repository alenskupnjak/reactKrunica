import { observer } from 'mobx-react';
import { makeStyles } from '@mui/styles';
import { Fragment } from 'react';
import { storeKrunica } from '../store/KrunicaStore';
import Amen from './Amen';

const useStyles = makeStyles((theme) => ({
  opisMolitve: {
    fontFamily: 'Cardo',
    // backgroundColor: '#f7f7f7',
    justifyContent: 'space-between',
    marginTop: '0.5rem',
    textAlign: 'center',
    fontSize: '1.4rem',
  },
  opisMolitveDeset: {
    justifyContent: 'space-between',
    marginTop: '0.5rem',
    margin: ' auto',
    fontSize: '1.2rem',
    textAlign: 'center',
    lineHeight: '1.2',
    [theme.breakpoints.up('sm')]: {
      color: 'orange',
      fontSize: '2rem',
    },
  },
}));

function SlavaOcu() {
  const classes = useStyles();
  const { aktivnaZemlja, zrno } = storeKrunica;
  const class10 =
    zrno === 16 || zrno === 27 || zrno === 38 || zrno === 49 || zrno === 60
      ? classes.opisMolitveDeset
      : classes.opisMolitve;

  return (
    <Fragment>
      <div className={class10}>
        {aktivnaZemlja.slavaOcu}
        <div>
          <Amen />
        </div>
      </div>
    </Fragment>
  );
}

export default observer(SlavaOcu);
