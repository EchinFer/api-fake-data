import { faker } from '@faker-js/faker';
import { PreApprovedDto } from 'src/common/dto/preApproved.dto';

const generateData = (quantity: number) => {

    const data: PreApprovedDto[] = [];

    for (let i = 0; i < quantity; i++) {
        data.push({
            id: faker.string.uuid(),
            codCliente: faker.string.alphanumeric(4),
            codCuenta: faker.string.alphanumeric(4),
            promedioDeudas: faker.number.int({ min: 1000000, max: 10000000 }).toString(),
            porcentajeDeudas: faker.number.int({ max: 100 }).toString().concat('%'),
            montoPrestamoMax: faker.number.int({ max: 10000000 }).toString(),
            edad:  faker.number.int({ max: 90 }).toString(),
            campana: faker.string.alphanumeric(4),
            antiguedad:  faker.number.int({ max: 10 }).toString(),
            califConti: faker.string.alphanumeric(4),
            califBCP: faker.string.alphanumeric(4),
            refAtraso: faker.string.alphanumeric(4),
            esCodeudor: faker.string.alphanumeric(4),
            mora: faker.string.alphanumeric(4),
            branch: faker.string.alphanumeric(4),
            listaNegativas: faker.string.alphanumeric(4),
            ros: faker.string.alphanumeric(4),
            cantPrestamos:  faker.number.int({ max: 5 }).toString(),
        });
    }

    return data;
}


export const fakerPreApproved = {
    generateData
}
