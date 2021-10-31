import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, RelationId, Unique, Index, IsNull } from 'typeorm';
import { Author } from './authors.entity';
import { Genre } from './genres.entity';


@Entity()
export class DocumentInLib {

    @ApiProperty({ description: 'Id of the document.' })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ description: 'Name of the document.' })
    @Column()
    name: string;

    @ManyToOne(type => Genre, { nullable: false })
    genre: Genre;
    @ApiProperty({ description: 'Genre of the document.' })
    @Column()
    genreId: number;

    @ManyToOne(type => Author, { nullable: false })
    author: Author;
    @ApiProperty({ description: 'Author of the document.' })
    @Column()
    authorId: number;


}