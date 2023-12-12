import { Controller, Get, Param } from '@nestjs/common';
import { ClientDto } from 'src/common/dto/client.dto';
import { ParameterDto } from 'src/common/dto/parameter.dto';
import { ParameterService } from 'src/services/parameterService.service';

@Controller()
export class ParameterController {
    constructor(private readonly appService: ParameterService) { }

    @Get("/parameters")
    async getParameters(): Promise<ParameterDto[]> {
        return await this.appService.getParameters();
    }

    @Get("/clients")
    async get(@Param('documentNumber') documentNumber?: string): Promise<ClientDto[]> {
        return await this.appService.getClients(documentNumber);
    }
}
