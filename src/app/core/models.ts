import { IUser,IEntidad, IDungeon, IEquipoHeroes, INivel, IEquipo, IHabilidad } from "./interface";


export class User implements IUser{
    id: Number | null;
    name: String | null;
    email: String | null
    password: String | null;

    constructor(user ?: any ) {
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
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
    skills: Habilidad[];

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
        this.skills = enty == undefined ? null : enty.skills;
    }
}


export class Habilidad implements IHabilidad{
    name: String | null;
    damage: String | null;
    heal: String | null;
    armor: Number | null;
    type: Boolean | null;
    objetive: Number | null;
    effectType1: Number | null;
    effectType2: Number | null;
    ally1: Number | null;
    ally2: Number | null;
    ally3: Number | null;
    objetive1: Number | null;
    objetive2: Number | null;
    objetive3: Number | null;

    constructor(enty ?: any ) {
        this.name = enty == undefined ? null : enty.name;
        this.damage = enty == undefined ? null : enty.damage;
        this.heal = enty == undefined ? null : enty.heal;
        this.armor = enty == undefined ? null : enty.armor;
        this.type = enty == undefined ? null : enty.type;
        this.objetive = enty == undefined ? null : enty.objetive;
        this.effectType1 = enty == undefined ? null : enty.effectType1;
        this.effectType2 = enty == undefined ? null : enty.effectType2;
        this.ally1 = enty == undefined ? null : enty.ally1;
        this.ally2 = enty == undefined ? null : enty.ally2;
        this.ally3 = enty == undefined ? null : enty.ally3;
        this.objetive1 = enty == undefined ? null : enty.objetive1;
        this.objetive2 = enty == undefined ? null : enty.objetive2;
        this.objetive3 = enty == undefined ? null : enty.objetive3;
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
    idEntidad1: Number | null;
    idEntidad2: Number | null;
    idEntidad3: Number | null;

    constructor(nivel ?: any ) {
        this.lvl = nivel == undefined ? '' : nivel.lvl;
        this.idEntidad1 = nivel == undefined ? null : nivel.idEntidad1;
        this.idEntidad2 = nivel == undefined ? null : nivel.idEntidad2;
        this.idEntidad3 = nivel == undefined ? null : nivel.idEntidad3;
    }
}

export class Equipo implements IEquipo{
    Entidad1: Entidad | null;
    Entidad2: Entidad | null;
    Entidad3: Entidad | null;

    constructor(equipo ?: Equipo ) {
        this.Entidad1 = equipo == undefined ? new Entidad() : equipo.Entidad1;
        this.Entidad2 = equipo == undefined ? new Entidad() : equipo.Entidad2;
        this.Entidad3 = equipo == undefined ? new Entidad() : equipo.Entidad3;
    }
}



export class EquipoHeroes implements IEquipoHeroes{
    id: Number | null;
    idUser: Number | null;
    equipo: Equipo | null;

    constructor(equipo ?: EquipoHeroes ) {
        this.id = equipo == undefined ? null : equipo.id;
        this.idUser = equipo == undefined ? null : equipo.idUser;
        this.equipo = equipo == undefined || null ? new Equipo() : equipo.equipo;
    }
}