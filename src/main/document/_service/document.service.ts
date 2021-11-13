import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from '../_entity/authors.entity';
import { DocumentInLib } from '../_entity/document.entity';
import { Genre } from '../_entity/genres.entity';
import { AuthorInterface } from '../_interface/authorCreate';
import { DocumentCreateInterface } from '../_interface/documentCreate';
import { GenreInterface } from '../_interface/genreCreate';

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

    async addDocument(data: DocumentCreateInterface): Promise<DocumentInLib> {
        const document = new DocumentInLib();
        document.name = data.name
        document.genreId = data.genre
        document.authorId = data.author
        const savedDocument = await this.documentRepository.save(document); 
        return savedDocument
    }
    async deleteDocumentByDocumentId(id: number) {
        await this.documentRepository.delete({id: id});
    }
    
}
