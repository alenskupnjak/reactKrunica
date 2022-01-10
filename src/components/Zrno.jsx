import { observer } from 'mobx-react';
import { Fragment } from 'react';
import Typography from '@mui/material/Typography';

import { storeKrunica } from '../store/KrunicaStore';
import ZdravoMarijaPocetak from './ZdravoMarijaPocetak';
import ZdravoMarijaKraj from './ZdravoMarijaKraj';
import Amen from './Amen';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  opisMolitve: {
    fontFamily: 'Cardo',
    backgroundColor: '#f7f7f7',
    justifyContent: 'space-between',
    marginTop: '0.5rem',
    /* background-size: 1.5rem; */
    /* padding: 0.3rem; */
    textAlign: 'center',
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

function Zrno() {
  const { aktivnaZemlja, aktivnoOtajstvo, zrno } = storeKrunica;
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.opisMolitve}>
        <ZdravoMarijaPocetak />
        <div>
          <Typography className="zeleno" variant="h5">
            {zrno === 2 && aktivnaZemlja.vjera}
            {zrno === 3 && aktivnaZemlja.ufanje}
            {zrno === 4 && aktivnaZemlja.ljubav}
            {/* Prva desetica */}
            {aktivnoOtajstvo === 'otajstvoZalosno' &&
              zrno > 6 &&
              zrno < 16 &&
              aktivnaZemlja.prvaDeseticaZalosna}
            {aktivnoOtajstvo === 'otajstvoSlavno' &&
              zrno > 6 &&
              zrno < 16 &&
              aktivnaZemlja.prvaDeseticaSlavna}
            {aktivnoOtajstvo === 'otajstvoRadosna' &&
              zrno > 6 &&
              zrno < 16 &&
              aktivnaZemlja.prvaDeseticaRadosna}
            {aktivnoOtajstvo === 'otajstvoSvjetla' &&
              zrno > 6 &&
              zrno < 16 &&
              aktivnaZemlja.prvaDeseticaSvjetla}
            {/* Druga desetica */}
            {aktivnoOtajstvo === 'otajstvoZalosno' &&
              zrno > 17 &&
              zrno < 27 &&
              aktivnaZemlja.drugaDeseticaZalosna}
            {aktivnoOtajstvo === 'otajstvoSlavno' &&
              zrno > 17 &&
              zrno < 27 &&
              aktivnaZemlja.drugaDeseticaSlavna}
            {aktivnoOtajstvo === 'otajstvoRadosna' &&
              zrno > 17 &&
              zrno < 27 &&
              aktivnaZemlja.drugaDeseticaRadosna}
            {aktivnoOtajstvo === 'otajstvoSvjetla' &&
              zrno > 17 &&
              zrno < 27 &&
              aktivnaZemlja.drugaDeseticaSvjetla}
            {/* Treca desetica */}
            {aktivnoOtajstvo === 'otajstvoZalosno' &&
              zrno > 28 &&
              zrno < 38 &&
              aktivnaZemlja.trecaDeseticaZalosna}
            {aktivnoOtajstvo === 'otajstvoSlavno' &&
              zrno > 28 &&
              zrno < 38 &&
              aktivnaZemlja.trecaDeseticaSlavna}
            {aktivnoOtajstvo === 'otajstvoRadosna' &&
              zrno > 28 &&
              zrno < 38 &&
              aktivnaZemlja.trecaDeseticaRadosna}
            {aktivnoOtajstvo === 'otajstvoSvjetla' &&
              zrno > 28 &&
              zrno < 38 &&
              aktivnaZemlja.trecaDeseticaSvjetla}
            {/* Četvrta desetica */}
            {aktivnoOtajstvo === 'otajstvoZalosno' &&
              zrno > 39 &&
              zrno < 49 &&
              aktivnaZemlja.cetvrtaDeseticaZalosna}
            {aktivnoOtajstvo === 'otajstvoSlavno' &&
              zrno > 39 &&
              zrno < 49 &&
              aktivnaZemlja.cetvrtaDeseticaSlavna}
            {aktivnoOtajstvo === 'otajstvoRadosna' &&
              zrno > 39 &&
              zrno < 49 &&
              aktivnaZemlja.cetvrtaDeseticaRadosna}
            {aktivnoOtajstvo === 'otajstvoSvjetla' &&
              zrno > 39 &&
              zrno < 49 &&
              aktivnaZemlja.cetvrtaDeseticaSvjetla}
            {/* Peta desetica */}
            {aktivnoOtajstvo === 'otajstvoZalosno' &&
              zrno > 50 &&
              zrno < 60 &&
              aktivnaZemlja.petaDeseticaZalosna}
            {aktivnoOtajstvo === 'otajstvoSlavno' &&
              zrno > 50 &&
              zrno < 60 &&
              aktivnaZemlja.petaDeseticaSlavna}
            {aktivnoOtajstvo === 'otajstvoRadosna' &&
              zrno > 50 &&
              zrno < 60 &&
              aktivnaZemlja.petaDeseticaRadosna}
            {aktivnoOtajstvo === 'otajstvoSvjetla' &&
              zrno > 50 &&
              zrno < 60 &&
              aktivnaZemlja.petaDeseticaSvjetla}
          </Typography>
        </div>
        <ZdravoMarijaKraj />
        <Amen />
      </div>
    </Fragment>
  );
}

export default observer(Zrno);
