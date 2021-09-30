import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, RelationId, Unique, Index } from 'typeorm';

@Entity()
export class Student {
    
    @ApiProperty({description: 'Id of student.'})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({description: 'Students name.'})
    @Column()
    name: string;

    @ApiProperty({description: 'Students surname.'})
    @Column()
    surname: string;

    @ApiProperty({description: 'Students middleName.'})
    @Column()
    middleName: string;

    @ApiProperty({description: 'Students name.'})
    @Column()
    year: number;
}