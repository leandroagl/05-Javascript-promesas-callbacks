import { buscarHeroe } from './js/callbacks';
import './styles.css';

const heroeId1 = 'spider';
const heroeId2 = 'iron';
 
// Un callback hell son callbacks anidados, poco manejables
buscarHeroe( heroeId1, (err, heroe1) => {
    
    if (err) { return console.error(err); }
    
    buscarHeroe( heroeId2, (err, heroe2) => {

        if (err) { return console.error(err); }

        console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`)

    });

}); 