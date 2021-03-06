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
}

export const buscarHeroe = ( id, callback ) => {

    const heroe = heroes[id];

    if ( heroe ) {
        callback( null, heroe );      
    } else {
        // Un error
        callback(`No existe un heroe con ese ID ${ id }`)

    }

}