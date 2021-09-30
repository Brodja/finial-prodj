import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentController } from './document.controller';
import { DocumentService } from './document.service';

@Module({
  // imports: [TypeOrmModule.forFeature([DocumentInLib])],
  controllers: [DocumentController],
  providers: [DocumentService],
  exports:[DocumentService]
})
export class DocumentModule {}
