import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConnectionName } from 'src/db/enum/connection-name.enum';
import { Repository } from 'typeorm';
import { StudentCreateDto } from './_dto/student.dto';
import { Student } from './_entity/student.entity';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student)
        private studentRepository: Repository<Student>,
  
    ){
      
    }

    async createCtudent(data: StudentCreateDto): Promise<Student>{
        const student = new Student();
        student.studentId = data.studentId
        student.name = data.name
        student.surname = data.surname
        student.middleName = data.middleName
        student.startYear = data.startYear
        student.birthday = data.birthday
        const savedStudent = await this.studentRepository.save(student);
        return savedStudent;
    }

    async getAllStudents() {
        return this.studentRepository.find();
    }

    async getStudentByStudentId(id: string): Promise<Student> {
        return await this.studentRepository.findOne({where: {studentId: id}})
    }

    async deleteStudentByStudentId(id: string) {
        await this.studentRepository.delete({studentId: id});
    }


    // async deleteByRegistratorId(registratorId: string) {
    //     await this.logicEventRepository.delete({
    //         registratorId: registratorId
    //     });

    // }


}
