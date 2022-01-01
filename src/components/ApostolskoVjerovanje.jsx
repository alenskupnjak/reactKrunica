import { observer } from 'mobx-react';
import { Fragment } from 'react';
import { storeKrunica } from '../store/KrunicaStore';

function ApostolskoVjerovanje() {
  return (
    <Fragment>
      <div className="opis-molitve">
        <div>
          <strong>U ime Oca i Sina † i Duha Svetoga.</strong>
        </div>
        <div>
          <strong>Isuse</strong>, to je tebi za ljubav, za obraćenje grješnika i
          kao naknada za uvrede koje se nanose Bezgrešnom Srcu Marijinu.
        </div>
        <div>
          <strong>APOSTOLSKO VJEROVANJE</strong>
        </div>
        Vjerujem u Boga, Oca svemogućega, Stvoritelja neba i zemlje. I u Isusa
        Krista, Sina njegova jedinoga, Gospodina našega, koji je začet po Duhu
        Svetom, rođen od Marije Djevice, mučen pod Poncijem Pilatom, raspet,
        umro i pokopan; sašao nad pakao; treći dan uskrsnuo od mrtvih; uzašao na
        nebesa, sjedi o desnu Boga Oca svemogućega; odonud će doći suditi žive i
        mrtve. Vjerujem u Duha Svetoga, svetu Crkvu katoličku, općinstvo svetih,
        oproštenje grijeha, uskrsnuće tijela, i život vječni.
        <div>Amen.</div>
      </div>
    </Fragment>
  );
}

export default observer(ApostolskoVjerovanje);
