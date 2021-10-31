import { ApiProperty } from "@nestjs/swagger";
import {IsArray, IsNotEmpty, IsObject, IsString, ValidateNested} from "class-validator";

export class GenreCreateDto{
    @ApiProperty({description: 'Name of the genre.'})
    @IsString()
    name: string;
}