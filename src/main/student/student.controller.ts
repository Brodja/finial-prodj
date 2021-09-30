import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HTTP_STATUS } from '../_components/_enum/http-status.enum';
import { ApiResponseInterface } from '../_components/_interface/http-api-response.interface';
import { StudentService } from './student.service';
import { StudentCreateDto } from './_dto/student.dto';
import { Student } from './_entity/student.entity';

@Controller('api/student')
@ApiTags('Students')
export class StudentController {
    constructor(
        private studentServise: StudentService,
    ) { }

    @Get('all')
    @ApiOperation({ summary: 'Get all students.' })
    @ApiResponse({
        type: Student,
        status: HTTP_STATUS.SUCCESS,
        isArray: true,
        description: 'Found students.'
    })
    async getAllStudent(

    ): Promise<ApiResponseInterface> {
        const students = await this.studentServise.getAllStudents()
        return {
            status: HTTP_STATUS.SUCCESS,
            data: students
        }
    }

    @Get(':studentId')
    @ApiOperation({ summary: 'Get student by student Id.' })
    @ApiResponse({
        type: Student,
        status: HTTP_STATUS.SUCCESS,
        description: 'Found students.'
    })
    async getStudent(
        @Param('studentId') studentId: string,
    ): Promise<ApiResponseInterface> {
        const student: Student = await this.studentServise.getStudentByStudentId(studentId)
        return {
            status: HTTP_STATUS.SUCCESS,
            data: student
        }
    }

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
        const student: Student = await this.studentServise.createCtudent(data)
        return {
            status: HTTP_STATUS.SUCCESS,
            data: student
        }
    }

   

    @Delete()
    // @ApiQuery({name: 'student', type: String, description: 'Student id'})
    @ApiOperation({ summary: 'Delete student.' })
    @ApiResponse({
        status: HTTP_STATUS.SUCCESS,
        description: 'Student was deleted.'
    })
    async deleteStudent (
        @Query('student') id: string,
    ): Promise<ApiResponseInterface>{
       await this.studentServise.deleteStudentByStudentId(id)
        return {
            status: HTTP_STATUS.SUCCESS
        }
    }

    @Put()
    // @ApiOperation({ summary: 'Update student.' })
    // @ApiResponse({
    //     // type: Student,
    //     status: HTTP_STATUS.SUCCESS,
    //     description: 'Student updated.'
    // })
    // @PermissionsActio
    async updateStudet(
        // @Body() data: StudentCreateDto,
    ): Promise<ApiResponseInterface> {

        return {
            status: HTTP_STATUS.SUCCESS,
            data: []
        }
    }
    
}
