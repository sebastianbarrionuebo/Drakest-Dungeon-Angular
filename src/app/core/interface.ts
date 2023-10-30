
export interface IUser{
    id: Number | null,
    name: String | null,
    email: String | null,
    password: String | null
}


export interface IEntidad{
    name: String | null,
    idHeroe: Number | null,
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