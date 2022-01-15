import { observer } from 'mobx-react';
import { Fragment } from 'react';
import Typography from '@mui/material/Typography';

import { storeKrunica } from '../store/KrunicaStore';
import ZdravoMarijaPocetak from './ZdravoMarijaPocetak';
import ZdravoMarijaKraj from './ZdravoMarijaKraj';
import SlavaOcu from './SlavaOcu';

function Zrno(props) {
  // const { brojZrna } = props;
  const { aktivnaZemlja, zrno, aktivnoOtajstvo } = storeKrunica;

  // console.log('aktivanTekstZrno', aktivanTekstZrno);

  return (
    <Fragment>
      <div className="opis-molitve">
        <ZdravoMarijaPocetak />
        <div>
          <Typography className="zeleno" variant="h5">
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
          </Typography>
        </div>
        <div>
          <ZdravoMarijaKraj />
        </div>
        <div>
          <SlavaOcu />
        </div>
        {aktivnaZemlja.oMojIsuse}
      </div>
    </Fragment>
  );
}

export default observer(Zrno);