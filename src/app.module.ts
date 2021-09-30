import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './main/student/student.module';
import { Student } from './main/student/_entity/student.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5454,
      username: 'postgres',
      password: 'Testpass!@34',
      database: 'online_archive',
      entities: [Student],
      synchronize: true,
    }),
     StudentModule],
  // imports: [StudentModule, DatabaseModule],
  controllers: [],
  exports: [
    StudentModule
],
providers: [],
    
})
export class AppModule {}
