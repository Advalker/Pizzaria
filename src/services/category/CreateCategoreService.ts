import prismaClient from "../../prisma";
interface categoryRequest {
    name: string
}
class CreateCategoreService {
    async execute({ name }: categoryRequest) {
        if (name === '') {
            throw new Error('Nome inválido!')
        }

        const category = await prismaClient.category.create({
            data: {
                name: name,
            },
            select: {
                id: true,
                name: true,
            }
        })

        return category;
    }
}

export { CreateCategoreService }