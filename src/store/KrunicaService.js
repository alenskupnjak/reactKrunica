import { hrvatski } from './zemlje/Hrvatski';
import { engleski } from './zemlje/Engleski';
import { talijanski } from './zemlje/Talijanski';

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
const listaZemalja = () => [hrvatski, engleski, talijanski];
export const getListaZemalja = () => {
  return listaZemalja();
};
