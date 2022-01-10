import { hrvatski } from './language/Hrvatski';
import { engleski } from './language/Engleski';
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
const listaZemalja = () => [hrvatski, engleski, newlanguage];
export const getListaZemalja = () => {
  return listaZemalja();
};
