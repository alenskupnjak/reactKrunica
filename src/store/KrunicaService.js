import { hrvatski } from './language/Hrvatski';
import { english } from './language/Engleski';
import { newlanguage } from './language/NewLanguage';

//
// Vrijednosti otajstva
export const getOtajstva = () => [
  { id: 'otajstvoRadosna', text: null },
  { id: 'otajstvoSvjetla', text: null },
  { id: 'otajstvoZalosno', text: null },
  { id: 'otajstvoSlavno', text: null },
];

//
// lista zemalja
const listaZemalja = () => [hrvatski, english, newlanguage];
export const getListaZemalja = () => {
  return listaZemalja();
};

//
// Vrijednosti zran za laksi rad
export const getZrna = () => [
  { value: -1, label: 'Beginning' },
  { value: 0, label: "The Apostles' Creed" },
  { value: 1, label: 'Our father' },
  { value: 2, label: 'Faith' },
  { value: 3, label: 'Hope' },
  { value: 4, label: 'Love' },
  { value: 5, label: 'Glory -Father' },
  { value: 6, label: 'Memoare' },
  { value: 7, label: '1. bead first decade' },
  { value: 8, label: '2. bead first decade' },
  { value: 9, label: '3. bead first decade' },
  { value: 10, label: '4. bead first decade' },
  { value: 11, label: '5. bead first decade' },
  { value: 12, label: '6. bead first decade' },
  { value: 13, label: '7. bead first decade' },
  { value: 14, label: '8. bead first decade' },
  { value: 15, label: '9. bead first decade' },
  { value: 16, label: '10. bead first decade' },
  { value: 17, label: 'Second decade' },
  { value: 18, label: '18' },
  { value: 19, label: '19' },
  { value: 20, label: '20' },
  { value: 21, label: '21' },
  { value: 22, label: '22' },
  { value: 23, label: '23' },
  { value: 24, label: '24' },
  { value: 25, label: '25' },
  { value: 26, label: '26' },
  { value: 27, label: '27' },
  { value: 28, label: 'Third decade' },
  { value: 29, label: '29' },
  { value: 30, label: '30' },
  { value: 31, label: '31' },
  { value: 32, label: '32' },
  { value: 33, label: '33' },
  { value: 34, label: '34' },
  { value: 35, label: '35' },
  { value: 36, label: '36' },
  { value: 37, label: '37' },
  { value: 38, label: '38' },
  { value: 39, label: 'Fourth decade' },
  { value: 40, label: '40' },
  { value: 41, label: '41' },
  { value: 42, label: '42' },
  { value: 43, label: '43' },
  { value: 44, label: '34' },
  { value: 45, label: '35' },
  { value: 46, label: '36' },
  { value: 47, label: '37' },
  { value: 48, label: '38' },
  { value: 49, label: '39' },
  { value: 50, label: 'Fifth decade' },
  { value: 51, label: '51' },
  { value: 52, label: '52' },
  { value: 53, label: '53' },
  { value: 54, label: '54' },
  { value: 55, label: '55' },
  { value: 56, label: '56' },
  { value: 57, label: '57' },
  { value: 58, label: '58' },
  { value: 59, label: '59' },
  { value: 60, label: '60' },
  { value: 61, label: 'End' },
];
