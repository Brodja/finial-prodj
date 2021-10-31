import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HTTP_STATUS } from '../_components/_enum/http-status.enum';
import { ApiResponseInterface } from '../_components/_interface/http-api-response.interface';
import { ActionService } from './action.service';
import { DocumentIssued } from './_dto/documentIssued.dto';
import { Action } from './_entity/action-with-document.entity';

@Controller('action')
@ApiTags('Action')
export class ActionController {
    constructor(
        private actionService: ActionService
    ){}
     
    @Get()
    @ApiOperation({summary:'Get all'})
    @ApiResponse({
        type: Action,
        status: HTTP_STATUS.SUCCESS,
        description: 'All'
    }) 
    async getAllCtions(

    ): Promise<ApiResponseInterface> {
        return {
            status: HTTP_STATUS.SUCCESS,
            data: []
        }
    }


    @Post()
    @ApiOperation({ summary: 'The document was issued.' })
    @ApiResponse({
        type: Action,
        status: HTTP_STATUS.SUCCESS,
        description: 'Document issued.'
    })
    async addDocument(
        @Body() data: DocumentIssued,
    ): Promise<ApiResponseInterface> {
        const action: Action = await this.actionService.addIssuance(data)
        return {
            status: HTTP_STATUS.SUCCESS,
            data: action                                                                                                                 
        }
    }

    
}
