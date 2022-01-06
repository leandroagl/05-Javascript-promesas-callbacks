const heroes = {
    capi: {
        nombre: 'Capitan America',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Absurda cantidad de dinero'
    },
    sipder: {
        nombre: 'Spiderman',
        poder: 'La mejor reaccion alergica a las arañas'
    }
}

export const buscarHeroe = ( id, callback ) => {

    const heroe = heroes[id];

    callback( heroe )

}