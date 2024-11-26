import { Body, Controller, Get, HttpException, HttpStatus, Post, Put, Req, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { TokenService } from 'src/token/token.service';
import { Usuario } from 'src/usuario/usuario.entity';
import { HorariosCadastrarDto } from './dto/horarios.cadastrar.dto';
import { HorariosService } from './horarios.service';

@Controller('horarios')
export class HorariosController {
  constructor(private readonly horariosService: HorariosService, 
    private readonly tokenService: TokenService) {}
  
  @UseGuards(JwtAuthGuard)
  @Post('cadastrar')
  async cadastrar(@Body() data: HorariosCadastrarDto, @Req() req): Promise<ResultadoDto>{    
    let token = req.headers.authorization
    let usuario: Usuario = await this.tokenService.getUsuarioByToken(token)
    if (usuario){
      return this.horariosService.cadastrar(data, usuario)    
    }else{
      throw new HttpException({
        errorMessage: 'Token inválido'
      }, HttpStatus.UNAUTHORIZED)
    }
  }

}