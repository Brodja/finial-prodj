import { Injectable } from '@nestjs/common';
import { DocumentInLib } from './_entity/document.entity';

@Injectable()
export class DocumentService {
    constructor(){}
    
    async addDocument(data): Promise<DocumentInLib> {
        const document = new DocumentInLib();

        return document
    }

    
}
