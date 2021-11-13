import { Body, Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { HTTP_STATUS } from "src/main/_components/_enum/http-status.enum";
import { ApiResponseInterface } from "src/main/_components/_interface/http-api-response.interface";
import { AuthorCreateDto } from "../_dto/author.dto";
import { GenreCreateDto } from "../_dto/genre.dto";
import { Author } from "../_entity/authors.entity";
import { Genre } from "../_entity/genres.entity";
import { AuthorService } from "../_service/author.service";
import { GenreService } from "../_service/genre.service";

@Controller('api/genre')
@ApiTags('Genre')
export class GenreController {
    constructor(
        private genreService: GenreService
    ) { }

    @Post()
    @ApiOperation({ summary: 'Create genre.' })
    @ApiResponse({
        type: Genre,
        status: HTTP_STATUS.SUCCESS,
        description: 'Genre added.'
    })
    async addGenre(
        @Body() data: GenreCreateDto,
    ): Promise<ApiResponseInterface> {
        const genre: Genre = await this.genreService.addGenre(data)
        return {
            status: HTTP_STATUS.SUCCESS,
            data: genre
        }
    }
}