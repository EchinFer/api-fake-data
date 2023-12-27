import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { BranchDto } from 'src/common/dto/branch.dto';
import { CompanyDto } from 'src/common/dto/client.dto';
import { ParameterDto } from 'src/common/dto/parameter.dto';
import { PreApprovedDto } from 'src/common/dto/preApproved.dto';
import { PaginatedModel } from 'src/common/interfaces';
import { ParameterService } from 'src/services/parameterService.service';

@Controller()
export class ParameterController {
    constructor(private readonly appService: ParameterService) { }

    @Get("/parameters")
    async getParameters(): Promise<ParameterDto[]> {
        return await this.appService.getParameters();
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

    @Get("/preApprovedClients")
    async preAprobbedList(): Promise<PreApprovedDto[]> {
        return await this.appService.preApprovedClients();
    }

    @Get("/preApprovedClients/history")
    async preApprovedClientHistory(
        @Param('month') month: string,
        @Param('year') year: string,
        @Param('page') page?: number,
        @Param('pageSize') pageSize?: number
    ): Promise<PaginatedModel<PreApprovedDto>> {
        return await this.appService.preApprovedClientHistory(month, year, page, pageSize);
    }
}
