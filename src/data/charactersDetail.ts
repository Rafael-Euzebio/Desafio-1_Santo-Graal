import satoroGojo from '../images/characters/satoru-gojo.png'
import yujiItadori from '../images/characters/yuji-itadori.png'
import megumi from '../images/characters/megumi.png'
import nobaraKugiasaki from '../images/characters/Nobara_Kugisaki.png'
import aoiTodo from '../images/characters/Aoi-Todo.png'

export type CharactersDetailProps = {
  id: number;
  name: string;
  image: string;
  year: number;
  ranking: string;
  domainExpansion: string;
  strongestAbility: string;
  fightingStyle: string;
  cursedTechniques: string;
  forceClassification: string;
};

export const charactersDetail: CharactersDetailProps[] = [
  {
    id: 1,
    name: 'Satoru Gojo',
    image: satoroGojo,
    year: 2006,
    ranking: 'Feiticeiro de Classe Especial',
    domainExpansion: 'Unlimited Void',
    strongestAbility: 'Limitless + Six Eyes',
    fightingStyle: 'Combate técnico de elite com domínio absoluto do espaço',
    cursedTechniques:
      'Manipulação do Infinito, Azul, Vermelho e Hollow Purple',
    forceClassification: 'O feiticeiro mais poderoso da era moderna',
  },
  {
    id: 2,
    name: 'Megumi Fushiguro',
    image: megumi,
    year: 2007,
    ranking: 'Feiticeiro Grau 2',
    domainExpansion: 'Chimera Shadow Garden',
    strongestAbility: 'Ten Shadows Technique',
    fightingStyle: 'Combate estratégico com invocação de shikigamis',
    cursedTechniques:
      'Técnica das Dez Sombras, manipulação de sombras e invocações',
    forceClassification: 'Talentoso estrategista com enorme potencial oculto',
  },
  {
    id: 3,
    name: 'Nobara Kugisaki',
    image: nobaraKugiasaki,
    year: 2007,
    ranking: 'Feiticeira Grau 3',
    domainExpansion: 'Não possui',
    strongestAbility: 'Resonance',
    fightingStyle: 'Ataques de média distância com martelo, pregos e precisão',
    cursedTechniques:
      'Straw Doll Technique, Resonance e Hairpin',
    forceClassification: 'Feiticeira ofensiva com estilo agressivo e preciso',
  },
  {
    id: 4,
    name: 'Yuji Itadori',
    image: yujiItadori,
    year: 2003,
    ranking: 'Feiticeiro Grau 1',
    domainExpansion: 'Não possui',
    strongestAbility: 'Força física anormal + Black Flash',
    fightingStyle: 'Combate corporal explosivo com alta resistência',
    cursedTechniques:
      'Black Flash, golpes físicos aprimorados e energia amaldiçoada bruta',
    forceClassification: 'Hospedeiro de Sukuna e um dos principais protagonistas',
  },
  {
    id: 5,
    name: 'Aoi Todo',
    image: aoiTodo,
    year: 2003,
    ranking: 'Feiticeiro Grau 1',
    domainExpansion: 'Não possui',
    strongestAbility: 'Boogie Woogie',
    fightingStyle: 'Combate corpo a corpo com força extrema e trocas táticas',
    cursedTechniques:
      'Boogie Woogie e alto domínio de combate físico',
    forceClassification: 'Feiticeiro de elite com força bruta e inteligência tática',
  },
];