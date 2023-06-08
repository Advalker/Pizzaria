import prismaClient from "../../prisma";

interface ProductRequest {
    name: string;
    prince: string;
    description: string;
    banner: string;
    category_id: string;
}

class CreatProductService {
    async execute({
        name, prince, description, banner, category_id }: ProductRequest) {

        return { ok: true }

    }
}

export { CreatProductService }