import { faker } from '@faker-js/faker';
import { ClientDto } from 'src/common/dto/client.dto';
// primerNombre: string;
// segundoNombre: string;
// primerApellido: string;
// segundoApellido: string;
// direccion: string;
// barrio: string;
// telefono: string;
// celular: string;
// cedula: string;
// fechaNacimiento: string;
// ocupacion: string;
// fechaAlta: string;
// pais: string;
// localidad: string;
// clasificacion: string;
// codigoSucursal: string;
// codigoOficial: string;
// codigoRegion: string;
// tipoPersona: string;
// tipoDocumento: string;
// sexo: string;
// codigoEstadoCivil: string;
// correo: string;
// codigoCliente: string;
// sucursal: string;
// oficial: string;
// calificacion: string;
// nombreBarrio: string;
// estadoCivil: string;
const generateData = (quantity: number) => {

    const data: ClientDto[] = [];

    for (let i = 0; i < quantity; i++) {
        data.push({
            primerNombre: faker.person.firstName(),
            segundoNombre: faker.person.middleName(),
            primerApellido: faker.person.lastName(),
            segundoApellido: faker.person.lastName(),
            direccion: faker.location.direction(),
            barrio: faker.location.city(),
            telefono: faker.phone.number(),
            celular: faker.phone.number(),
            cedula: faker.number.int().toString(),
            fechaNacimiento: faker.date.past().toString(),
            ocupacion: faker.person.jobArea(),
            fechaAlta: faker.date.past().toString(),
            pais: faker.location.country(),
            localidad: faker.location.state(),
            clasificacion: "0",
            codigoSucursal: "",
            codigoOficial: "",
            codigoRegion: "",
            tipoPersona: "",
            tipoDocumento: "",
            sexo: faker.person.sex(),
            codigoEstadoCivil: "",
            correo: faker.internet.email(),
            codigoCliente: faker.string.uuid(),
            sucursal: "",
            oficial: "",
            calificacion: "",
            nombreBarrio: "",
            estadoCivil: "",
        });
    }

    return data;
}


export const fakerClients = {
    generateData
}
