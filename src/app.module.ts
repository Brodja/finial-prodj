import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActionModule } from './main/action/action.module';
import { Action } from './main/action/_entity/action-with-document.entity';
import { DocumentModule } from './main/document/document.module';
import { Author } from './main/document/_entity/authors.entity';
import { DocumentInLib } from './main/document/_entity/document.entity';
import { Genre } from './main/document/_entity/genres.entity';
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
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
     StudentModule,DocumentModule, ActionModule ],
  // imports: [StudentModule, DatabaseModule],
  controllers: [],
  exports: [
    StudentModule
],
providers: [],
    
})
export class AppModule {}
