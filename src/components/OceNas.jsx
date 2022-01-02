import { observer } from 'mobx-react';
import { Fragment } from 'react';
import { storeKrunica } from '../store/KrunicaStore';
import Amen from './Amen';

function OceNas() {
  const {
    aktivnaZemlja: { oceNas, oceNasText },
  } = storeKrunica;

  return (
    <Fragment>
      <div className="opis-molitve">
        <strong>{oceNas}</strong>
        {oceNasText}
        <div>
          <Amen />
        </div>
      </div>
    </Fragment>
  );
}

export default observer(OceNas);
