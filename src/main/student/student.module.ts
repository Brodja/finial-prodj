import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionName } from 'src/db/enum/connection-name.enum';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { Student } from './_entity/student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  controllers: [StudentController],
  providers: [StudentService],
  exports:[StudentService]
})
export class StudentModule {}
