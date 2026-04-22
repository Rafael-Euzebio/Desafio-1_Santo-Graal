import satoruGojoPerfil from '../images/characters/satoru-gojo.png'
import megumiPerfil from '../images/characters/megumi.png'
import aioTodoPerfil from '../images/characters/Aoi-Todo.png'
import nobaraPerfil from '../images/characters/Nobara_Kugisaki.png'
import yujiPerfil from '../images/characters/yuji-itadori.png'

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
    image: megumiPerfil,
},
{
    id: 3,
    name: 'Nobara Kugisaki',
    image: nobaraPerfil,
},
{
    id: 4,
    name: 'Yuji Itadori',
    image: yujiPerfil,
},
{
    id: 5,
    name: 'Aoi Todo',
    image: aioTodoPerfil,
},];