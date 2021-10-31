import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, RelationId, Unique, Index, IsNull } from 'typeorm';

    @Entity()
    export class Student {
    
    @ApiProperty({description: 'Id of student.'})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({description: 'Ид студентського квитка'})
    @Column()
    studentId: string;

    @ApiProperty({description: 'Students name.'})
    @Column()
    name: string;

    @ApiProperty({description: 'Students surname.'})
    @Column()
    surname: string;

    @ApiProperty({description: 'Students middleName.'})
    @Column()
    middleName: string;

    @ApiProperty({description: 'Students birthday.'})
    @Column()
    birthday: number;

    @ApiProperty({description: 'foto'})
    @Column({nullable: true})
    logoName: string;

    @ApiProperty({description: 'startYear'})
    @Column()
    startYear: number;
}