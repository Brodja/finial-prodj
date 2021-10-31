import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, RelationId, Unique, Index, IsNull } from 'typeorm';

@Entity()
export class Action {
    
    @ApiProperty({description: 'Id of the action.'})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({description: 'Id of the documet.'})
    @Column({nullable: false})
    documentId: number;

    @ApiProperty({description: 'Id of the student.'})
    @Column({nullable: false})
    studentId: number;

    @ApiProperty({description: 'Id of the student.'})
    @Column({type: 'date', nullable: false})
    dateOfIssue: string;

    // @ApiProperty({description: 'Id of the student.'})
    // @Column({type: 'date', nullable: false})
    // dateOfReturn: string;
}