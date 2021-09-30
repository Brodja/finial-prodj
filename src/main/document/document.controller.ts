import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HTTP_STATUS } from '../_components/_enum/http-status.enum';
import { ApiResponseInterface } from '../_components/_interface/http-api-response.interface';
import { DocumentService } from './document.service';
import { DocumentCreateDto } from './_dto/document.dto';
import { DocumentInLib } from './_entity/document.entity';

@Controller('api/document')
@ApiTags('Document')
export class DocumentController {
    constructor(
        private documentService: DocumentService
    ){  }

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
        const document: DocumentInLib = null//await this.documentService.createDocument(data)
        return {
            status: HTTP_STATUS.SUCCESS,
            data: document
        }
    }
}
