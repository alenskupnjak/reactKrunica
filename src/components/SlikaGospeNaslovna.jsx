import { Fragment } from 'react';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Container } from '@mui/material';

import { storeKrunica } from '../store/KrunicaStore';
import { ConstructionOutlined } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  card: {
    // position: 'relative',
    // zIndex: '10',
    // '&:hover': {
    //   display: 'none',
    //   // position: 'absolute',
    //   cursor: 'pointer',
    // },
  },
  cardSideFront: {
    '&:hover': {
      display: 'none',
    },
  },
  // nivo: {
  //   position: 'relative',
  //   zIndex: '8',
  //   backgroundColor: 'red',
  // },
}));

function SlikaGospeNaslovna() {
  const classes = useStyles();
  // const { zrno, naprijed, nazad, aktivnaZemlja, prijevodOtajstvatext } =
  // storeKrunica;
  const { aktivnaZemlja, nazad, naprijed, promjeniDanUTjednu } = storeKrunica;

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
            <li>
              {naslovna01}
              {/* <Typography align="left" className={classes.nivo}>
                <ArrowForwardIosIcon
                  onClick={() => {
                    console.log('xxxxxxxxxxx');
                    naprijed();
                  }}
                />
              </Typography> */}
            </li>
          </ul>
        </div>
      </div>

      <div className="card__side card__side--back card__side--back-1 ">
        <div className="card__cta">
          <div className="card__price-box">
            <div
              className="text-srednji"
              onChange={(e) => {
                console.log('promjeni');
                promjeniDanUTjednu(e);
              }}
            >
              Ponedjeljak (Radosna otajstva)
            </div>
            <div href="text/zalosna.html" className="text-srednji">
              Utorak (Žalosna otajstva)
            </div>
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
