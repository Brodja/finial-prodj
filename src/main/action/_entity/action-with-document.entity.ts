import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, RelationId, Unique, Index, IsNull } from 'typeorm';

@Entity()
export class Action {
    
    @ApiProperty({description: 'Id of the action.'})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({description: 'Id of the documet.'})
    @Column()
    documentId: number;

}