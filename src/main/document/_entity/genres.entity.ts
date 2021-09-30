import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, RelationId, Unique, Index, IsNull } from 'typeorm';

@Entity()
export class Genre {
    
    @ApiProperty({description: 'Id of genre.'})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({description: 'Name of genre'})
    @Column()
    name: string;

}