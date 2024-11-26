import { Horarios } from 'src/horarios/horarios.entity';
import { Usuario } from 'src/usuario/usuario.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Agendamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'date'})
  data_agendadmento: string;

  @Column({type: 'time'})
  hora_agendamento: string;

  @Column({ length: 100 })
  nome_responsavel: string;

  @Column({length: 15})
  contato: string;

  @Column({length: 255})
  material: string;

  @ManyToOne(() => Usuario, usuario => usuario.agendamento)
  usuario: Usuario

  @ManyToOne(() => Horarios, horarios => horarios.agendamento)
  horarios: Horarios

}


