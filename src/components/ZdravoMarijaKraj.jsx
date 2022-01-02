import { Fragment } from 'react';
import { storeKrunica } from '../store/KrunicaStore';

function ZdravoMarijaKraj() {
  const { aktivnaZemlja } = storeKrunica;
  return (
    <Fragment>
      <div className="opis-molitve">{aktivnaZemlja.zdravoMarijaKraj}</div>
    </Fragment>
  );
}

export default ZdravoMarijaKraj;
