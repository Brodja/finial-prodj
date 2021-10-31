import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from './_entity/authors.entity';
import { DocumentInLib } from './_entity/document.entity';
import { Genre } from './_entity/genres.entity';
import { AuthorInterface } from './_interface/authorCreate';
import { DocumentCreateInterface } from './_interface/documentCreate';
import { GenreInterface } from './_interface/genreCreate';

@Injectable()
export class DocumentService {
    constructor(
        @InjectRepository(DocumentInLib)
        private documentRepository: Repository<DocumentInLib>,
        @InjectRepository(Author)
        private authorRepository: Repository<Author>,
        @InjectRepository(Genre)
        private genreRepository: Repository<Genre>,
        
    ){}
    async addAuthor(data: AuthorInterface): Promise<Author> {
        const author = new Author();
        author.fullName = data.fullName
        const savedAuthor = await this.authorRepository.save(author); 
        return savedAuthor
    }
    async addGenre(data: GenreInterface): Promise<Genre> {
        const genre = new Genre();
        genre.name = data.name
        const savedGenre = await this.genreRepository.save(genre); 
        return savedGenre
    }

    async addDocument(data: DocumentCreateInterface): Promise<DocumentInLib> {
        const document = new DocumentInLib();
        document.name = data.name
        document.genreId = data.genre
        document.authorId = data.author
        const savedDocument = await this.documentRepository.save(document); 
        return savedDocument
    }

    
}
