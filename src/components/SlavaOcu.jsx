import { observer } from 'mobx-react';
import { Fragment } from 'react';
import { storeKrunica } from '../store/KrunicaStore';

function SlavaOcu() {
  return (
    <Fragment>
      <div class="opis-molitve">
        <strong>Slava Ocu</strong> i Sinu{' '}
        <span style={{ fontSize: '24px' }}>†</span> i Duhu Svetomu. Kako bijaše
        na početku, tako i sada i vazda i u vijeke vjekova.
        <div>Amen.</div>
      </div>
    </Fragment>
  );
}

export default observer(SlavaOcu);
