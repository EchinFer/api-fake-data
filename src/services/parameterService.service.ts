import { Injectable } from '@nestjs/common';
import { ClientDto } from 'src/common/dto/client.dto';
import { ParameterDto } from 'src/common/dto/parameter.dto';
import { fakerClients } from 'src/data/fakerClients';
import { fakerParameters } from 'src/data/fakerParameters';
import { sleep } from 'src/util/sleepTimeout';

@Injectable()
export class ParameterService {

    async getParameters(): Promise<ParameterDto[]> {
        const parameters: ParameterDto[] = fakerParameters.generateData(10);
        await sleep(3000);

        return parameters;
    }

    async getClients(documentNumber: string): Promise<ClientDto[]> {
        const clients: ClientDto[] = fakerClients.generateData(10);
        if (documentNumber) {
            return [];
            // return clients.filter(client => client.cedula === documentNumber);
        }
        await sleep(3000);

        return [];
    }
}
