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
import zrno22 from '../img/22.png';
import zrno23 from '../img/23.png';
import zrno24 from '../img/24.png';
import zrno25 from '../img/25.png';
import zrno26 from '../img/26.png';
import zrno27 from '../img/27.png';
import zrno28 from '../img/28.png';
import zrno29 from '../img/29.png';
import zrno30 from '../img/30.png';
import zrno31 from '../img/31.png';
import zrno32 from '../img/32.png';
import zrno33 from '../img/33.png';
import zrno34 from '../img/34.png';
import zrno35 from '../img/35.png';
import zrno36 from '../img/36.png';
import zrno37 from '../img/37.png';
import zrno38 from '../img/38.png';
import zrno39 from '../img/39.png';
import zrno40 from '../img/40.png';
import zrno41 from '../img/41.png';
import zrno42 from '../img/42.png';
import zrno43 from '../img/43.png';
import zrno44 from '../img/44.png';
import zrno45 from '../img/45.png';
import zrno46 from '../img/46.png';
import zrno47 from '../img/47.png';
import zrno48 from '../img/48.png';
import zrno49 from '../img/49.png';
import zrno50 from '../img/50.png';
import zrno51 from '../img/51.png';
import zrno52 from '../img/52.png';
import zrno53 from '../img/53.png';
import zrno54 from '../img/54.png';
import zrno55 from '../img/55.png';
import zrno56 from '../img/56.png';
import zrno57 from '../img/57.png';
import zrno58 from '../img/58.png';
import zrno59 from '../img/59.png';
import zrno60 from '../img/60.png';
import zrno61 from '../img/61.png';

import { observer } from 'mobx-react';
// import { Fragment } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Typography from '@mui/material/Typography';

import { storeKrunica } from '../store/KrunicaStore';

import ApostolskoVjerovanje from './ApostolskoVjerovanje';
import OceNas from './OceNas';
import Zrno from './Zrno';
import SlavaOcu from './SlavaOcu';
import ZrnoDeset from './ZrnoDeset';
import KrajKrunice from './KrajKrunice';

