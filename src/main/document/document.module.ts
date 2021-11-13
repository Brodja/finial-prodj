import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentService } from './_service/document.service';
import { DocumentController } from './_controller/document.controller';
import { Author } from './_entity/authors.entity';
import { DocumentInLib } from './_entity/document.entity';
import { Genre } from './_entity/genres.entity';
import { AuthorController } from './_controller/author.controller';
import { AuthorService } from './_service/author.service';
import { GenreController } from './_controller/genre.controller';
import { GenreService } from './_service/genre.service';

@Module({
  imports: [TypeOrmModule.forFeature([Author, Genre, DocumentInLib])],
  controllers: [DocumentController, AuthorController, GenreController],
  providers: [DocumentService, AuthorService, GenreService],
  exports: [DocumentService, AuthorService, GenreService]
})
export class DocumentModule { }
