import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('Author')
export class AuthorEntity {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column("varchar") firstname: string;

  @Column("varchar") lastname: string;

  @Column() birthdate: Date;

  @Column('text') authorbio: string;

  @Column("varchar") authorpicture: string;

  @CreateDateColumn() createdAt: Date;

  @UpdateDateColumn() updatedAt: Date;
}
