import { observer } from 'mobx-react';
import { Fragment } from 'react';
import { makeStyles } from '@mui/styles';
import { storeKrunica } from '../store/KrunicaStore';
import ZdravoMarijaPocetak from './ZdravoMarijaPocetak';
import ZdravoMarijaKraj from './ZdravoMarijaKraj';
import SlavaOcu from './SlavaOcu';

const useStyles = makeStyles((theme) => ({
  opisMolitve: {
    fontFamily: 'Cardo',
    justifyContent: 'space-between',
    margin: ' auto',
    fontSize: '1.2rem',
    textAlign: 'center',
    lineHeight: '1.2',
    [theme.breakpoints.up('sm')]: {
      color: '#093145',
      fontSize: '2rem',
    },
  },
  zeleno: {
    fontFamily: 'Cardo',
    justifyContent: 'space-between',
    marginTop: '0.5rem',
    margin: ' auto',
    fontSize: '1.3rem',
    textAlign: 'center',
    color: '#1b921b;',
    [theme.breakpoints.up('sm')]: {
      color: '#093145',
      fontSize: '2rem',
    },
  },
}));

function Zrno() {
  const classes = useStyles();
  const { aktivnaZemlja, zrno, aktivnoOtajstvo } = storeKrunica;

  return (
    <Fragment>
      <div className={classes.opisMolitve}>
        <ZdravoMarijaPocetak />
        <div>
          <div className={classes.zeleno}>
            {aktivnoOtajstvo === 'otajstvoZalosno' &&
              zrno === 16 &&
              aktivnaZemlja.prvaDeseticaZalosna}
            {aktivnoOtajstvo === 'otajstvoSlavno' &&
              zrno === 16 &&
              aktivnaZemlja.prvaDeseticaSlavna}
            {aktivnoOtajstvo === 'otajstvoRadosna' &&
              zrno === 16 &&
              aktivnaZemlja.prvaDeseticaRadosna}
            {aktivnoOtajstvo === 'otajstvoSvjetla' &&
              zrno === 16 &&
              aktivnaZemlja.prvaDeseticaSvjetla}

            {aktivnoOtajstvo === 'otajstvoZalosno' &&
              zrno === 27 &&
              aktivnaZemlja.drugaDeseticaZalosna}
            {aktivnoOtajstvo === 'otajstvoSlavno' &&
              zrno === 27 &&
              aktivnaZemlja.drugaDeseticaSlavna}
            {aktivnoOtajstvo === 'otajstvoRadosna' &&
              zrno === 27 &&
              aktivnaZemlja.drugaDeseticaRadosna}
            {aktivnoOtajstvo === 'otajstvoSvjetla' &&
              zrno === 27 &&
              aktivnaZemlja.drugaDeseticaSvjetla}

            {aktivnoOtajstvo === 'otajstvoZalosno' &&
              zrno === 38 &&
              aktivnaZemlja.trecaDeseticaZalosna}
            {aktivnoOtajstvo === 'otajstvoSlavno' &&
              zrno === 38 &&
              aktivnaZemlja.trecaDeseticaSlavna}
            {aktivnoOtajstvo === 'otajstvoRadosna' &&
              zrno === 38 &&
              aktivnaZemlja.trecaDeseticaRadosna}
            {aktivnoOtajstvo === 'otajstvoSvjetla' &&
              zrno === 38 &&
              aktivnaZemlja.trecaDeseticaSvjetla}

            {aktivnoOtajstvo === 'otajstvoZalosno' &&
              zrno === 49 &&
              aktivnaZemlja.cetvrtaDeseticaZalosna}
            {aktivnoOtajstvo === 'otajstvoSlavno' &&
              zrno === 49 &&
              aktivnaZemlja.cetvrtaDeseticaSlavna}
            {aktivnoOtajstvo === 'otajstvoRadosna' &&
              zrno === 49 &&
              aktivnaZemlja.cetvrtaDeseticaRadosna}
            {aktivnoOtajstvo === 'otajstvoSvjetla' &&
              zrno === 49 &&
              aktivnaZemlja.cetvrtaDeseticaSvjetla}

            {aktivnoOtajstvo === 'otajstvoZalosno' &&
              zrno === 60 &&
              aktivnaZemlja.petaDeseticaZalosna}
            {aktivnoOtajstvo === 'otajstvoSlavno' &&
              zrno === 60 &&
              aktivnaZemlja.petaDeseticaSlavna}
            {aktivnoOtajstvo === 'otajstvoRadosna' &&
              zrno === 60 &&
              aktivnaZemlja.petaDeseticaRadosna}
            {aktivnoOtajstvo === 'otajstvoSvjetla' &&
              zrno === 60 &&
              aktivnaZemlja.petaDeseticaSvjetla}
          </div>
        </div>
        <div>
          <ZdravoMarijaKraj />
        </div>
        <div>
          <SlavaOcu />
        </div>
        <div className={classes.opisMolitve}>{aktivnaZemlja.oMojIsuse}</div>
      </div>
    </Fragment>
  );
}

export default observer(Zrno);
