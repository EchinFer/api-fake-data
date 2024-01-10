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
import { AuthResponseDto, AuthUserDto, UserPermissionsDto } from 'src/common/dto/authApim.dto';

@Injectable()
export class ParameterService {

    async getParameters(estado: string): Promise<ParameterDto[]> {
        let parameters: ParameterDto[] = fakerParameters.generateData(10);
        if (estado) {
            parameters = parameters.filter(parameter => parameter.estado == estado);
        }
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

    // export class AuthResponseDto {
    //     access_token?:           string;
    //     expires_in?:             string;
    //     refresh_expires_in?:     string;
    //     refresh_token?:          string;
    //     token_type?:             string;
    //     id_token?:               string;
    //     "not-before-policy"?:    string;
    //     session_state?:          string;
    //     scope?:                  string;
    //     error?:                  string;
    //     error_description?:      string;
    // }
    async authApim(): Promise<AuthResponseDto> {
        await sleep(1000);
        return {
            access_token: "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSld",
            expires_in: "300",
            refresh_expires_in: "1800",
            refresh_token: "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSld",
            token_type: "Bearer",
            id_token: "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSld",
            "not-before-policy": "asda",
            session_state: "sss",
            scope: "aa",
        };
    }

    async getPermissions(): Promise<UserPermissionsDto[]> {

        return [{
            id: 1,
            url: "http://localhost:3000/"
        }];
    }

    async getUser(): Promise<AuthUserDto> {

        return {
            codigo: "123",
            nombre: "Test",
            sucursal: {
                codigo: "123",
                descripcion: "Test",
            },
            departamento: {
                codigo: 123,
                descripcion: "Test"
            },
            correo: "test@gmail.com",
            nivel: 1,
        };
    }

}
