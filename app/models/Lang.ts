import {Column, Entity, PrimaryColumn} from "typeorm";

// import {User} from './User';

@Entity('lang')
export class Lang {

    @PrimaryColumn({ unique: true, length: 5 })
    code: string;

}
