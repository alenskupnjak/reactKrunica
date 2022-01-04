import { Fragment } from 'react';
import { storeKrunica } from '../store/KrunicaStore';
import Amen from './Amen';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  opisMolitve: {
    fontFamily: 'Cardo',
    backgroundColor: '#f7f7f7',
    justifyContent: 'space-between',
    marginTop: '0.5rem',
    textAlign: 'center',
    /* background-size: 1.5rem; */
    /* padding: 0.3rem; */
    /* border-radius: 0.2rem; */
    /* box-shadow: 0 1.5rem 1rem rgba(0, 0, 0, 0.15); */
    /* transition: transform 3s; */
    /* font-size: 1.3rem;  */

    /* https://www.w3schools.com/css/css3_animations.asp */
    /* animation-name: example;
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-delay: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate; */
    /* animation: slideInFromLeft 500ms ease-out 1 normal; */
    /* animation: slideInFromLeft 1s ease-out; */
  },
}));

function ApostolskoVjerovanje() {
  const {
    aktivnaZemlja: { uImeOcaSina, isuse, text0b, text0c, text0d },
  } = storeKrunica;
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.opisMolitve}>
        <div>
          <strong>{uImeOcaSina}</strong>
        </div>
        <div>
          <strong>{isuse}</strong>
          {text0b}
        </div>
        <div>
          <strong>{text0c}</strong>
        </div>
        {text0d}
        <div>
          <Amen />
        </div>
      </div>
    </Fragment>
  );
}

export default ApostolskoVjerovanje;
