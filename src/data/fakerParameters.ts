import { ParameterDto } from "src/common/dto/parameter.dto";
import { faker } from '@faker-js/faker';
// idParametros: string;
//     nombreParametro: string;
//     tipoDato: string;
//     estado: string;
//     tipoValor: string;
//     valorDesde: string;
//     valorHasta: string;
//     listaValores: string;
//     idGrupo: string;
const generateData = (quantity: number) => {

    const data: ParameterDto[] = [];

    for (let i = 0; i < quantity; i++) {
        data.push({
            idParametros: faker.number.bigInt().toString(),
            nombreParametro: faker.lorem.words(5),
            tipoDato: faker.database.type(),
            estado: faker.finance.currencyCode(),
            tipoValor: faker.database.column(),
            valorDesde: faker.number.int().toString(),
            valorHasta: faker.number.int().toString(),
            listaValores: faker.database.column(),
            idGrupo: faker.number.bigInt().toString(),
        });
    }

    return data;
}


export const fakerParameters = {
    generateData
}
