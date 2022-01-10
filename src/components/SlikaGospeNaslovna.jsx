// import { Fragment } from 'react';
// import Typography from '@mui/material/Typography';
// import { makeStyles } from '@mui/styles';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import { Container } from '@mui/material';

import { storeKrunica } from '../store/KrunicaStore';

function SlikaGospeNaslovna() {
  // const { zrno, naprijed, nazad, aktivnaZemlja, prijevodOtajstvatext } =
  // storeKrunica;
  const { aktivnaZemlja } = storeKrunica;

  const { naslovna01, naslovna02 } = aktivnaZemlja;
  console.log('aktivnaZemlja=', aktivnaZemlja);

  return (
    <div className="card">
      <div className="card__side card__side--front">
        <div className="card__picture card__picture--1">&nbsp;</div>
        <h4 className="card__heading">
          <span className="card__heading-span card__heading-span--1">
            {naslovna02}
          </span>
        </h4>
        <div className="card__details">
          <ul>
            <li>{naslovna01}</li>
          </ul>
        </div>
      </div>

      <div className="card__side card__side--back card__side--back-1 ">
        <div className="card__cta">
          <div className="card__price-box">
            <div className="text-srednji">Ponedjeljak (Radosna otajstva)</div>
            <div className="text-srednji">Utorak (Žalosna otajstva)</div>
            <div className="text-srednji">Srijeda (Slavna otajstva)</div>
            <div className="text-srednji">Četvrtak (Otajstva svjetla)</div>
            <div className="text-srednji">Petak (Žalosna otajstva)</div>
            <div className="text-srednji">Subota (Radosna otajstva)</div>
            <div className="text-srednji">Nedjelja (Slavna otajstva)</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlikaGospeNaslovna;
