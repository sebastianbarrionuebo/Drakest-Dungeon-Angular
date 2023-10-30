import { IUser,IEntidad } from "./interface";


export class User implements IUser{
    id: Number | null;
    name: String | null;
    email: String | null;
    password: String | null;

    constructor(user ?: any ) {
        this.id = user.nombre;
        this.name = user.email;
        this.email = user.password;
        this.password = user.edad;
    }
}


export class Entidad implements IEntidad{
    name: String | null;
    idHeroe: Number | null;
    hp: Number | null;
    heal: Number | null;
    damageMin: Number | null;
    damageMax: Number | null;
    armor: Number | null;
    hit: Number | null;
    dodge: Number | null;
    poisonResist: Number | null;
    stunResist: Number | null;
    bleedResist: Number | null;

    constructor(user ?: any ) {
        this.name = user.name;
        this.idHeroe = user.idHeroe;
        this.hp = user.hp;
        this.heal = user.heal;
        this.damageMin = user.damageMin;
        this.damageMax = user.damageMax;
        this.armor = user.armor;
        this.hit = user.hit;
        this.dodge = user.dodge;
        this.poisonResist = user.poisonResist;
        this.stunResist = user.stunResist;
        this.bleedResist = user.bleedResist;
    }
}