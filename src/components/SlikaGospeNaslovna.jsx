import { Fragment } from 'react';
import { storeKrunica } from '../store/KrunicaStore';
import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//   card: {
//     position: 'relative',
//     zIndex: '10',
//     '&:hover': {
//       display: 'none',
//       // position: 'absolute',
//       cursor: 'pointer',
//     },
//   },
//   cardSideFront: {
//     '&:hover': {
//       display: 'none',
//     },
//   },
// }));

function SlikaGospeNaslovna() {
  // const classes = useStyles();
  const { aktivnaZemlja, zrno } = storeKrunica;

  return (
    <div className="card">
      <div className="card__side card__side--front">
        <div className="card__picture card__picture--1">&nbsp;</div>
        <h4 className="card__heading">
          <span className="card__heading-span card__heading-span--1">
            Gospina krunica
          </span>
        </h4>
        <div className="card__details">
          <ul>
            <li>Hvaljen Isus i Marija!</li>
          </ul>
        </div>
      </div>

      <div className="card__side card__side--back card__side--back-1 ">
        <div className="card__cta">
          <div className="card__price-box">
            <a href="text/radosna.html" className="text-srednji">
              Ponedjeljak (Radosna otajstva)
            </a>
            <a href="text/zalosna.html" className="text-srednji">
              Utorak (Žalosna otajstva)
            </a>
            <a href="text/slavna.html" className="text-srednji">
              Srijeda (Slavna otajstva)
            </a>
            <a href="text/svjetla.html" className="text-srednji">
              Četvrtak (Otajstva svjetla)
            </a>
            <a href="text/zalosna.html" className="text-srednji">
              Petak (Žalosna otajstva)
            </a>
            <a href="text/radosna.html" className="text-srednji">
              Subota (Radosna otajstva)
            </a>
            <a href="text/slavna.html" className="text-srednji">
              Nedjelja (Slavna otajstva)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlikaGospeNaslovna;
