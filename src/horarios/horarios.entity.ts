import { Agendamento } from 'src/agendamento/agendamento.entity';
import { Usuario } from 'src/usuario/usuario.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Horarios {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'date'})
  data: string;

  @Column({type: 'time'})
  hora: string;

  @ManyToOne(() => Usuario, usuario => usuario.horarios)
  usuario: Usuario

  @OneToMany(() => Agendamento, agendamento => agendamento.horarios)
  agendamento: Agendamento[];

}