import { Equipo, Nivel } from "./models"


export interface IUser{
    id: Number | null,
    name: String | null,
    email: String | null,
    password: String | null
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
    bleedResist: Number | null
}


export interface IDungeon{
    name: String | null,
    description: String | null,
    lvls: Nivel[] | null,
}


export interface INivel{
    lvl: String | null,
    monstruos: Equipo | null
}

export interface IEquipoHeroes{
    id: Number | null,
    idUser: Number | null,
    equipo: Equipo | null
}


export interface IEquipo{
    idEntidad1: Number | null,
    idEntidad2: Number | null,
    idEntidad3: Number | null,
}