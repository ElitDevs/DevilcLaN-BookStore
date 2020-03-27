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

  @Column() firstname: string;

  @Column() lastname: string;

  @Column() birthdate: Date;

  @Column() authorbio: string;

  @Column() authorpicture: string;

  @CreateDateColumn() createdAt: Date;

  @UpdateDateColumn() updatedAt: Date;
}
