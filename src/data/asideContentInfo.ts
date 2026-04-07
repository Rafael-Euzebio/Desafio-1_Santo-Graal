import satoruGojoPerfil from '../images/characters/satoru-gojo.png'
import nobaraPerfil from '../images/characters/Nobara_Kugisaki.png'
import megumiPerfil from '../images/characters/megumi.png'
import aioTodoPerfil from '../images/characters/Aoi-Todo.png'

export type asideInfo = {
    id: number;
    title: string;
    cardContent: string;
    image: string;
    altImage: string;
};

export const lastInfosAside: asideInfo[] = [
    {
        id: 1,
        title: "Incidente de Shibuya",
        cardContent: "Resumo dos eventos do arco do Incidente de Shibuya e seu impacto direto no início do Jogo do Abate.",
        image: satoruGojoPerfil,
        altImage: 'Satoru Gojo'
    },
    {
        id: 2,
        title: "Novos episódios lançados!",
        cardContent: "O arco amplia a escala da história com novas batalhas, regras mais perigosas e conflitos cada vez mais intensos.",
        image: nobaraPerfil,
        altImage: 'Nobara Kugisaki'
    }
];
export const nextSeasonAside: asideInfo[] = [
    {
        id: 3,
        title: "Foco em Megumi Fushiguro",
        cardContent: "A próxima fase tende a aprofundar o papel de Megumi e sua ligação com eventos decisivos para o futuro do mundo jujutsu.",
        image: megumiPerfil,
        altImage: 'Megumi Fushiguro'
    },
    {
        id: 4,
        title: "Batalhas ainda mais intensas",
        cardContent: "A expectativa é de confrontos mais sombrios, técnicas mais avançadas e consequências cada vez mais pesadas para os protagonistas.",
        image: aioTodoPerfil,
        altImage: 'Aoi Todo'
    }
];