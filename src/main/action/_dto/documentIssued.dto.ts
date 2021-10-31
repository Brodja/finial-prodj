import { ApiProperty } from "@nestjs/swagger";
import {IsArray, IsNotEmpty, IsObject, IsString, ValidateNested} from "class-validator";

export class DocumentIssued{
    @ApiProperty({description: 'Name of the author.'})
    @IsNotEmpty()
    documentId: number;

    @ApiProperty({description: 'Name of the author.'})
    @IsNotEmpty()
    studentId: number;

    @ApiProperty({description: 'Name of the author.'})
    @IsString()
    dateOfIssue: string;

}