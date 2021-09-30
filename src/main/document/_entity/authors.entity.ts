import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, RelationId, Unique, Index, IsNull } from 'typeorm';

@Entity()
export class Author {
    
    @ApiProperty({description: 'Id of the author.'})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({description: 'Full name of the author.'})
    @Column()
    fullName: string;

}