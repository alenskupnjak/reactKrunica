import { Fragment } from 'react';
import { storeKrunica } from '../store/KrunicaStore';
import Amen from './Amen';

function KrajKrunice() {
  const { aktivnaZemlja } = storeKrunica;

  return (
    <Fragment>
      <div className="opis-molitve">
        <div className="slomiLiniju">{aktivnaZemlja.zdravoKraljice}</div>
        <div>{aktivnaZemlja.uImeOcaSina}</div>
        <div>
          <Amen />
        </div>
      </div>
    </Fragment>
  );
}

export default KrajKrunice;
