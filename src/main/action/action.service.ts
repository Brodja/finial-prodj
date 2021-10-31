import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Action } from './_entity/action-with-document.entity';

@Injectable()
export class ActionService {
    constructor(
        @InjectRepository(Action)
        private actionRepository: Repository<Action>,
    ){

    }

    async addIssuance(data): Promise<Action> {
        const action = new Action();
        action.studentId = data.studentId
        action.documentId = data.documentId
        action.dateOfIssue = data.dateOfIssue
        // action.libID = data.dateOfIssue
        const savedAction = await this.actionRepository.save(action); 
        return savedAction
    }
}
