import { hrvatski } from './language/Hrvatski';
import { english } from './language/Engleski';
import { newlanguage } from './language/NewLanguage';

// otajstva
export const getOtajstva = () => [
  { id: 'otajstvoRadosna', text: null },
  { id: 'otajstvoSvjetla', text: null },
  { id: 'otajstvoZalosno', text: null },
  { id: 'otajstvoSlavno', text: null },
];

// lista zemalja
const listaZemalja = () => [hrvatski, english, newlanguage];
export const getListaZemalja = () => {
  return listaZemalja();
};

// Vrijednosti zrna za laksi rad
export const getZrna = () => [
  { value: -1, label: 'Beginning' },
  { value: 0, label: "The Apostles' Creed" },
  { value: 1, label: 'Our father' },
  { value: 2, label: 'Faith' },
  { value: 3, label: 'Hope' },
  { value: 4, label: 'Love' },
  { value: 5, label: 'Glory -Father' },
  { value: 6, label: 'Memoare' },
  { value: 7, label: '01. first' },
  { value: 8, label: '02. first' },
  { value: 9, label: '03. first' },
  { value: 10, label: '04. first' },
  { value: 11, label: '05. first' },
  { value: 12, label: '06. first' },
  { value: 13, label: '07. first' },
  { value: 14, label: '08. first' },
  { value: 15, label: '09. first' },
  { value: 16, label: '10. first' },
  { value: 17, label: 'Second decade' },
  { value: 18, label: '18 second' },
  { value: 19, label: '19 second' },
  { value: 20, label: '20 second' },
  { value: 21, label: '21 second' },
  { value: 22, label: '22 second' },
  { value: 23, label: '23 second' },
  { value: 24, label: '24 second' },
  { value: 25, label: '25 second' },
  { value: 26, label: '26 second' },
  { value: 27, label: '27 second' },
  { value: 28, label: 'Third decade' },
  { value: 29, label: '29 third' },
  { value: 30, label: '30 third' },
  { value: 31, label: '31 third' },
  { value: 32, label: '32 third' },
  { value: 33, label: '33 third' },
  { value: 34, label: '34 third' },
  { value: 35, label: '35 third' },
  { value: 36, label: '36 third' },
  { value: 37, label: '37 third' },
  { value: 38, label: '38 third' },
  { value: 39, label: 'Fourth decade' },
  { value: 40, label: '40 fourth' },
  { value: 41, label: '41 fourth' },
  { value: 42, label: '42 fourth' },
  { value: 43, label: '43 fourth' },
  { value: 44, label: '44 fourth' },
  { value: 45, label: '45 fourth' },
  { value: 46, label: '46 fourth' },
  { value: 47, label: '47 fourth' },
  { value: 48, label: '48 fourth' },
  { value: 49, label: '49 fourth' },
  { value: 50, label: 'Fifth decade' },
  { value: 51, label: '51 fifth' },
  { value: 52, label: '52 fifth' },
  { value: 53, label: '53 fifth' },
  { value: 54, label: '54 fifth' },
  { value: 55, label: '55 fifth' },
  { value: 56, label: '56 fifth' },
  { value: 57, label: '57 fifth' },
  { value: 58, label: '58 fifth' },
  { value: 59, label: '59 fifth' },
  { value: 60, label: '60 fifth' },
  { value: 61, label: 'End' },
];
