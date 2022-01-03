import { makeObservable, observable, computed, action } from 'mobx';
import { filter, head, find } from 'lodash';

import { getListaZemalja, getOtajstva } from './KrunicaService';

class KrunicaStore {
  constructor(fn) {
    makeObservable(this, {
      trenutnaZemlja: observable,
      aktivnaZemlja: computed,
      otajstvoTekst: computed,
      aktivanTekstZrno: computed,
      zrno: observable,
      naprijed: action,
      nazad: action,
      aktivnoOtajstvo: observable,
    });
  }

  // Inicijalna zemlja
  trenutnaZemlja = 'Hrvatski';
  // aktivnoOtajstvo = 'otajstvoRadosna';
  // aktivnoOtajstvo = 'otajstvoSlavno';
  // aktivnoOtajstvo = 'otajstvoSvjetla';
  aktivnoOtajstvo = 'otajstvoZalosno';
  listaOtajstva = [];
  zrno = 0;

  get aktivnaZemlja() {
    const podaciZemlje = head(
      filter(getListaZemalja(), (data) => {
        return data.jezik === this.trenutnaZemlja;
      }),
    );

    if (this.zrno === 0) {
      this.initOtajstva(podaciZemlje);
    }
    return podaciZemlje;
  }

  initOtajstva = (podaciZemlje) => {
    // console.log(podaciZemlje);
    // console.log(getOtajstva());
    this.listaOtajstva = getOtajstva().map((data) => {
      return {
        ...data,
        text: podaciZemlje[data.id],
      };
    });
    // console.log(this.listaOtajstva);
  };

  // Ocitava vrijednost otajstva text prijevod
  get otajstvoTekst() {
    return find(this.listaOtajstva, (data) => {
      return data.id === this.aktivnoOtajstvo;
    }).text;
  }
  //Pronalazi text vrijednost
  get aktivanTekstZrno() {
    let podatak;
    for (const [key, value] of Object.entries(this.aktivnaZemlja)) {
      // console.log(`${key}: ${value}`);
      if (key === `text${this.zrno}`) {
        // console.log('%c evo ga', 'color:red', `text${this.zrno}`);
        podatak = `${value}`;
      }
    }
    return podatak;
  }

  // mijenja zrno naprijed
  naprijed = () => {
    if (this.zrno === 61) {
      return;
    }
    this.zrno++;
    console.log('Zrno =', this.zrno);
  };

  // Mijenja zrno nazad
  nazad = () => {
    if (this.zrno === 0) {
      return;
    }
    this.zrno--;
    console.log('Zrno =', this.zrno);
  };
}

// export default KrunicaStore;
export const storeKrunica = new KrunicaStore();
