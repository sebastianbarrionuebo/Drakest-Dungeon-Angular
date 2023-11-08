import { IUser,IEntidad, IDungeon, IEquipoHeroes, INivel, IEquipo } from "./interface";


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
    urlImgHead: String | null;
    urlImg: String | null;
    idEntidad: Number | null;
    type: Boolean | null;
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

    constructor(enty ?: any ) {
        this.name = enty == undefined ? 'Vacio' : enty.name;
        this.urlImgHead = enty == undefined ? './assets/Espadas.png' : enty.urlImgHead;
        this.urlImg = enty == undefined ? null : enty.urlImg;
        this.idEntidad = enty == undefined ? null : enty.idEntidad;
        this.type = enty == undefined ? null : enty.type;
        this.hp = enty == undefined ? null : enty.hp;
        this.heal = enty == undefined ? null : enty.heal;
        this.damageMin = enty == undefined ? null : enty.damageMin;
        this.damageMax = enty == undefined ? null : enty.damageMax;
        this.armor = enty == undefined ? null : enty.armor;
        this.hit = enty == undefined ? null : enty.hit;
        this.dodge = enty == undefined ? null : enty.dodge;
        this.poisonResist = enty == undefined ? null : enty.poisonResist;
        this.stunResist = enty == undefined ? null : enty.stunResist;
        this.bleedResist = enty == undefined ? null : enty.bleedResist;
    }
}


export class Dungeon implements IDungeon{
    name: String | null;
    description: String | null;
    lvls: Nivel[] | null;

    constructor(dungeon ?: any ) {
        this.name = dungeon == undefined ? '' : dungeon.name;
        this.description = dungeon == undefined ? '' : dungeon.description;
        this.lvls = dungeon == undefined ? [] : dungeon.lvls;
    }
}

export class Nivel implements INivel{
    lvl: String | null;
    monstruos: Equipo | null;

    constructor(nivel ?: any ) {
        this.lvl = nivel == undefined ? '' : nivel.lvl;
        this.monstruos = nivel == undefined ? new Equipo() : nivel.monstruos;
    }
}

export class Equipo implements IEquipo{
    idEntidad1: Number | null;
    idEntidad2: Number | null;
    idEntidad3: Number | null;

    constructor(equipo ?: any ) {
        this.idEntidad1 = equipo == undefined ? null : equipo.idEntidad1;
        this.idEntidad2 = equipo == undefined ? null : equipo.idEntidad2;
        this.idEntidad3 = equipo == undefined ? null : equipo.idEntidad3;
    }
}



export class EquipoHeroes implements IEquipoHeroes{
    id: Number | null;
    idUser: Number | null;
    equipo: Equipo | null;

    constructor(equipo ?: any ) {
        this.id = equipo == undefined ? null : equipo.id;
        this.idUser = equipo == undefined ? null : equipo.idUser;
        this.equipo = equipo == undefined ? null : equipo.equipo;
    }
}