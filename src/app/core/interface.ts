import { Entidad, Equipo, Habilidad, Nivel } from "./models"


export interface IUser{
    id: Number | null,
    name: String | null,
    email: String | null,
    password: String | null,
}


export interface IEntidad{
    name: String | null,
    urlImgHead: String | null,
    urlImg: String | null,
    idEntidad: Number | null,
    type: Boolean | null,
    hp: Number | null,
    heal: Number | null,
    damageMin: Number | null,
    damageMax: Number | null,
    armor: Number | null,
    hit: Number | null,
    dodge: Number | null,
    poisonResist: Number | null,
    stunResist: Number | null,
    bleedResist: Number | null,
    skills: Array<Habilidad>
}

export interface IHabilidad{
    name: String | null,
    damage: String | null,
    heal: String | null,
    armor: Number | null,
    type: Boolean | null,
    objetive: Number | null,
    effectType1: Number | null,
    effectType2: Number | null,
    ally1: Number | null,
    ally2: Number | null,
    ally3: Number | null,
    objetive1: Number | null,
    objetive2: Number | null,
    objetive3: Number | null
}

export interface IDungeon{
    name: String | null,
    description: String | null,
    lvls: Nivel[] | null,
}
export interface IEquipoHeroes{
    id: Number | null,
    idUser: Number | null,
    equipo: Equipo | null
}

export interface IEquipo{
    Entidad1: Entidad | null,
    Entidad2: Entidad | null,
    Entidad3: Entidad | null,
}


export interface INivel{
    lvl: String | null,
    idEntidad1: Number | null
    idEntidad2: Number | null
    idEntidad3: Number | null
}