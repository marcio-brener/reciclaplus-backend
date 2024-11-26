import { Connection, Repository } from 'typeorm';
import { Horarios } from './horarios.entity'

export const HorariosProviders = [
  {
    provide: 'HORARIOS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Horarios),
    inject: ['DATABASE_CONNECTION'],
  },
];