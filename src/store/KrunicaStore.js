import { makeObservable, observable, computed, action } from 'mobx';
import { filter, head } from 'lodash';

import { getListaZemalja, getOtajstva, getZrna } from './KrunicaService';

class KrunicaStore {
  constructor() {
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
      promjeniaktivnoOtajstvo: action,
    });
  }

  // inicijalne vrijednosti u app
  trenutniJezik = 'English';
  aktivnoOtajstvo = '';
  listaOtajstva = [];
  listaZrnaRadno = [];
  listaJezika = [];
  nazivdanTjedan = [];
  aktivniDan = '';
  prijevodOtajstvatext = null;
  zrno = -1;

  // povlačenje podataka aktivne zemlje
  get aktivnaZemlja() {
    const podaciZemlje = head(
      filter(getListaZemalja(), (data) => {
        return data.jezik === this.trenutniJezik;
      }),
    );
    this.initPodataka(podaciZemlje);
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

    this.listaZrnaRadno = getZrna().map((data) => {
      return {
        ...data,
        text: podaciZemlje[data.id],
      };
    });

    // postavi dan u tjednu i aktivno otajstvo
    const d = new Date();
    switch (d.getDay()) {
      case 0:
        this.promjeniAktivniDan('ned');
        this.promjeniaktivnoOtajstvo('otajstvoSlavno');
        break;
      case 1:
        this.promjeniAktivniDan('pon');
        this.promjeniaktivnoOtajstvo('otajstvoRadosna');
        break;
      case 2:
        this.promjeniAktivniDan('uto');
        this.promjeniaktivnoOtajstvo('otajstvoZalosno');
        break;
      case 3:
        this.promjeniAktivniDan('sri');
        this.promjeniaktivnoOtajstvo('otajstvoSlavno');
        break;
      case 4:
        this.promjeniAktivniDan('cet');
        this.promjeniaktivnoOtajstvo('otajstvoSvjetla');
        break;
      case 5:
        this.promjeniAktivniDan('pet');
        this.promjeniaktivnoOtajstvo('otajstvoZalosno');
        break;
      case 6:
        this.promjeniAktivniDan('sub');
        this.promjeniaktivnoOtajstvo('otajstvoRadosna');
        break;
      default:
    }

    this.promjeniListuJezika();
    this.prijevodOtajstva();
  };

  // povlačimo listu jezika
  get getlistaJezika() {
    return this.listaJezika;
  }

  // poziva dane u tjednu
  get getnazivdanTjedan() {
    return this.nazivdanTjedan;
  }

  // vracamo na pocetak
  povratakNaPocetak = () => {
    this.zrno = -1;
  };

  // promjeni datum u tjednu
  promjeniDanUTjednu = (e) => {
    this.promjeniAktivniDan(e.target.value);
    if (this.aktivniDan === 'pon' || this.aktivniDan === 'sub') {
      this.promjeniaktivnoOtajstvo('otajstvoRadosna');
    }
    if (this.aktivniDan === 'uto' || this.aktivniDan === 'pet') {
      this.promjeniaktivnoOtajstvo('otajstvoZalosno');
    }
    if (this.aktivniDan === 'sri' || this.aktivniDan === 'ned') {
      this.promjeniaktivnoOtajstvo('otajstvoSlavno');
    }
    if (this.aktivniDan === 'cet') {
      this.promjeniaktivnoOtajstvo('otajstvoSvjetla');
    }
    this.prijevodOtajstva();
  };

  idiNaZrno = (zrno) => {
    this.zrno = zrno.target.value;
  };

  // action promjeni aktivni dan
  promjeniAktivniDan = (data) => {
    this.aktivniDan = data;
  };

  promjeniaktivnoOtajstvo = (otajstvo) => {
    this.aktivnoOtajstvo = otajstvo;
  };

  promjeniListuJezika = () => {
    this.listaJezika = getListaZemalja().map((data) => {
      return { label: data.jezik, value: data.jezik };
    });
  };

  // prevodi OTAJSTVO
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

  // pronalazi text vrijednost
  get aktivanTekstZrno() {
    let podatak;
    for (const [key, value] of Object.entries(this.aktivnaZemlja)) {
      if (key === `text${this.zrno}`) {
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

  // mijenja zrno nazad
  nazad = () => {
    if (this.zrno === -1) {
      return;
    }
    this.zrno--;
  };

  // promjena jezika
  promjeniJezik = (e) => {
    this.trenutniJezik = e.target.value;

    this.prijevodOtajstva();

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
  };
}

export const storeKrunica = new KrunicaStore();