function Krunica() {
  const { zrno, naprijed, nazad, aktivnaZemlja, otajstvoTekst } = storeKrunica;

  // console.log(otajstvoTekst);

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
        {zrno === 22 && <img src={zrno22} className="sli-baza" alt="krunica" />}
        {zrno === 23 && <img src={zrno23} className="sli-baza" alt="krunica" />}
        {zrno === 24 && <img src={zrno24} className="sli-baza" alt="krunica" />}
        {zrno === 25 && <img src={zrno25} className="sli-baza" alt="krunica" />}
        {zrno === 26 && <img src={zrno26} className="sli-baza" alt="krunica" />}
        {zrno === 27 && <img src={zrno27} className="sli-baza" alt="krunica" />}
        {zrno === 28 && <img src={zrno28} className="sli-baza" alt="krunica" />}
        {zrno === 29 && <img src={zrno29} className="sli-baza" alt="krunica" />}
        {zrno === 30 && <img src={zrno30} className="sli-baza" alt="krunica" />}
        {zrno === 31 && <img src={zrno31} className="sli-baza" alt="krunica" />}
        {zrno === 32 && <img src={zrno32} className="sli-baza" alt="krunica" />}
        {zrno === 33 && <img src={zrno33} className="sli-baza" alt="krunica" />}
        {zrno === 34 && <img src={zrno34} className="sli-baza" alt="krunica" />}
        {zrno === 35 && <img src={zrno35} className="sli-baza" alt="krunica" />}
        {zrno === 36 && <img src={zrno36} className="sli-baza" alt="krunica" />}
        {zrno === 37 && <img src={zrno37} className="sli-baza" alt="krunica" />}
        {zrno === 38 && <img src={zrno38} className="sli-baza" alt="krunica" />}
        {zrno === 39 && <img src={zrno39} className="sli-baza" alt="krunica" />}
        {zrno === 40 && <img src={zrno40} className="sli-baza" alt="krunica" />}
        {zrno === 41 && <img src={zrno41} className="sli-baza" alt="krunica" />}
        {zrno === 42 && <img src={zrno42} className="sli-baza" alt="krunica" />}
        {zrno === 43 && <img src={zrno43} className="sli-baza" alt="krunica" />}
        {zrno === 44 && <img src={zrno44} className="sli-baza" alt="krunica" />}
        {zrno === 45 && <img src={zrno45} className="sli-baza" alt="krunica" />}
        {zrno === 46 && <img src={zrno46} className="sli-baza" alt="krunica" />}
        {zrno === 47 && <img src={zrno47} className="sli-baza" alt="krunica" />}
        {zrno === 48 && <img src={zrno48} className="sli-baza" alt="krunica" />}
        {zrno === 49 && <img src={zrno49} className="sli-baza" alt="krunica" />}
        {zrno === 50 && <img src={zrno50} className="sli-baza" alt="krunica" />}
        {zrno === 51 && <img src={zrno51} className="sli-baza" alt="krunica" />}
        {zrno === 52 && <img src={zrno52} className="sli-baza" alt="krunica" />}
        {zrno === 53 && <img src={zrno53} className="sli-baza" alt="krunica" />}
        {zrno === 54 && <img src={zrno54} className="sli-baza" alt="krunica" />}
        {zrno === 55 && <img src={zrno55} className="sli-baza" alt="krunica" />}
        {zrno === 56 && <img src={zrno56} className="sli-baza" alt="krunica" />}
        {zrno === 57 && <img src={zrno57} className="sli-baza" alt="krunica" />}
        {zrno === 58 && <img src={zrno58} className="sli-baza" alt="krunica" />}
        {zrno === 59 && <img src={zrno59} className="sli-baza" alt="krunica" />}
        {zrno === 60 && <img src={zrno60} className="sli-baza" alt="krunica" />}
        {zrno === 61 && <img src={zrno61} className="sli-baza" alt="krunica" />}
      </div>

      <div className="col-1-of-2">
        <div className="row zaglavlje">
          <div className="col-2-of-4" title={aktivnaZemlja.title}>
            <Typography>{otajstvoTekst}</Typography>
          </div>
          <div className="col-2-of-4 povratak" title={aktivnaZemlja.title}>
            Link na pocetak
          </div>
        </div>

        <div className="opis-zrna">
          <Typography align="left" body="span">
            <ArrowBackIosIcon
              onClick={() => {
                nazad();
              }}
            />
          </Typography>
          <Typography body="span">{aktivnaZemlja[`naslov${zrno}`]}</Typography>
          <Typography align="right" body="span">
            <ArrowForwardIosIcon
              onClick={() => {
                naprijed();
              }}
            />
          </Typography>
        </div>

        {/* {zrno === 0 && <KrajKrunice />} */}
        {zrno === 0 && <ApostolskoVjerovanje />}
        {zrno === 1 && <OceNas />}
        {zrno === 2 && <Zrno />}
        {zrno === 3 && <Zrno />}
        {zrno === 4 && <Zrno />}
        {zrno === 5 && <SlavaOcu />}
        {zrno === 6 && <OceNas />}
        {zrno === 7 && <Zrno />}
        {zrno === 8 && <Zrno />}
        {zrno === 9 && <Zrno />}
        {zrno === 10 && <Zrno />}
        {zrno === 11 && <Zrno />}
        {zrno === 12 && <Zrno />}
        {zrno === 13 && <Zrno />}
        {zrno === 14 && <Zrno />}
        {zrno === 15 && <Zrno />}
        {zrno === 16 && <ZrnoDeset />}
        {zrno === 17 && <OceNas />}
        {zrno === 18 && <Zrno />}
        {zrno === 19 && <Zrno />}
        {zrno === 20 && <Zrno />}
        {zrno === 21 && <Zrno />}
        {zrno === 22 && <Zrno />}
        {zrno === 23 && <Zrno />}
        {zrno === 24 && <Zrno />}
        {zrno === 25 && <Zrno />}
        {zrno === 26 && <Zrno />}
        {zrno === 27 && <ZrnoDeset />}
        {zrno === 28 && <OceNas />}
        {zrno === 29 && <Zrno />}
        {zrno === 30 && <Zrno />}
        {zrno === 31 && <Zrno />}
        {zrno === 32 && <Zrno />}
        {zrno === 33 && <Zrno />}
        {zrno === 34 && <Zrno />}
        {zrno === 35 && <Zrno />}
        {zrno === 36 && <Zrno />}
        {zrno === 37 && <Zrno />}
        {zrno === 38 && <ZrnoDeset />}
        {zrno === 39 && <OceNas />}
        {zrno === 40 && <Zrno />}
        {zrno === 41 && <Zrno />}
        {zrno === 42 && <Zrno />}
        {zrno === 43 && <Zrno />}
        {zrno === 44 && <Zrno />}
        {zrno === 45 && <Zrno />}
        {zrno === 46 && <Zrno />}
        {zrno === 47 && <Zrno />}
        {zrno === 48 && <Zrno />}
        {zrno === 49 && <ZrnoDeset />}
        {zrno === 50 && <OceNas />}
        {zrno === 51 && <Zrno />}
        {zrno === 52 && <Zrno />}
        {zrno === 53 && <Zrno />}
        {zrno === 54 && <Zrno />}
        {zrno === 55 && <Zrno />}
        {zrno === 56 && <Zrno />}
        {zrno === 57 && <Zrno />}
        {zrno === 58 && <Zrno />}
        {zrno === 59 && <Zrno />}
        {zrno === 60 && <ZrnoDeset />}
        {zrno === 61 && <KrajKrunice />}
      </div>
    </div>
  );
}

export default observer(Krunica);
