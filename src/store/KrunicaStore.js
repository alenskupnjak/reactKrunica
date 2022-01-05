import { makeObservable, observable, computed, action } from 'mobx';
import { filter, head, find } from 'lodash';

import { getListaZemalja, getOtajstva } from './KrunicaService';

class KrunicaStore {
  constructor(fn) {
    makeObservable(this, {
      trenutniJezik: observable,
      aktivnaZemlja: computed,
      otajstvoTekst: computed,
      aktivanTekstZrno: computed,
      // prijevodOtajstva: action,
      // prijevodOtajstvatext: observable,
      zrno: observable,
      naprijed: action,
      nazad: action,
      aktivnoOtajstvo: observable,
      // listaJezika: observable,
      promjeniJezik: action,
    });
  }

  // Inicijalna zemlja
  trenutniJezik = 'Hrvatski';
  // aktivnoOtajstvo = 'otajstvoRadosna';
  // aktivnoOtajstvo = 'otajstvoSlavno';
  // aktivnoOtajstvo = 'otajstvoSvjetla';
  aktivnoOtajstvo = 'otajstvoZalosno';
  listaOtajstva = [];
  listaJezika = [];
  zrno = 0;

  get aktivnaZemlja() {
    const podaciZemlje = head(
      filter(getListaZemalja(), (data) => {
        return data.jezik === this.trenutniJezik;
      }),
    );

    console.log(podaciZemlje);
    // if (this.zrno === 0) {
    this.initPodataka(podaciZemlje);
    // }
    return podaciZemlje;
  }

  initPodataka = (podaciZemlje) => {
    console.log(podaciZemlje);
    this.listaOtajstva = getOtajstva().map((data) => {
      return {
        ...data,
        text: podaciZemlje[data.id],
      };
    });

    console.log(this.listaOtajstva);

    this.listaJezika = getListaZemalja().map((data) => {
      return { label: data.jezik, value: data.jezik };
    });
    this.prijevodOtajstva();
  };

  prijevodOtajstva() {
    this.listaOtajstva.forEach((data) => {
      if (data.id === this.aktivnoOtajstvo) {
        this.prijevodOtajstvatext = data.text;
      }
    });
    console.log(this.prijevodOtajstvatext);
  }

  getlistaSvihJezika() {
    this.listaJezika = getListaZemalja().map((data) => {
      return { label: data.jezik, value: data.jezik };
    });
  }

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

  //
  // Promjena jezika
  promjeniJezik = (e) => {
    console.log(e.target.value);
    this.trenutniJezik = e.target.value;

    const podaciZemlje = head(
      filter(getListaZemalja(), (data) => {
        return data.jezik === this.trenutniJezik;
      }),
    );
    this.initPodataka(podaciZemlje);
  };
}

// export default KrunicaStore;
export const storeKrunica = new KrunicaStore();
