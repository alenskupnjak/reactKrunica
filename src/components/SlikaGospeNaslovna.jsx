import { observer } from 'mobx-react';
import { storeKrunica } from '../store/KrunicaStore';

function SlikaGospeNaslovna() {
  const { aktivnaZemlja } = storeKrunica;

  const {
    naslovna01,
    naslovna02,
    daniTjedan,
    otajstvoRadosna,
    otajstvoSlavno,
    otajstvoSvjetla,
    otajstvoZalosno,
  } = aktivnaZemlja;

  return (
    <div className="card">
      <div className="card__side card__side--front">
        <div className="card__picture card__picture--1"></div>
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
            <div className="text-srednji">
              {daniTjedan[0].label}- {otajstvoRadosna}
            </div>
            <div className="text-srednji">
              {' '}
              {daniTjedan[1].label}- {otajstvoZalosno}
            </div>
            <div className="text-srednji">
              {' '}
              {daniTjedan[2].label}- {otajstvoSlavno}
            </div>
            <div className="text-srednji">
              {' '}
              {daniTjedan[3].label}- {otajstvoSvjetla}
            </div>
            <div className="text-srednji">
              {' '}
              {daniTjedan[4].label}- {otajstvoZalosno}
            </div>
            <div className="text-srednji">
              {' '}
              {daniTjedan[5].label}- {otajstvoRadosna}
            </div>
            <div className="text-srednji">
              {' '}
              {daniTjedan[6].label}- {otajstvoSlavno}
            </div>
          </div>
          <div className="autor">alenskupnjak@yahoo.com</div>
          <div>v1.5</div>
        </div>
      </div>
    </div>
  );
}

export default observer(SlikaGospeNaslovna);
