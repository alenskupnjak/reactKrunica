import zrno00 from '../img/00.png';
import zrno01 from '../img/01.png';
import zrno02 from '../img/02.png';
import zrno03 from '../img/03.png';
import zrno04 from '../img/04.png';
import zrno05 from '../img/05.png';
import zrno06 from '../img/06.png';
import zrno07 from '../img/07.png';
import zrno08 from '../img/08.png';
import zrno09 from '../img/09.png';
import zrno10 from '../img/10.png';
import zrno11 from '../img/11.png';
import zrno12 from '../img/12.png';
import zrno13 from '../img/13.png';
import zrno14 from '../img/14.png';
import zrno15 from '../img/15.png';
import zrno16 from '../img/16.png';
import zrno17 from '../img/17.png';
import zrno18 from '../img/18.png';
import zrno19 from '../img/19.png';
import zrno20 from '../img/20.png';
import zrno21 from '../img/21.png';

import { observer } from 'mobx-react';
// import { Fragment } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import Typography from '@mui/material/Typography';

import { storeKrunica } from '../store/KrunicaStore';

import ApostolskoVjerovanje from './ApostolskoVjerovanje';
import OceNas from './OceNas';
import Zrno from './Zrno';
import SlavaOcu from './SlavaOcu';

function Kostur() {
  const { zrno, naprijed, nazad, aktivnaZemlja } = storeKrunica;

  console.log('aktivnaZemlja', aktivnaZemlja);
  // console.log('zrno', aktivnaZemlja.text1);
  // console.log('zrno', aktivnaZemlja[`text${1}`]);

  return (
    <div className="row">
      <div className="col-1-of-2 slika-krunice">
        {zrno === 0 && <img src={zrno00} className="sli-baza" alt="krunica" />}
        {zrno === 1 && <img src={zrno01} className="sli-baza" alt="krunica" />}
        {zrno === 2 && <img src={zrno02} className="sli-baza" alt="krunica" />}
        {zrno === 3 && <img src={zrno03} className="sli-baza" alt="krunica" />}
        {zrno === 4 && <img src={zrno04} className="sli-baza" alt="krunica" />}
        {zrno === 5 && <img src={zrno05} className="sli-baza" alt="krunica" />}
        {zrno === 6 && <img src={zrno06} className="sli-baza" alt="krunica" />}
        {zrno === 7 && <img src={zrno07} className="sli-baza" alt="krunica" />}
        {zrno === 8 && <img src={zrno08} className="sli-baza" alt="krunica" />}
        {zrno === 9 && <img src={zrno09} className="sli-baza" alt="krunica" />}
        {zrno === 10 && <img src={zrno10} className="sli-baza" alt="krunica" />}
        {zrno === 11 && <img src={zrno11} className="sli-baza" alt="krunica" />}
        {zrno === 12 && <img src={zrno12} className="sli-baza" alt="krunica" />}
        {zrno === 13 && <img src={zrno13} className="sli-baza" alt="krunica" />}
        {zrno === 14 && <img src={zrno14} className="sli-baza" alt="krunica" />}
        {zrno === 15 && <img src={zrno15} className="sli-baza" alt="krunica" />}
        {zrno === 16 && <img src={zrno16} className="sli-baza" alt="krunica" />}
        {zrno === 17 && <img src={zrno17} className="sli-baza" alt="krunica" />}
        {zrno === 18 && <img src={zrno18} className="sli-baza" alt="krunica" />}
        {zrno === 19 && <img src={zrno19} className="sli-baza" alt="krunica" />}
        {zrno === 20 && <img src={zrno20} className="sli-baza" alt="krunica" />}
        {zrno === 21 && <img src={zrno21} className="sli-baza" alt="krunica" />}
      </div>

      <div className="col-1-of-2">
        <div className="row zaglavlje">
          <div className="col-2-of-4 dan" title="Molitva gospine krunice">
            <h1>Žalosna otajstva</h1>
          </div>
          <div className="col-2-of-4 povratak" title="Molitva gospine krunice">
            <h1>
              <a href="../index.html">
                {' '}
                <span className="fas fa-cross"></span> Povratak
              </a>
            </h1>
          </div>
        </div>

        <div className="row polja-smjer">
          <div className="col-2-of-4">
            <div>
              <span>
                <ArrowBackIosIcon
                  onClick={() => {
                    nazad();
                  }}
                />
              </span>
              <span>{zrno}</span>
              <span>
                <ArrowForwardIosIcon
                  onClick={() => {
                    naprijed();
                  }}
                />
              </span>
            </div>
          </div>
        </div>

        <div className="opis-zrna">{aktivnaZemlja[`naslov${zrno}`]}</div>

        {zrno === 0 && <ApostolskoVjerovanje />}
        {zrno === 1 && <OceNas />}
        {zrno === 2 && <Zrno broj={2} />}
        {zrno === 3 && <Zrno broj={3} />}
        {zrno === 4 && <Zrno broj={4} />}
        {zrno === 5 && <SlavaOcu />}
      </div>
    </div>
  );
}

export default observer(Kostur);
