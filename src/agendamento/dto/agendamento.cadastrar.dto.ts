
import { IsString, IsNotEmpty, IsDateString, IsPhoneNumber } from 'class-validator';

export class AgendamentoCadastrarDto {
  @IsString()
  @IsNotEmpty()
  nome_empresa: string; // Nome da empresa

  @IsDateString()
  @IsNotEmpty()
  data_agendamento: string; 

  @IsString()
  @IsNotEmpty()
  hora_agendamento: string;

  @IsString()
  @IsNotEmpty()
  nome_responsavel: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  contato: string;

  @IsString()
  @IsNotEmpty()
  material: string;
}
