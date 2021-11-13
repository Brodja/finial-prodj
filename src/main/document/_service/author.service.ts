import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Author } from "../_entity/authors.entity";
import { AuthorInterface } from "../_interface/authorCreate";

@Injectable()
export class AuthorService {
    constructor(
        @InjectRepository(Author)
        private authorRepository: Repository<Author>,
    ){}

    async addAuthor(data: AuthorInterface): Promise<Author> {
        const author = new Author();
        author.fullName = data.fullName
        const savedAuthor = await this.authorRepository.save(author); 
        return savedAuthor
    }

    async deleteAuthorById(id: number) {
        await this.authorRepository.delete({id: id});
    }
}