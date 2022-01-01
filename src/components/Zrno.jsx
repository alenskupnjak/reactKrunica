import { observer } from 'mobx-react';
import { Fragment } from 'react';
import { storeKrunica } from '../store/KrunicaStore';

function Zrno(props) {
  const { broj } = props;
  const { amen } = storeKrunica;

  return (
    <Fragment>
      <div className="opis-molitve">
        <strong>Zdravo Marijo</strong>, milosti puna, Gospodin s tobom!
        Blagoslovljena ti među ženama i blagoslovljen plod utrobe tvoje
        <div>
          <strong className="zeleno"> Isus, koji neka nam umnoži vjeru!</strong>
        </div>
        <div>
          <strong> Sveta Marijo</strong>, Majko Božja, moli za nas grješnike
          sada i na času smrti naše.
        </div>
        <div>{amen}</div>
      </div>
    </Fragment>
  );
}

export default observer(Zrno);
