import { Produto } from 'src/produto/produto.entity';
import { Horarios } from 'src/horarios/horarios.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Agendamento } from 'src/agendamento/agendamento.entity';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 100 })
  endereco: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 255 })
  password: string;

  @Column({length: 15})
  telefone: string;

  @Column({ length: 14, nullable: true })
  cnpj: string;


  @OneToMany(() => Produto, produto => produto.usuario)
  produto: Produto[];

  @OneToMany(() => Horarios, horarios => horarios.usuario)
  horarios: Horarios[];


  @OneToMany(() => Agendamento, agendamento => agendamento.usuario)
  agendamento: Agendamento[];

}