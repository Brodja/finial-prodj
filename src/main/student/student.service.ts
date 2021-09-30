import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConnectionName } from 'src/db/enum/connection-name.enum';
import { Repository } from 'typeorm';
import { Student } from './_entity/student.entity';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student)
        private studentRepository: Repository<Student>,
  
    ){

    }
}
