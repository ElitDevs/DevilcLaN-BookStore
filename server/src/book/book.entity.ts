import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { CategoryEntity } from './../category/category.entity';
import { UserEntity } from 'src/user/user.entity';
import { AuthorEntity } from './../author/author.entity';

@Entity('Book')
export class BookEntity {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column('varchar') bookname: string;

  @Column() bookpages: number;

  @Column({ type: 'varchar', unique: true }) bookisbn: string;

  @Column() bookprice: number;

  @Column({ type: 'varchar', nullable: true }) bookpicture: string;

  @Column({ nullable: true }) bookqauntity: number;

  @CreateDateColumn() createdAt: Date;

  @UpdateDateColumn() updatedAt: Date;

  // @ManyToMany(type => AuthorEntity)
  // @JoinTable()
  // written: AuthorEntity[];

  @ManyToMany(
    type => AuthorEntity,
    author => author.books,
    {
      cascade: true,
    },
  )
  @JoinTable()
  authors: AuthorEntity[];

  @ManyToMany(type => UserEntity)
  @JoinTable()
  bought: UserEntity[];

  @ManyToOne(
    type => CategoryEntity,
    category => category.book,
  )
  categories: CategoryEntity[];
}
