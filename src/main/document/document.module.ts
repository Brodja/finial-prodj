import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentController } from './document.controller';
import { DocumentService } from './document.service';
import { Author } from './_entity/authors.entity';
import { DocumentInLib } from './_entity/document.entity';
import { Genre } from './_entity/genres.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Author, Genre, DocumentInLib])],
  controllers: [DocumentController],
  providers: [DocumentService],
  exports:[DocumentService]
})
export class DocumentModule {}
