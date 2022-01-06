const heroes = {
    capi: {
        nombre: 'Capitan America',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Absurda cantidad de dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'La mejor reaccion alergica a las arañas'
    }
};

export const buscarHeroe = ( id ) => {

    const heroe = heroes[id];

    return new Promise( ( resolve, reject ) => {

        if ( heroe ) {
            resolve( heroe )
        } else {
            reject(`No existe un heroe con el ud ${id}`)
        }

    });
     
}

const promesaLenta = new Promise( ( resolve, reject ) => {
    setTimeout( () => resolve('Promesa Lenta'), 2000);
});

const promesaMedia = new Promise( ( resolve, reject ) => {
    setTimeout( () => resolve('Promesa Lenta'), 1500);
});

const promesaRapida = new Promise( ( resolve, reject ) => {
    setTimeout( () => reject('Promesa Lenta'), 1000);
});

export { 
    promesaLenta,
    promesaMedia,
    promesaRapida    
}