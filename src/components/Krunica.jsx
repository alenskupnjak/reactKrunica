import { observer } from 'mobx-react';
import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

import zrno01 from 'img/01.png';
import zrno02 from 'img/02.png';
import zrno03 from 'img/03.png';
import zrno04 from 'img/04.png';
import zrno05 from 'img/05.png';
import zrno06 from 'img/06.png';
import zrno07 from 'img/07.png';
import zrno08 from 'img/08.png';
import zrno09 from 'img/09.png';
import zrno10 from 'img/10.png';
import zrno11 from 'img/11.png';
import zrno12 from 'img/12.png';
import zrno13 from 'img/13.png';
import zrno14 from 'img/14.png';
import zrno15 from 'img/15.png';
import zrno16 from 'img/16.png';
import zrno17 from 'img/17.png';
import zrno18 from 'img/18.png';
import zrno19 from 'img/19.png';
import zrno20 from 'img/20.png';
import zrno21 from 'img/21.png';
import zrno22 from 'img/22.png';
import zrno23 from 'img/23.png';
import zrno24 from 'img/24.png';
import zrno25 from 'img/25.png';
import zrno26 from 'img/26.png';
import zrno27 from 'img/27.png';
import zrno28 from 'img/28.png';
import zrno29 from 'img/29.png';
import zrno30 from 'img/30.png';
import zrno31 from 'img/31.png';
import zrno32 from 'img/32.png';
import zrno33 from 'img/33.png';
import zrno34 from 'img/34.png';
import zrno35 from 'img/35.png';
import zrno36 from 'img/36.png';
import zrno37 from 'img/37.png';
import zrno38 from 'img/38.png';
import zrno39 from 'img/39.png';
import zrno40 from 'img/40.png';
import zrno41 from 'img/41.png';
import zrno42 from 'img/42.png';
import zrno43 from 'img/43.png';
import zrno44 from 'img/44.png';
import zrno45 from 'img/45.png';
import zrno46 from 'img/46.png';
import zrno47 from 'img/47.png';
import zrno48 from 'img/48.png';
import zrno49 from 'img/49.png';
import zrno50 from 'img/50.png';
import zrno51 from 'img/51.png';
import zrno52 from 'img/52.png';
import zrno53 from 'img/53.png';
import zrno54 from 'img/54.png';
import zrno55 from 'img/55.png';
import zrno56 from 'img/56.png';
import zrno57 from 'img/57.png';
import zrno58 from 'img/58.png';
import zrno59 from 'img/59.png';
import zrno60 from 'img/60.png';
import zrno61 from 'img/61.png';

import { storeKrunica } from '../store/KrunicaStore';
import ApostolskoVjerovanje from './ApostolskoVjerovanje';
import OceNas from './OceNas';
import Zrno from './Zrno';
import SlavaOcu from './SlavaOcu';
import ZrnoDeset from './ZrnoDeset';
import KrajKrunice from './KrajKrunice';
import SlikaGospeNaslovna from './SlikaGospeNaslovna';
import ZrnoText from './ZrnoText';

const useStyles = makeStyles((theme) => ({
  zaglavlje: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  opisZrnaKrunica: {
    display: 'flex',
    fontSize: '2rem',
    marginTop: '1rem',
    justifyContent: 'space-between',
    backgroundSize: '1.5rem',
    marginBottom: '2rem',
    textAlign: 'center',
    borderRadius: '0.2rem',
  },
  slikaKrunice: {
    position: 'relative',
    left: '0',
    top: '0',
    height: '80vh',
    width: '100%',
  },
  sliBaza: {
    position: 'absolute',
    display: 'block',
    top: '-15px',
    left: '0',
    opacity: '0.05',
    '&:hover': {
      display: 'none',
    },
  },
  slomiLiniju: {
    whiteSpace: 'pre-line',
  },
  opisZrnaDesetice: {
    fontSize: '1.2rem',
    fontStyle: 'italic',
    marginTop: '0.2rem',
  },
  nivo: {
    zIndex: '5',
  },
  [theme.breakpoints.up('sm')]: {
    backgroundColor: 'blue',
    color: '#555',
    border: '1px solid #ece7e7',
    sliBaza: {
      position: 'absolute',
      display: 'block',
      top: '-10px',
      opacity: '0.10',
    },
    slikaKrunice: {
      width: '70%',
    },
    opisZrnaKrunica: {
      padding: '3rem',
    },
    zaglavlje: {
      width: '60%',
      margin: 'auto',
    },
  },
}));

