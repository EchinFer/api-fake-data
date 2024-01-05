import { faker } from '@faker-js/faker';
import { BranchDto } from 'src/common/dto/branch.dto';

const generateData = (quantity: number) => {

    const data: BranchDto[] = [];

    for (let i = 0; i < quantity; i++) {
        data.push({
            codigo: faker.company.name(),
            descripcion: faker.string.alphanumeric(4),
        });
    }

    return data;
}


export const fakerBranches = {
    generateData
}
