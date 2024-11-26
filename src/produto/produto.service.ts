import { Injectable, Inject } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { PrimaryColumn, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Produto } from './produto.entity';
import { Usuario } from 'src/usuario/usuario.entity';
import { ProdutoCadastrarDto } from './dto/produto.cadastrar.dto'

@Injectable()
export class ProdutoService {
  constructor(
    @Inject('PRODUTO_REPOSITORY')
    private produtoRepository: Repository<Produto>,
  ) {}

  async cadastrar(data: ProdutoCadastrarDto, usuario: Usuario): Promise<ResultadoDto>{
    let produto = new Produto()
    produto.nome = data.nome
    produto.descricao = data.descricao
    produto.usuario = usuario
    return this.produtoRepository.save(produto).then(() => {
      return <ResultadoDto>{
        status: true,
        mensagem: "Serviço cadastrado com sucesso"
      }
    }).catch(() => {
      return <ResultadoDto>{
        status: false,
        mensagem: "Houve um erro ao cadastrar o serviço"
      }
    })
  }
}