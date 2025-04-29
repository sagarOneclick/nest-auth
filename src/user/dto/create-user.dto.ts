import { IsString, IsInt, IsNotEmpty } from 'class-validator';

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    userName: string

    @IsString()
    password:string
}
