import { ApiProperty } from "@nestjs/swagger";
import {IsArray, IsNotEmpty, IsObject, IsString, ValidateNested} from "class-validator";

export class AuthorCreateDto{
    @ApiProperty({description: 'Name of the author.'})
    @IsString()
    fullName: string;
}