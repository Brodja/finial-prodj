import { Body, Controller, Delete, Post, Query } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { HTTP_STATUS } from "src/main/_components/_enum/http-status.enum";
import { ApiResponseInterface } from "src/main/_components/_interface/http-api-response.interface";
import { AuthorCreateDto } from "../_dto/author.dto";
import { Author } from "../_entity/authors.entity";
import { AuthorService } from "../_service/author.service";

@Controller('api/author')
@ApiTags('Author')
export class AuthorController {
    constructor(
        private authorService: AuthorService
    ) { }

    @Post()
    @ApiOperation({ summary: 'Create author.' })
    @ApiResponse({
        type: Author,
        status: HTTP_STATUS.SUCCESS,
        description: 'Author added.'
    })
    async addAuthor(
        @Body() data: AuthorCreateDto,
    ): Promise<ApiResponseInterface> {
        const author: Author = await this.authorService.addAuthor(data)                                                        
        return {
            status: HTTP_STATUS.SUCCESS,
            data: []
        }
    }

    @Delete()
    @ApiOperation({ summary: 'Delete author.' })
    @ApiResponse({
        status: HTTP_STATUS.SUCCESS,
        description: 'Author was deleted.'
    })
    async deleteAuthor (
        @Query('authorId') id: number,
    ): Promise<ApiResponseInterface>{
       await this.authorService.deleteAuthorById(id)
        return {
            status: HTTP_STATUS.SUCCESS
        }
    }
}