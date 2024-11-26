import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';
import { HorariosModule } from './horarios/horarios.module';
import { AgendamentoModule } from './agendamento/agendamento.module';
import { ProdutoModule } from './produto/produto.module';
import { TokenModule } from './token/token.module';

@Module({
  imports: [
    AuthModule,
    HorariosModule,
    AgendamentoModule,
    ProdutoModule,
    UsuarioModule,
    TokenModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
