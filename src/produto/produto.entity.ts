import { Agendamento } from 'src/agendamento/agendamento.entity';
import { Usuario } from 'src/usuario/usuario.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  nome: string;

  @Column({ length: 255 })
  descricao: string;

  @ManyToOne(() => Usuario, usuario => usuario.produto)
  usuario: Usuario


}