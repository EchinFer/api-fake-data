import { faker } from '@faker-js/faker';
import { TCClientsDto } from 'src/common/dto/preApprovedTc.dto';

// export interface TCClientsDto {
//     id: string;
//     tipoCuenta: string;
//     idAfinidad: string;
//     departamento: string;
//     ciudad: string;
//     oficial: string;
//     cuenta: string;
//     cuentaVip: string;
//     cuentaFranqueo: string;
//     seguroVida: string;
//     cobroCargos: string;
//     tipoCosto: string;
//     retenerExtracto: string;
//     codigoCliente: string;
//     linea: string;
//     lineaCredito: string;
//     cuota: string;
//     tipoPago: string;
//     valorCFG: string;
//     tasaFinanciacion: string;
//     factorVip: string;
//     motivoRetencion: string;
// }
const generateData = (quantity: number) => {

    const data: TCClientsDto[] = [];

    for (let i = 0; i < quantity; i++) {
        data.push({
            id: faker.string.uuid(),
            tipoCuenta: faker.string.alphanumeric(4),
            idAfinidad: faker.string.alphanumeric(4),
            departamento: faker.string.alphanumeric(4),
            ciudad: faker.string.alphanumeric(4),
            oficial: faker.string.alphanumeric(4),
            cuenta: faker.string.alphanumeric(4),
            cuentaVip: faker.string.alphanumeric(4),
            cuentaFranqueo: faker.string.alphanumeric(4),
            seguroVida: faker.string.alphanumeric(4),
            cobroCargos: faker.string.alphanumeric(4),
            tipoCosto: faker.string.alphanumeric(4),
            retenerExtracto: faker.string.alphanumeric(4),
            codigoCliente: faker.string.alphanumeric(4),
            linea: faker.string.alphanumeric(4),
            lineaCredito: faker.string.alphanumeric(4),
            cuota: faker.string.alphanumeric(4),
            tipoPago: faker.string.alphanumeric(4),
            valorCFG: faker.string.alphanumeric(4),
            tasaFinanciacion: faker.string.alphanumeric(4),
            factorVip: faker.string.alphanumeric(4),
            motivoRetencion: faker.string.alphanumeric(4),
        });
    }

    return data;
}


export const fakerPreApprovedTc = {
    generateData
}
