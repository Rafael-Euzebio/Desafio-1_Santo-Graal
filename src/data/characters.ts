import satoruGojoPerfil from '../images/characters/satoru-gojo.png'

export type Character = {
    id: number;
    name: string;
    image: string;
};

export const characters: Character[] = [{
    id: 1,
    name: 'Satoru Gojo',
    image: satoruGojoPerfil,
},
{
    id: 2,
    name: 'Megumi Fushiguro',
    image: satoruGojoPerfil,
},
{
    id: 3,
    name: 'Nobara Kugisaki',
    image: satoruGojoPerfil,
},
{
    id: 4,
    name: 'Yuji Itadori',
    image: satoruGojoPerfil,
},
{
    id: 5,
    name: 'Aoi Todo',
    image: satoruGojoPerfil,
},];