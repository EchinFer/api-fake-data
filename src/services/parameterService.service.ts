import { Injectable } from '@nestjs/common';
import { BranchDto } from 'src/common/dto/branch.dto';
import { CompanyDto } from 'src/common/dto/client.dto';
import { ParameterDto } from 'src/common/dto/parameter.dto';
import { fakerBranches } from 'src/data/fakerBranches';
import { fakerClients } from 'src/data/fakerClients';
import { fakerParameters } from 'src/data/fakerParameters';
import { sleep } from 'src/util/sleepTimeout';

@Injectable()
export class ParameterService {

    async getParameters(): Promise<ParameterDto[]> {
        const parameters: ParameterDto[] = fakerParameters.generateData(10);
        await sleep(1000);

        return parameters;
    }

    async getCompany(ruc: string, code: string): Promise<CompanyDto> {
        const clients: CompanyDto[] = fakerClients.generateData(1);
        // if (documentNumber) {
        //     // return [];
        //     return clients.filter(client => client.cedula === documentNumber);
        // }
        await sleep(1000);

        return clients[0]; 
    }

    async getBranches(): Promise<BranchDto[]> {
        const branches: BranchDto[] = fakerBranches.generateData(15);
        await sleep(1000);
        return branches;
    }
}
