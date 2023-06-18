import {IsNotEmpty,Length,IsEmail} from 'class-validator';
export class NewDto
{
	@IsNotEmpty({message:'Empty'})
	@IsEmail()
	name:string

	id:string
}