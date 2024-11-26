import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Agendamento } from './agendamento.entity';
import { AgendamentoCadastrarDto } from './dto/agendamento.cadastrar.dto';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Horarios } from 'src/horarios/horarios.entity';
import { Usuario } from 'src/usuario/usuario.entity';

@Injectable()
export class AgendamentoService {
  constructor(
    @Inject('AGENDAMENTO_REPOSITORY')
    private agendamentoRepository: Repository<Agendamento>,
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<Usuario>,
    @Inject('HORARIOS_REPOSITORY')
    private horariosRepository: Repository<Horarios>,
  ) {}

  async cadastrar(data: AgendamentoCadastrarDto): Promise<ResultadoDto> {
    const usuario = await this.usuarioRepository.findOne({ where: { nome: data.nome_empresa } });;
    const horario = await this.horariosRepository.findOne({ where: { hora: data.data_agendamento } });

    if (!usuario || !horario) {
      return {
        status: false,
        mensagem: 'Empresa ou Horário não encontrado',
      };
    }
    
    let agendamento = new Agendamento();
    agendamento.data_agendadmento = data.data_agendamento;
    agendamento.hora_agendamento = data.hora_agendamento;
    agendamento.nome_responsavel = data.nome_responsavel;
    agendamento.contato = data.contato;
    agendamento.material = data.material;

    agendamento.usuario = usuario;
    agendamento.horarios = horario;

    return this.agendamentoRepository.save(agendamento).then(() => {
      return {
        status: true,
        mensagem: 'Agendamento realizado com sucesso',
      };
    }).catch(() => {
      return {
        status: false,
        mensagem: 'Houve um erro ao realizar o agendamento',
      };
    });
  }
}
