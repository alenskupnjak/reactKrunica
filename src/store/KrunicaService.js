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
