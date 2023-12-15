import { faker } from '@faker-js/faker';
import { BranchDto } from 'src/common/dto/branch.dto';

const generateData = (quantity: number) => {

    const data: BranchDto[] = [];

    for (let i = 0; i < quantity; i++) {
        data.push({
            id: faker.string.uuid(),
            name: faker.company.name(),
            code: faker.string.alphanumeric(4),
        });
    }

    return data;
}


export const fakerBranches = {
    generateData
}
