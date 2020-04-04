import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
} from 'typeorm';
import { BookEntity } from 'src/book/book.entity';

@Entity('Author')
export class AuthorEntity {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column('varchar') firstname: string;

  @Column('varchar') lastname: string;

  @Column({ nullable: true }) birthdate: Date;

  @Column({ type: 'text', nullable: true }) authorbio: string;

  @Column({ type: 'varchar', nullable: true }) authorpicture: string;

  @CreateDateColumn() createdAt: Date;

  @UpdateDateColumn() updatedAt: Date;

  @ManyToMany(
    type => BookEntity,
    book => book.authors,
  )
  books: BookEntity[];
}
