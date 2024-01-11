import { faker } from '@faker-js/faker';
import { PreApprovedDto } from 'src/common/dto/preApproved.dto';

const generateData = (quantity: number) => {
    // idPreAprobado: string;
    // codigoCliente: string;
    // numeroDocumento: string;
    // tipoDocumento: string;
    // cuenta: string;
    // promedioAcreditacion: string;
    // porcentajeEndeudamiento: string;
    // montoPrestamo: string;
    // edad: string;
    // campanha: string;
    // antiguedad: string;
    // calificacionConti: string;
    // calificacionBCP: string;
    // referenciaAtraso: string;
    // codeudor: string;
    // mora: string;
    // sucursal: string;
    // ald: string;
    // ros: string;
    // cantidadPrestamo: string;
    // pagoSalario: string;
    // montoCuota: string;
    // montoCapital: string;
    // periodo: string;
    // equifax: string;
    // estadoBCP: string;
    // estadoEquifax: string;
    const data: PreApprovedDto[] = [];

    for (let i = 0; i < quantity; i++) {
        data.push({
            // id: faker.string.uuid(),
            // codCliente: faker.string.alphanumeric(4),
            // codCuenta: faker.string.alphanumeric(4),
            // promedioDeudas: faker.number.int({ min: 1000000, max: 10000000 }).toString(),
            // porcentajeDeudas: faker.number.int({ max: 100 }).toString(),
            // montoPrestamoMax: faker.number.int({ max: 10000000 }).toString(),
            // edad:  faker.number.int({ max: 90 }).toString(),
            // campana: faker.string.alphanumeric(4),
            // antiguedad:  faker.number.int({ max: 10 }).toString(),
            // califConti: faker.string.alphanumeric(4),
            // califBCP: faker.string.alphanumeric(4),
            // refAtraso: faker.string.alphanumeric(4),
            // esCodeudor: faker.string.alphanumeric(4),
            // mora: faker.string.alphanumeric(4),
            // branch: faker.string.alphanumeric(4),
            // listaNegativas: faker.string.alphanumeric(4),
            // ros: faker.string.alphanumeric(4),
            // cantPrestamos:  faker.number.int({ max: 5 }).toString(),
            idPreAprobado: faker.string.uuid(),
            codigoCliente: faker.string.alphanumeric(4),
            numeroDocumento: faker.string.alphanumeric(4),
            tipoDocumento: faker.string.alphanumeric(4),
            cuenta: faker.string.alphanumeric(4),
            promedioAcreditacion: faker.number.int({ min: 1000000, max: 10000000 }).toString(),
            porcentajeEndeudamiento: faker.string.alphanumeric(4),
            montoPrestamo: faker.string.alphanumeric(4),
            edad: faker.string.alphanumeric(4),
            campanha: faker.string.alphanumeric(4),
            antiguedad: faker.string.alphanumeric(4),
            calificacionConti: faker.string.alphanumeric(4),
            calificacionBCP: faker.string.alphanumeric(4),
            referenciaAtraso: faker.string.alphanumeric(4),
            codeudor: faker.string.alphanumeric(4),
            mora: faker.string.alphanumeric(4),
            sucursal: faker.string.alphanumeric(4),
            ald: faker.string.alphanumeric(4),
            ros: faker.string.alphanumeric(4),
            cantidadPrestamo: faker.string.alphanumeric(4),
            pagoSalario: faker.string.alphanumeric(4),
            montoCuota: faker.string.alphanumeric(4),
            montoCapital: faker.string.alphanumeric(4),
            periodo: faker.string.alphanumeric(4),
            equifax: faker.string.alphanumeric(4),
            estadoBCP: faker.string.alphanumeric(4),
            estadoEquifax: faker.string.alphanumeric(4),
        });
    }

    return data;
}


export const fakerPreApproved = {
    generateData
}
