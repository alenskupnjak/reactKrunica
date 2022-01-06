import { makeObservable, observable, computed, action } from 'mobx';
import { filter, head, find } from 'lodash';

import { getListaZemalja, getOtajstva } from './KrunicaService';

class KrunicaStore {
  constructor(fn) {
    makeObservable(this, {
      trenutniJezik: observable,
      aktivniDan: observable,
      aktivnaZemlja: computed,
      aktivanTekstZrno: computed,
      getlistaJezika: computed,
      nazivdanTjedan: observable,
      getnazivdanTjedan: computed,
      prijevodOtajstva: action,
      prijevodOtajstvatext: observable,
      zrno: observable,
      naprijed: action,
      promjeniListuJezika: action,
      nazad: action,
      aktivnoOtajstvo: observable,
      listaJezika: observable,
      promjeniJezik: action,
      promjeniNazivTjedna: action,
      promjeniAktivniDan: action,
    });
  }

  // Inicijalna zemlja
  trenutniJezik = 'Hrvatski';
  aktivnoOtajstvo = 'otajstvoRadosna';
  listaOtajstva = [];
  listaJezika = [];
  nazivdanTjedan = [];
  aktivniDan = 'pon';
  prijevodOtajstvatext = null;
  zrno = -1;

  get aktivnaZemlja() {
    const podaciZemlje = head(
      filter(getListaZemalja(), (data) => {
        return data.jezik === this.trenutniJezik;
      }),
    );

    this.initPodataka(podaciZemlje);

    console.log(podaciZemlje);
    this.promjeniNazivTjedna(podaciZemlje);
    return podaciZemlje;
  }

  promjeniNazivTjedna = (podaciZemlje) => {
    this.nazivdanTjedan = podaciZemlje.daniTjedan;
  };

  //  inicijalizacija podataka
  initPodataka = (podaciZemlje) => {
    this.listaOtajstva = getOtajstva().map((data) => {
      return {
        ...data,
        text: podaciZemlje[data.id],
      };
    });

    console.log('*********', this.listaOtajstva);

    this.promjeniListuJezika();
    this.prijevodOtajstva();
  };

  //
  get getlistaJezika() {
    return this.listaJezika;
  }

  // poziva dane u tjednu
  get getnazivdanTjedan() {
    return this.nazivdanTjedan;
  }

  promjeniDanUTjednu = (e) => {
    this.promjeniAktivniDan(e.target.value);

    console.log(this.aktivniDan);
    if (this.aktivniDan === 'pon' || this.aktivniDan === 'sub') {
      this.aktivnoOtajstvo = 'otajstvoRadosna';
    }
    if (this.aktivniDan === 'uto' || this.aktivniDan === 'pet') {
      this.aktivnoOtajstvo = 'otajstvoZalosno';
    }
    if (this.aktivniDan === 'sri' || this.aktivniDan === 'ned') {
      console.log('SLAVNO');
      this.aktivnoOtajstvo = 'otajstvoSlavno';
    }
    if (this.aktivniDan === 'cet') {
      this.aktivnoOtajstvo = 'otajstvoSvjetla';
    }
    this.prijevodOtajstva();
  };

  // action promjeni aktivni dan
  promjeniAktivniDan = (data) => {
    this.aktivniDan = data;
  };

  promjeniaktivnoOtajstvo = () => {};

  promjeniListuJezika = () => {
    this.listaJezika = getListaZemalja().map((data) => {
      return { label: data.jezik, value: data.jezik };
    });
  };

  // prevodi OTAJSTVO t
  prijevodOtajstva() {
    this.listaOtajstva.forEach((data) => {
      if (data.id === this.aktivnoOtajstvo) {
        this.prijevodOtajstvatext = data.text;
      }
    });
  }

  getlistaSvihJezika() {
    this.listaJezika = getListaZemalja().map((data) => {
      return { label: data.jezik, value: data.jezik };
    });
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
    if (this.zrno === -1) {
      return;
    }
    this.zrno--;
    console.log('Zrno =', this.zrno);
  };

  //
  // Promjena jezika
  promjeniJezik = (e) => {
    console.log('Jezik=', e.target.value);
    this.trenutniJezik = e.target.value;
    // pronadi podatke zemlje
    const podaciZemlje = head(
      filter(getListaZemalja(), (data) => {
        return data.jezik === this.trenutniJezik;
      }),
    );
    console.log(podaciZemlje);

    console.log('Aktivan=', this.aktivniDan);
    this.prijevodOtajstva();
    console.log('Lista otajstva=', this.listaOtajstva);

    // this.initPodataka(podaciZemlje);

    if (this.aktivniDan === 'pon' || this.aktivniDan === 'sub') {
      this.aktivnoOtajstvo = 'otajstvoRadosna';
    }
    if (this.aktivniDan === 'uto' || this.aktivniDan === 'pet') {
      this.aktivnoOtajstvo = 'otajstvoZalosno';
    }
    if (this.aktivniDan === 'sri' || this.aktivniDan === 'ned') {
      console.log('SLAVNO');
      this.aktivnoOtajstvo = 'otajstvoSlavno';
    }
    if (this.aktivniDan === 'cet') {
      this.aktivnoOtajstvo = 'otajstvoSvjetla';
    }
  };
}

// export default KrunicaStore;
export const storeKrunica = new KrunicaStore();
