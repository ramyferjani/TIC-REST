import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

import {User} from './User';

@Entity()
export class Domain {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 11 })
    userId: number;

    @Column({ unique: true, length: 255 })
    slug: string;

    @Column({ length: 255 })
    name: string;

    @Column({ nullable: true })
    description: string;

    @Column()
    createdAt: string;

}
