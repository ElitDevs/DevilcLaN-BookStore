import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { BookEntity } from './../book/book.entity';
import { type } from 'os';

@Entity('Author')
export class AuthorEntity {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column("varchar") firstname: string;

  @Column("varchar") lastname: string;

  @Column({nullable : true}) birthdate: Date;

  @Column({type : 'text' , nullable: true}) authorbio: string;

  @Column({type : "varchar", nullable: true}) authorpicture: string;

  @CreateDateColumn() createdAt: Date;

  @UpdateDateColumn() updatedAt: Date;

  @OneToMany(type=>BookEntity , book=>book.authors)
  book : BookEntity[]
}
