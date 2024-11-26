import { Injectable, Inject } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { PrimaryColumn, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Horarios } from './horarios.entity';
import { Usuario } from 'src/usuario/usuario.entity';
import { HorariosCadastrarDto } from './dto/horarios.cadastrar.dto'

@Injectable()
export class HorariosService {
  constructor(
    @Inject('HORARIOS_REPOSITORY')
    private horariosRepository: Repository<Horarios>,
  ) {}

  async cadastrar(data: HorariosCadastrarDto, usuario: Usuario): Promise<ResultadoDto>{
    let horarios = new Horarios()
    horarios.data = data.data
    horarios.hora = data.hora
    horarios.usuario = usuario
    return this.horariosRepository.save(horarios).then(() => {
      return <ResultadoDto>{
        status: true,
        mensagem: "Horario cadastrado com sucesso"
      }
    }).catch(() => {
      return <ResultadoDto>{
        status: false,
        mensagem: "Houve um erro ao cadastrar o horario"
      }
    })
  }
}