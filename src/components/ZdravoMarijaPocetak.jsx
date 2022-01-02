import { Fragment } from 'react';
import { storeKrunica } from '../store/KrunicaStore';

function ZdravoMarijaPocetak() {
  const { aktivnaZemlja } = storeKrunica;
  return (
    <Fragment>
      <div className="opis-molitve">{aktivnaZemlja.zdravoMarijaPocetak}</div>
    </Fragment>
  );
}

export default ZdravoMarijaPocetak;
