import { Controller, Post, Body } from '@nestjs/common';
import { AgendamentoService } from './agendamento.service';
import { AgendamentoCadastrarDto } from './dto/agendamento.cadastrar.dto';
import { ResultadoDto } from 'src/dto/resultado.dto';

@Controller('agendamentos')
export class AgendamentoController {
  constructor(private readonly agendamentoService: AgendamentoService) {}

  @Post('cadastrar')
  async cadastrar(@Body() data: AgendamentoCadastrarDto): Promise<ResultadoDto> {
    return this.agendamentoService.cadastrar(data);
  }
}


