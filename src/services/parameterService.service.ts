import { Injectable } from '@nestjs/common';
import { BranchDto } from 'src/common/dto/branch.dto';
import { CompanyDto } from 'src/common/dto/client.dto';
import { PaginatedModel } from 'src/common/interfaces';
import { ParameterDto } from 'src/common/dto/parameter.dto';
import { PreApprovedDto } from 'src/common/dto/preApproved.dto';
import { fakerPreApproved } from 'src/data/fakePreApproved';
import { fakerBranches } from 'src/data/fakerBranches';
import { fakerClients } from 'src/data/fakerClients';
import { fakerParameters } from 'src/data/fakerParameters';
import { sleep } from 'src/util/sleepTimeout';
import { TCClientsDto } from 'src/common/dto/preApprovedTc.dto';
import { fakerPreApprovedTc } from 'src/data/fakerPreApprovedTc';

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

    async updateParameters(parameter: string, groupId: string): Promise<boolean> {
        await sleep(6000);
        return true;
    }

    async preApprovedClients(): Promise<PreApprovedDto[]> {
        const preApproved: PreApprovedDto[] = fakerPreApproved.generateData(100);
        await sleep(1000);
        return preApproved;
    }

    async preAprobbedTcList(): Promise<TCClientsDto[]> {
        const preApproved: TCClientsDto[] = fakerPreApprovedTc.generateData(100);
        await sleep(1000);
        return preApproved;
    }

    async preApprovedClientHistory(month: string, year: string, pageIndex: number, pageSize: number): Promise<PaginatedModel<PreApprovedDto>> {
        const preApproved: PreApprovedDto[] = fakerPreApproved.generateData(100);
        await sleep(1000);

        const startIndex = pageIndex * pageSize;
        const items = preApproved.slice(startIndex, startIndex + pageSize);
        const paginated: PaginatedModel<PreApprovedDto> = {
            items: items,
            total: preApproved.length,
            totalPages: Math.ceil(preApproved.length / pageSize)
        };

        return paginated;
    }
    async revalidatePreApprovedClients(): Promise<boolean> {
        await sleep(1000);
        return true;
    }
}
