import { Fragment } from 'react';
import { storeKrunica } from '../store/KrunicaStore';
import Amen from './Amen';

function ApostolskoVjerovanje() {
  const {
    aktivnaZemlja: { uImeOcaSina, isuse, text0b, text0c, text0d },
  } = storeKrunica;
  return (
    <Fragment>
      <div className="opis-molitve">
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
