import { Body, Controller, Get, HttpException, HttpStatus, Post, UseGuards } from "@nestjs/common";
import { RegisterDTO } from "DataTransfer/RegisterDTO";
import { PrismaService } from "Prisma/PrismaService";
import * as bcrypt from 'bcrypt';
import { AuthGuard } from "AuthGuard";


@Controller("/auth")
export class AuthController{
    constructor(private prisma:PrismaService){}

    @UseGuards(new AuthGuard(["SUPER_USER"]))

    @Post()
        async Register (@Body() getInput:RegisterDTO){

            const usernameIsExist = await this.prisma.users.findFirst({where:{username:getInput.username}})
            if(usernameIsExist){
                throw new HttpException('Username telah digunakan',HttpStatus.CONFLICT)
            }

            const passwordHasHashed =  await bcrypt.hash(getInput.password,10)

            await this.prisma.users.create({
                data:{...getInput,password:passwordHasHashed}
            })

            throw new HttpException('User berhasil dibuat',HttpStatus.CREATED)
        }
}

