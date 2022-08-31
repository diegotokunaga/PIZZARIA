import prismaClient from "../../prisma";
import { compare } from "bcryptjs";


interface AuthRequest{
    email: string;
    password: string;
}

class AuthUserService{
    async execute( { email, password }: AuthRequest ){
       
        const user = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(!user){
            throw new Error("Usuário/Senha incorreta")
        }

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch) {
            throw new Error("Usuário/Senha incorreta")
        }


        return { ok: true }
    }
}

export { AuthUserService }