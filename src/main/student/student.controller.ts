import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HTTP_STATUS } from '../_components/_enum/http-status.enum';
import { ApiResponseInterface } from '../_components/_interface/http-api-response.interface';
import { StudentCreateDto } from './_dto/student.dto';
import { Student } from './_entity/student.entity';

@Controller('api/student')
@ApiTags('Students')
export class StudentController {
    constructor(){}

    // @Get()
    // // @ApiOperation({ summary: 'Get all students.' })
    // // @ApiResponse({
    // //     status: HTTP_STATUS.SUCCESS,
    // //     isArray: true,
    // //     description: 'Found students.'
    // // })
    // async getAllStudent(

    // ): Promise<ApiResponseInterface> {

    //     return {
    //         status: HTTP_STATUS.SUCCESS,
    //         data: []
    //     }

    // }

    @Post()
    @ApiOperation({ summary: 'Create students.' })
    @ApiResponse({
        type: Student,
        status: HTTP_STATUS.SUCCESS,
        description: 'Student added.'
    })
    // @PermissionsAction
    async addStudet(
        @Body() data: StudentCreateDto,
    ): Promise<ApiResponseInterface> {

        const res = [1234]

        return {
            status: HTTP_STATUS.SUCCESS,
            data: res
        }
    }
}
