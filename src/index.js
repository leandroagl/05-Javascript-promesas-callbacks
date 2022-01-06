import { buscarHeroe } from './js/callbacks';
import './styles.css';

const heroeId = 'capi';

// Un callback es una funcion que es enviada como un argumento
buscarHeroe( heroeId, (heroe) => {
    console.log(heroe)
} );