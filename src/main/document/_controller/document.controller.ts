import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HTTP_STATUS } from '../../_components/_enum/http-status.enum';
import { ApiResponseInterface } from '../../_components/_interface/http-api-response.interface';
import { DocumentService } from '../_service/document.service';
import { AuthorCreateDto } from '../_dto/author.dto';
import { DocumentCreateDto } from '../_dto/documentCreate.dto';

import { GenreCreateDto } from '../_dto/genre.dto';
import { Author } from '../_entity/authors.entity';
import { DocumentInLib } from '../_entity/document.entity';
import { Genre } from '../_entity/genres.entity';
import { AuthorInterface } from '../_interface/authorCreate';
import { DocumentCreateInterface } from '../_interface/documentCreate';
import { SettingsForDocumentInterface } from '../_interface/settings-for-create-document.interface';

@Controller('api/document')
@ApiTags('Document')
export class DocumentController {
    constructor(
        private documentService: DocumentService
    ) { }

    @Get('settings-document')
    @ApiOperation({ summary: 'Get settings for create document.' })
    @ApiResponse({
        type: SettingsForDocumentInterface,
        status: HTTP_STATUS.SUCCESS,
        isArray: true,
        description: 'Found settings for create document.'
    })
    async getSettingsForCreateDocument(

    ): Promise<ApiResponseInterface> {
        const settings: SettingsForDocumentInterface = null
        return {
            status: HTTP_STATUS.SUCCESS,
            data: settings
        }
    }

  

    @Post('creategenre')
    @ApiOperation({ summary: 'Create genre.' })
    @ApiResponse({
        type: Genre,
        status: HTTP_STATUS.SUCCESS,
        description: 'Genre added.'
    })
    async addGenre(
        @Body() data: GenreCreateDto,
    ): Promise<ApiResponseInterface> {
        const genre: Genre = await this.documentService.addGenre(data)
        return {
            status: HTTP_STATUS.SUCCESS,
            data: genre
        }
    }
 
    @Post()
    @ApiOperation({ summary: 'Create document.' })
    @ApiResponse({
        type: DocumentInLib,
        status: HTTP_STATUS.SUCCESS,
        description: 'Document added.'
    })
    // @PermissionsAction
    async addDocument(
        @Body() data: DocumentCreateDto,
    ): Promise<ApiResponseInterface> {
        const document: DocumentInLib = await this.documentService.addDocument(data)
        return {
            status: HTTP_STATUS.SUCCESS,
            data: document
        }
    }

    @Delete()
    @ApiOperation({ summary: 'Delete doc.' })
    @ApiResponse({
        status: HTTP_STATUS.SUCCESS,
        description: 'Doc was deleted.'
    })
    async deleteDocument (
        @Query('document') id: number,
    ): Promise<ApiResponseInterface>{
       await this.documentService.deleteDocumentByDocumentId(id)
        return {
            status: HTTP_STATUS.SUCCESS
        }
    }
}
