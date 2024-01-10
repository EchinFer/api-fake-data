import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { AuthResponseDto, AuthUserDto, UserPermissionsDto } from 'src/common/dto/authApim.dto';
import { BranchDto } from 'src/common/dto/branch.dto';
import { CompanyDto } from 'src/common/dto/client.dto';
import { ParameterDto } from 'src/common/dto/parameter.dto';
import { PreApprovedDto } from 'src/common/dto/preApproved.dto';
import { TCClientsDto } from 'src/common/dto/preApprovedTc.dto';
import { PaginatedModel } from 'src/common/interfaces';
import { ParameterService } from 'src/services/parameterService.service';

@Controller()
export class ParameterController {
    constructor(private readonly appService: ParameterService) { }

    @Get("/parameters")
    async getParameters(@Query('estado') estado: string): Promise<ParameterDto[]> {
        return await this.appService.getParameters(estado);
    }

    @Get("/company")
    async getCompany(@Param('ruc') ruc?: string, @Param('code') code?: string): Promise<CompanyDto> {
        return await this.appService.getCompany(ruc, code);
    }

    @Get("/branches")
    async get(): Promise<BranchDto[]> {
        return await this.appService.getBranches();
    }
    @Put("/updateParameters")
    async updateParameters(@Body('parameter') parameter: string, @Body('groupId') groupId: string): Promise<boolean> {
        return await this.appService.updateParameters(parameter, groupId);
    }

    @Get("/v1/api/clientes/returns/clientes/:periodo")
    async preAprobbedList(@Param("periodo") periodo: string): Promise<PreApprovedDto[]> {
        return await this.appService.preApprovedClients();
    }

    @Get("v1/api/clientes/returns/clientesHistorico/:periodo")
    async preApprovedClientHistory(@Param("periodo") periodo: string, @Query() query: { month: string, year: string, page: number, pageSize: number }): Promise<PaginatedModel<PreApprovedDto>> {
        const { month, year, page, pageSize } = query;
        return await this.appService.preApprovedClientHistory(month, year, page, pageSize);
    }

    @Get("/preApprovedTc")
    async preAprobbedTcList(): Promise<TCClientsDto[]> {
        return await this.appService.preAprobbedTcList();
    }
    @Post("/revalidatePreApprovedClients")
    async revalidatePreApprovedClients(): Promise<boolean> {
        return await this.appService.revalidatePreApprovedClients();
    }

    @Post("/autenticarServicio")
    async authApim(): Promise<AuthResponseDto> {
        return await this.appService.authApim();
    }

    @Get("/getPermissions")
    async getPermissions(): Promise<UserPermissionsDto[]> {
        return await this.appService.getPermissions();
    }

    @Get("/getUser")
    async getUser(): Promise<AuthUserDto> {
        return await this.appService.getUser();
    }
}
