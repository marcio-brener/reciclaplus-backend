import { Connection } from 'typeorm';
import { Agendamento } from './agendamento.entity';
import { Usuario } from 'src/usuario/usuario.entity';
import { Horarios } from 'src/horarios/horarios.entity';


export const agendamentoProviders = [
  {
    provide: 'AGENDAMENTO_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Agendamento),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'USUARIO_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Usuario),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'HORARIOS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Horarios),
    inject: ['DATABASE_CONNECTION'],
  },
];


