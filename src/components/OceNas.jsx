import { observer } from 'mobx-react';
import { Fragment } from 'react';
import { storeKrunica } from '../store/KrunicaStore';

function OceNas() {
  const { amen } = storeKrunica;
  return (
    <Fragment>
      <div className="opis-molitve">
        <strong>Oče naš</strong>, koji jesi na nebesima, sveti se ime tvoje.
        Dođi kraljevstvo tvoje. Budi volja tvoja, kako na nebu tako i na zemlji.
        Kruh naš svagdanji daj nam danas, i otpusti nam duge naše, kako i mi
        otpuštamo dužnicima našim, i ne uvedi nas u napast, nego izbavi nas od
        zla.
        <div>{amen}</div>
      </div>
    </Fragment>
  );
}

export default observer(OceNas);
