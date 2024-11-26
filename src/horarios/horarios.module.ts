import { forwardRef, Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { TokenModule } from 'src/token/token.module';
import { DatabaseModule } from '../database/database.module';
import { HorariosController } from './horarios.controller';
import { HorariosProviders } from './horarios.providers';
import { HorariosService } from './horarios.service';

@Module({
  imports: [DatabaseModule, TokenModule, forwardRef(() => AuthModule)],
  controllers: [HorariosController],
  providers: [
    ...HorariosProviders,
    HorariosService,
  ],
  exports: [HorariosService]
})
export class HorariosModule {}