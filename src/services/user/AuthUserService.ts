import { compare } from "bcryptjs";
import prismaClient from "../../prisma";
import { sign } from "jsonwebtoken";


interface AuthRequest {
    email: string;
    password: string;
}


class AuthUserService {
    async execute({ email, password }: AuthRequest) {
        // console.log(email);

        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (!user) {
            throw new Error("User/password incorrect!")
        }
        //preciso verificar se a senha estacorreta

        const passwordHash = await compare(password, user.password)

        if (!passwordHash) {
            throw new Error("User/password incorrect!")
        }

        // gerar um token JWT e devolver os dados do usario. como id, name e email
        // se deu tudo certo, vamos gerar um token para o usuário 
        const token = sign(
            {
                name: user.name,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        )




        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
        }
    }
}

export { AuthUserService };