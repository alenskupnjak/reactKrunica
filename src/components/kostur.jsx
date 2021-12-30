import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import sli01 from '../slike/slika03.jpg';
import sli02 from '../img/7.png';

function Kostur() {
  return (
    <div
      className="row"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + '/slike/slika01.jpg'
        })`,
      }}
    >
      <div className="col-1-of-2 slika-krunice">
        <div>
          <img src={sli02} className="sli-baza" alt="krunica" />
          <img src={sli01} className="sli-gore" alt="krunica" />
        </div>
        <div className="boja">
          <map name="mapa">
            <area
              shape="circle"
              coords="215,490,5"
              href="6-zrno.html"
              alt="krunica naprijed"
            />
            <area
              shape="circle"
              coords="215,550,15"
              href="8-zrno.html"
              alt="krunica naprijed"
            />
          </map>
        </div>
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
            <span>
              <ArrowBackIosIcon
                onClick={() => {
                  console.log('Nazad');
                }}
              />
            </span>
            <span>
              <ArrowForwardIosIcon
                onClick={() => {
                  console.log('Naprijed');
                }}
              />
            </span>
            <a href="6-zrno.html">
              <i className="fas fa-arrow-left fa-2x"></i>
            </a>
            {/* <img src="../slike/slika01.jpg" alt="Gospina krunica"> */}
            <a href="8-zrno.html">
              <i className="fas fa-arrow-right fa-2x"></i>
            </a>
          </div>
        </div>

        <div className="opis-zrna">1. zrnce prve desetice</div>

        <div className="opis-molitve">
          <strong>Zdravo Marijo</strong>, milosti puna, Gospodin s tobom.
          Blagoslovljena ti među ženama i blagoslovljen plod utrobe tvoje,{' '}
          <span className="zeleno">
            <strong>
              Isus,
              <br />
              koji se za nas krvlju znojio!
            </strong>
          </span>
          <strong>
            <span className="zeleno">
              <br />
            </span>
            Sveta Marijo
          </strong>
          , Majko Božja, moli za nas grješnike, sada i na času smrti naše.
          <br />
          Amen.
        </div>
      </div>
    </div>
  );
}

export default Kostur;
