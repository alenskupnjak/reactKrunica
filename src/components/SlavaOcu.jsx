import { observer } from 'mobx-react';
import { Fragment } from 'react';
import { storeKrunica } from '../store/KrunicaStore';
import Amen from './Amen';

function SlavaOcu() {
  const { aktivnaZemlja } = storeKrunica;

  return (
    <Fragment>
      <div className="opis-molitve">
        {aktivnaZemlja.slavaOcu}
        <div>
          <Amen />
        </div>
      </div>
    </Fragment>
  );
}

export default observer(SlavaOcu);
