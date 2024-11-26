import { forwardRef, Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { TokenModule } from 'src/token/token.module';
import { DatabaseModule } from '../database/database.module';
import { ProdutoController } from './produto.controller';
import { ProdutoProviders} from './produto.providers';
import { ProdutoService } from './produto.service';

@Module({
  imports: [DatabaseModule, TokenModule, forwardRef(() => AuthModule)],
  controllers: [ProdutoController],
  providers: [
    ...ProdutoProviders,
    ProdutoService,
  ],
  exports: [ProdutoService]
})
export class ProdutoModule {}