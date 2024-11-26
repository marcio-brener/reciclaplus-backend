import { forwardRef, Module } from '@nestjs/common';
import { AgendamentoService } from './agendamento.service';
import { AgendamentoController } from './agendamento.controller';
import { DatabaseModule } from '../database/database.module';
import { agendamentoProviders } from './agendamento.providers';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule)],
  controllers: [AgendamentoController],
  providers: [
    ...agendamentoProviders,
    AgendamentoService,
  ],
  exports: [AgendamentoService],
})
export class AgendamentoModule {}


