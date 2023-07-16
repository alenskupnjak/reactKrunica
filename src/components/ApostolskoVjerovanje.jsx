import { Fragment } from 'react';
import { makeStyles } from '@mui/styles';
import { storeKrunica } from '../store/KrunicaStore';
import { observer } from 'mobx-react';
import Amen from './Amen';

const useStyles = makeStyles((theme) => ({
  opisMolitve: {
    justifyContent: 'space-between',
    textAlign: 'center',
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('sm')]: {
    border: '1px solid #ece7e7',
    width: '30%',
    margin: 'auto',
    opisZrna: {
      width: '60%',
      marginLeft: '20%',
      boxShadow: '0 1.5rem 1rem rgba(0, 0, 0, 0.2)',
    },
    opisMolitve: {
      fontSize: '2rem',
      color: '#093145',
      lineHeight: '1.3',
    },
  },
  nivo: {
    position: 'relative',
    zIndex: '5',
    margin: '0',
  },
}));

function ApostolskoVjerovanje() {
  const classes = useStyles();
  const { aktivnaZemlja } = storeKrunica;
  const {
    uImeOcaSina,
    isuse,
    apostolskoUvod,
    apostolskoVjerovanje,
    apostolskoVjerovanjeText,
  } = aktivnaZemlja;

  return (
    <Fragment>
      <div id="apostolsko" className={classes.opisMolitve}>
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

export default observer(ApostolskoVjerovanje);
