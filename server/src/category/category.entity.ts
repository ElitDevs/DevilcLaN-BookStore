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
 

@Entity('Category')
export class CategoryEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column("varchar") categoryname: string;

  @CreateDateColumn() createdAt: Date;

  @UpdateDateColumn() updatedAt: Date;


 @OneToMany(type => BookEntity , book=>book.categories)
 book : BookEntity
}
