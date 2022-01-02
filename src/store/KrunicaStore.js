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
      // otajstva: action,
      // pages: observable,
      // page: observable,
      // setPage: action,
      // rowsPerPage: observable,
      // setRowsPerPage: action,
      // orderSort: observable,
      // setOrderSort: action,
      // orderSortBy: observable,
      // setOrderSortBy: action,
      // handleChangeRowsPerPage: action,
      // descendingComparator: action,
      // sortTable: observable,
      // filterRecordLength: observable,
      // setFilterRecordLength: action,
    });

    // All function data for Use Table
    this.fn = fn;
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

  // dataExample = this.data;
  pages = [5, 10, 25];
  // Start page for sorting and filtering
  page = 0;
  rowsPerPage = this.pages[0];

  //  setup init sorting direction
  orderSort = 'asc';

  orderSortBy = 'model';

  filterRecordLength = 0;

  setFilterRecordLength(length) {
    this.filterRecordLength = length;
  }

  setPage(page) {
    this.page = page;
  }

  setRowsPerPage(event) {
    this.rowsPerPage = +event.target.value;
  }

  // set order sort
  setOrderSort() {
    if (this.orderSort === 'asc') {
      this.orderSort = 'desc';
    } else {
      this.orderSort = 'asc';
    }
  }

  //  define column to sort
  setOrderSortBy(sortColumn) {
    this.orderSortBy = sortColumn;
  }

  handleChangeRowsPerPage(event) {
    this.setRowsPerPage(event);
    this.setPage(0);
  }

  descendingComparator(a, b) {
    if (b[this.orderSortBy] < a[this.orderSortBy]) {
      return -1;
    }
    if (b[this.orderSortBy] > a[this.orderSortBy]) {
      return 1;
    }
    return 0;
  }

  sortTable(recordData) {
    // console.log(recordData);
    // console.log('pokus', this.data);

    this.setFilterRecordLength(recordData.length);

    // init setup sort
    if (!this.orderSort) {
      return recordData;
    }

    // stabilization
    const stabilizedThis = recordData.map((el, index) => [el, index]);
    const sortDirection = this.orderSort === 'asc' ? 1 : -1;

    let sortRecord = [...stabilizedThis].sort((a, b) => {
      const order = sortDirection * this.descendingComparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });

    return sortRecord.map((el) => el[0]);
  }
}

// export default KrunicaStore;
export const storeKrunica = new KrunicaStore();
