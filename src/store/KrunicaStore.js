import { makeObservable, observable, computed, action } from 'mobx';
import { filter, head } from 'lodash';

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
  trenutniJezik = 'English';
  aktivnoOtajstvo = '';
  listaOtajstva = [];
  listaJezika = [];
  nazivdanTjedan = [];
  aktivniDan = '';
  prijevodOtajstvatext = null;
  zrno = -1;

  get aktivnaZemlja() {
    const podaciZemlje = head(
      filter(getListaZemalja(), (data) => {
        return data.jezik === this.trenutniJezik;
      }),
    );

    this.initPodataka(podaciZemlje);

    // console.log(podaciZemlje);
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

    // postavi dan u tjednu
    const d = new Date();

    console.log(d);
    console.log(d.getDay());
    // let day = d.getDay();

    switch (d.getDay()) {
      case 0:
        this.aktivniDan = 'ned';
        this.aktivnoOtajstvo = 'otajstvoSlavno';
        break;
      case 1:
        this.aktivniDan = 'pon';
        this.aktivnoOtajstvo = 'otajstvoRadosna';
        break;
      case 2:
        this.aktivniDan = 'uto';
        this.aktivnoOtajstvo = 'otajstvoZalosno';
        break;
      case 3:
        this.aktivniDan = 'sri';
        this.aktivnoOtajstvo = 'otajstvoSlavno';
        break;
      case 4:
        this.aktivniDan = 'cet';
        this.aktivnoOtajstvo = 'otajstvoSvjetla';
        break;
      case 5:
        this.aktivniDan = 'pet';
        this.aktivnoOtajstvo = 'otajstvoZalosno';
        break;
      case 6:
        this.aktivniDan = 'sub';
        this.aktivnoOtajstvo = 'otajstvoRadosna';
        break;
      default:
        console.log('Dani u tjednu');
    }

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

  povratakNaPocetak = () => {
    this.zrno = -1;
    console.log('Idi na pocetak');
  };

  // promjeni datum u tjednu
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
  };

  // Mijenja zrno nazad
  nazad = () => {
    if (this.zrno === -1) {
      return;
    }
    this.zrno--;
    // console.log('Zrno =', this.zrno);
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

    // console.log('Aktivan=', this.aktivniDan);
    this.prijevodOtajstva();
    // console.log('Lista otajstva=', this.listaOtajstva);

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

export const storeKrunica = new KrunicaStore();
