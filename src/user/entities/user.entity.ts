import { Injectable } from "@nestjs/common";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Injectable()
@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column('varchar', { name: 'user_name' })
    userName: string
    
    @Column('varchar', { name: 'password' })
    password:string
}
