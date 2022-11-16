import { IsEmail, Min } from "class-validator"

export class RegisterDTO{

    firstName:string
    lastName:string

    email?:string | null
    username:string
    password:string
}
