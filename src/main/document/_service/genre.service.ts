import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Genre } from "../_entity/genres.entity";
import { GenreInterface } from "../_interface/genreCreate";

@Injectable()
export class GenreService {
    constructor(
        @InjectRepository(Genre)
        private genreRepository: Repository<Genre>,
    ){}

    async addGenre(data: GenreInterface): Promise<Genre> {
        const genre = new Genre();
        genre.name = data.name
        const savedGenre = await this.genreRepository.save(genre); 
        return savedGenre
    }

    async deleteGenreById(id: number) {
        await this.genreRepository.delete({id: id});
    }
}