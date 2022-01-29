import { observer } from 'mobx-react';
import { Fragment } from 'react';

import { storeKrunica } from '../store/KrunicaStore';
import ZdravoMarijaPocetak from './ZdravoMarijaPocetak';
import ZdravoMarijaKraj from './ZdravoMarijaKraj';
import Amen from './Amen';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  opisMolitve: {
    fontFamily: 'Cardo',
    // backgroundColor: '#f7f7f7',
    justifyContent: 'space-between',
    marginTop: '0.5rem',
    margin: ' auto',
    fontSize: '1.4rem',
    textAlign: 'center',
    padding: '0',
    height: '80vh',
    [theme.breakpoints.up('sm')]: {
      backgroundColor: '#e9e9e9',
      color: '#555',
      fontSize: '2rem',
      border: '1px solid #ece7e7',
      width: '50%',
      margin: 'auto',
    },
  },
}));

function Zrno() {
  const classes = useStyles();
  const { aktivnaZemlja, aktivnoOtajstvo, zrno } = storeKrunica;

  return (
    <Fragment>
      <div className={classes.opisMolitve}>
        <ZdravoMarijaPocetak />
        <div>
          <div className="zeleno">
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
          </div>
        </div>
        <ZdravoMarijaKraj />
        <Amen />
      </div>
    </Fragment>
  );
}

export default observer(Zrno);
