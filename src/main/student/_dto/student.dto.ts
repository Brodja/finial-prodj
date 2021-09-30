import { ApiProperty } from "@nestjs/swagger";
import {IsArray, IsNotEmpty, IsObject, IsString, ValidateNested} from "class-validator";

export class StudentCreateDto{
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    surname: string;

    @ApiProperty()
    @IsString()
    middleName: string;


}