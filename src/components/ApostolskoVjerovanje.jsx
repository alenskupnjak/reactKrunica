import { Fragment } from 'react';
import { makeStyles } from '@mui/styles';
import { storeKrunica } from '../store/KrunicaStore';
import Amen from './Amen';

const useStyles = makeStyles((theme) => ({
  opisMolitve: {
    fontFamily: 'Cardo',
    // backgroundColor: '#f7f7f7',
    justifyContent: 'space-between',
    marginTop: '0.5rem',
    textAlign: 'center',
    fontSize: '1.2rem',
    lineHeight: '1.1',
  },
  [theme.breakpoints.up('sm')]: {
    color: '#555',
    border: '1px solid #ece7e7',
    width: '30%',
    margin: 'auto',
    opisZrna: {
      width: '60%',
      marginLeft: '20%',
      boxShadow: '0 1.5rem 1rem rgba(0, 0, 0, 0.15)',
    },
    opisMolitve: {
      fontSize: '2rem',
      color: 'orange',
      lineHeight: '1.3',
    },
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