function Krunica() {
  const classes = useStyles();
  const { zrno } = storeKrunica;
  var sirina = window.innerWidth;
  var visina = window.innerHeight * 0.8;

  return (
    <div className={classes.slikaKrunice}>
      <Container>
        <ZrnoText />
        {zrno === -1 && <SlikaGospeNaslovna />}
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
      </Container>
      <Container>
        <div className={classes.sliBaza}>
          {zrno === 1 && (
            <img src={zrno01} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 2 && (
            <img src={zrno02} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 3 && (
            <img src={zrno03} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 4 && (
            <img src={zrno04} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 5 && (
            <img src={zrno05} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 6 && (
            <img src={zrno06} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 7 && (
            <img src={zrno07} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 8 && (
            <img src={zrno08} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 9 && (
            <img src={zrno09} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 10 && (
            <img src={zrno10} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 11 && (
            <img src={zrno11} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 12 && (
            <img src={zrno12} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 13 && (
            <img src={zrno13} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 14 && (
            <img src={zrno14} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 15 && (
            <img src={zrno15} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 16 && (
            <img src={zrno16} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 17 && (
            <img src={zrno17} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 18 && (
            <img src={zrno18} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 19 && (
            <img src={zrno19} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 20 && (
            <img src={zrno20} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 21 && (
            <img src={zrno21} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 22 && (
            <img src={zrno22} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 23 && (
            <img src={zrno23} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 24 && (
            <img src={zrno24} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 25 && (
            <img src={zrno25} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 26 && (
            <img src={zrno26} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 27 && (
            <img src={zrno27} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 28 && (
            <img src={zrno28} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 29 && (
            <img src={zrno29} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 30 && (
            <img src={zrno30} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 31 && (
            <img src={zrno31} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 32 && (
            <img src={zrno32} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 33 && (
            <img src={zrno33} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 34 && (
            <img src={zrno34} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 35 && (
            <img src={zrno35} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 36 && (
            <img src={zrno36} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 37 && (
            <img src={zrno37} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 38 && (
            <img src={zrno38} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 39 && (
            <img src={zrno39} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 40 && (
            <img src={zrno40} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 41 && (
            <img src={zrno41} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 42 && (
            <img src={zrno42} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 43 && (
            <img src={zrno43} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 44 && (
            <img src={zrno44} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 45 && (
            <img src={zrno45} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 46 && (
            <img src={zrno46} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 47 && (
            <img src={zrno47} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 48 && (
            <img src={zrno48} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 49 && (
            <img src={zrno49} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 50 && (
            <img src={zrno50} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 51 && (
            <img src={zrno51} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 52 && (
            <img src={zrno52} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 53 && (
            <img src={zrno53} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 54 && (
            <img src={zrno54} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 55 && (
            <img src={zrno55} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 56 && (
            <img src={zrno56} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 57 && (
            <img src={zrno57} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 58 && (
            <img src={zrno58} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 59 && (
            <img src={zrno59} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 60 && (
            <img src={zrno60} alt="rosary" height={visina} width={sirina} />
          )}
          {zrno === 61 && (
            <img src={zrno61} alt="rosary" height={visina} width={sirina} />
          )}
        </div>
      </Container>
    </div>
  );
}

export default observer(Krunica);
