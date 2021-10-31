import { ApiProperty } from "@nestjs/swagger";
import {IsArray, IsNotEmpty, IsObject, IsString, ValidateNested} from "class-validator";

export class DocumentCreateDto{
    @ApiProperty({description: 'Name of the document.'})
    @IsString()
    name: string;

    @ApiProperty({description: 'Id of the genre.'})
    @IsNotEmpty()
    genre: number;

    @ApiProperty({description: 'Id of the author.'})
    @IsNotEmpty()
    author: number;
}

